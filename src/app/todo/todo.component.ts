import { Component, effect, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todo = signal('');
  itemsTodo = signal<{ id: number; todo: string }[]>([]);
  constructor() {
    const saved = localStorage.getItem('todoItems');
    if (saved) {
      this.itemsTodo.set(JSON.parse(saved));
    }

    effect(() => {
      localStorage.setItem('todoItems', JSON.stringify(this.itemsTodo()));
    });
  }
  todoInput = viewChild<HTMLInputElement>('todoInput');

  updateTodo(value: string) {
    this.todo.set(value);
  }
  addTodo() {
    const newItem = {
      id: Date.now(),
      todo: this.todo(),
    };
    this.itemsTodo.update((itemsTodo) => [...itemsTodo, newItem]);
    this.todo.set('');
  }
  removeItem(id: number) {
    this.itemsTodo.update((itemsTodo) =>
      itemsTodo.filter((itemsTodo) => itemsTodo.id !== id)
    );
  }
}
