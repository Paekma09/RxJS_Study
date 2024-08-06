/* multicast 연산자의 서브젝트 구독 확인 */
const { interval, Subject } = require('rxjs');
const { take, multicast } = require('rxjs/operators');

const subject = new Subject();
const sourceObservable$ = interval(500).pipe(take(5));
const multi = sourceObservable$.pipe(multicast(() => subject));

// 다음 주적 처리한 코드를 사용해도 된다.
// const multi = sourceObservable$.pipe(multicast(subject));

// 첫번째 인자로 사용하는 팩토리 함수에서 리턴한 서브젝트를 구독하는 부분
const subscriberOne = multi.subscribe(val => console.log(val));
const subscriberTwo = multi.subscribe(val => console.log(val));

// 소스 옵저버블이 서브젝트를 구독하는 부분
subject.next(1);