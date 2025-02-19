import { darkModeHandle } from './utils';
import { startGame } from './game';

darkModeHandle();

const btnStartGame = document.querySelector('.button-primary');
btnStartGame.addEventListener('click', startGame);
