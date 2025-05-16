// import { createIcons, icons } from '../../node_modules/lucide/dist/esm/lucide.js'; // Removed ES6 import

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide === 'undefined') {
    console.error('Lucide is not loaded!');
    return;
  }

  console.log('Global lucide object found. Checking icons...');
  if (lucide.icons) {
    console.log('Attempting to log lucide.icons.CircleCheck (PascalCase):', lucide.icons.CircleCheck);
    console.log('First 50 keys in lucide.icons:', Object.keys(lucide.icons).slice(0, 50));
  } else {
    console.error('lucide.icons object is missing!');
  }

  lucide.createIcons({
    icons: lucide.icons,
    attrs: {
      height: 24,
      width: 24,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2
    },
  });
  console.log('lucide.createIcons() was called.');
});