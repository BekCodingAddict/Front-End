// const exampleAsycnchronous1 = () => {
//   console.log("Start");
//   console.log("Processing...");
//   console.log("End");
// };

// const exampleAsycnchronous2 = () => {
//   console.log("Start");

//   setTimeout(() => {
//     console.log("Processing...");
//   }, 2000); // Simulates a 2-second delay

//   console.log("End");
// };

// exampleAsycnchronous1();
// exampleAsycnchronous2();

// Common Asynchronous Patterns

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data loaded from fectData");
//   }, 1000);
// }

// fetchData((message) => {
//   console.log(message);
// });

//Promise
// const fetchData2 = new Promise((resolve, reject) => {
//   const randomNum = Math.floor(Math.random() * 10);
//   console.log(randomNum);

//   setTimeout(() => {
//     if (randomNum > 5) {
//       resolve({ resolveStatus: "Data Loaded!", randomNum });
//     } else reject("Error Occoured!");
//   }, 1000);
// });

// fetchData2
//   .then((message) => {
//     console.log(message.resolveStatus, message.randomNum);
//   })
//   .catch((message) => console.log(message));

// Async/Await:

async function fetchData3() {
  const randomNumber = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  console.log(randomNumber);
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber > 1000) resolve({ status: "Data loaded", randomNumber });
      else reject({ status: "Failed to load!", randomNumber });
    }, 1000);
  });
  console.log(data);
}

fetchData3().catch((data) => console.log(data.status, data.randomNumber));
