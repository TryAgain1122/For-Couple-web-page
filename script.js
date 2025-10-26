function createBubbles () {
    const container = document.getElementById('bubbles');

    setInterval(() => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 80 + 40;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = (Math.random() * 4 + 6) + 's';
        bubble.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(bubble);
        setTimeout(() => bubble.remove(), 10000)
    }, 800)
}

createBubbles();

//Counter 
//yyyy-mm-dd
//depende na sayo kung anong moth kayo e set mo nalang dito 
const anniversaryDate = new Date('2025-01-01T00:00:00')

function updateCounter() {
    const now = new Date();
    const diff = now - anniversaryDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

//Random generate kada comma yung mga next message 
const messages = [
    "You make my heart skip a beat! 💓",
    "I'm the luckiest person in the world! 🍀",
    "You're my sunshine and my moonlight! ☀️🌙",
    "Every day with you is a blessing! 🙏",
    "You're sweeter than candy! 🍭",
    "My love for you grows every second! 🌱💕",
    "You complete me in every way! 🧩❤️",
    "Forever grateful for your love! 🌟"
    
]

const popup = document.getElementById('popup');
const messageText = document.getElementById('messageText');
const closePopup = document.getElementById('closePopup');

function showSweetMessage() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageText.textContent = randomMessage;
    popup.style.display = "flex";
}

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    console.log("click");
})

// Background Music
const bgMusic = document.getElementById("bgMusic");

//Para sa autoplay ng music pwede mo burahin to kung ayaw mo to tapos dun rin sa html code yung audio tag 
window.addEventListener("load", () => {
  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      console.log("Autoplay blocked. Waiting for user interaction...");
    });
  }
});

document.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
});

