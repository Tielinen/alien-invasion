'use strict';
export function getRect(soucre) {
  return {
    x: 0,
    y: 0,

    width: soucre.width,
    height: soucre.height,

    // sides
    get top() {
      return this.y;
    },

    set top(value) {
      this.y = value;
    },

    get right() {
      return this.x + this.width;
    },

    set right(value) {
      this.x = value - this.length;
    },

    get bottom() {
      return this.y + this.height;
    },

    set bottom(value) {
      this.y = value - this.height;
    },

    get left() {
      return this.x;
    },

    set left(value) {
      this.x = value;
    },

    // center

    get centerX() {
      return this.x + (this.width /2);
    },

    set centerX(value) {
      this.x = value - (this.width /2);
    },

    get centerY() {
      return this.y + (this.height /2);
    },

    set centerY(value) {
      this.y = value - (this.height /2);
    },
    get center() {
      return [this.centerX, this.centerY];
    },
    set center(valuesXY) {
      this.x = valuesXY[0] - (this.width /2);
      this.y = valuesXY[1] - (this.height /2);
    },
    get edges() {
      const topEdge = [];
      for (let x = this.left; x < this.right; x++) {
        topEdge.push([x, this.top]);
      }
      const rightEdge = [];
      for (let y = this.top; y < this.bottom; y++) {
        rightEdge.push([this.right, y]);
      }
      const bottomEdge = [];
      for (let x = this.left; x < this.right; x++) {
        topEdge.push([x, this.bottom]);
      }
      const leftEdge = [];
      for (let y = this.top; y < this.bottom; y++) {
        rightEdge.push([this.left, y]);
      }

      return [...topEdge, ...rightEdge, ...bottomEdge, ...leftEdge];
    },
  };
};


export function tagHits(objects1, objects2) {
  objects1.forEach(function(object1, object1Index) {
    objects2.forEach(function(object2, object2Index) {
      if (isCollision(object1, object2)) {
        object1.isHit = true;
        object2.isHit = true;
      }
    });
  } );
}

export function removeHits(...arrays) {
  arrays.forEach(function(objects) {
    const objectsCopy = [...objects];
    objects.length = 0;

    objectsCopy.forEach(function(object) {
      if (object.isHit === false) {
        objects.push(object);
      }
    });
  });
}


export function isCollision(object1, object2) {
  return (
    object1.rect.left <= object2.rect.right &&
        object1.rect.right >= object2.rect.left &&
        object1.rect.top <= object2.rect.bottom &&
        object1.rect.bottom >= object2.rect.top
  );
}

export function isHit(objects1, objects2) {
  return objects1.some(function(object1) {
    return objects2.some(function(object2) {
      return isCollision(object1, object2);
    });
  });
}

export function sleep(milliseconds) {
  const date = Date.now();
  let currenDate = null;
  do {
    currenDate = Date.now();
  } while (currenDate - date < milliseconds);
}
