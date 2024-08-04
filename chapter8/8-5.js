// /* finalize 연산자의 구현 코드 일부 */
// import {Subscription} from "rxjs";
//
// export function finalize(callback) {
//   return (source) => source.lift(new FinallyOperator(callback));
// }
//
// class FinallyOperator {
//   constructor(callback) {
//     this.callback = callback;
//   }
//   call(subscriber, source) {
//     return source.subscribe(new FinallySubscriber(subscriber, this.callback));
//   }
// }
//
// class FinallySubscriber {
//   constructor(destination, callback) {
//     super(destination);
//     this.add(new Subscription(callback));
//   }
// }