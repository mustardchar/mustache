const drape = document.querySelector('.drape');
const flashlight = document.querySelector('.flashlight');

// Show flashlight on movement
drape.addEventListener('mousemove', (e) => {
  flashlight.style.display = 'block';
  flashlight.style.left = `${e.pageX - 75}px`; // Center the circle
  flashlight.style.top = `${e.pageY - 75}px`;
  
  // Hide flashlight after a delay when movement stops
  clearTimeout(flashlight.hideTimer);
  flashlight.hideTimer = setTimeout(() => {
    flashlight.style.display = 'none';
  }, 200); // Adjust the delay time as needed
});

// Handle touch events for mobile
drape.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  flashlight.style.display = 'block';
  flashlight.style.left = `${touch.pageX - 75}px`;
  flashlight.style.top = `${touch.pageY - 75}px`;

  // Hide flashlight after touch ends
  clearTimeout(flashlight.hideTimer);
  flashlight.hideTimer = setTimeout(() => {
    flashlight.style.display = 'none';
  }, 200);
});

// Hide flashlight when touch stops
drape.addEventListener('touchend', () => {
  flashlight.style.display = 'none';
});
