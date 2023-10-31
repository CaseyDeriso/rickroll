const player = document.getElementById("video-player")
const playerContainer = document.getElementById("video-container")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function handlePlayer() {
  if (player.paused == false) {
      console.log(playerContainer.dataset.status)
      if (playerContainer.dataset.status == 'sleep') {
        playerContainer.dataset.status = 'playing'
      } else {
        console.log('beep boop')
      }
    } else {
      console.log(player.currentTime, player.paused, player.ended)
    }
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
      })
      .finally(fin => {
        handlePlayer(player);
        console.log('beep boop');
      }
      );
}, 500);