function func1() {
  console.log('target click #1');
}

function func2() {
  console.log('target click #2');
}

document.querySelector('#target').addEventListener('click', func1);
document.querySelector('#target').addEventListener('click', func2);

// 콜백 함수 하나를 구독 해제
document.querySelector('#target').removeEventListener('click', func1);

// 콜백 함수 모두 구독 해제
document.querySelector('#target').removeEventListener('click');