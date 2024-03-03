import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //Input() stringText:String="";
  @Output() newItemEvent:EventEmitter<String> = new EventEmitter();
  formSearch = this.formBuilder.group({
    searchValue:[''],
  });
   //searchText:any;
  constructor( private formBuilder:FormBuilder) { }


  ngOnInit(): void {
  }

  goSearch(){
    const keyword = this.getFormcontrols().searchValue.value;
    this.newItemEvent.emit(keyword); // truyền cho component mainweather biết nó đã nhận giá trị sau khi ấn submit
    console.log(keyword);
  }

  //get form control
  getFormcontrols(){
    return this.formSearch.controls;
  }
}
