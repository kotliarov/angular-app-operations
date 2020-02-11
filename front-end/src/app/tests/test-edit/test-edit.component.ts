import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test.model';
import { AptService } from '../../services/apt.service';

@Component({
  selector: 'app-tests-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {
  private doc: Test;
  docForm: FormGroup = new FormGroup(
  {
    'accession': new FormControl(),
    'num_samples': new FormControl(),
    'ship_date': new FormControl(),
    'test_date': new FormControl(),
    'review_date': new FormControl()
  });


  constructor(private route: ActivatedRoute, private router: Router, private api: AptService) { }

  ngOnInit() {
    this.getDetails(this.route.snapshot.params['id']);
  }

  getDetails(id: any) {
    this.api.getTest(id)
    .subscribe(
      (data: Test) => {
        this.doc = data;
        this.docForm.get('accession').setValue(this.doc.accession);
        this.docForm.get('num_samples').setValue(this.doc.num_samples);
        this.docForm.get('ship_date').setValue(formatDate(this.doc.ship_date, "yyyy-MM-dd", "en-US"));
        this.docForm.get('test_date').setValue(formatDate(this.doc.test_date, "yyyy-MM-dd", "en-US"));
        this.docForm.get('review_date').setValue(formatDate(this.doc.review_date, "yyyy-MM-dd", "en-US"));
      },
    );
  }

}
//https://stackblitz.com/edit/example-angular-material-reactive-form?file=app%2Fapp.component.html
