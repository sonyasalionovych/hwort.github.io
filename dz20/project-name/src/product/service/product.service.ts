import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';

import { Post } from './interfaces/post.interface';
import { CreatePostDto } from './product/create-product.product';
import { POST_MODEL_PROVIDER } from '../constants';

@Component()
export class ProductsService {
    constructor(
        @Inject(POST_MODEL_PROVIDER) private readonly prroductModel: Model<Product>) { }

    async create(createProduct: CreateProduct): Promise<Product> {
        const createdProduct = new this.productModel(createProduct);
        return await createdProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }
}