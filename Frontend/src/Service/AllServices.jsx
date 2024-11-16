// apiService.js
class AllServices {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async AddTodo(endpoint, headers = {}) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        });
        return await response.json();
      } catch (error) {
        console.error('GET request error:', error);
        throw error;
      }
    }
  
    async post(endpoint, body, headers = {}) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify(body),
        });
        return await response.json();
      } catch (error) {
        console.error('POST request error:', error);
        throw error;
      }
    }
  
    async put(endpoint, body, headers = {}) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify(body),
        });
        return await response.json();
      } catch (error) {
        console.error('PUT request error:', error);
        throw error;
      }
    }
  
    async delete(endpoint, headers = {}) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        });
        return await response.json();
      } catch (error) {
        console.error('DELETE request error:', error);
        throw error;
      }
    }
  }
  
  // Export a single instance or class
  export default new AllServices('http://localhost:5000');
  