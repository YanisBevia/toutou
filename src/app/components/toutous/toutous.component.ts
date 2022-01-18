import { Component, OnInit } from '@angular/core';
import { Toutou } from './../../models/Toutou';

@Component({
  selector: 'app-toutous',
  templateUrl: './toutous.component.html',
  styleUrls: ['./toutous.component.scss']
})
export class ToutousComponent implements OnInit {

  toutous : Toutou[] = [];

  inputToutou:string = "";

  inputToutou2:string = "";

  constructor() { }

  ngOnInit(): void {
    this.toutous = [
      {
        content: 'Premier toutou',
        completed: false,
        put: false
      },
      {
        content: 'Deuxième toutou',
        completed: false,
        put: false
      }
    ];
  }

  toggleDone (id:number){
    this.toutous.map((v, i)=>{
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  togglePut(id:number){
    this.toutous.map((v, i)=>{
      if(i == id) v.put = !v.put;

      return v;
    })
  }


  deleteToutou(id:number){
    this.toutous = this.toutous.filter((v, i)=> i !==id);
  }


  addToutou(){
    this.toutous.push({
      content: this.inputToutou,
      completed: false
    });
    this.inputToutou="";
  }

  putToutou(id:number){
    this.toutous.map((v, i)=>{
      if(i == id){
        v.content = this.inputToutou2;
        v.put = !v.put;
      }
    });
    this.inputToutou2="";
  }
}
