import './style.scss';

class Board {
   private board: HTMLDivElement;
   private columns: Column[] = [
      new Column('To-Do', Status.ToDo, [
         new Ticket('new To-Do', 'Description'),
         new Ticket('new To-Do', 'Description'),
         new Ticket('new To-Do', 'Description'),
      ]),
      new Column('In Progress', Status.InProgress, [
         new Ticket('new In-Progress', 'Description'),
      ]),
      new Column('In Review', Status.InReview),
      new Column('Done', Status.Done),
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
   ToDo = 'to-do',
   InProgress = 'in-progress',
   InReview = 'in-review',
   Done = 'done',
}

class Ticket {
   private ticket: HTMLDivElement;
   public status: Status = Status.ToDo;
   private static nextId: number = 1;
   private id: number;

   constructor(title: string, description?: string) {
      this.id = Ticket.nextId++;

      this.ticket = document.createElement('div');
      this.ticket.classList = `ticket ${this.status.toString()}-ticket`;
      this.ticket.innerHTML = `
      <div class="ticket-title">${title}</div>
      ${description ? `<div class="ticket-description">${description}</div>` : ''}
      `;
   }

   getElement() {
      return this.ticket;
   }
}

class Column {
   private colElement: HTMLDivElement;
   private static nextId: number = 1;
   private id: number;

   constructor(title: string, status: Status, tickets?: Ticket[]) {
      this.id = Column.nextId++;

      this.colElement = document.createElement('div');
      this.colElement.id = `col-${this.id}`;
      this.colElement.className = `column ${status.toString()}`;
      this.colElement.innerHTML = `<div class="col-title">${title}</div>`;

      if (tickets) {
         this.colElement.innerHTML += `<div class="tickets"></div>`;

         tickets.forEach((ticket) => {
            this.colElement
               .querySelector('.tickets')
               ?.append(ticket.getElement());
         });
      }
   }

   getElement() {
      return this.colElement;
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const board = new Board();
   document.getElementById('app')?.appendChild(board.getElement());
});
