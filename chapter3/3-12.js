/* range 함수 사용 예 */
const { range } = require('rxjs');

range(1, 5).subscribe(
  x => console.log(`range(1, 5): ${x}`),
  err => console.error(`error: ${err.message}`),
  () => console.log('completed')
);

range(2, 5).subscribe(
  x => console.log(`range(2, 5): ${x}`),
  err => console.error(`error: ${err.message}`),
  () => console.log('completed')
);