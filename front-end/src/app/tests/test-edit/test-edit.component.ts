import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tests-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {
  private docid: number;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route);
    this.docid = this.route.snapshot.params['id'];
  }
}
//https://stackblitz.com/edit/example-angular-material-reactive-form?file=app%2Fapp.component.html
