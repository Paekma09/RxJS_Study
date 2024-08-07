/* QueueScheduler 의 구현 코드 일부 */
// AsyncScheduler 를 상속받을 뿐 구현은 없음
import {AsyncScheduler} from "rxjs/internal/scheduler/AsyncScheduler";
export class QueueScheduler extends AsyncScheduler { }