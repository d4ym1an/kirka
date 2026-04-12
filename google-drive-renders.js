// Google Drive Renders Integration
// Fetches images from Google Drive folder and adds them to the renders modal

const GOOGLE_DRIVE_FOLDER_ID = '1nt09HbocFJ9kQ6-6PHGqzJotpL0mIF2t';
const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY'; // TODO: Replace with your API key
const GOOGLE_CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com'; // TODO: Replace with your Client ID

// Store fetched images globally
let googleDriveImages = [];
let isLoadingGoogleDriveImages = false;

/**
 * Initialize Google API and load images from Google Drive
 */
function initializeGoogleDriveRenders() {
    // Load Google API library
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
        window.gapi.load('client:auth2', initGoogleClient);
    };
    document.head.appendChild(script);
}

/**
 * Initialize Google API client
 */
function initGoogleClient() {
    window.gapi.client.init({
        apiKey: GOOGLE_API_KEY,
        clientId: GOOGLE_CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/drive.readonly',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
    }).then(() => {
        // Try to sign in silently
        const auth = window.gapi.auth2.getAuthInstance();
        if (auth.isSignedIn.get()) {
            loadGoogleDriveImages();
        } else {
            // User needs to authenticate
            setupAuthButton();
        }
    }).catch((error) => {
        console.error('Failed to initialize Google API:', error);
        // If API fails, try alternative method
        loadGoogleDriveImagesAlternative();
    });
}

/**
 * Setup authentication button
 */
