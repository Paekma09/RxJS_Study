/* AsyncScheduler 의 상속 예 */
const { asyncScheduler } = require('rxjs');

asyncScheduler.schedule(function work(value) {
  value = value || 0;
  console.log('value: ' + value);
  const selfAction = this;
  selfAction.schedule(value + 1, 1000);
}, 1000);