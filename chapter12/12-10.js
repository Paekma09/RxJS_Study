/* publishBehavior 연산자의 구현 코드 */
import {BehaviorSubject} from "rxjs";
import {multicast} from "rxjs/operators";

export function publishBehavior(value) {
  return (source) => multicast(new BehaviorSubject(value))(source);
}