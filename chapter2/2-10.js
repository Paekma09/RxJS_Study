/* 생성 함수와 파이퍼블 연산자를 연결해 사용하기 */
const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');

range(1, 10).pipe(
  filter(function (value) {
    return value % 2 === 0;
  }),
  map(function (value) {
    return value + 1;
  })
);