function setupAuthButton() {
    const authButton = document.createElement('button');
    authButton.textContent = 'Load Google Drive Renders';
    authButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        background-color: var(--gold-1, #d4af37);
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        z-index: 10000;
    `;
    
    authButton.addEventListener('click', () => {
        const auth = window.gapi.auth2.getAuthInstance();
        auth.signIn().then(() => {
            loadGoogleDriveImages();
            authButton.remove();
        });
    });
    
    document.body.appendChild(authButton);
}

/**
 * Load images from Google Drive folder using API
 */
function loadGoogleDriveImages() {
    if (isLoadingGoogleDriveImages) return;
    
    isLoadingGoogleDriveImages = true;
    
    window.gapi.client.drive.files.list({
        q: `'${GOOGLE_DRIVE_FOLDER_ID}' in parents and trashed = false and mimeType contains 'image/'`,
        spaces: 'drive',
        pageSize: 100,
        fields: 'files(id, name, webContentLink, webViewLink, mimeType, thumbnailLink)'
    }).then((response) => {
        if (response.result.files && response.result.files.length > 0) {
            googleDriveImages = response.result.files;
            addGoogleDriveImagesToModal();
        } else {
            console.log('No images found in Google Drive folder');
        }
        isLoadingGoogleDriveImages = false;
    }).catch((error) => {
        console.error('Failed to load images from Google Drive:', error);
        isLoadingGoogleDriveImages = false;
    });
}

/**
 * Alternative method: Try to load without authentication (for public folders)
 * This uses the Google Drive embeddable viewer
 */
function loadGoogleDriveImagesAlternative() {
    console.log('Trying alternative method to load Google Drive images...');
    
    // Create an iframe to load the folder
    const iframe = document.createElement('iframe');
    iframe.src = `https://drive.google.com/embeddedfolderview?id=${GOOGLE_DRIVE_FOLDER_ID}`;
    iframe.style.cssText = 'display: none;';
    
    // Fallback: show a message to the user
    const fallbackDiv = document.createElement('div');
    fallbackDiv.innerHTML = `
        <div style="padding: 2rem; text-align: center;">
            <p style="color: var(--gray-2, #ccc); margin-bottom: 1rem;">
                To load renders from Google Drive, please authenticate:
            </p>
            <a href="https://drive.google.com/drive/folders/${GOOGLE_DRIVE_FOLDER_ID}" 
               target="_blank" 
               style="color: var(--gold-1, #d4af37); text-decoration: none; font-weight: bold;">
                View Renders on Google Drive →
            </a>
        </div>
    `;
    
    // Store for later use
    window.googleDriveFallback = fallbackDiv;
}

/**
 * Add Google Drive images to the renders modal
 */
function addGoogleDriveImagesToModal() {
    const rendersModal = document.getElementById('renders-modal');
    if (!rendersModal) return;
    
    const contentDiv = rendersModal.querySelector('.content');
    if (!contentDiv) return;
    
    // Create a section for Google Drive renders
    const googleDriveSection = document.createElement('div');
    googleDriveSection.style.cssText = `
        grid-column: 1 / -1;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--gold-1, #d4af37);
        margin-top: 1rem;
        padding: 0.5rem 0;
        border-top: 2px solid var(--gold-1, #d4af37);
    `;
    googleDriveSection.textContent = 'Google Drive Renders';
    
    contentDiv.appendChild(googleDriveSection);
    
    // Add each image from Google Drive
    googleDriveImages.forEach((file, index) => {
        const card = createRenderCard(
            file.name,
            file.webContentLink || file.thumbnailLink || file.webViewLink,
            file.name,
            'Google Drive',
            file.webViewLink
        );
        
        contentDiv.appendChild(card);
    });
}

/**
 * Create a render card element
 * @param {string} imageUrl - URL of the image
 * @param {string} displayName - Display name for the render
 * @param {string} altText - Alt text for the image
 * @param {string} description - Description text
 * @param {string} linkUrl - Optional URL to open on click
 */
function createRenderCard(imageUrl, displayName, altText, description, linkUrl) {
    const card = document.createElement('div');
    card.className = 'card-cont render-card';
    card.setAttribute('hover', '');
    card.style.cursor = linkUrl ? 'pointer' : 'default';
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${altText}" class="render-image" loading="lazy">
        <div class="render-info">
            <div style="color: var(--gold-1); font-weight: bold; font-size: 1.1rem; margin-bottom: 0.5rem;">
                ${displayName}
            </div>
            <div style="color: #fff; font-size: 0.9rem;">${description}</div>
        </div>
    `;
    
    if (linkUrl) {
        card.addEventListener('click', () => {
            window.open(linkUrl, '_blank');
        });
    }
    
    return card;
}

/**
 * Listen for renders modal opening and load images if not already loaded
 */
function setupRenderModalListener() {
    const rendersModal = document.getElementById('renders-modal');
    if (rendersModal) {
        const originalDisplay = rendersModal.style.display;
        
        // Add mutation observer to watch for modal visibility
        const observer = new MutationObserver(() => {
            if (rendersModal.style.display === 'flex' && googleDriveImages.length === 0 && !isLoadingGoogleDriveImages) {
                // Modal is open and we haven't loaded images yet
                if (window.gapi && window.gapi.client) {
                    loadGoogleDriveImages();
                }
            }
        });
        
        observer.observe(rendersModal, { attributes: true, attributeFilter: ['style'] });
    }
}

/**
 * Load images from a shared JSON file (alternative to API)
 * You can create a renders-manifest.json file with image data
 */
function loadRenderImagesFromManifest() {
    fetch('/renders-manifest.json')
        .then(response => response.json())
        .then(data => {
            googleDriveImages = data;
            addGoogleDriveImagesToModal();
        })
        .catch(error => {
            console.log('No renders-manifest.json found. Using API method.');
            initializeGoogleDriveRenders();
        });
}

/**
 * Quick enable function for users
 * Just call: enableGoogleDriveRenders() in your console or code
 */
window.enableGoogleDriveRenders = function() {
    if (!GOOGLE_API_KEY.includes('YOUR_')) {
        initializeGoogleDriveRenders();
    } else {
        console.warn('Please configure GOOGLE_API_KEY and GOOGLE_CLIENT_ID first in google-drive-renders.js');
    }
};

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    setupRenderModalListener();
    // Try to load from manifest first, if it exists
    fetch('/renders-manifest.json', { method: 'HEAD' })
        .then(() => loadRenderImagesFromManifest())
        .catch(() => {
            // Manifest doesn't exist, that's fine
        });
    
    // Uncomment the line below to automatically initialize Google Drive API integration
    // If you've configured GOOGLE_API_KEY and GOOGLE_CLIENT_ID:
    // initializeGoogleDriveRenders();
});

// Also initialize when this script loads (in case DOMContentLoaded already fired)
if (document.readyState !== 'loading') {
    setupRenderModalListener();
}
