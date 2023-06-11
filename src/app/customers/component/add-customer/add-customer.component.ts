import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit, OnChanges {

  @Input() isSubmitForm: any;
  @Output() resp = new EventEmitter<string>();

  customerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.customerForm  = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    const currentValue: boolean = changes['isSubmitForm'].currentValue
    if (currentValue) {
      this.submitForm()
    }
  }
  submitForm(){
    console.log('this.customerForm.invalid :>> ', this.customerForm.invalid);
    if (this.customerForm.invalid) {
      this.message.error('Please fill in all required fields')
      console.log('object :>> 22');
      this.resp.emit('error');
      return;
    }
    console.log("====> form ",this.customerForm.value);
    this.customerService.saveCustomer(this.customerForm.value).subscribe(response => {
      this.message.success('Customer added successfully')
      this.resp.emit('success')
    })
  }

}
