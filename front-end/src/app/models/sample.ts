import { SampleType } from './other';

export class Sample {
  constructor(
    public id: number,
    public description: string,
    public storage_temp_hi: number,
    public storage_temp_lo: number,
    public lot_number: string,
    public live: boolean,
    public type: SampleType,
    public version: number // document version
  ) {
  }
};
