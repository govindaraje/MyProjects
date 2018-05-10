import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('title') info:string;
  @Input('things') items:string[];
  @Output('notify') notifyParent:EventEmitter<string> = new EventEmitter<string>();
  newone:string;
  box:string="greenbox";
  constructor() { }

  ngOnInit() {
  }

  sendToParent():void{
    this.notifyParent.emit(this.newone);
  }
  update(x:number):void{
    if(x===1)
      this.box = "greenbox";
    else
      this.box="bluebox";
  }

}
