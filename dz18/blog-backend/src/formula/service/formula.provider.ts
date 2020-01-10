import { Connection, Document, Model } from 'mongoose';
import { objSchema } from './schemas/formula.schema';

export const objProvider: any = 
  {
    provide: 'ObjModelToken',
    useFactory: (connection: Connection): Model<Document> => connection.model('FormulaModel', objSchema),
    inject: ['DbConnectionToken'],
  }
