import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.css'],
  providers: [MessageService],
})
export class CreateLeaveComponent implements OnInit {
  purpose = new FormArray([this.createPurpose()], this.validatePurpose);
  leaveForm = this.fb.group({
    leavetype: new FormControl('', Validators.required),
    is_caary_forward: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    is_proof_required: new FormControl(false, Validators.required),
    purpose: this.purpose,
  });
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log(this.leaveForm.valid);
  }

  addPurpose() {
    //(this.leaveForm.get('purpose') as FormArray).push(this.createPurpose());
    this.purpose.push(new FormControl('', Validators.required));
    console.log(this.leaveForm.value);
  }
  createPurpose() {
    return new FormControl('', Validators.required);
  }
  removePurpose(index: number){
    this.purpose.removeAt(index);
  }
  validatePurpose(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && control.value.length <= 0) {
      return { purposeInvalid: true };
    }
    return null;
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'Form Submitted',
      sticky: true,
    });
    console.log(this.leaveForm.value);
  }
}
