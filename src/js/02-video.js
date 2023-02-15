
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });



iframe.setAttribute("data-vimeo-id", "19231868");
const player = new Player("vimeo-player", {
    id: 19231868,
});
player.on('timeupdate', function (event) {
    const currentTime = event.timeupdate;
    console.log(`привет ${currentTime}`);cd 
});

// player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });