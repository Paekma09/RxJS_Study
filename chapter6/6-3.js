/* concat 연산자의 사용 예 */
const { timer, concat } = require('rxjs');
const { map } = require('rxjs/operators');

const req1$ = timer(Math.floor(Math.random() * 2000)).pipe(map(value => 'req1'));
const req2$ = timer(Math.floor(Math.random() * 1000)).pipe(map(value => 'req2'));
const req3$ = timer(Math.floor(Math.random() * 1500)).pipe(map(value => 'req3'));

concat(req1$, req2$, req3$).subscribe(req => console.log(`response from ${req}`));

/*
* 위의 코드는 아래 코드와 동하게 동작한다.
* merge(req1$, req2$, req3$, 1).subscribe(req => console.log(`response from ${req}`));
* */