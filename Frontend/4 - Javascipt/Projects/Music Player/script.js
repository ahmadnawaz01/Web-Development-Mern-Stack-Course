const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");
const volumeSlider = document.getElementById("volume");
const cover = document.getElementById("cover");

const songs = [
  { title: "NIVIRO - Uncharted  ", artist: "Artist 1", src: "song1.mp3", cover: "cover1.jpg" },
  { title: "On & ON", artist: "Artist 2", src: "song2.mp3", cover: "cover2.jpg" },
  { title: "Track 3", artist: "Artist 3", src: "song3.mp3", cover: "cover3.jpg" }
];

let songIndex = 0;
let isPlaying = false;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
}

function playSong() {
  isPlaying = true;
  audio.play();
  playBtn.textContent = "⏸";
  cover.style.animationPlayState = "running";
}
function pauseSong() {
  isPlaying = false;
  audio.pause();
  playBtn.textContent = "▶";
  cover.style.animationPlayState = "paused";
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}
function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);


audio.addEventListener("timeupdate", (e) => {
  const { duration, currentTime } = e.srcElement;
  if (duration) {
    const percent = (currentTime / duration) * 100;
    progress.style.width = `${percent}%`;
  }
});

progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

audio.addEventListener("ended", nextSong);

loadSong(songs[songIndex]);
