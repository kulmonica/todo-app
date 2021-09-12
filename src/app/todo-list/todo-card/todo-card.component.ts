import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import {TodoListService} from '../shared/todo-list.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.less']
})
export class TodoCardComponent implements OnInit {
  todoListArray: any[];
  checked: any[];

 
  constructor(db: AngularFireDatabase, 
    private todoService: TodoListService) { 
  }
 
  
  ngOnInit(): void {
    this.todoService.getTodoItems().snapshotChanges().subscribe((items)=> {
      this.todoListArray = [];
      items.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.todoListArray.push(x);
      })
    })
  }

  onAdd(item) {
    this.todoService.addTodoItems(item.value);
    item.value = null;
  }

  onDelete(item) {
    this.todoService.removeTodoItem(item);
  }

  onTodoItemClick(key, selection){
    this.todoService.updateItemCheckedOrNot(key, selection);
  }

}
