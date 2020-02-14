import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test.model';
import { Lab } from '../../models/lab';
import { SampleType, TestType, Status } from '../../models/other';
import { Sample } from '../../models/sample';

import { AptService } from '../../services/apt.service';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-tests-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {
  private doc: Test;
 
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
    
  formGroup: FormGroup = new FormGroup(
  {
    'accession': new FormControl(),
    'numSamples': new FormControl(),
    'shipDate': new FormControl(),
    'testDate': new FormControl(),
    'reviewDate': new FormControl(),
    'selectedLab': new FormControl(),
    'selectedSample': new FormControl(),
    'selectedType': new FormControl(),
    'selectedStatus': new FormControl(),

  });


  constructor(private route: ActivatedRoute, private router: Router, private api: AptService) { }

  ngOnInit() {
    console.log(this.route);
    this.getDetails(this.route.snapshot.params['id']);
  }

  getDetails(id: any) {
    this.api.getTest(id)
    .subscribe(
      (data: Test) => {
        this.doc = data;
        this.formGroup.get("selectedType").setValue(1);//(this.doc.type.id);
        this.formGroup.get("selectedSample").setValue(1);//(this.doc.sample.id);
        this.formGroup.get("selectedLab").setValue(1);//(this.doc.lab.id);
        this.formGroup.get("selectedStatus").setValue(1);//(this.doc.status.id);
        this.formGroup.get('accession').setValue(this.doc.accession);
        this.formGroup.get('numSamples').setValue(this.doc.num_samples);
        this.formGroup.get('shipDate').setValue(this.doc.ship_date);
        this.formGroup.get('testDate').setValue(this.doc.test_date);
        this.formGroup.get('reviewDate').setValue(this.doc.review_date);
      },
    );
  }

}
//https://stackblitz.com/edit/example-angular-material-reactive-form?file=app%2Fapp.component.html
