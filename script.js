console.log('I am here')

const player = document.getElementById("audioPlayer")
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// const play_after_pause = async () => {
//   await sleep(1000);
//   player.click()
//   console.log("Waited 1s and clicked");
//   await sleep(1000);
//   console.log('waited another second, playing')
//   player.play()
// };

const tryToPlay = setInterval(() => {
  player.play()
      .then(() => {
          clearInterval(tryToPlay);
      })
      .catch(error => {
          console.info('User has not interacted with document yet.');
      });
}, 500);