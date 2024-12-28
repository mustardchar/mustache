// Select the drape
const drape = document.querySelector('.drape');

// Function to update the flashlight mask position
function updateFlashlightPosition(x, y) {
    drape.style.setProperty('--x', `${x}px`);
    drape.style.setProperty('--y', `${y}px`);
}

// Show flashlight on mouse enter
drape.addEventListener('mouseenter', () => {
    drape.style.opacity = '1';
});

// Hide flashlight on mouse leave
drape.addEventListener('mouseleave', () => {
    drape.style.opacity = '0';
});

// Track mouse movement on drape
drape.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    updateFlashlightPosition(x, y);
});
