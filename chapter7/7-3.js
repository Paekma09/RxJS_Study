/* 초기값이 있는 reduce 연산자를 사용하는 예 */
const { of } = require('rxjs');
const { reduce } = require('rxjs/operators');

of(0).pipe(reduce((acc, cur) => acc + cur, 1))
  .subscribe(result => console.log(`result: ${result}`));