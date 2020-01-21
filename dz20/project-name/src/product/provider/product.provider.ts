import { Connection } from 'mongoose';

import { ProductSchema } from './schema/product.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const productsProviders = [
    {
        provide: POST_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Post', ProductSchema),
        inject: [DB_PROVIDER],
    },
];