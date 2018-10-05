import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipe implements PipeTransform {
  transform(value: any): string {
    let gender = '';
    if (value === '1') {
      gender = '男';
    } else if (value === '2') {
      gender = '女';
    }
    return gender;
  }
}

@Pipe({
  name: 'levelPipe'
})
export class LevelPipe implements  PipeTransform {
  transform(value: any, ...args: any[]): any {
    let level = '';
    switch (value) {
      case 0 : level = '普通会员'; break;
      case 1 : level = '琥珀'; break;
      case 2 : level = '蜜蜡'; break;
      case 3 : level = '欧珀'; break;
      case 4 : level = '红宝石'; break;
      case 5 : level = '翡翠'; break;
      case 6 : level = '钻石'; break;
      default: level = ''; break;
    }
    return level;
  }
}
