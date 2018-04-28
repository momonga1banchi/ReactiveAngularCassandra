import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  customers: Observable<Customer[]>;
  age: number;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.age = 0;
  }

  search() {
    this.customers = this.customerService.findCustomers(this.age);
  }

}
