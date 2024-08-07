/* publishLast 연산자의 구현 코드 */
import {multicast} from "rxjs/operators";
import {AsyncSubject} from "rxjs";

export function publishLast() {
  return (source) => multicast(new AsyncSubject())(source);
}