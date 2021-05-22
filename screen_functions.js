

export function updateScreen(screen, button, settings, ship, aliens, bullets) {
  clearScreen(screen);

  screen.scoreBoard.draw(settings, screen, ship);
  ship.draw(screen);

  aliens.forEach(function(alien) {
    alien.draw(screen);
  });

  bullets.forEach(function(bullet) {
    bullet.draw(screen);
  });


  button.toggle(settings);
  toggleCursor(screen, settings);
}

function clearScreen(screen) {
  screen.context.fillStyle = screen.bgColor;
  screen.context.fillRect(
      0, 0, screen.width, screen.height);
};

function toggleCursor(screen, settings) {
  if (settings.gameStats.gameActive === true) screen.style.cursor = 'none';
  else screen.style.cursor = 'auto';
};


