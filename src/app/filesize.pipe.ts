import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(num: number, ...args: any[]): string{
    return num * 2 +'MB';
  }

}
