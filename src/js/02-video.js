
import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

 player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay() {     
    player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));

}).catch(function(error) {
 localStorage.setItem("videoplayer-current-time", "0");
});
}
