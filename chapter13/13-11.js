/* QueueAction 의 schedule 함수 구현 코드 */
// request, recycle 은 호출하지 않고 실행만 한다.
// schedule(state, delay = 0) {
//   if (delay > 0) {  // delay 값이 0보다 크면 AsapScheduler 를 상속받아 실행
//     return super.schedule(state, delay);
//   }
//   this.delay = delay;
//   this.state = state;
//   this.scheduler.flush(this); // AsyncScheduler 의 flush 메서드 호출
//   return this;
// }
// execute(state, delay) {
//   return (delay > 0 || this.closed) ?
//     super.execute(state, delay) :   // delay == 0 이고 !this.closed 이므로 실행함.
//     this._execute(state, delay);
// }