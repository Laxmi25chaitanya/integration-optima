// user Name and password need to validated here
const axios = require("axios");

exports.validateUserCredentials = (bodyData) => {
  axios
    .get(`http://localhost:9000/userDetailsAPI`, {})
    .then((res) => {
      console.log("Response from the JSON service", res);
      const status = res.status;
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
          console.log("Login Successfully!");
          return status;
        } else {
          return status;
        }
      } else {
        return status;
      }
      //filtering done here
    })
    .catch((error) => {
      console.log(error);
    });
  //   let data = fetch("http://localhost:9000/userDetailsAPI", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   }).then(function (response) {
  //     return response.json();
  //   });
  //   // .then(function (myJson) {
  //   //   console.log(myJson);
  //   // });
};
