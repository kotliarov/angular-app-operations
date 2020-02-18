import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';
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
  @Input('edit') edit: boolean = false;
  @Input('docid') docid: number = 0;
  @Output('documentEdited') documentEdited = new EventEmitter();
  private document: Test = <Test>{
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
          version: 1
   };
  //public document$ = this.document.asObservable();

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
    'numSamples': new FormControl('', [Validators.required, Validators.min(1)]),
    'shipDate': new FormControl(),
    'testDate': new FormControl(),
    'reviewDate': new FormControl(),
    'selectedLab': new FormControl(),
    'selectedSample': new FormControl('', Validators.required),
    'selectedType': new FormControl('', Validators.required),
    'selectedStatus': new FormControl('', Validators.required),
  });

  constructor(private router: Router, private api: AptService) {}

  ngOnInit() {
    console.log({action: 'OnInit', edit: this.edit});
    if (this.edit) {
      this.getDetails(this.docid);
    }
  }

  getDetails(id: any) {
    this.api.getTest(id)
    .subscribe(
      (doc: Test) => {
        console.log({reply: doc});
        this.document = doc;
        this.testForm.get("selectedType").setValue(1);//(doc.type.id);
        this.testForm.get("selectedSample").setValue(1);//(doc.sample.id);
        this.testForm.get("selectedLab").setValue(1);//(doc.lab.id);
        this.testForm.get("selectedStatus").setValue(1);//(doc.status.id);
        this.testForm.get('numSamples').setValue(doc.num_samples);
        this.testForm.get('shipDate').setValue(doc.ship_date);
        this.testForm.get('testDate').setValue(doc.test_date);
        this.testForm.get('reviewDate').setValue(doc.review_date);
        console.log('shipDate=');
        console.log(doc.ship_date);
      },
    );
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
