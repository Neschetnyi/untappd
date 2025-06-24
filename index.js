var id = 7000000;

let button = document.querySelector(".startButton");
let ok = document.querySelector(".ok");
let errorOut = document.querySelector(".error");
let countOut = document.querySelector(".tryCount");
let strartId = document.querySelector(".strartId");

async function fetchLastId() {
  try {
    const responce = await fetch(
      `https://serverforfetching.onrender.com/beer/${id}`
    );
    console.log(responce);
    const html = await responce.text();
    console.log(html);
    if (
      html.includes("We tried looking everywhere, and we couldn't find it.") ||
      html.includes("This page cannot be found.")
    ) {
      errorOut.textContent = `ID ${id} не найден`;
    } else {
      ok.textContent = `ID ${id} найден!`;
    }
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetchLastId();
});
