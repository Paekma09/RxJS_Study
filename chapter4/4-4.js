/* 조건이 없는 last 연산자 */
const { range } = require('rxjs');
const { last } = require('rxjs/operators');

range(1, 10).pipe(last())
  .subscribe(x => console.log(`result: ${x}`));