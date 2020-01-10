// tslint:disable-next-line:no-var-requires
// const mongoose: any = require('mongoose');
import * as mongoose from 'mongoose';

export const objSchema: any = new mongoose.Schema({
   id: Number,
  validation: IValidation;
  default: String;
  name: String;
  label: String;
});

// tslint:disable-next-line:interface-name
export interface Obj {
   readonly id: number,
   readonly validation: IValidation;
   readonly default: string;
   readonly name: string;
   readonly label: string;
}

export interface ITicket extends Document, Obj {
}
