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

  screen.button.addEventListener('click', () => {
    screen.scoreBoard.score = 0;
    settings.gameStats.gameActive = true;
    settings.gameStats.level = 1;
  });
}
