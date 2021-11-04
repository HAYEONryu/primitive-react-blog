import client from './client';

// 로그인
export const login = ({ adminId, pass }) =>

  client.post('/admin/login', { adminId, pass });
// 로그아웃
export const logout = ()=> {client.post('/api/auth/logout');};

// 회원가입
export const register = ({ adminId, pass }) =>
client.post('/admin', { adminId, pass });
  // client.post('/api/auth/register', { username, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');
