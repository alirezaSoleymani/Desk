import './style.scss';

class Column {
   private colElement: HTMLDivElement;

   constructor(id: number, title: string) {
      this.colElement = document.createElement('div');
      this.colElement.className = 'column';
      this.colElement.innerHTML = `<h2>${title}</h2>`;
   }

   appendTo(parentElement: string = '.board') {
      const parent = document.querySelector(parentElement);

      if (!parent) {
         console.log(
            `ERROR: Parent element "${parentElement}" does not exist.`,
         );
      }

      parent!.appendChild(this.colElement);
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const board = document.createElement('div');
   board.className = 'board';
   document.getElementById('app')?.appendChild(board);

   new Column(0, 'To-Do').appendTo();
   new Column(1, 'In Progress').appendTo();
   new Column(2, 'In Review').appendTo();
   new Column(3, 'Done').appendTo();
});

// // Define a simple Column type (we'll move this to types.ts later)
// interface Column {
//    id: string;
//    title: string;
//    // tasks: Task[];  // Uncomment later when adding tasks
// }

// // Hardcoded initial columns (your 4 columns)
// const initialColumns: Column[] = [
//    { id: 'todo', title: 'To Do' },
//    { id: 'inprogress', title: 'In Progress' },
//    { id: 'done', title: 'Done' },
//    { id: 'archived', title: 'Archived' },
// ];

// // Function to render one column as HTML
// function renderColumn(column: Column): HTMLElement {
//    const colElement = document.createElement('div');
//    colElement.className = 'column';
//    colElement.innerHTML = `
//     <h2>${column.title}</h2>
//     <!-- Tasks will go here later -->
//   `;
//    colElement.dataset.id = column.id; // For later drag-drop
//    return colElement;
// }

// // Function to render the whole board
// function renderBoard(columns: Column[]): HTMLElement {
//    const boardElement = document.createElement('div');
//    boardElement.className = 'board';

//    columns.forEach((column) => {
//       const colElement = renderColumn(column);
//       boardElement.appendChild(colElement);
//    });

//    return boardElement;
// }

// // Main app setup
// const app = document.querySelector<HTMLDivElement>('#app')!;
// const board = renderBoard(initialColumns);
// app.appendChild(board);
