export const getPageCount = (limit: number, totalCount = 0) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (pagesCount: number) => {
  const pagesArray = [];
  for (let i = 0; i < pagesCount; i += 1) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
};
