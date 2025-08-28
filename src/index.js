import './style.css';
import { icon } from './assets/icons.js';

// Use custom chevron icon for select box to adjust positoning via css
const select = document.querySelector('.input-select');
select.style.backgroundImage = `url(${icon.down})`;

// Assign correct images to each validation check
const checks = document.querySelectorAll('.input-check');
checks.forEach((check) => (check.src = icon.check));
