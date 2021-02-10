// user Name and password need to validated here
const axios = require("axios");

exports.validateUserCredentials = (bodyData) => {
  console.log("from action to service", bodyData);
  return new Promise((resolve, reject) => {
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
          if (
            userDetailMatchingUsername.userName == bodyData.userName &&
            userDetailMatchingUsername.pwd == bodyData.password
          ) {
            resolve({ status: 200, username: bodyData.userName });
          } else {
            reject(404);
          }
        } else {
          reject(404);
        }
      })
      .catch((error) => {
        reject(404);
      });
  });
};

exports.validateUserPresence = (bodyData) => {
  return new Promise((resolve, reject) => {
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
          resolve({ status: 200, username: bodyData.userName });
        } else {
          reject(404);
        }
      })
      .catch((error) => {
        reject(404);
      });
  });
};

exports.updatePasswordCredentials = (bodyData) => {
  let modifiedData;
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:9000/userDetailsAPI`, {})
      .then((res) => {
        const data = res.data;
        for (const item in data.userList) {
          if (data.userList[item].type === bodyData.type) {
            for (const index in data.userList[item].userDetails) {
              if (
                data.userList[item].userDetails[index].userName ===
                bodyData.userName
              ) {
                console.log(data.userList[item].userDetails[index].pwd);
                data.userList[item].userDetails[index].pwd = bodyData.newPass;
                console.log(data.userList[item].userDetails[index].pwd);
              }
            }
          }
        }
        modifiedData = JSON.stringify(data);
        return modifiedData;
      })
      .then((modifiedData) => {
        axios
          .post("http://localhost:9000/userDetailsAPI", modifiedData)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        //   axios
        //   .post("https://jsonplaceholder.typicode.com/posts", modifiedData)
        //   .then((res) => console.log(res.data))
        //   .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
