function makeDelayHandler(callback, delay = 800) {
  let lastTimestamp = undefined;
  return function (args) {
    let id = setTimeout(() => callback && callback(args), delay);
    const nowTimestamp = Date.now();
    console.log(nowTimestamp - lastTimestamp);
    if (lastTimestamp && nowTimestamp - lastTimestamp < delay) {
      clearTimeout(id);
      console.log('clear');
    }
    lastTimestamp = nowTimestamp;
  };
}

export default makeDelayHandler;
