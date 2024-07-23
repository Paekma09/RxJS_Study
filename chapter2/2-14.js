/* 옵저버블을 생성하고 변환 연산자 적용 */
const { Observable } = require('rxjs');
const { map } = require('rxjs/operators');

const observableCreated$ = Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.complete();
});

observableCreated$.pipe(
  map(function (value) {
    return value * 2;
  })
).subscribe(function next(item) {
  console.log(item);
});

/* array.map 연산자 - 1 */
console.log([1, 2].map(function (value) {
  return value * 2;
}));
/* array.map 연산자 - 2 */
console.log([1, 2]
  .map(function (value) {
    return value * 2;
  })
  .map(function (value) {
    return value + 1;
  })
  .map(function (value) {
    return value * 3;
  })
);