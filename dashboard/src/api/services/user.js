import { apiEndPoint, createAPI } from "../handlers";

const getAllUsers = async () => {
  const { data } = await createAPI.get(apiEndPoint?.users);
  return data;
};
const create_user = async (payload) => {
  const { data } = await createAPI.post(apiEndPoint.users, payload);
  return data;
};

const getUserById = async (id) => {
  const { data } = await createAPI.get(apiEndPoint.userById(id));
  return data;
};

const login_user = async (payload) => {
  const { data } = await createAPI.post(apiEndPoint.login, payload);
  return data;
};

const update_user = async (value, id) => {
  const { data } = await createAPI.patch(apiEndPoint.userById(id), value);
  return data;
};

const delete_user = async (id) => {
  const { data } = await createAPI.delete(apiEndPoint.userById(id));
  return data;
};
export {
  getAllUsers,
  create_user,
  login_user,
  update_user,
  getUserById,
  delete_user,
};
