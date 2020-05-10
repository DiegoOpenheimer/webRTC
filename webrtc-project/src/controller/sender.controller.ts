import { Controller, Get, Res } from "@nestjs/common";
import { Response } from 'express';

@Controller("sender")
export class SenderController {

  @Get()
  public sender(@Res() response: Response) {
    return response.render("send");
  }

}