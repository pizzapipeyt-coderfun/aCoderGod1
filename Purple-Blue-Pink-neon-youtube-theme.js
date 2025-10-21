let hue = 220;
let direction = 1;

function neonPurpleBlueEverything() {
  const mainContainer = document.querySelector('ytd-app') || document.body;
  const topBar = document.querySelector('ytd-masthead');
  const sideBar = document.querySelector('#guide-content');
  const watchBar = document.querySelector('.ytp-play-progress');

  const neonColor = `hsl(${hue}, 100%, 55%)`;

  if (mainContainer) {
    mainContainer.style.transition = 'background 0.2s linear';
    mainContainer.style.background = neonColor;
  }

  if (topBar) {
    topBar.style.transition = 'background 0.2s linear';
    topBar.style.background = `hsl(${(hue + 20) % 360}, 100%, 45%)`;
  }

  if (sideBar) {
    sideBar.style.transition = 'background 0.2s linear';
    sideBar.style.background = `hsl(${(hue + 40) % 360}, 100%, 50%)`;
  }

  if (watchBar) {
    watchBar.style.background = neonColor;
    watchBar.style.boxShadow = `0 0 10px ${neonColor}, 0 0 20px ${neonColor}`;
  }

  // Animate hue between 220 and 280
  hue += direction;
  if (hue >= 280 || hue <= 220) direction *= -1;

  requestAnimationFrame(neonPurpleBlueEverything);
}

neonPurpleBlueEverything();
