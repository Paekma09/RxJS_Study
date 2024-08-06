/* publish 연산자의 구현 코드 일부 */
import {multicast} from "rxjs/operators";
import {Subject} from "rxjs";

export function publish(selector) {
  return selector ?
    multicast(() => new Subject(), selector) :
    multicast(new Subject());
}