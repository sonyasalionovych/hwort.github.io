import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateProduct } from './product/create-product.product';
import { ProductsService } from './service/product.service';
import { Product} from './interface.product';

@Controller('posts')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    async create(@Body() createProduct: CreateProduct) {
        this.productsService.create(createProduct);
    }

    @Get()
    async findAll(): Promise<ProductInterface[]> {
        return this.productsService.findAll();
    }
}