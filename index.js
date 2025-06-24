var id = 7000000;

let button = document.querySelector(".startButton");
let ok = document.querySelector(".ok");
let errorOut = document.querySelector(".error");
let countOut = document.querySelector(".tryCount");

async function fetchLastId() {
  try {
    const responce = await fetch(
      `https://serverforfetching.onrender.com/beer/${id}`
    );
    console.log(responce);
    const html = await responce.text();
    console.log(html);
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetchLastId();
});
