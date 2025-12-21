import { createContext, useState, useEffect } from 'react';
import { getMe, login as loginApi, logout as logoutApi } from '../api/authApi';

export const AuthContext = createContext();

const resolveUser = (payload) => payload?.data?.user ?? payload?.user ?? payload?.data ?? payload;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data } = await getMe();
        setUser(resolveUser(data));
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async (credentials) => {
    const { data } = await loginApi(credentials);
    const resolvedUser = resolveUser(data);
    setUser(resolvedUser);
    return resolvedUser;
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
  };

  const refresh = async () => {
    try {
      const { data } = await getMe();
      setUser(resolveUser(data));
    } catch (err) {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, logout, refresh }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
