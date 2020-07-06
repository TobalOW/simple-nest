import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async get(id: number): Promise<Todo> {
    return this.todos.find(todo => todo.id === id);
  }

  async create(todo: Todo): Promise<boolean> {
    this.todos.push(todo);
    return true;
  }

  async delete(id: number): Promise<Todo[]> {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos;
  }
}
