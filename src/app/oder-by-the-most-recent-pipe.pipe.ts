import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oderByTheMostRecentPipe'
})
export class OderByTheMostRecentPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
