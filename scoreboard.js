import * as jtGame from './jt_game.js';

export class ScoreBoard {
  constructor() {
    this.score = 0;
    this.hiScore = 0;
  }

  draw(settings, screen, ship) {
    // common
    screen.context.fillStyle = screen.textColor;
    screen.context.font = `${screen.fontSize}px ${screen.font}`,

    this.drawScore(screen);
    this.drawHiScore(screen);
    this.drawLevel(settings, screen);
    this.drawShips(settings, screen, ship);
  }

  drawScore(screen) {
    this.getTextSize(screen, this.score);

    screen.context.fillText(
        this.text, screen.rect.right -this.rect.right -20, 50,
    );
  }

  drawHiScore(screen) {
    this.getTextSize(screen, this.hiScore);
    this.rect.centerX = screen.rect.centerX;

    screen.context.fillText(
        this.text, this.rect.centerX, 50,
    );
  }

  drawLevel(settings, screen) {
    this.getTextSize(screen, settings.gameStats.level);

    screen.context.fillText(
        this.text, screen.rect.right -this.rect.right -20, screen.fontSize + 65,
    );
  }

  getTextSize(screen, text) {
    this.text = text.toLocaleString();
    this.width = screen.context.measureText(this.text).width;
    this.rect = jtGame.getRect(this);
  }

  drawShips(settings, screen, ship) {
    for (let count = 1; count < settings.gameStats.ships; count++) {
      const x = ship.rect.width * count -1;
      screen.context.drawImage(ship.image, x, 0);
    }
  }

  updateHiScore() {
    if (this.score >= this.hiScore) this.hiScore = this.score;
  }
}

