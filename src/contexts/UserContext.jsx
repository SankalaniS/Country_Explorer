import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    const savedTimestamp = localStorage.getItem('sessionTimestamp');
<<<<<<< HEAD
    const allUsers = JSON.parse(localStorage.getItem('users')) || {};
    if (savedUser && savedTimestamp && Date.now() - savedTimestamp < SESSION_TIMEOUT) {
      const currentUser = allUsers[savedUser];
      return { username: savedUser, profileImage: currentUser?.profileImage || null };
=======
    if (savedUser && savedTimestamp && Date.now() - savedTimestamp < SESSION_TIMEOUT) {
      return { username: savedUser };
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
    }
    localStorage.removeItem('user');
    localStorage.removeItem('sessionTimestamp');
    return null;
  });

  const login = (username) => {
<<<<<<< HEAD
    const allUsers = JSON.parse(localStorage.getItem('users')) || {};
    const currentUser = allUsers[username];
    localStorage.setItem('user', username);
    localStorage.setItem('sessionTimestamp', Date.now());
    setUser({ username, profileImage: currentUser?.profileImage || null });
=======
    localStorage.setItem('user', username);
    localStorage.setItem('sessionTimestamp', Date.now());
    setUser({ username });
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('sessionTimestamp');
    setUser(null);
  };

<<<<<<< HEAD
  const updateProfileImage = (profileImage) => {
    setUser((prevUser) => ({ ...prevUser, profileImage }));
  };

=======
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
  useEffect(() => {
    const interval = setInterval(() => {
      const savedTimestamp = localStorage.getItem('sessionTimestamp');
      if (savedTimestamp && Date.now() - savedTimestamp >= SESSION_TIMEOUT) {
        logout();
      }
    }, 1000); // Check every second
    return () => clearInterval(interval);
  }, []);

  return (
<<<<<<< HEAD
    <UserContext.Provider value={{ user, login, logout, updateProfileImage }}>
=======
    <UserContext.Provider value={{ user, login, logout }}>
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
      {children}
    </UserContext.Provider>
  );
};

<<<<<<< HEAD
export const useUser = () => useContext(UserContext);
=======
export const useUser = () => useContext(UserContext);
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
