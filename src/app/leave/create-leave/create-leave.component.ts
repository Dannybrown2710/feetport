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
  leaveForm = this.fb.group({
    leavetype: new FormControl('', Validators.required),
    is_caary_forward: new FormControl('', Validators.required),
    priority: new FormControl('',Validators.required),
    code: new FormControl('', Validators.required),
    is_proof_required: new  FormControl(false, Validators.required),
    purpose: new FormControl('', Validators.required)
    // lastname: new FormControl('', Validators.required),
    // password: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(6),
    // ]),
    // brand: new FormControl(''),
    // city: new FormControl(''),
    // description: new FormControl(''),
  });
  submitted: boolean = false;



  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log(this.leaveForm.valid)
  }

  // filterBrands(event: any) {
  //   this.filteredBrands = [];
  //   for (let i = 0; i < this.brands.length; i++) {
  //     let brand = this.brands[i];
  //     if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
  //       this.filteredBrands.push(brand);
  //     }
  //   }
  // }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'Form Submitted',
      sticky: true,
    });
    console.log(this.leaveForm.value)
  }

}
