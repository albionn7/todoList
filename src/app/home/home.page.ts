import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
    {
    id: 1,
    taskTitle : 'Contact Page',
    taskCategory: 'frontEnd',
    taskContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry '
    },
    {
      id: 2,
      taskTitle : 'Fix checklist buggs',
      taskCategory: 'frontEnd',
      taskContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry '
    },
    {
      id: 3,
      taskTitle : 'Fix product Api',
      taskCategory: 'backEnd',
      taskContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry '
    }
  ]

  // newTodo : string;
  remove(task:number){
    this.todoList.splice(task, 1)
  }
  constructor(public modalCtrl:ModalController) { }
  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj => {
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })
    return await modal.present()
  }

}
