import './style.scss';

class Board {
   private board: HTMLDivElement;
   private columns: Column[] = [
      new Column(0, 'To-Do'),
      new Column(1, 'In Progress'),
      new Column(2, 'In Review'),
      new Column(3, 'Done'),
   ];

   constructor() {
      this.board = document.createElement('div');
      this.board.id = 'board';
      this.board.innerHTML += `<div class="columns"></div>`;

      this.renderColumns();
   }

   getElement() {
      return this.board;
   }

   renderColumns() {
      const columnsContainer = this.board.querySelector('.columns');
      if (columnsContainer) {
         this.columns.forEach((col) =>
            columnsContainer.appendChild(col.getElement()),
         );
      }
   }
}

class Column {
   private colElement: HTMLDivElement;

   constructor(id: number, title: string) {
      this.colElement = document.createElement('div');
      this.colElement.id = `col-${id}`;
      this.colElement.className = 'column';
      this.colElement.innerHTML = `<h2>${title}</h2>`;
   }

   getElement() {
      return this.colElement;
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const board = new Board();
   document.getElementById('app')?.appendChild(board.getElement());
});
