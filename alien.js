'use strict';
import * as jtGame from './jt_game.js';

export class Alien {
  constructor(settings) {
    // Initialize the aliens and set its starting position.
    // Alien settings
    Object.entries(settings.alien).forEach((setting) => {
      this[setting[0]] = setting[1];
    },
    );

    // Load the alien image an set it's rect attribute.
    this.image = document.getElementById('js-alien-img');

    this.rect = jtGame.getRect(this.image);

    // Start each new alien near at the top left of of the screen.
    this.rect.x = this.rect.width;
    this.rect.y = this.rect.height;

    this.isHit = false;
  }
  draw(screen) {
    screen.context.drawImage(this.image, this.rect.x, this.rect.y);
  };
  update(settings) {
    // Move alien right
    this.rect.x += settings.alien.speedFactor * this.direction;
  }
  checkEdges(settings) {
    return this.rect.right >= settings.screen.width || this.rect.left <= 0;
  }
  changeDirection() {
    this.direction *= -1;
    this.rect.y += this.dropSpeed;
  };
}


