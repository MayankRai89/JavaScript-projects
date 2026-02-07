const reels = [
  {
    username: "Aarav Sharma",
    likeCount: 1240,
    isLiked: false,
    commentCount: 120,
    caption: "Morning vibes 🌅",
    video: "reels/video1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 45,
    isFollowed: false,
  },
  {
    username: "Priya Verma",
    likeCount: 3420,
    isLiked: true,
    commentCount: 210,
    caption: "Travel makes life better ✈️",
    video: "reels/video2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 88,
    isFollowed: true,
  },
  {
    username: "Rohit Singh",
    likeCount: 980,
    isLiked: false,
    commentCount: 54,
    caption: "Gym grind 💪",
    video: "reels/video3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/13.jpg",
    shareCount: 22,
    isFollowed: false,
  },
  {
    username: "Neha Kapoor",
    likeCount: 5600,
    isLiked: true,
    commentCount: 430,
    caption: "Sunsets & peace 🌇",
    video: "reels/video4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/14.jpg",
    shareCount: 150,
    isFollowed: true,
  },
  {
    username: "Karan Mehta",
    likeCount: 2100,
    isLiked: false,
    commentCount: 95,
    caption: "Street photography 📸",
    video: "reels/video5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/15.jpg",
    shareCount: 60,
    isFollowed: false,
  },
  {
    username: "Ananya Gupta",
    likeCount: 4700,
    isLiked: true,
    commentCount: 380,
    caption: "Coffee & coding ☕",
    video: "reels/video6.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/16.jpg",
    shareCount: 120,
    isFollowed: true,
  },
  {
    username: "Vikram Patel",
    likeCount: 1500,
    isLiked: false,
    commentCount: 70,
    caption: "Weekend road trip 🚗",
    video: "reels/video7.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/17.jpg",
    shareCount: 40,
    isFollowed: false,
  },
  {
    username: "Vikram Patel",
    likeCount: 1500,
    isLiked: false,
    commentCount: 70,
    caption: "Mereko Goli Maarega 🚗",
    video: "reels/video-293.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/17.jpg",
    shareCount: 40,
    isFollowed: false,
  },
];
const container = document.querySelector(".all-reels");

// =====================
// RENDER REELS
// =====================
let html = "";

reels.forEach((elem, index) => {
  html += `
    <div class="reel">

      <video class="main-img" data-index="${index}" src="${elem.video}" loop muted playsinline></video>

      <div class="mute-btn">
        <i class="ri-volume-mute-line"></i>
      </div>

      <div class="bottom">
        <div class="user">
          <img src="${elem.userProfile}" />
          <h4>${elem.username}</h4>
          <button class="follow-btn" data-index="${index}">
            ${elem.isFollowed ? "Following" : "Follow"}
          </button>
        </div>
        <h3>${elem.caption}</h3>
      </div>

      <div class="right">
        <div class="icons">
          <h4 class="love" data-index="${index}">
            <i class="${elem.isLiked ? "ri-heart-fill" : "ri-heart-line"}"></i>
          </h4>
          <h6 class="like-count">${elem.likeCount}</h6>

          <h4><i class="ri-chat-3-fill"></i></h4>
          <h6>${elem.commentCount}</h6>

          <h4><i class="ri-share-forward-fill"></i></h4>
          <h6>${elem.shareCount}</h6>
        </div>
      </div>

    </div>
  `;
});

container.innerHTML = html;

// =====================
// USER INTERACTION FLAG
// (Needed for sound)
// =====================
let userInteracted = false;
document.addEventListener(
  "click",
  () => {
    userInteracted = true;
  },
  { once: true },
);

// =====================
// CLICK EVENTS
// =====================
container.addEventListener("click", function (e) {
  // LIKE
  const loveBtn = e.target.closest(".love");
  if (loveBtn) {
    const index = loveBtn.dataset.index;
    const icon = loveBtn.querySelector("i");
    const countElem = loveBtn.nextElementSibling;

    reels[index].isLiked = !reels[index].isLiked;
    reels[index].likeCount += reels[index].isLiked ? 1 : -1;

    icon.classList.toggle("ri-heart-fill");
    icon.classList.toggle("ri-heart-line");

    countElem.textContent = reels[index].likeCount;
  }

  // FOLLOW
  const followBtn = e.target.closest(".follow-btn");
  if (followBtn) {
    const index = followBtn.dataset.index;
    reels[index].isFollowed = !reels[index].isFollowed;
    followBtn.textContent = reels[index].isFollowed ? "Following" : "Follow";
  }

  // MANUAL MUTE
  const muteBtn = e.target.closest(".mute-btn");
  if (muteBtn) {
    const reel = muteBtn.closest(".reel");
    const video = reel.querySelector("video");
    const icon = muteBtn.querySelector("i");

    video.muted = !video.muted;

    icon.className = video.muted ? "ri-volume-mute-line" : "ri-volume-up-line";
  }
});

// =====================
// AUTO PLAY ON SCROLL
// =====================
const videos = document.querySelectorAll(".main-img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      const reel = video.closest(".reel");
      const icon = reel.querySelector(".mute-btn i");

      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        video.play().catch(() => {});

        if (userInteracted) {
          video.muted = false;
          icon.className = "ri-volume-up-line";
        } else {
          video.muted = true;
          icon.className = "ri-volume-mute-line";
        }
      } else {
        video.pause();
        video.muted = true;
        icon.className = "ri-volume-mute-line";
      }
    });
  },
  { threshold: 0.6 },
);

videos.forEach((video) => observer.observe(video));

// =====================
// START FIRST VIDEO
// =====================
if (videos[0]) {
  videos[0].play().catch(() => {});
}
