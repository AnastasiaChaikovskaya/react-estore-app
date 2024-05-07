export const getCountOfPages = (count: number) => {
  const pagesCount = [];

  for (let i = 1; i < count; i++) {
    pagesCount.push(i);
  }

  return pagesCount;
};
