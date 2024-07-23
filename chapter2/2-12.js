/* subscribe 함수의 연산자 동작 실행 부분 */
const {toSubscriber} = require("rxjs/internal-compatibility");

const sink = toSubscriber(observerOrNext, error, complete);

if (operator) {
  operator.call(sink, this.source);
} else {
  sink.add(this._trySubscribe(sink));
}