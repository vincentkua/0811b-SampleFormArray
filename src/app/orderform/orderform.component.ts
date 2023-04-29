import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})

export class OrderformComponent implements OnInit {
  
  itemArray!: FormArray

  orderform !: FormGroup
  constructor(private fb: FormBuilder){}

  createForm() : FormGroup{
    this.itemArray = this.fb.array([])
    return this.fb.group({
      name : this.fb.control<string>("" , [Validators.required]),
      phone : this.fb.control<string>("" , [Validators.required]),
      orderItems : this.itemArray
    })
  }

  ngOnInit(): void {
      this.orderform = this.createForm()
  }

  processform(){
    console.log(this.orderform.value) 
    this.ngOnInit()
  }

  // orderitem 
  createOrderItem(): FormGroup{
    return this.fb.group({
      item : this.fb.control<string>('apple' , [Validators.required]),
      quantity : this.fb.control<number>(1 , [Validators.required])
    })
  }

  addItem(){
    let orderItem = this.createOrderItem()
    this.itemArray.push(orderItem)
  }

  deleteItem(idx : number){
    this.itemArray.removeAt(idx)

  }

}
