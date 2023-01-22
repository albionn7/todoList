import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories=['frontEnd', 'backEnd']

  itemTitle:string;
  itemContent:string;
  itemCategory:string;

  taskObject
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

    async dismis(){
      await this.modalCtrl.dismiss(this.taskObject)
    }
  selectCategory(index:number){
    this.itemCategory = this.categories[index]
  }
  addTask(){
    this.taskObject = ({taskTitle:this.itemTitle, taskCategory:this.itemCategory, taskContent:this.itemContent})

    this.dismis()
  }
}
