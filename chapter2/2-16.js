/* 위 코드의 동작 방식 설명 */
//subscribe 호출 시 toArray에서 필요한 array 생성
const array = [];

//observableCreated 안 for 문에서 observer.next(arr[i]) 를 호출 할 때
const aInput = arr[i];

//observableCreated 안 함수에서 사용하는 시작 옵저저
observerA.next(aInput);
const bInput = aInput * 2;
observerB.next(bInput);
const cInput = bInput + 1;
observerC.next(cInput);
const dInput = cInput * 3;
observerD.next(dInput);
array.put(dInput);

//observableCreated 안에서 observer.complete()을 호출할 때, toArray()에서 실행되는 동작
//subscribe 안에 있는 마지막 옵저버이기도 하다.
observerE.next(array);