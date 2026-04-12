// Load renders from /imgs/renders/ directory
function loadLocalRenders() {
    const rendersPath = '/imgs/renders/';
    
    // List of image files in /imgs/renders/
    const renderImages = [
        '1v1.jpeg',
        'authenticRender.jpg',
        'bloom.png',
        'bloomDead.jpg',
        'burger.jpg',
        'ChillyIced.jpg',
        'coolas.jpg',
        'creation.jpg',
        'creationHand.jpg',
        'Elf.jpg',
        'Elfwide.jpg',
        'endless.jpg',
        'flaming.jpg',
        'flowrender.jpeg',
        'geckoRender.jpg',
        'geckRender(1).jpg',
        'GoldRender.jpeg',
        'gutsRender.jpg',
        'jamedNoDiff.jpg',
        'jamesDuel.jpg',
        'jamesonvjason.jpg',
        'juice.jpg',
        'KODBROSRender.jpg',
        'lucyRender.jpg',
        'noah.jpg',
        'pengu.jpg',
        'Penguwide.jpg',
        'peppermint.jpg',
        'plauge.jpg',
        'pooh.jpg',
        'ramen.jpg',
        'resunzEU.png',
        'resunzNA.jpg',
        'rubiesRender.jpg',
        'rubiesRender2.jpg',
        'samurai.jpg',
        'sens.jpg',
        'turtle.png',
        'Veiled.jpg',
        'Weatie.jpg'
    ];
    
    const contentDiv = document.querySelector('#renders-modal .content');
    if (!contentDiv) {
        console.warn('Renders modal content not found');
        return;
    }
    
    // Clear existing content except the first few character cards (optional - comment out if not needed)
    // const existingCards = contentDiv.querySelectorAll('.render-card');
    // existingCards.forEach(card => card.remove());
    
    // Check if we've already added renders
    if (contentDiv.querySelector('[data-renders-loaded]')) {
        return;
    }
    
    // Create a section header for local renders
    const section = document.createElement('div');
    section.setAttribute('data-renders-loaded', 'true');
    section.style.cssText = `
        grid-column: 1 / -1;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--gold-1, #d4af37);
        margin-top: 1rem;
        padding: 0.5rem 0;
        border-top: 2px solid var(--gold-1, #d4af37);
    `;
    section.textContent = 'Renders Gallery';
    contentDiv.appendChild(section);
    
    // Add each render as a card
    renderImages.forEach((filename) => {
        const card = document.createElement('div');
        card.className = 'card-cont render-card';
        card.setAttribute('hover', '');
        card.style.cursor = 'pointer';
        
        const displayName = filename.replace(/\.[^/.]+$/, ''); // Remove file extension
        const imagePath = rendersPath + filename;
        
        card.innerHTML = `
            <div class="render-img-wrapper">
                <img src="${imagePath}" alt="${displayName}" class="render-image">
            </div>
            <div class="render-info">
                <div style="color: var(--gold-1); font-weight: bold; font-size: 1.1rem; margin-bottom: 0.5rem; margin-top: 0.5rem; margin-left: 0.5rem;">
                    ${displayName}
                </div>
            </div>
        `;
        
        // Open image in new tab on click
        card.addEventListener('click', () => {
            window.open(imagePath, '_blank');
        });
        
        contentDiv.appendChild(card);
    });
    
    console.log('✓ Loaded ' + renderImages.length + ' renders');
}

// Load renders when page loads - with delay to ensure modal is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(loadLocalRenders, 100);
    });
} else {
    setTimeout(loadLocalRenders, 100);
}
