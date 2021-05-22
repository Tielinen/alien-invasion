import * as jtGame from './jt_game.js';
import {ScoreBoard} from './scoreboard.js';


export function initScreen(settings) {
  const screen = document.querySelector('.js-screen');

  // Settings
  Object.entries(settings.screen).forEach(function(setting) {
    screen[setting[0]] = setting[1];
  },
  );

  screen.setAttribute('width', screen.width);
  screen.setAttribute('height', screen.height);

  screen.context = screen.getContext('2d');
  screen.rect = jtGame.getRect(screen);

  screen.scoreBoard = new ScoreBoard(settings);


  screen.button = document.querySelector('.js-button');

  return screen;
}


