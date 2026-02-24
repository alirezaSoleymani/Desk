import { Status } from '../types';
import { Ticket } from './Ticket';

export class Column {
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
