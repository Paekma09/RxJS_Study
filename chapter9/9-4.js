/* find 연산자의 사용 예 */
const { range } = require('rxjs');
const { find } = require('rxjs/operators');

const getRangeObservable = count => range(1, count);

function subscribeWithFindGreaterThan3(count) {
  getRangeObservable(count)
    .pipe(find(x => x > 3))
    .subscribe(value => console.log(`개수(count): ${count}, 값(value): ${value}`));
}

subscribeWithFindGreaterThan3(5);
subscribeWithFindGreaterThan3(1);