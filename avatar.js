// MCHeads API - Fetch player avatars
const USERNAMES = ['itzNyrexx', 'psychopomp1219', 'Cyroken', 'd4ym1an', 'PlutoSR', 'Alexis123562', 'Azrael_7','LXXXIII','McDiickhead','Filetmignon1','hazardous088','bunny_maam'];
const AVATAR_SIZE = 64; // pixels

// Function to get a random username from the list
function getRandomUsername() {
    return USERNAMES[Math.floor(Math.random() * USERNAMES.length)];
}

// Function to get MCHeads avatar URL
function getMCHeadsUrl(username, size = AVATAR_SIZE) {
    return `https://mc-heads.net/avatar/${username}/${size}`;
}

// Function to update the avatar
function updateAvatar() {
    const username = getRandomUsername();
    const avatarElement = document.getElementById('avatar');
    
    if (avatarElement) {
        const avatarUrl = getMCHeadsUrl(username);
        avatarElement.style.backgroundImage = `url('${avatarUrl}')`;
        avatarElement.style.backgroundSize = 'cover';
        avatarElement.style.backgroundPosition = 'center';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateAvatar);