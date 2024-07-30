/* reduce 연산자를 추가한 당첨 확률 예 */
const { interval } = require('rxjs');
const { take, groupBy, mergeMap, reduce, map } = require('rxjs/operators');

// 3. keySelector, elementSelector, reduce 사용
interval(500).pipe(
  take(10),
  groupBy(
    x => Math.random() < 0.7,
    x => `${x}-${x % 2 === 0 ? '짝수' : '홀수'}`
  ),
  mergeMap(
    groupByObservable =>
      groupByObservable.key === true ?
        groupByObservable.pipe(
          map(x => `당첨!! (${x})`),
          reduce((acc, curr) => [...acc, curr], [])
        ) :
        groupByObservable.pipe(
          map(x => `꽝!! (${x})`),
          reduce((acc, curr) => [...acc, curr], [])
        )
  )
).subscribe(result => console.log(result));