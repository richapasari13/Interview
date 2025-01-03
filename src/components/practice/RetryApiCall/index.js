const retryWithDelay = async (asyncFn, retry, delay = 1000) => {
  let attempt = 0;

  //   for (let i = 0; i < retry; i++) {
  try {
    return await asyncFn;
  } catch (error) {
    attempt++;
    if (attempt < retry) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    throw error;
  }
  //   }
};

const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};

test().catch(console.error);
