/* 스케줄러의 actions 배열 사용 방식 (AsapScheduler 의 flush 메서드) */
// import {AsyncScheduler} from "rxjs/internal/scheduler/AsyncScheduler";
//
// export class AsapScheduler extends AsyncScheduler {
//   flush(action) {
//     this.active = true;
//     this.scheduled = undefined;
//     const {actions} = this;
//     // 생략...
//     action = action || actions.shift();
//     do {
//       if (error = action.execute(action.state, action.delay)) {
//         break;
//       }
//     } while (++index < count && (action = actions.shift()));
//     // 생략...
//   }
// }