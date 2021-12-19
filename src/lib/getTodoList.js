export const getTodoList = (url) => {
  return fetch(url).then((res) => res.json());
};
