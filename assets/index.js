import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector(`video`);
const player = new MediaPlayer({el:video});
const btn = document.querySelector(`button`);

btn.onclick = () => player.togglePlay();