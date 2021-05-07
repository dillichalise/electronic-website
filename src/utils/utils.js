const getPageParams = (page, pageSize) => {
  let params = {};
  if (page) {
    params["page"] = page - 1;
  }
  if (pageSize) {
    params["pageSize"] = pageSize;
  }
  return params;
};
export { getPageParams };
