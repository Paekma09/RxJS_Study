/* interval 생성 함수를 이용하는 콜드 옵저버블 동작 */
const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

const intervalSource$ = interval(500).pipe(take(5));

const observerA = {
  next: x => console.log(`observerA: ${x}`),
  error: e => console.log(`observerA: ${e}`),
  complete: () => console.log('observerA: complete'),
};

const observerB = {
  next: x => console.log(`observerB: ${x}`),
  error: e => console.log(`observerB: ${e}`),
  complete: () => console.log('observerB: complete'),
};

intervalSource$.subscribe(observerA);
setTimeout(() => {
  intervalSource$.subscribe(observerB);
}, 2000);