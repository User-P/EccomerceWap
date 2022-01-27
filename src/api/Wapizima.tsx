import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = Config.URL_BASE;

const API = axios.create({baseURL});

API.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers!.Authorization = token;
  }
  return config;
});

export default API;
