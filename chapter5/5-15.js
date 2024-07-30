/* concatMap 의 구현 코드 일부분 */
import {mergeMap} from "rxjs/operators";

export function concatMap(project, resultSelector) {
  return mergeMap(project, resultSelector, 1);
}