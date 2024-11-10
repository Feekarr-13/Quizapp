import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Membuat konteks untuk user
const UserContext = createContext();

// Hook untuk mengakses user context
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fungsi untuk login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Simpan di localStorage
  };

  // Fungsi untuk logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Hapus data dari localStorage
  };

  // Memeriksa apakah ada user yang login di localStorage saat pertama kali aplikasi dimuat
  const loadUserFromLocalStorage = () => {
    try {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser) {
        setUser(savedUser);
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
    }
  };

  // Memuat user saat aplikasi pertama kali dijalankan
  useEffect(() => {
    loadUserFromLocalStorage();
  }, []); // Hanya dipanggil sekali saat pertama kali aplikasi dimuat

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Validasi props menggunakan PropTypes
UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // Memastikan children adalah node React dan diperlukan
};
