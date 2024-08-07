/* share 연산자의 구현 코드 일부 */
import {multicast, refCount} from "rxjs/operators";
import {Subject} from "rxjs";

function shareSubjectFactory() {
  return new Subject();
}

export function share() {
  return (source) => refCount()(multicast(shareSubjectFactory)(source));
}