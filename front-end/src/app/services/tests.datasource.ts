import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Test } from '../tests/test.model';
import { AptService } from '../services/apt.service';
import { catchError, finalize } from 'rxjs/operators';

export class TestsDataSource implements DataSource<Test> {
  private testsSubject = new BehaviorSubject<Test[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private resultsLength = new BehaviorSubject<number>(0);

  public loading$ = this.loadingSubject.asObservable();
  public resultsLength$ = this.resultsLength.asObservable();

  constructor(private aptService: AptService) {
  }

  loadTests(filter: string, sort: string, sortDirection: string, pageIndex: number, pageSize: number) {
    this.loadingSubject.next(true);
    this.aptService.getTests(filter, sort, sortDirection, pageIndex, pageSize)
      .subscribe(
         (response) => {
          this.resultsLength.next(350);
          this.testsSubject.next(response);
        },
        undefined,
        () => this.loadingSubject.next(false)
      );
  }

  connect(collectionViewer: CollectionViewer): Observable<Test[]> {
    console.log("connecting Tests data source");
    return this.testsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.testsSubject.complete();
    this.loadingSubject.complete();
  }

}
