import axios from "axios";
class AllServices {
    constructor(baseURL,token) {
      this.baseURL = baseURL;
  this.token=token
    }
 
    async AddTodo(payload) {
        console.log("payload is ",payload)
        try {
            const response = await axios({
              url: `${this.baseURL}/GetTodos/Addtodo`,
              method: "post",
              data: JSON.stringify(payload),
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`, // Add JWT token to the Authorization header
            
              },
            });
        
            return response; // Return the data from the response
          } catch (error) {
            console.error('API call error:', error.response ? error.response.data : error.message);
            throw error; // Throw the error so it can be handled by the caller
          }
    }
  
    async Login(payload) {
       
        try {
            const response = await axios({
              url: `${this.baseURL}/UserAuth/signin`,
              method: "post",
              data: JSON.stringify(payload),
              headers: {
                'Content-Type': 'application/json',
              //  Authorization: `Bearer ${this.token}`, // Add JWT token to the Authorization header
            
              },
            });
        
            return response; // Return the data from the response
          } catch (error) {
            console.error('API call error:', error.response ? error.response.data : error.message);
            throw error; // Throw the error so it can be handled by the caller
          }
    }
  
  
    
  }
  
  // Export a single instance or class
  export default new AllServices('http://localhost:5000',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NzM1YzhiOWIwN2RjMzhmMDc5Y2I3M2MiLCJ1c2VybmFtZSI6IlVzZXIxMmFzIiwiZW1haWwiOiJVc2VyMTJAZ21haWwuY29tIiwiaWF0IjoxNzMxNzU5ODI3LCJleHAiOjE3MzE4NDYyMjd9.3ZLADjdFaJpKJhCIAyGA7WKwQq2mGEodRJPpEBJgjmQ");
  