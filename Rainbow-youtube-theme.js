let hue = 0;

function rainbowEverything() {
  // Main YouTube app container
  const mainContainer = document.querySelector('ytd-app') || document.body;

  // Top navigation bar
  const topBar = document.querySelector('ytd-masthead');

  // Sidebar (optional)
  const sideBar = document.querySelector('#guide-content');

  // YouTube watch progress bar (inside video player)
  const watchBar = document.querySelector('.ytp-play-progress');

  // Apply rainbow to main container
  if (mainContainer) {
    mainContainer.style.transition = 'background 0.2s linear';
    mainContainer.style.background = `hsl(${hue}, 100%, 50%)`;
  }

  // Apply rainbow to top bar
  if (topBar) {
    topBar.style.transition = 'background 0.2s linear';
    topBar.style.background = `hsl(${(hue + 180) % 360}, 100%, 40%)`;
  }

  // Optional: Apply rainbow to sidebar
  if (sideBar) {
    sideBar.style.transition = 'background 0.2s linear';
    sideBar.style.background = `hsl(${(hue + 90) % 360}, 100%, 45%)`;
  }

  // 🌈 Apply rainbow to the watch bar
  if (watchBar) {
    watchBar.style.background = `hsl(${(hue + 270) % 360}, 100%, 50%)`;
  }

  // Increment hue
  hue = (hue + 1) % 360;

  // Loop
  requestAnimationFrame(rainbowEverything);
}

rainbowEverything();

