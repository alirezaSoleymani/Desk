import { Status } from '../types';

export class Ticket {
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
