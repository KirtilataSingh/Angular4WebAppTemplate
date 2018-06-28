import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls:['./layout.component.scss']
})
export class LayoutComponent{

  public toggleBarIcon:boolean=true;
  constructor(){

  }
  toggle():void{
    let self=this;
    setTimeout(()=>{
      self.toggleBarIcon=!self.toggleBarIcon;

    },500)
  }

}
