let cuadrado;
cuadrado = {
  // 1. Data
  // position is defined in the cartesian plane
  // x and y should be between the (-100, 100) range
  _position: [0, 0],
  // initial rotation in radians should be kepts as PI / 12 multiples
  _rotation: 0,
  // cuadrado edge size should
  _edge: 40,
  // color to fill the shape
  _color: 'red',

  // 2. Getters and Setters
  get position() {
    return this._position;
  },

  set position(newPosition) {
    if (newPosition.length !== 2) {
      console.log('The position must be an array of two elements');
    }

    this._position = newPosition;
  },

  get rotation() {
    return this._rotation;
  },

  set rotation(newRotation) {
    if (newRotation % (Math.PI / 12) !== 0) {
      console.log('The rotation must be a multiple of PI / 12');
    }

    this._rotation = newRotation;
  },
  randomize: function() {
    this.position = [-100 + 200 * Math.random(), -100 + 200 * Math.random()];
    // implement the color and rotation parts of this function
    // remember the rotation should be kept as a PI / 12 multiple
  }
};

// cuadrado position property debug message
console.debug(cuadrado.position);
// call and executes the cuadrado randomize method:
cuadrado.randomize();
// cuadrado position property warn message
console.warn(cuadrado.position);
// cuadrado object log message
console.log(cuadrado);
