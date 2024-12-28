
const drape = document.querySelector('.drape');
const flashlight = document.querySelector('.flashlight');
const flashlightRadius = 75; // Radius of flashlight

// Function to update flashlight position
function updateFlashlightPosition(x, y) {
  flashlight.style.left = `${x - flashlightRadius}px`;
  flashlight.style.top = `${y - flashlightRadius}px`;
}

// Function to show flashlight
function showFlashlight() {
  flashlight.style.display = 'block';
  flashlight.style.opacity = 1; // Ensure it’s fully visible
}

// Function to hide flashlight (with fade-out effect)
function hideFlashlight() {
  flashlight.style.opacity = 0; // Fade out
  setTimeout(() => {
    flashlight.style.display = 'none';
  }, 200); // Match the fade duration
}

// Desktop: Mouse movement to control flashlight
drape.addEventListener('mousemove', (e) => {
  showFlashlight();
  updateFlashlightPosition(e.pageX, e.pageY);

  // Reset hide timer
  clearTimeout(flashlight.hideTimer);
  flashlight.hideTimer = setTimeout(hideFlashlight, 300);
});

// Mobile: Touch movement to control flashlight
drape.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  showFlashlight();
  updateFlashlightPosition(touch.pageX, touch.pageY);

  // Reset hide timer
  clearTimeout(flashlight.hideTimer);
  flashlight.hideTimer = setTimeout(hideFlashlight, 300);
});

// Mobile: Touch end to hide flashlight
drape.addEventListener('touchend', hideFlashlight);

// Desktop: Hide flashlight when mouse leaves drape
drape.addEventListener('mouseleave', hideFlashlight);


