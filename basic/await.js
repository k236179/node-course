let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      resolve(result);
    }, timer);
  });
};

async function  main(){
    let resultBrush = await doWork('刷牙',3000);
    console.log(resultBrush);
    let resultEAT = await doWork('吃早餐',5000);
    console.log(resultEAT);
    let resultHW = await doWork('寫功課',3000);
    console.log(resultHW);
};
main();