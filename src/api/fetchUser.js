import axios from 'axios';
import { BASE_URL } from 'constants/api';

const customAxios = axios.create({
  baseURL: BASE_URL,
});

export const getUserInfo = async () => {
  const { data } = await customAxios.get('');
  return data;
};

export const addUser = async user => {
  const { data } = await customAxios.post('');
  return data;
};

export const deleteUser = async id => {
  const { data } = await customAxios.delete(`/${id}`);
  return data;
};
