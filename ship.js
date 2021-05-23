'use strict';
import * as jtGame from './jt_game.js';


export class Ship {
  constructor(settings, screen) {
    // Initialize the ship and set its starting position.


    // Load the ship image and get its rect
    this.image = this.image = document.getElementById('js-ship-img');

    this.rect = jtGame.getRect(this.image);

    // Start each new ship at the bottom center of the screen.
    this.rect.bottom = screen.rect.bottom;
    this.rect.centerX = screen.rect.centerX;

    // Movement flags
    this.movingRight = false;
    this.movingLeft = false;


    this.isHit = false;
  }
  draw(screen) {
    screen.context.drawImage(this.image, this.rect.x, this.rect.y);
  };
  update(settings, screen) {
    // Update ships position based on movement flag.

    // Move right if can
    if (
      this.rect.right >= screen.width || this.rect.centerX > this.screenX) {
      this.movingRight = false;
    }

    if (this.movingRight) {
      this.rect.x += settings.ship.speedFactor;
    }

    // Move left
    if (this.rect.left <= 0 || this.rect.centerX < this.screenX) {
      this.movingLeft = false;
    }
    if (this.movingLeft) {
      this.rect.x -= settings.ship.speedFactor;
    }
  }
  center(screen) {
    this.rect.centerX = screen.rect.centerX;
  }
}

