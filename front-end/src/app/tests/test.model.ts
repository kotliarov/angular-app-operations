import { Sample } from '../models/sample';
import { Lab } from '../models/lab';
import { Status, TestType } from '../models/other';

export class Test {
  constructor(
    public id: number,
    public accession: string,
    public num_samples: number,
    public ship_date: Date,
    public test_date: Date,
    public review_date: Date,
    public sample: Sample,
    public lab: Lab,
    public status: Status,
    public type: TestType,
    public version: number // document version
  ) {
  }
};
