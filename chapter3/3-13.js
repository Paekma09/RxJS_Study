/* interval 함수 사용 예 */
const { interval } = require('rxjs');

interval(1000).subscribe(
  x => console.log(x)
);