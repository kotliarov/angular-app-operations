import { Address } from './address';

export class Lab {
  constructor(
    public id: number,
    public description: string,
    public address: Address,
    public version: number // document version
  ) {
  }
};
