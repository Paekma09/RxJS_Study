/* 프로미스의 에러 처리 방식 */
const promise = new Promise((resolve, reject) => {
  reject(new Error('에러 발생'));
});
promise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.error(error);
  }
);