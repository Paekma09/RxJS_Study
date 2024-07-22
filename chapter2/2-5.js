/* 옵저버블 안 unsubscribe 함수 이용 */
const { Observable } = require('rxjs');

const observableCreated$ = Observable.create(function subscribe(observer) {
  // intervalId 자원 추척
  const intervalId = setInterval(function() {
    observer.next('hi');
  }, 1000);

  // intervalId 자원을 해제하고 재배치하는 방법을 제공
  return function unsubscribe() {
    clearInterval(intervalId);
  };
});