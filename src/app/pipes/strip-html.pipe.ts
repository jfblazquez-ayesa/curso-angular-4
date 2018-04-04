import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/<(?:.|\n)*?>/gm,'');
  }

}
