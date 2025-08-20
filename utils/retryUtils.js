// check comments
export const retryAction = async (actionFn, retries = 2, delay = 1000) => {
  let lastError;
  for (let i = 0; i <= retries; i++) {
    try {
      return await actionFn();
    } catch (err) {
      lastError = err;
      console.log(`Retry attempt ${i + 1} failed. Retrying in ${delay}ms...`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  throw lastError;
};
