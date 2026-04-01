
                        //soundloud links 
const tracks = [
    { title: "Meta-Irony", artist: "Giuseppe", url: "https://soundcloud.com/user-706471529/meta-irony-an-audio-collage-giuseppe-willemsen" },
    { title: "Ogenschouw", artist: "Giuseppe", url: "https://soundcloud.com/user-706471529/ogenschouw-collage" }
];
let currentTrackIndex = 0;

        //  de media spelen contoll ding
const widget = SC.Widget(document.getElementById('sc-player'));
const trackDisplay = document.getElementById('track-name');

function updatePlayer() {
    const track = tracks[currentTrackIndex];
    trackDisplay.innerText = track.title;
    widget.load(track.url, { auto_play: true });
}

function togglePlay() { widget.toggle(); }
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updatePlayer();
}
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    updatePlayer();
}

                //  ipod sleep map ding
const ipod = document.getElementById('ipod-group');
let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

ipod.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", dragEnd);

            //niet verwijderen! dat fakt alles
function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target === ipod || ipod.contains(e.target)) active = true;
}

function drag(e) {
    if (active) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, ipod);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px))`;
}

function dragEnd() { active = false; }

                    // menu burger style element
function toggleMenu() {
    const menu = document.getElementById('menu-overlay');
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// A. Loading State: Remove 'loading' class once content is ready
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});

// B. Interactive Beanie: Mouse Movement Parallax
const beanie = document.getElementById('beanie-container');
const body = document.querySelector('body');

window.addEventListener('mousemove', (e) => {
    // Calculate mouse position relative to center of screen
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;

    // Apply movement to the beanie
    if (window.innerWidth > 768) { // Only move on desktop
        beanie.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translate(${x}px, ${y}px)`;
    }
});

// C. Simple Burger Logic (Optional if you want more animation)
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('change', function() {
    if(this.checked) {
        console.log("Menu Opened");
    }
});