import {Alien} from './alien.js';

export function updateAliensFleet(settings, screen, ship, aliens) {
  if (aliens.length === 0) {
    createFleet(settings, screen, aliens);
  }
  updateAliens(settings, aliens);
  checkFleetEdges(settings, aliens);
}

function updateAliens(settings, aliens) {
  aliens.forEach(function(alien) {
    alien.update(settings);
  });
}

export function createFleet(settings, screen, aliens) {
  const numberAliensX = getAliensXnumber(settings, screen);

  const rowsNumber = getAlienRows(settings, screen);
  for (let rowNumber = 0; rowsNumber > rowNumber; rowNumber++) {
    for (let alienNumber = 0; numberAliensX > alienNumber; alienNumber++) {
      createAlien(settings, aliens, alienNumber, rowNumber);
    }
  }
}

function getAliensXnumber(settings, screen) {
  const alien = new Alien(settings);
  const availableSpaceX = screen.width - (2 * alien.rect.width);
  const aliensXnumber = Math.trunc(availableSpaceX / (2 *alien.rect.width));
  return aliensXnumber;
}

function getAlienRows(settings, screen) {
  const alien = new Alien(settings);
  const availableSpaceY = screen.height - (3 * alien.rect.height);
  const rowsNumber = Math.trunc(availableSpaceY / (2 *alien.rect.height));
  return rowsNumber;
}

function createAlien(settings, aliens, alienNumber, rowNumber) {
  const alien = new Alien(settings);
  alien.rect.x = alien.rect.width + 2 * alien.rect.width * alienNumber;
  alien.rect.y = alien.rect.height + 2 * alien.rect.height * rowNumber;
  aliens.push(alien);
}

function checkFleetEdges(settings, aliens) {
  if (aliens.some(function(alien) {
    return alien.checkEdges(settings);
  })) {
    aliens.forEach(function(alien) {
      alien.changeDirection();
    } );
  };
};

export function clearAliens(aliens) {
  aliens.splice(0, aliens.length);
}

export function isAlienBottom(screen, aliens) {
  return aliens.some(function(alien) {
    return alien.rect.bottom >= screen.rect.bottom;
  });
}
