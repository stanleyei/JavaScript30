const video = document.querySelector('.player__video');
const button = document.querySelector('.player__button');
const ranges = document.querySelectorAll('.player__slider');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  button.textContent = video.paused ? '❚ ❚' : '►';
  video[method]();
}

function changeValue() {
  video[this.name] = this.value;
}

video.addEventListener('click', togglePlay);
button.addEventListener('click', togglePlay);
ranges.forEach(input => input.addEventListener('input', changeValue));