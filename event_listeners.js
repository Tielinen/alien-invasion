import {fireBullet} from './game_functions.js';

export function eventListeners(screen, settings, ship, bullets) {
  document.addEventListener('keydown', (event) => {
    // Move the ship to right.
    if (event.key === 'ArrowRight') {
      ship.movingRight = true;
    }
    // Move the ship to left.
    if (event.key === 'ArrowLeft') {
      ship.movingLeft = true;
    }
    // Fire bullet
    if (event.key === ' ' ) {
      fireBullet(settings, ship, bullets);
    }
    if (event.key === 'p') {

    }
  });

  document.addEventListener('keyup', (event) => {
    // Stop moving the ship to right.
    if (event.key === 'ArrowRight') {
      ship.movingRight = false;
    }
    // Stop moving the ship to left.
    if (event.key === 'ArrowLeft') {
      ship.movingLeft = false;
    }
  });

  document.addEventListener('touchstart', (event) => {
    if (event.touches[0].screenX > ship.rect.centerX) ship.movingRight = true;
    if (event.touches[0].screenX < ship.rect.centerX) ship.movingLeft = true;

    if (event.touches.length > 1) fireBullet(settings, ship, bullets);
    console.log(event.touches.length);
  });

  document.addEventListener('touchend', (event) => {
    if (event.touches.length === 0) {
      ship.movingRight = false;
      ship.movingLeft = false;
    }
  });


  screen.button.addEventListener('click', () => {
    screen.scoreBoard.score = 0;
    settings.gameStats.gameActive = true;
    settings.gameStats.level = 1;
  });
}
