const axios = require("axios");

const token = localStorage.getItem("token");
if (!token) {
  console.log("token");
  return (document.querySelector("body").innerHTML = `
  <h1>ERROR 403 FORBIDDEN</h1>
  `);
}
const verifyUser = async (token) => {
  try {
    const options = {
      method: "post",
      url: "http://localhost:3001/profil",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    rep = await axios(options);
    console.log(rep);
  } catch (err) {
    console.log(err.message);

    // return (document.querySelector("body").innerHTML = `
    // <h1>${err.message}</h1>
    // `);
  }
};

verifyUser(token);

const signOut = document.querySelector("#signOut");

signOut.addEventListener("click", (e) => {
  localStorage.removeItem("token");
  document.location.href = "http://localhost:1234/login.html";
});