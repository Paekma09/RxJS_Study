/* 인자 없는 count 연산자의 사용 예 */
const { range } = require('rxjs');
const { count } = require('rxjs/operators');

range(1, 20).pipe(count())
  .subscribe(result => console.log(`result: ${result}`));