const resBtn = document.getElementById("reset-btn");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const vid = document.querySelector("video");

window.addEventListener("load", () => {
  playBtn.addEventListener("click", () => {
    vid
      .play()
      .then((x) => console.log(x))
      .catch((err) => console.log(err));
  });

  pauseBtn.addEventListener("click", () => {
    vid.pause();
  });
  resBtn.addEventListener("click", () => {
    vid.currentTime = "0";
    console.log(vid.currentTime);
  });
});
