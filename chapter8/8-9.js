/* toPromise 함수의 소스 옵저버블에서 에러가 발생한 예 */
const { interval } = require('rxjs');
const { take, tap } = require('rxjs/operators');

interval(100).pipe(
  take(10),
  tap(x => console.log(`interval tap ${x < 3 ? x : x.test()}`))
).toPromise().then(
  value => console.log(`프로미스 결과 ${value}`),
  reason => console.error(`프로미스 에러 ${reason}`)
);