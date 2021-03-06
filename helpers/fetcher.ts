const fetcher = (
  ...args: [input: RequestInfo, init?: RequestInit | undefined]
) =>
  fetch(...args)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('An error occurred.');
      }
    });

export default fetcher;
