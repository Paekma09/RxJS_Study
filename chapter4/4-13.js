/* skipUntil 연산자 구현 중 일부분 */
// class SkipUntilOperator {
//   // ...생략...
//   call(subscriber, source) {
//     return source.subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
//   }
// }
//
// class SkipUntilSubscriber extends OuterSubscriber {
//   constructor(destination, notifier) {
//     super(destination);
//     this.hasValue = false;
//     this.isInnerStopped = false;
//     this.add(subscribeToResult(this, notifier));
//   }
//   // ...생략...
// }