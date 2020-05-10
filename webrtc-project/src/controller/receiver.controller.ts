import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";


@Controller('receiver')
export class ReceiverController {

  @Get()
  public receiver(@Res() response: Response): void {
    response.render('receive')
  }

}