import axios from 'axios';

const useAuth = () => {
  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      // Store the user's authentication token or session information
      localStorage.setItem('authToken', response.data.token);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  const logout = () => {
    // Remove the user's authentication token or session information
    localStorage.removeItem('authToken');
  };

  return { login, logout };
};

export {useAuth};