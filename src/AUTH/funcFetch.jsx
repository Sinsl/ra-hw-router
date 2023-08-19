
export const funcFetch = async (url, opts) => {
  const baseUrl = import.meta.env.VITE_URL + '/auth';
  const res = await fetch(baseUrl + url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    ...opts
  });
  return res;
}