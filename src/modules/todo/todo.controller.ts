import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './CreateTodo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<boolean> {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todoService.get(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<Todo[]> {
    return this.todoService.delete(id);
  }

  // Simple redirect
  //   @Get(':id')
  //   @Redirect('https://nestjs.com', 301)
  //   getDocs(): boolean {
  //     return true;
  //   }
}
