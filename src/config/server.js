import { create } from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const server = create({
  baseURL: SERVER_URL,
});

export { server };
