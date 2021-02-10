// user Name and password need to validated here
const axios = require("axios");

exports.validateUserCredentials = (bodyData) => {
  console.log('from action to service', bodyData);
  return new Promise((resolve, reject)=>{
    axios
    .get(`http://localhost:9000/userDetailsAPI`, {})
    .then((res) => {
      const data = res.data;
      const userListMatchingType = data.userList.filter(
        (userlist) => userlist.type === bodyData.type
      )[0];
      const userDetailMatchingUsername = userListMatchingType.userDetails.filter(
        (user) => user.userName === bodyData.userName
      )[0];
      if (userDetailMatchingUsername) {
        if ((userDetailMatchingUsername.userName == bodyData.userName) && (userDetailMatchingUsername.pwd == bodyData.password)) {
          resolve({status:200, username: bodyData.userName});
        } else {
          reject(404);
        }
      }
      else{
        reject(404)
      }
    })
    .catch((error) => {
      reject(404)
    });
  })
};
