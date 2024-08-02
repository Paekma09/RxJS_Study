/* reduce 연산자와 range 함수로 4개 값을 발행하는 예 */
const { range } = require('rxjs');
const { reduce } = require('rxjs/operators');

range(1, 4).pipe(reduce((acc, cur) => acc + cur))
  .subscribe(result => console.log(`result: ${result}`));