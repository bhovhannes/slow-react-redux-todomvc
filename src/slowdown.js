const TYPES = {
  tiny: 1000,
  small: 2000,
  medium: 3000,
  large: 4000,
  huge: 5000
};

const FACTOR = 50;

const SLOWDOWN_DIV_ID = 'log';

function slowdown(n) {
  const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const letters = 'qwertyuioplkjhgfdsazxcvbnm';
  let result = 0;
  for (let i = 0; i < n * FACTOR; ++i) {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const re = new RegExp(letter + ' ?', 'g');
    result += lipsum.replace(re, '$').length;
  }
  document.getElementById(SLOWDOWN_DIV_ID).innerText = result.toString();
}

export const slowdownTiny = slowdown.bind(TYPES.tiny);
export const slowdownSmall = slowdown.bind(TYPES.small);
export const slowdownMedium = slowdown.bind(TYPES.medium);
export const slowdownLarge = slowdown.bind(TYPES.large);
export const slowdownHuge = slowdown.bind(TYPES.huge);

export function slowdownRandom() {
  const typeKeys = Object.keys(TYPES);
  const i = Math.floor(Math.random() * typeKeys.length);
  slowdown(TYPES[typeKeys[i]]);
}

export function prepareSlowdown() {
  const el = document.createElement('div');
  el.style.display = 'none';
  el.id = SLOWDOWN_DIV_ID;
  document.body.appendChild(el);
}
