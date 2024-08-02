/* predicate 함수를 사용해 짝수만 카운트 */
const { range } = require('rxjs');
const { count } = require('rxjs/operators');

range(1, 7).pipe(count(x => x % 2 === 0))
  .subscribe(result => console.log(`result: ${result}`));