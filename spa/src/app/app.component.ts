import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Application';
  childtitles:string[]=["Elctronic Items","Stationaries","Sport Items"];
  things:string[][]=[
    ["RAM","Pen Drive","Hard Disk","USB Cable"],
    ["Pen","Paper","Color Pencil","Eraser"],
    ["Bat","Ball","Gloves","Pad"]
  ]

  newItem:string;

  subcribedInfo(info,boxnumber):void{
    this.newItem = info;
    this.things[boxnumber].push(info);
  }
}
