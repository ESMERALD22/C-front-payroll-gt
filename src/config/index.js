const config = {
  local: {
    /// local environment
        API_URL: 'https://c-backend-payroll-gt.onrender.com/api/v1',
  },
  test: {
    // test environment
    API_URL: '',
  },
  production: {
    // production environment
    API_URL: 'https://c-backend-payroll-gt.onrender.com/api/v1', 
  },
}

const nodeEnv = import.meta.env.VITE_NODE_ENV || 'local'
export default config[nodeEnv]
