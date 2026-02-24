import { Status } from '../types';
import { Column } from '../entities/Column';
import { Ticket } from '../entities/Ticket';

export class Board {
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

   addTicket(ticket: Ticket) {
      const target = this.columns.find((col) => col.status === ticket.status);
      if (target) target.addTicket(ticket);
   }
}
