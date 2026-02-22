import './style.scss';

class Board {
   private board: HTMLDivElement;
   private columns: Column[] = [
      new Column(0, 'To-Do', Status.ToDo),
      new Column(1, 'In Progress', Status.InProgress),
      new Column(2, 'In Review', Status.InReview),
      new Column(3, 'Done', Status.Done),
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

enum Status {
   ToDo = 'ToDo',
   InProgress = 'InProgress',
   InReview = 'InReview',
   Done = 'Done',
}

class Column {
   private colElement: HTMLDivElement;

   constructor(id: number, title: string, status: Status) {
      this.colElement = document.createElement('div');
      this.colElement.id = `col-${id}`;
      this.colElement.className = `column ${status.toString()}`;
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
