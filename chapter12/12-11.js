/* publishReplay 연산자의 구현 코드 */
import {ReplaySubject} from "rxjs";
import {multicast} from "rxjs/operators";

export function publishReplay(bufferSize,
                              windowTime,
                              selectorOrScheduler,
                              scheduler) {
  if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
    scheduler = selectorOrScheduler;
  }
  const selector = typeof selectorOrScheduler === 'function' ?
    selectorOrScheduler : undefined;
  const subject = new ReplaySubject(bufferSize, windowTime, scheduler);
  return (source) => multicast(() => subject, selector)(source);
}