import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoItems: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { 

  }

  getTodoItems() {
    this.todoItems = this.db.list('todolist');
    return this.todoItems;
  }

  addTodoItems(title: string) {
    this.todoItems.push({
      title: title,
      isChecked: false
    });
  }

  updateItemCheckedOrNot($item: string, flag: boolean) {
    this.todoItems.update($item, {isChecked: flag});
  }

  removeTodoItem($item: string) {
    this.todoItems.remove($item);
  }

}
