import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, replace: string, withThis: string): any {
    return value.replace(new RegExp(replace, 'g'), withThis);
  }

}
