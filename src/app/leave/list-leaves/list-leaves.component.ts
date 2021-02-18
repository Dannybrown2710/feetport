import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave.model';

@Component({
  selector: 'app-list-leaves',
  templateUrl: './list-leaves.component.html',
  styleUrls: ['./list-leaves.component.css']
})
export class ListLeavesComponent implements OnInit {

  constructor() { }
  leaves!: Leave[]
  ngOnInit(): void {
    this.leaves = [{code:'SICK',is_carry_forward:false,is_proof_required:true,priority:1,purpose:["Sick"],title:"Sick Leave"},
    {code:'CASUAL',is_carry_forward:false,is_proof_required:true,priority:1,purpose:["Casual"],title:"Casual Leave"}]
  }

}
