/* AsyncScheduler 의 액션 생성 */
import {AsyncScheduler} from "rxjs/internal/scheduler/AsyncScheduler";
import {AsyncAction} from "rxjs/internal/scheduler/AsyncAction";

export const async = new AsyncScheduler(AsyncAction);