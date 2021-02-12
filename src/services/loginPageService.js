// user Name and password need to validated here
const axios = require("axios");

exports.validateUserCredentials = (bodyData) => {
  console.log("from action to service 'validateUserCredentials'", bodyData);
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/data`, {})
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
            userDetailMatchingUsername.userName === bodyData.userName &&
            userDetailMatchingUsername.pwd === bodyData.password
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
  console.log("from action to service 'validateUserPresence'", bodyData);
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/data`, {})
      .then((res) => {
        const data = res.data;
        const userListMatchingType = data.userList.filter(
          (userlist) => userlist.type === bodyData.type
        )[0];
        const userDetailMatchingUsername = userListMatchingType.userDetails.filter(
          (user) => user.userName === bodyData.userName
        )[0];
        if (userDetailMatchingUsername !== undefined) {
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
      .get(`http://localhost:3000/data`, {})
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
        console.log(modifiedData);
        fetch("http://localhost:3000/data", {
          method: "POST",
          body: modifiedData,
          headers: {
            "Content-type": "application/json",
          },
        }).then((response) => {
          console.log(response);
          resolve({ status: 200 });
        });
      })
      .catch((error) => {
        reject(404);
      });
  });
};
