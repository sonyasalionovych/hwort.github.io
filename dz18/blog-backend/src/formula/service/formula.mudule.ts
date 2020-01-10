import { Module } from '@nestjs/common';
import { FormulaController } from './controller/formula.controller';
import { DatabaseModule } from '../database/database.module';
import { formulaProvider } from './formula.provider';
import { FormulatService } from './services/formula.service';
import { TestClass } from './services/test.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FormulaController],
  providers: [FormulaService, TestClass, formulaProvider],
})
export class FormulaModule {}
