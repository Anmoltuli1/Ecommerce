import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzBhNGUxY2EwNzk0ZjMxZjhlMjg2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTQ4NDI4NCwiZXhwIjoxNjQxNzQzNDg0fQ.10EsOeNgqMS5GrJn5BiBMtZxzHtkkalo5ZmqiazKkO4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });