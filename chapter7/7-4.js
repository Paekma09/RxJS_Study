/* 초기값 1을 설정해 여러 개 값을 발행하는 예 */
const { range } = require('rxjs');
const { reduce } = require('rxjs/operators');

range(1, 4).pipe(reduce((acc, cur) => acc + cur, 1))
  .subscribe(result => console.log(`result: ${result}`));