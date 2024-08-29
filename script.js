//your JS code here. If required.
function randomDelayPromise(promiseName) {
  return new Promise(resolve => {
    const timeInSeconds = 1 + Math.random() * 2; // Random time between 1 and 3 seconds
    setTimeout(() => {
      resolve({ promiseName, timeInSeconds });
    }, timeInSeconds * 1000); // Convert to milliseconds
  });
}

// Create an array of promises
const promises = [
  randomDelayPromise('Promise 1'),
  randomDelayPromise('Promise 2'),
  randomDelayPromise('Promise 3'),
];

const startTime = performance.now();

Promise.all(promises).then((results) => {
  const totalTimeInSeconds = (performance.now() - startTime) / 1000;

  const output = document.getElementById('output');
  output.innerHTML = ''; // Clear the loading text

  // Insert individual promise results
  results.forEach((result, index) => {
    const row = output.insertRow();
    const promiseNameCell = row.insertCell(0);
    const timeInSecondsCell = row.insertCell(1);
    promiseNameCell.textContent = `Promise ${index + 1}`;
    timeInSecondsCell.textContent = result.timeInSeconds.toFixed(3);
  });

  // Insert total time
  const totalRow = output.insertRow();
  const totalCell = totalRow.insertCell(0);
  const totalTimeCell = totalRow.insertCell(1);
  totalCell.textContent = 'Total';
  totalTimeCell.textContent = totalTimeInSeconds.toFixed(3);
});