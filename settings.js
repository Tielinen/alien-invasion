'use strict';

export class Settings {
  // A class to store all settings for Alien Invasion.
  constructor() {
    // Sreen settings
    this.speedUpScale = 1.1,

    this.screen = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      bgColor: 'rgb(230, 230, 230)',

      textColor: 'rgb(30, 30, 30)',
      fontSize: 36,
      font: 'Gugi',
    };


    // Ships settings
    this.ship = {
      startSpeed: 3,
      count: 3,
    };

    // Alien settings
    this.alien = {
      startSpeed: 2.0,
      dropSpeed: 10,
      direction: 1,
      points: 50,
      pointsScale: 1.1,
    };

    // Bullet settings
    this.bullet = {
      startSpeed: 6,
      allowed: 5,
      width: 3,
      height: 15,
      color: 'rgb(60, 60, 60)',
    };

    this.gameStats = {
      gameActive: false,
      level: 1,
      ships: this.ship.count,
    };

    this.resetSpeed();
  }

  speedUp() {
    this.ship.speedFactor *= 1.1;
    this.bullet.speedFactor *= 1.1;
    this.alien.speedFactor *= 1.15;

    this.alien.points *= this.alien.pointsScale;
  }
  resetSpeed() {
    this.ship.speedFactor = this.ship.startSpeed;
    this.bullet.speedFactor = this.bullet.startSpeed;
    this.alien.speedFactor = this.alien.startSpeed;
  }

  levelUp() {
    this.gameStats.level++;
    this.speedUp();
  }
}


