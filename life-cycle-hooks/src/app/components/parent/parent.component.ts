import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  isChildDestroyed = false;

  ngOnInit(): void {
    console.log("ddaay laf Onit ae ei...");
  }
  userName:string ="angu";
  updateUser(){
    this.userName = "react";
  }
  destroy(){
    this.isChildDestroyed = true;
  }

}
