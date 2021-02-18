import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.css'],
  providers: [MessageService]
})
export class CreateLeaveComponent implements OnInit {
  userform = this.fb.group({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    brand: new FormControl(''),
    city: new FormControl(''),
    description: new FormControl(''),
  });
  submitted: boolean = false;

  genders: SelectItem[] = [];

  description!: string;

  brands: string[] = [
    'Audi',
    'BMW',
    'Fiat',
    'Ford',
    'Honda',
    'Jaguar',
    'Mercedes',
    'Renault',
    'Volvo',
    'VW',
  ];

  filteredBrands: any[] = [];

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit() {

  }

  filterBrands(event: any) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      let brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredBrands.push(brand);
      }
    }
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'Form Submitted',
      sticky: true,
    });
  }

  get diagnostic() {
    return JSON.stringify(this.userform.value);
  }
}
