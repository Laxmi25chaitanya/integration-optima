// user Name and password need to validated here
const axios = require("axios");

exports.validateUserCredentials = (bodyData) => {
  console.log("from action to service 'validateUserCredentials'", bodyData);
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/data`, {})
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
            resolve({ status: 400, error: true });
          }
        } else {
          resolve({ status: 404, error: true });
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
      .get(`http://localhost:8080/data`, {})
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
          resolve({ status: 404, error: true });
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
      .get(`http://localhost:8080/data`, {})
      .then((res) => {
        const data = res.data;
        let index_type = 0;
        let index_user = 0;
        for (let item in data.userList) {
          if (data.userList[item].type === bodyData.type) {
            index_type = item;
            for (let index in data.userList[item].userDetails) {
              if (
                data.userList[item].userDetails[index].userName ===
                bodyData.userName
              ) {
                index_user = index;
              }
            }
          }
        }
        modifiedData = {
          password: bodyData.newPass,
          index_type: index_type,
          index_user: index_user,
        };
        return JSON.stringify(modifiedData);
      })
      .then((modifiedData) => {
        fetch("http://localhost:8080/changePassword", {
          method: "POST",
          body: modifiedData,
          headers: {
            "Content-type": "application/json",
          },
        }).then((response) => {
          resolve({ status: 200 });
        });
      })
      .catch((error) => {
        resolve({ status: 404 });
      });
  });
};

exports.validateMailPresence = (bodyData) => {
  console.log("from action to service 'validateMailPresence'", bodyData);
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/data`, {})
      .then((res) => {
        const data = res.data;
        const userListMatchingType = data.userList.filter(
          (userlist) => userlist.type === bodyData.type
        )[0];
        const userDetailMatchingMail = userListMatchingType.userDetails.filter(
          (user) => user.mailId === bodyData.mailId
        )[0];
        if (userDetailMatchingMail != undefined) {
          resolve({ status: 200, mail: bodyData.mailId });
        } else {
          resolve({ status: 404, error: true });
        }
      })
      .catch((error) => {
        reject(404);
      });
  });
};

exports.updateUserCredentials = (bodyData) => {
  let modifiedData;
  let flag = false;
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/data`, {})
      .then((res) => {
        const data = res.data;
        let index_type = 0;
        let index_mailId = 0;
        // for (let item in data.userList) {
        //   if (data.userList[item].type === bodyData.type) {
        //     index_type = item;
        //     for (let index in data.userList[item].userDetails) {
        //       if (
        //         data.userList[item].userDetails[index].mailId ===
        //         bodyData.mailId
        //       ) {
        //         index_mailId = index;
        //       }
        //     }
        //   }
        // }
        for (let item in data.userList) {
          if (data.userList[item].type === bodyData.type) {
            index_type = item;
            for (let index in data.userList[item].userDetails) {
              if (
                data.userList[item].userDetails[index].mailId ===
                bodyData.mailId
              ) {
                index_mailId = index;
                if (
                  data.userList[item].userDetails[index].userName ===
                  bodyData.newUserName
                ) {
                  console.log("Same username as previous!");
                  continue;
                }
              }
              if (
                data.userList[item].userDetails[index].userName ===
                bodyData.newUserName
              ) {
                console.log("Username already exists!");
                flag = true;
                break;
              }
            }
          }
        }
        if (flag) {
          resolve({ status: 401 });
        } else {
          modifiedData = {
            userName: bodyData.newUserName,
            index_type: index_type,
            index_mailId: index_mailId,
          };
          return JSON.stringify(modifiedData);
        }
      })
      .then((modifiedData) => {
        if (modifiedData) {
          fetch("http://localhost:8080/changeUsername", {
            method: "POST",
            body: modifiedData,
            headers: {
              "Content-type": "application/json",
            },
          }).then((response) => {
            resolve({ status: 200 });
          });
        } else {
          resolve({ status: 404 });
        }
      })
      .catch((error) => {
        resolve({ status: 404 });
      });
  });
};

exports.authenticateLogin = (bodyData) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
      .then((res) => res.json())
      .then((data) => {
        resolve({ status: 200, token: data });
      })
      .catch((error) => {
        reject(404);
      });
  });
};
