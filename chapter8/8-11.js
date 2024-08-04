/* node-fetch 라이브러리를 이용하는 timeout 연산자 사용 예 */
const { defer, timer} = require('rxjs');
const { timeout, map} = require('rxjs/operators');
const fetch = require('node-fetch');

const source$ = defer(() =>
  fetch(`https://httpbin.org/delay/${parseInt(Math.random() * 5, 10)}`)
    .then(x => x.json())
);

/*
const source$ = timer(Math.floor(Math.random() * 2000)).pipe(
  map(x => ({ value: x }))
);
*/

source$.pipe(timeout(2000)).subscribe(
  x => console.log(`${JSON.stringify(x)}`),
  err => {
    console.error(`ERROR: ${err}`);
    process.exit(1);
  }
);