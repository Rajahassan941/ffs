import { Component } from '@angular/core';

export class Todo {
  name: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo-list';
  todos: Todo[] = [];
  newTodo: string;


  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Please Enter Todo')
    }
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted; //apply line through
  }

  remove(id:number){
    this.todos = this.todos.filter((_v,i)=> i !== id); //to remove item
  }
}