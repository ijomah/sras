var axios = require("axios").default;

axios.interceptors.request.use(
      (config: { headers: { Authorization: string; }; }) => {
        // Do something before request is sent
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );