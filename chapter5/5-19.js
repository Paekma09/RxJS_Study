/* scan 연산자의 초기값을 0로 설정한 예 */
const { range } = require('rxjs');
const { scan } = require('rxjs/operators');

range(0, 3).pipe(
  scan((accumulation, currentValue) => {
    console.log(`accumulation: ${accumulation}, currentValue: ${currentValue}`);
    return accumulation + currentValue;
  }, 0)
).subscribe(result => console.log(`result: ${result}`));