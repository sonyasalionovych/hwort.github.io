import { Module } from '@nestjs/common';
import { ProductsController } from './product/controller/product.controller';
import { ProductsService } from './product/service/product.service';
import { productsProviders } from './product/provider/product.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ProductsController],
    components: [
        ProductsService,
        ...productsProviders,
    ],
})
export class ProductsModule { }