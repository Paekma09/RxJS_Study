/* subscribeOn 연산자의 구현 코드 일부 */
// const {SubscribeOnObservable} = require("rxjs/internal-compatibility");
// call(subscriber, source) {
//   return new SubscribeOnObservable(source, this.delay, this.scheduler)
//     .subscribe(subscriber);
// }