import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from '../test.model';
import { AptService } from '../../services/apt.service';
import { debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import { merge, fromEvent }  from 'rxjs';
import { TestsDataSource } from '../../services/tests.datasource';

@Component({
  selector: 'app-tests',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit, AfterViewInit {

  dataSource: TestsDataSource;

  displayedColumns = ['accession', 'num_samples', 'sample', 'lab'];

  @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort: MatSort;


  constructor(private aptService: AptService, private router: Router) {
  }

  ngOnInit() {
    this.dataSource = new TestsDataSource(this.aptService);
    this.dataSource.loadTests('', 'accession', 'asc', 0, 10);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .subscribe(() => {
        this.loadTestsPage();
      });
  }

  loadTestsPage() {
    this.dataSource.loadTests('', this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
  }

  onDetail(item: Test): void {
    console.log(item);
    this.router.navigate(['/tests', item.id]);
  }

  onNew(): void {
    console.log('onNew');
    this.router.navigate(['/tests/add']);
  }
}
