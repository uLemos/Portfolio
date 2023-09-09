import { TargetInterface } from './../../interfaces/target-interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{

targetInterface: TargetInterface ={
  clicked: 0,
  currentFollowers: 90,
  btn: null,
  fw: null
} 

  ngOnInit(): void {

    this.targetInterface.btn = document.querySelector("a.btn"),
    this.targetInterface.fw = document.querySelector("span.followers")

    const follow = () =>{
      this.targetInterface.clicked += 1;
      this.targetInterface.btn!.innerHTML = 'Following <i class="fas fa user-times"></i>';

      if(this.targetInterface.clicked % 2 === 0){
        this.targetInterface.currentFollowers -= 1;
        this.targetInterface.btn!.innerHTML = 'Follow <i class=" fas fa-user-plus"></i>';
      }
      else{
        this.targetInterface.currentFollowers += 1;
      }

      this.targetInterface.fw!.textContent = this.targetInterface.currentFollowers;

      this.targetInterface.btn!.classList.toggle("following");
    }
  }
}
