import moment from "moment";
const Hashids = require("hashids").default;

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

const dateStamp = moment().format("YYYY-MM-DD");
const hashids = new Hashids(
  dateStamp,
  10,
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
);

const getId = (hash) => {
  return hashids.decode(hash)[0];
};

const getHash = (id) => {
  return hashids.encode(id);
};
export { getPageParams, getHash, getId };
