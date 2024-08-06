/* 제한 없이 값을 전달하는 ReplaySubject 의 사용 예 */
const { ReplaySubject, interval } = require('rxjs');
const { take } = require('rxjs/operators');

const replaySubject = new ReplaySubject();
const interval$ = interval(500).pipe(take(8));
const observerA = {
  next: x => console.log(`observerA: ${x}`),
  error: e => console.error(`observerA: ${e}`),
  complete: () => console.log('observerA: complete')
};
const observerB = {
  next: x => console.log(`observerB: ${x}`),
  error: e => console.error(`observerB: ${e}`),
  complete: () => console.log('observerB: complete')
};

console.log('try replaySubject.subscribe(observerA)');
replaySubject.subscribe(observerA);

console.log('try interval$.subscribe(replaySubject)');
interval$.subscribe(replaySubject);

setTimeout(() => {
  console.log('try replaySubject.subscribe(observerB), setTimeout 2600ms');
  replaySubject.subscribe(observerB);
}, 2600)