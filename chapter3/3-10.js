/* 이벤트를 옵저버블로 구독한 후 이벤트 객체를 사용해 값을 발행 */
const { fromEvent } = require('rxjs');

fromEvent(document.querySelector('#btn1'), 'click').subscribe(
  event => {
    const pTag = document.createElement('p');
    pTag.appendChild(
      document.createTextNode(`event.target.id: ${event.target.id} clicked`)
    );
    document.querySelector('#nextResults').appendChild(pTag);
  },
  err => {
    const pTag = document.createElement('p');
    pTag.appendChild(
      document.createTextNode(`error: ${err.message}`));
  },
  () => {
    const pTag = document.createElement('p');
    pTag.appendChild(
      document.createTextNode('completed'));
    document.querySelector('#completeResults').appendChild(pTag);
  }
);