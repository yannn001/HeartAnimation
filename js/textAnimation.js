// Wait for the main animation to initialize
document.addEventListener('DOMContentLoaded', function() {
  // Get reference to the text element
  const text = document.querySelector('.text');
  
  // Create an animation loop that doesn't interfere with the heart
  function animateText() {
    // Access the beat value from the global scope (defined in script.js)
    if (typeof beat !== 'undefined' && text) {
      // Use the beat value to determine text movement
      const rotationX = beat.a * 15; 
      const rotationY = beat.a * 15;
      
      // Apply the transformation
      text.style.transform = `translate(-50%, -50%) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
    
    // Continue the animation loop
    requestAnimationFrame(animateText);
  }
  
  // Start the animation loop
  animateText();
});