import MediaPlayer from './MediaPlayer.js';
import Autoplay from './plugins/Autoplay.js'

const video = document.querySelector(`video`);
const player = new MediaPlayer({el:video, plugins: [//new Autoplay()
]});

const btnplay = document.getElementById('play');
const btnmute = document.getElementById('mute');

btnplay.onclick = () => player.togglePlay();
btnmute.onclick = () => player.toggleMute();