// Grab the DOM elements

let video = document.getElementById('video')
let play = document.getElementById('play')
let stop = document.getElementById('stop')
let timestamp = document.getElementById('timestamp')
let progress = document.getElementById('progress')


// Functions

function playPause() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}


function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause()
}


function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100


    let min = Math.floor(video.currentTime / 60);
    let sec = Math.floor(video.currentTime % 60)
    let minutes, seconds
    if (min < 10) {
        minutes = '0' + String(min)
    } else {
        minutes = String(min)
    }

    if (sec < 10) {
        seconds = '0' + String(sec)
    } else {
        seconds = String(sec)

    }
    timestamp.innerText = `${minutes}:${seconds}`
}

function setVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100
}

// Add the event listeners

video.addEventListener('click', playPause)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon);
play.addEventListener('click', playPause)
stop.addEventListener('click', stopVideo)
video.addEventListener('timeupdate', updateProgress)
progress.addEventListener('change', setVideoProgress)


console.log('connected')