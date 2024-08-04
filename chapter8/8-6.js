/* finalize 연산자를 사용한 예 */
const { range } = require("rxjs");
const { finalize } = require("rxjs/operators");

range(1, 3).pipe(
  finalize(() => console.log('FINALLY CALLBACK'))
).subscribe(
  x => console.log(`next: ${x}`),
  err => console.error(`error: ${err}`),
  () => console.log('COMPLETE')
);