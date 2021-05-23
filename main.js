/*
*** TODOS ***
|1| relearn this, arrow functions.
|2| Learn async.
|3| relearn classes.

|| Wait until images are loaded.
|| style button
|| rect to object
|| can context be in every class?
|| empty lines after functions.

|| let user choose window size
|| delete zip from github


*/

/* eslint-disable no-unused-vars */
'use strict';

import * as gf from './game_functions.js';
import * as af from './alien_functions.js';
import * as sf from './screen_functions.js';
import {Ship} from './ship.js';
import {Settings} from './settings.js';
import {initScreen} from './screen.js';
import {initButton} from './button.js';
import {eventListeners} from './event_listeners.js';


function runGame() {
  // Load images

  // Initialize settings and screen object.
  const settings = new Settings;
  const screen = initScreen(settings);

  const button = initButton(screen);

  // Make a ship, a array of bullets and a array for aliens.
  const ship = new Ship(settings, screen);

  const bullets = [];
  const aliens = [];


  // Create fleet of aliens.
  af.createFleet(settings, screen, aliens);

  // Check events
  eventListeners(screen, settings, ship, bullets);


  //  Start the main loop for the game.
  window.setInterval(function() {
    sf.updateScreen(screen, button, settings, ship, aliens, bullets);

    if (settings.gameStats.gameActive === true) {
      ship.update(settings, screen);
      af.updateAliensFleet(settings, screen, ship, aliens);
      gf.updateBullets(settings, bullets, aliens);

      gf.processHits(screen, ship, bullets, aliens);

      gf.processFleet(settings, screen, ship, bullets, aliens);
    }
  }, 1/100);
};

runGame();


