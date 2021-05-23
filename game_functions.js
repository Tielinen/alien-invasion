'use strict';
import * as jtGame from './jt_game.js';
import * as af from './alien_functions.js';

import {Bullet} from './bullet.js';


export function updateBullets(settings, bullets) {
  bullets.forEach(function(bullet, index) {
    bullet.update(settings, bullets, index);
  });
}

export function fireBullet(settings, ship, bullets) {
  if (isBulletAllowed(settings, bullets)) {
    bullets.push(new Bullet(settings, ship));
  }
}
function isBulletAllowed(settings, bullets) {
  return bullets.length < settings.bullet.allowed &&
    settings.gameStats.gameActive === true;
}

export function processHits(screen, ship, bullets, aliens) {
  if (jtGame.isHit(bullets, aliens)) {
    jtGame.tagHits(bullets, aliens);
    countScores(screen, ship, aliens);
    jtGame.removeHits(bullets, aliens);
  }
}


export function processFleet(settings, screen, ship, bullets, aliens) {
  if (aliens.length === 0) settings.levelUp();

  if (jtGame.isHit([ship], aliens) || af.isAlienBottom(screen, aliens)) {
    alienHitShip(settings, screen, ship, bullets, aliens);
  };
}

function countScores(screen, ship, aliens) {
  aliens.forEach(function(alien) {
    if (alien.isHit) {
      screen.scoreBoard.score = Math.round(
          screen.scoreBoard.score + alien.points,
      );
      screen.scoreBoard.updateHiScore();
    }
  } );
}

function alienHitShip(settings, screen, ship, bullets, aliens) {
  if (settings.gameStats.ships > 1) {
    newShip(settings, screen, ship, bullets, aliens);
  } else {
    resetGame(settings, screen, ship, bullets, aliens);
  }
}

function newShip(settings, screen, ship, bullets, aliens) {
  settings.gameStats.ships -= 1;

  clearBullets(bullets);
  af.clearAliens(aliens);
  ship.center(screen);

  af.updateAliensFleet(settings, screen, ship, aliens);

  jtGame.sleep(1000);
}

function resetGame(settings, screen, ship, bullets, aliens) {
  settings.gameStats.gameActive = false;
  settings.gameStats.ships = settings.ship.count;

  ship.center(screen);
  clearBullets(bullets);
  af.clearAliens(aliens);

  settings.resetSpeed();

  af.updateAliensFleet(settings, screen, ship, aliens);

  jtGame.sleep(1000);
  // Button event listener resets score and level.
}

function clearBullets(bullets) {
  bullets.length = 0;
}

