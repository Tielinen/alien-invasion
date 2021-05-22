'use strict';
import * as jtGame from './jt_game.js';


export class Bullet {
  // A class to manage bullets fired from ship.
  constructor(settings, ship) {
    // Bullet settings
    Object.entries(settings.bullet).forEach((setting) => {
      this[setting[0]] = setting[1];
      this.isHit = false;
    },
    );

    // create bullet rect at (0,0) and then set correct position.
    this.rect = jtGame.getRect(this);
    this.rect.centerX = ship.rect.centerX;
    this.rect.bottom = ship.rect.top;
  }
  draw(screen) {
    // Draw the bullet up to the screen
    screen.context.fillStyle = this.color;
    screen.context.fillRect(
        this.rect.x,
        this.rect.y,
        this.width,
        this.height);
  };
  update(settings, bullets, index) {
    // Move the bullet up the screen.
    this.rect.y -= settings.bullet.speedFactor;

    // remove bullets that are out of screen.
    if (this.rect.bottom <= 0) {
      bullets.splice(index, 1);
    }
  };
}

