gsap.registerPlugin(ScrollTrigger);
function splitTextToSpans(selector) {
  document.querySelectorAll(selector).forEach(el => {
    const text = el.textContent.trim();
    const chars = [...text];
    el.innerHTML = chars.map(ch => `<span class="char">${ch}</span>`).join('');
  });
}

// Split hero text and about title into spans for letter animation
splitTextToSpans(".hero-text, .about-title, .services-title");
  gsap.from("header", {
    opacity: 0,
    y: -50,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.2
  });

  // Animate the logo to fade in and slide up slightly
  gsap.from("header .logo", {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power3.out",
    delay: 0.6
  });

  // Animate each nav link with stagger for a smooth sequence
  gsap.from("header nav a", {
    opacity: 0,
    y: -80,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out",
    delay: 0.8
  });

// Hero text letters animate from bottom with elastic ease
gsap.from(".hero-text .char", {
  y: 80,
  opacity: 0,
  stagger: 0.05,
  duration: 1.3,
  ease: "elastic.out(1, 0.6)",
  delay: 0.8
});

// About title letters animate on scroll into view
gsap.from(".about-title .char", {
  scrollTrigger: {
    trigger: ".about-title",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  },
  y: 60,
  opacity: 0,
  stagger: 0.04,
  duration: 1,
  ease: "back.out(1.4)"
});

// About paragraphs animate on scroll into view
gsap.utils.toArray(".about-text").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 40,
    scale: 0.95,
    duration: 0.8,
    delay: i * 0.2,
    ease: "power3.out"
  });
});

// Services title letter animation (like about title)
gsap.from(".services-title .char", {
  scrollTrigger: {
    trigger: ".services-title",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  },
  y: 60,
  opacity: 0,
  stagger: 0.04,
  duration: 1,
  ease: "back.out(1.4)"
});

// Services card animation on scroll (staggered)
gsap.utils.toArray(".service-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    delay: i * 0.2,
    ease: "power3.out"
  });
});

// Our Work section animation on scroll
gsap.utils.toArray(".work-item").forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.2,
      ease: "power3.out"
    });
  });
  gsap.utils.toArray(".blog-card").forEach((card, i) => {
    gsap.fromTo(card, 
      {
        opacity: 0,
        scale: 0.85,
        rotateX: 20,
        transformOrigin: "top center",
        y: 40
      },
      {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        y: 0,
        duration: 1.2,
        ease: "bounce.out",
        delay: i * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });
  
// Animate footer with staggered columns and glow
gsap.to(".footer-container", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out"
  });
  
  gsap.from(".footer-column", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 85%"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
  });