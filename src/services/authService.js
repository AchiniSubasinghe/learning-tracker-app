import api from '../utils/api'

const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
};

const authService = {
  login,
};

export default authService;

