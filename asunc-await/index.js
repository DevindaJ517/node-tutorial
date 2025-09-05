function delayFn(time) {
  return new Promise((resolve) =>setTimeout(resolve, time))
  };

  async function delayGreet(name) {
    await delayFn(2000);
    console.log(`Hello, ${name}!`);
  }

  delayGreet('Alice');
  delayGreet('Bob');