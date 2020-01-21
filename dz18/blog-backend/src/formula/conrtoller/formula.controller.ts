import { Controller, Get, Post, Body, Param , Put} from '@nestjs/common';
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
  async createObj(@Body() body: Formula) {
      return this.formulaService.createObj(body);

  }
  

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.formulaService.delete(id);
  }
   
  @Put(':id/update')
  async update(@Param('id') id, @Body() body: Formula): Promise<any> {
    body.id = Number(id);
    console.log('Update #' + body.id)
    return this.formulaService.update(body);
  }/*
  @Get(':id')
    findByParam(@Query('min') min){
      if(min && min > 0){
        return this.formulaService.createFormula(body);
     }
  }*/
    @Get(':id')
    findOne(@Param('id') id, @Query('min') min): Promis<any> {
      if(min >0){
        return this.formulaService.findOne(body);
      }
    }

}
