const video = document.querySelector('.player__video');
const button = document.querySelector('.player__button');
const ranges = document.querySelectorAll('.player__slider');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const jumpButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  button.textContent = video.paused ? '❚ ❚' : '►';
  video[method]();
}

function changeValue() {
  video[this.name] = this.value;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
button.addEventListener('click', togglePlay);
ranges.forEach(input => input.addEventListener('input', changeValue));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
jumpButtons.forEach(btn => btn.addEventListener('click', skip));