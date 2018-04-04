import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args){
      let result: string = value;
      if(args.maxLength && !isNaN(args.maxLength) && result.length > args.maxLength){
        result = result.substring(0,args.maxLength);
      }
      if(args.ellipsis){
        result += '\u2026';
      }
      return result;
    }
    return value;
  }

}
