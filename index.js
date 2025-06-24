var id = 7000000;
var count = 0;

let button = document.querySelector(".startButton");
let ok = document.querySelector(".ok");
let errorOut = document.querySelector(".error");
let countOut = document.querySelector(".tryCount");
let startId = document.querySelector(".startId");

startId.addEventListener("input", () => {
  id = Number(startId.value);
  console.log("start id", id);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchLastId() {
  while (true) {
    try {
      const response = await fetch(
        `https://serverforfetching.onrender.com/beer/${id}`
      );
      const html = await response.text();

      const notFound =
        html.includes(
          "We tried looking everywhere, and we couldn't find it."
        ) || html.includes("This page cannot be found.");

      if (notFound) {
        errorOut.textContent = `ID ${id} не найден`;
        ok.textContent = "";
        count++;
        countOut.textContent = count;
        id--;
        await sleep(5000); // 💤 пауза 5 секунд
      } else {
        ok.textContent = `ID ${id} найден!`;
        errorOut.textContent = "";
        break; // выходим из цикла
      }
    } catch (error) {
      console.log(error);
      break;
    }
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetchLastId();
});
