import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';
import { MatDialog } from '@angular/material';
import { Test } from '../test.model';
import { AptService } from '../../services/apt.service';
import {ConfirmDialogModel, ConfirmDialogComponent} from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tests-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  test = new BehaviorSubject<Test>(null);
  test$ = this.test.asObservable();
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: AptService,
              private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.route);
    //this.getDetails(this.route.snapshot.params['id']);

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.api.getTest(+params.get('id')))
    ).subscribe(x => this.test.next(x));    
  }

//  getDetails(id: any) {
//    this.loadingSubject.next(true);
//    this.api.getTest(id)
//    .subscribe(
//      (data: Test) => this.test$.next(data),
//      undefined,
//      () => this.loadingSubject.next(false)
//    );
//  }

  onEdit(): void {
    console.log('onEdit');
    this.router.navigateByUrl(`tests/${this.test.value.id}/edit`);
  }

  onDelete(): void {
    const message = `Proceed with removal of ${this.test.value.accession} Test?`;
    const dialogData = new ConfirmDialogModel("Confirm Delete", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {maxWidth: "400px", data: dialogData});
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.doDelete();
      }
     });
  }

  doDelete(): void {
    console.log(`Deleting ${this.test.value.accession}`);

    this.loadingSubject.next(true);
    this.api.deleteTest(this.test.value)
    .subscribe(
      (data: Test) => {
        if ( data.version === this.test.value.version) {
          console.log(`Document deleted ${data}`);
        }
        else {
          console.log(`Operation cancelled: newer version of document exists ${data}`);
        }
      },
      undefined,
      () => this.loadingSubject.next(false)
    );
  }

  onBack(): void {
    this.router.navigate(["tests"]);
  }
}
