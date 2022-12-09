const {defineConfig} = require("cypress");
module.exports = {

  e2e: {
    env: {
    users: {     
      correct_user: {
        username: "standard_user",
        password: "secret_sauce", 
      },
      blocked_user: {
        username: "locked_out_user",
        password: "secret_sauce", 
      },
      bad_user: {
        username: "problem_user",
        password: "secret_sauce", 
      },
      glitch_user: {
        username: "performance_glitch_user",
        password: "secret_sauce", 
      }
    }
    },
    baseUrl: 'https://www.saucedemo.com/',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    
  }
};

