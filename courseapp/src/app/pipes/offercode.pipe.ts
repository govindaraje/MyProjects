import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(value: any, arg: any): string {
    if(arg>18000)
      return "CODE20 (20% off)";
    else if(arg>15000)
      return "CODE 14 (14% off)";
    else if(arg>10000)
      return "OFFER8 (8% off)";
    else
      return "OFFERS (5% off)";
  }
}
