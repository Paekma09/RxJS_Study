/* defaultIfEmpty 연산자의 구현 코드 일부 */
// _next(value) {
//   this.isEmpty = false;
//   this.destination.next(value);
// }
//
// _complete() {
//   if (this.isEmpty) {
//     this.destination.next(this.defaultValue);
//   }
//   this.destination.complete();
// }