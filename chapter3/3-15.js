/* 두 번째 인자까지 설정한 timer 함수 예 */
const { timer } = require('rxjs');

timer(1000, 500).subscribe(
  x => console.log(`timer(1000, 500): ${x}`),
  err => console.error(`error: ${err.message}`),
  () => console.log('completed')
);