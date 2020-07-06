import { Controller, Post, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Post()
  create(): string {
    return 'This action adds a new todo';
  }

  @Get()
  findAll(): string {
    return 'This action returns all todos';
  }
}
