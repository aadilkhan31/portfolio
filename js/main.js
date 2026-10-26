
const thumbnailGrid = document.getElementById("thumbnail-grid");

if (thumbnailGrid) {
  thumbnailGrid.innerHTML = thumbnails.map((thumbnail) => `
    <div class="group overflow-hidden rounded-lg bg-[#171717]">
      <img
        src="${thumbnail.image}"
        alt="Thumbnail design"
        loading="lazy"
        draggable="false"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        class="w-full aspect-video object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <!-- Fallback shown if the image fails to load -->
      <div
        class="aspect-video w-full items-center justify-center bg-[#171717]"
        style="display: none;"
        role="img"
        aria-label="Thumbnail image unavailable"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#525252"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="m21 15-5-5L5 21"/>
        </svg>
      </div>
    </div>
  `).join("");
}



const socialGrid = document.getElementById("social-media-grid");

if (socialGrid) {
  socialGrid.innerHTML = socialMediaPosts.map((post) => `
    <div class="group overflow-hidden rounded-lg bg-[#171717]">

<img
  src="${post.image}"
  alt="Social media design"
  loading="lazy"
  draggable="false"
  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
  class="block w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
/>


      <!-- Missing Image Fallback -->
      <div
        class="w-full items-center justify-center bg-[#171717]"
        style="aspect-ratio: ${post.ratio}; display: none;"
        role="img"
        aria-label="Social media image unavailable"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#525252"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="m21 15-5-5L5 21"/>
        </svg>
      </div>
    </div>
  `).join("");
}

const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
  const toggleBackToTop = () => {
    const isVisible = window.scrollY > 300;

    backToTopButton.classList.toggle("opacity-0", !isVisible);
    backToTopButton.classList.toggle("translate-y-4", !isVisible);
    backToTopButton.classList.toggle("opacity-100", isVisible);
    backToTopButton.classList.toggle("translate-y-0", isVisible);
    backToTopButton.classList.toggle("pointer-events-none", !isVisible);
  };

  window.addEventListener("scroll", toggleBackToTop, {
    passive: true
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  toggleBackToTop();
}
