import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Doituong } from './Doituong';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThongTin';
  BangThontin  = new FormGroup({
    MasoBray : new FormControl(''),
    NameBray : new FormControl(''),
    DateBray : new FormControl(''),
    DiachiBray : new FormControl(''),
    GioitinhBray : new FormControl(''),
 })
  
  OnClick(){
   
    let sayan = new Doituong();
    sayan.Number1 = this.BangThontin.get('MasoBray').value;
    sayan.Name1 = this.BangThontin.get('NameBray').value;
    sayan.Date1 = this.BangThontin.get('DateBray').value;
    sayan.Diachi1 = this.BangThontin.get('DiachiBray').value;
    sayan.Gioitinh1 = this.BangThontin.get('GioitinhBray').value;

    this.list.push(sayan)
    this.BangThontin.reset();
    
  }
    list : Array <Doituong>=[] ;

}
