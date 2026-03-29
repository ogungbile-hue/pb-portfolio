import { initCursor } from './cursor.js';
import { initReveal } from './reveal.js';
import { initNav    } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initReveal();
  initNav();
});