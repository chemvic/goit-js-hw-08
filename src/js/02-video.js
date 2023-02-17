
import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const CURRENT_TIME = "videoplayer-current-time";
const player = new Player(iframe);
if (localStorage.getItem(CURRENT_TIME)) {
     player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)));

}

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay() {     
    player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));

}).catch(function(error) {
 localStorage.setItem(CURRENT_TIME, "0");
});
}
