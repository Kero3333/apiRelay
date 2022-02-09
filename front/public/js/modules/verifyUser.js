const axios = require("axios");

// on vérifie l'identité de l'utilisateur

module.exports = async () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return (document.location.href = "http://localhost:1234/login.html");
  }
  token = token.replace(/"/g, "");
  try {
    const options = {
      method: "post",
      url: "http://localhost:3000/login/auth",
      headers: {
        "x-auth-token": token,
      },
    };
    const rep = await axios(options);
    return rep.data;
  } catch (err) {
    console.log(err.message);
    document.location.href = "http://localhost:1234/login.html";
  }
};
