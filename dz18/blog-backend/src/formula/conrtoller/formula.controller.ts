import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FormulaService } from '../services/formula.service';
import { Student } from '../schemas/formula.schema';

@Controller('formula')
export class FormulaController {
  constructor(
    public formulaService: FormulaService
  ){}
  @Get('/formula')
  async getFormula(@Body() body: Formula ) {
    const res = await this.formulaService.createFormula(body);
    console.log('RESULT', { ...res });
    return res;
  }

  @Post('/new')
  async creatObj(@Param() iParameters:IParameters ) {
    return 'Add new object';
  }
  @DELETE(':id')
  remove(@Param('id') id : string){
    return `Delte by ${id}`;
  }
}
