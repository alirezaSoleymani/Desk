import './style.scss';
import { Board } from './domain/entities/Board';

document.addEventListener('DOMContentLoaded', () => {
   const board = new Board();
   document.getElementById('app')?.appendChild(board.getElement());
});
