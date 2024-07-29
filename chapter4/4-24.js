/* keySelector 와 compare 함수를 함계 사용한 예 */
const { of } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

of(
  { objkey: { a: 1, b: 20 } },
  { objkey: { a: 1, b: 20 } },
  { objkey: { a: 2, b: 40 } },
  { objkey: { a: 3, b: 70 } },
  { objkey: { a: 3, b: 70 } },
  { objkey: { a: 2, b: 40 } }
).pipe(distinctUntilChanged(
  (o1, o2) => o1.a === o2.a && o1.b === o2.b, // compare 함수
  x => x.objkey // keySelector 함수
)).subscribe(x => console.log(JSON.stringify(x)));