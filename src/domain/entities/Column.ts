import { Status } from '../types';
import { Ticket } from './Ticket';

export class Column {
   private colElement: HTMLDivElement;
   private static nextId: number = 1;
   private id: number;

   constructor(
      private title: string,
      private _status: Status,
      private _tickets?: Ticket[],
   ) {
      this.id = Column.nextId++;

      this.colElement = document.createElement('div');
      this.colElement.id = `col-${this.id}`;
      this.colElement.className = `column ${_status.toString()}`;
      this.colElement.innerHTML = `<div class="col-title">${title}</div>`;
      this.colElement.innerHTML += `<div class="tickets"></div>`;

      const addBtn = document.createElement('button');
      this.colElement.appendChild(addBtn);
      addBtn.className = 'add-ticket-btn';
      addBtn.textContent = 'Add Ticket';

      if (_tickets) {
         _tickets.forEach((ticket) => {
            this.colElement
               .querySelector('.tickets')
               ?.append(ticket.getElement());
         });
      }
   }

   get status(): Status {
      return this._status;
   }

   get tickets(): Ticket[] | undefined {
      if (this._tickets) return this._tickets;
   }

   addTicket(newTicket: Ticket) {
      this.tickets?.push(newTicket);
      const container = this.colElement.querySelector('.tickets');
      console.log('ho');
      if (container) container.appendChild(newTicket.getElement());
   }

   getElement() {
      return this.colElement;
   }
}
