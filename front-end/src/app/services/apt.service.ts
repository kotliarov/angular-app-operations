import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../tests/test.model';
import { map } from 'rxjs/operators';


@Injectable()
export class AptService
{
  constructor (private http: HttpClient) {
  }

  getTests(filter='', sort='', sortOrder='asc', pageNumber=0, pageSize=25): Observable<any>
  {
    return this.http.get<any>('/api/tests', {params: new HttpParams()
                                                      .set('filter', filter)
                                                      .set('_sort', sort)
                                                      .set('_order', sortOrder)
                                                      .set('_page', pageNumber.toString())
                                                      .set('_limit', pageSize.toString())}
     );
  }

  getTest(id: number): Observable<Test>
  {
    return this.http.get<Test>(`/api/tests/${id}`);
  }

  deleteTest(doc: Test): Observable<any>
  {
    return this.http.delete<Test>(`/api/tests/${doc.id}?_version=${doc.version}`);
  }

  saveTest(doc: Test): Observable<any> {
    return this.http.put<Test>('/api/tests/${doc.id}', doc)
  }

  newTest(doc: Test): Observable<any> {
    return this.http.post<Test>('/api/tests', doc);
  }
}
