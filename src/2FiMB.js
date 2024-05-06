/** 
 * Name: 2FiMB
 * Version: 1.0.0
 * Description: 2FiMB (Force Fullscreen in Mobile Browser) - Force your Mobile Browser to Access your favorite website in Fullscreen Mode!
 * Author: Wizzy
 * Author Website: https://iam-wizzy.web.app
 * License: MIT
 */
const FiMBbtn = document.createElement('button');
FiMBbtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgba(255, 255, 255, 0.9)" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"/>
    </svg>
`;

FiMBbtn.querySelector('svg').style.display = 'block';

FiMBbtn.style.position = 'fixed';
FiMBbtn.style.zIndex = '9999';
FiMBbtn.style.border = 'none';
FiMBbtn.style.borderRadius = '2px';
FiMBbtn.style.padding = '8px';
FiMBbtn.style.margin = '0';
FiMBbtn.style.background = 'rgba(0, 0, 0, 0.4)';
FiMBbtn.style.right = '20px';
FiMBbtn.style.bottom = '20px';
FiMBbtn.style.width = '30';
FiMBbtn.style.height = '30';

FiMBbtn.addEventListener('touchstart', function() {
    FiMBbtn.style.transition = 'background 0.4s';
    FiMBbtn.style.background = 'rgba(0, 0, 0, 0.8)';
});
FiMBbtn.addEventListener('touchend', function() {
    FiMBbtn.style.transition = 'background 0.4s';
    FiMBbtn.style.background = 'rgba(0, 0, 0, 0.4)';
});

FiMBbtn.addEventListener('click', function() {
    document.querySelector("html").requestFullscreen();
});

document.body.appendChild(FiMBbtn);

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

FiMBbtn.addEventListener('mousedown', startDrag);
FiMBbtn.addEventListener('touchstart', startDrag);

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

document.addEventListener('mouseup', stopDrag);
document.addEventListener('touchend', stopDrag);

function startDrag(e) {
    isDragging = true;
    const rect = FiMBbtn.getBoundingClientRect();
    if (e.type === 'mousedown') {
        offsetX = e.clientX - rect.right;
        offsetY = e.clientY - rect.bottom;
    } else if (e.type === 'touchstart') {
        offsetX = e.touches[0].clientX - rect.right;
        offsetY = e.touches[0].clientY - rect.bottom;
    }
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    let posX, posY;
    if (e.type === 'mousemove') {
        posX = e.clientX;
        posY = e.clientY;
    } else if (e.type === 'touchmove') {
        posX = e.touches[0].clientX;
        posY = e.touches[0].clientY;
    }
    FiMBbtn.style.right = `${window.innerWidth - (posX - offsetX)}px`;
    FiMBbtn.style.bottom = `${window.innerHeight - (posY - offsetY)}px`;
}

function stopDrag() {
    isDragging = false;
}

document.addEventListener('touchmove', function(e) {
    if (isDragging) {
        e.preventDefault();
    }
}, { passive: false });

function buttonVisibility() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        FiMBbtn.style.display = 'none';
    } else {
        FiMBbtn.style.display = 'block';
    }
}

document.addEventListener('fullscreenchange', buttonVisibility);
document.addEventListener('webkitfullscreenchange', buttonVisibility);
document.addEventListener('mozfullscreenchange', buttonVisibility);
document.addEventListener('MSFullscreenChange', buttonVisibility);
