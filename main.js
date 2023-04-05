import Card from "./components/Card.js"; 
import { app, spinner } from "./components/elements.js";

spinner.innerHTML = `<div class="text-center">
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>`;

// Here we do the consumption of the promise without async-await

// fetch("data.json")
//   .then((response) => {
//     if (!response.ok) {
//         throw ({ok: false, message:"Error 404"})
//     }
//     return response.json();
//   })
//   .then((responsedata) => {
//     responsedata.forEach((item) => {
//       app.innerHTML += Card(item);
//     });
//   })
//   .catch((err) => console.log(err))
//   .finally(() => (spinner.innerHTML = ""));

// Here we do the consumption of the promise with async-await (Modern method)

async function getGames() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw { ok: false, message: "Error 404" };
    }
    const responseData = await response.json();
    responseData.forEach((item) => {
      app.innerHTML += Card(item);
    });
  } catch (err) {
    console.log(err);
  } finally {
    spinner.innerHTML = "";
  }
}

getGames();

