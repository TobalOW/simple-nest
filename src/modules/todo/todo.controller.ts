import { Controller, Post, Get, Redirect } from '@nestjs/common';

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
  
// Simple redirect
  @Get(':id')
  @Redirect('https://nestjs.com', 301)
  getDocs(): boolean {
    return true;
  }
}
