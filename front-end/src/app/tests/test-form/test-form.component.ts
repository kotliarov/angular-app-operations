import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { Test } from '../test.model';
import { AptService } from '../../services/apt.service';

import { Lab } from '../../models/lab';
import { SampleType, TestType, Status } from '../../models/other';
import { Sample } from '../../models/sample';

import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  @Input('edit') edit: boolean;
  @Input('document') document: Test = <Test>{
    id: 0,
    accession: '',
    num_samples: 1,
    ship_date: new Date(),
    test_date: new Date(),
    review_date: new Date(),
    sample: null,
    lab: null,
    status: null,
    type: null,
    version: 0
 };
  @Output('documentEdited') documentEdited = new EventEmitter();

  labs: Lab[] = [
    new Lab(1, "Lab A", new Address("1 South St", "Alexandria", "22314", "VA", ""), 1)
  ];

  samples: Sample[] = [
    new Sample(1, "Sample A", 10, 40, "Lot A", true, new SampleType(1, "Sample Type A"), 1),
    new Sample(1, "Sample B", 0, 5, "Lot B", true, new SampleType(1, "Sample Type B"), 1),
  ];

  types: TestType[] = [
    new TestType(1, "Test Type A"),
    new TestType(2, "Test Type B"),
  ];

  statuses: Status[] = [
    new Status(1, "Status A"),
    new Status(2, "Status B"),   
  ];

  testForm = new FormGroup(  {
    'accession': new FormControl('', Validators.required),
    'numSamples': new FormControl('', Validators.required),
    'shipDate': new FormControl(),
    'testDate': new FormControl(),
    'reviewDate': new FormControl(),
    'selectedLab': new FormControl(),
    'selectedSample': new FormControl('', Validators.required),
    'selectedType': new FormControl('', Validators.required),
    'selectedStatus': new FormControl('', Validators.required),
  });

  constructor(private router: Router, private api: AptService) { }

  ngOnInit() {
  }

  save() {
    if (this.testForm.invalid) {
      return;
    }
    if (this.edit){
      this.api.saveTest(this.document).subscribe(res => { this.documentEdited.emit('');})
    }
    else {
      this.api.newTest(this.document).subscribe(res => {this.router.navigate(['/tests'])})
    }
  }

  cancel() {
    this.router.navigate(['/tests']);
  }
}
