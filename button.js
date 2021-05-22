import * as jtGame from './jt_game.js';


export function initButton(screen) {
  const button = document.querySelector('.js-button');


  button.width = button.offsetWidth;
  button.height = button.offsetHeight;

  button.rect = jtGame.getRect(button);

  button.rect.center = screen.rect.center;

  button.style.left = `${button.rect.x}px`;
  button.style.top = `${button.rect.y}px`;

  button.toggle = function(settings) {
    if (settings.gameStats.gameActive === true) button.hideButton();
    if (settings.gameStats.gameActive === false) button.showButton();
  };
  button.hideButton = function() {
    button.style.display = 'none';
  };
  button.showButton = function() {
    button.style.display = 'inline';
  };


  return button;
}


