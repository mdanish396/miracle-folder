<template>
  <q-page>
        <!-- Startup Animation Overlay -->
        <div v-if="showLoader" class="startup-overlay">
          <div>
        <img src="src/assets/logo4.png" class="startup-image">
      </div>
        <h4>MIRACLE LAND</h4>
    </div>
    <!-- Top Bar as Overlay -->
    <q-header class="q-pa-md navigation-bar" elevated :class="{ visible: scrolled, transparent: !scrolled }">
      <q-toolbar class="toolbar">
        <!-- Left-aligned: Logo and Title -->
        <div class="logo-title-group" @click="refreshPage">
          <img src="src/assets/logo.png" alt="Logo" class="logo" />
          <q-toolbar-title class="toolbar-title">
            MIRACLE LAND
          </q-toolbar-title>
        </div>

        <!-- Right-aligned: Navigation Buttons -->
        <div class="nav-buttons">
          <q-btn flat label="About Us" />
          <q-btn flat label="DEVELOPMENT" />
          <q-btn flat label="Contact Us" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Hero Section -->
    <div class="hero-section">
      <video
        autoplay
        loop
        muted
        class="hero-video"
        playsinline
        preload="auto"
      >
        <source src="src/assets/landscape3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Text Overlay in Video (centered) -->
      <div class="video-text-overlay">
        <h1>MIRACLE FOR YOU FOREVER</h1>
      </div>

      <!-- Scroll Indicator (mouse animation, visible from start and fixed inside the background video) -->
      <div class="scroll-indicator">
        <video autoplay loop muted class="mouse-animation" playsinline>
          <source src="src/assets/mouse.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

  <!-- About Us Section -->
  <div class="about-us-section">
    <div class="content-container">
      <div class="text-content">
        <h2>Leaders In Development</h2>
        <p>
          Miracle Land has a 20+ year track record of developing innovative,
          landmark residential, commercial, and retail projects that span Malaysia's cities and beyond.
        </p>
        <p>
          Our company is privately owned and has delivered over 100 projects
          valued at over RM5 billion. We aim to create dynamic places where people live, work, and thrive.
        </p>
        <q-btn flat label="ABOUT US" class="btn-story"/>
      </div>
      <div class="image-container">
        <!-- Duplicate Gray-toned Image -->
        <div class="gray-image-layer">
          <img src="src/assets/building.png" alt="Building" class="building-image gray-tone" />
        </div>

        <!-- Main Image Layer -->
        <img src="src/assets/building.png" alt="Building" class="building-image" />
      </div>
    </div>

    <!-- Partners' Logos Section -->
    <div class="partners-section">
      <h3>Our Partners</h3>
      <div class="logo-container">
        <img src="src/assets/logo1.png" alt="Partner 1" class="partner-logo" />
        <img src="src/assets/logo1.png" alt="Partner 2" class="partner-logo" />
        <img src="src/assets/logo1.png" alt="Partner 3" class="partner-logo" />
      </div>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      showLoader: true, // Control the visibility of the loader
      scrolled: false // State to track if the user has scrolled past 30% of the video section
    }
  },
  mounted () {
    // Display the loader for 3.5 seconds, then hide it
    setTimeout(() => {
      this.showLoader = false
    }, 3500)

    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Show the top bar after scrolling past 35% of the viewport height
      this.scrolled = scrollPosition > windowHeight * 0.35
    },
    refreshPage () {
      window.location.reload()
    }
  }
}
</script>

<style scoped>
/* Startup Animation Overlay */
.startup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: slideUpOverlay 1.5s ease-in-out forwards 2s; /* Slide up after 2 seconds */
}

/* Logo Starter */
.startup-image {
  width: 80px;
  position: relative;
}

/*Text Startu Overlay */
.startup-overlay h4{
  font-family: 'Times New Roman', Times, serif;
  color: #fffbfb;
}

/* Slide Up Overlay Animation */
@keyframes slideUpOverlay {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-top: -70px;
}
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire hero section */
}

/* Text Overlay in Video */
.video-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1000;
}
.video-text-overlay h1 {
  font-size: 3rem; /* Adjust as needed */
  font-weight: bold;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  z-index: 1100; /* Ensure it appears above the video but below the top bar */
  animation: bounce 3.0s infinite;
}

/* Animation for the scroll indicator */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(10px);
  }

}
.mouse-animation {
  width: 48px;
  height: auto;
}

/* Logo */
.logo {
  height: 30px;
  margin-right: -5px;
  transition: filter 0.4s ease-in-out;
}

/* Transition for logo: change logo color when scrolled */
.navigation-bar.transparent .logo {
  filter: brightness(0) invert(1); /* White logo when transparent bar */
}
.navigation-bar.visible .logo {
  filter: brightness(1); /* Normal logo when white bar */
}

/* Flexbox layout for the toolbar */
.toolbar {
  display: flex;
  justify-content: space-between; /* Pushes logo to left, buttons to right */
  align-items: center;
  width: 100%;
}

/* Logo and Title Group */
.logo-title-group {
  display: flex;
  align-items: center;
  cursor: pointer;
}

/* Transition for toolbar title */
.toolbar-title {
  font-family: 'Times New Roman', Times, serif;
  transition: color 0.4s ease-in-out;
}
.navigation-bar.transparent .toolbar-title {
  color: white;
}
.navigation-bar.visible .toolbar-title {
  color: black;
}

/* Navigation Buttons Group */
.nav-buttons {
  display: flex;
  gap: 15px; /* Space between buttons */
}

/* Navigation Bar */
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  z-index: 1200;
  padding: 10px 20px;
  box-shadow: 0px 2px 10px rgb(255, 254, 254); /* Soft shadow for elevation */
  transition: opacity 0.4s ease-in-out, background-color 0.4s ease-in-out; /* Smooth transition */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Transparent bar when not scrolled */
.navigation-bar.transparent {
  background-color: transparent;
  color: white;
  pointer-events: auto;
  opacity: 1;
}

/* Show the navigation bar with white background when scrolled */
.navigation-bar.visible {
  background-color: white;
  color: black;
  opacity: 1;
  pointer-events: auto; /* Enable clicks when visible */
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  /* Adjust toolbar for tablet screens */
  .toolbar-title {
    font-size: 1.2rem; /* Slightly reduce title font size */
  }

  .nav-buttons {
    gap: 10px; /* Reduce space between buttons */
  }
}

@media (max-width: 768px) {
  /* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-top: -145px;
}
  /* Adjust toolbar for smartphone screens */
  .navigation-bar {
    flex-direction: column;
    padding: 10px 0;
  }

  .logo-title-group {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
  }

  .toolbar-title {
    font-size: 1.1rem;
  }

  /* Stack navigation buttons vertically for mobile */
  .nav-buttons {
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: 5px;
  }
}

@media (max-width: 480px) {
    /* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-top: -128px;
}
  /* Further adjustments for very small screens */
  .toolbar-title {
    font-size: 1rem;
  }

  .logo {
    height: 25px; /* Reduce logo size */
  }

  .nav-buttons {
    gap: 2px;
  }

  .navigation-bar {
    padding: 5px;
  }
}

/* About Us Section */
.about-us-section {
  background-color: #f8f9fa;
  padding: 80px 40px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Adjust layout for smaller screens */
@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text-content {
    padding-right: 0px;
    padding-bottom: 20px;
  }

  .image-container {
    width: 90%; /* Scale image down */
  }

  .gray-image-layer {
    display: block; /* Hide extra layers for smaller screens */
  }
}

/* Further adjust for tablet and smartphone */
@media (max-width: 768px) {
  .text-content h2 {
    padding-left: 20px;
    font-size: 2rem; /* Reduce font size */
  }

  .text-content p {
    padding-left: 20px;
    font-size: 1rem;
  }

  .image-container {
    padding-left: 20px;
    width: 100%;
    margin-top: 20px;
  }

  .btn-story {
    margin-left: 20px;
  }

  .partners-section h3 {
    padding-left: 20px;
  }

  .logo-container {
    padding-left: 20px;
  }
  }

/* Further adjust for small screen */
@media (max-width: 480px) {
  .text-content h2 {
    padding-left: 40px;
    font-size: 2rem; /* Reduce font size */
  }

  .text-content p {
    padding-left: 40px;
    font-size: 1rem;
  }

  .image-container {
    padding-left: 20px;
    width: 100%;
    margin-top: 20px;
  }

  .btn-story {
    margin-left: 40px;
  }

  .partners-section h3 {
    padding-left: 20px;
  }

  .logo-container {
    padding-left: 20px;
  }
}

.text-content {
  flex: 1;
  padding-right: 40px;
}

.text-content h2 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.text-content p {
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-story {
  background-color: transparent;
  border: 2px solid #2c3e50;
  color: #2c3e50;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 0;
  transition: all 0.3s ease;
}

.btn-story:hover {
  background-color: #2c3e50;
  color: white;
}

/* Image Section with Layered Effect */
.image-container {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
}

/* Main Image */
.building-image {
  max-width: 100%;
  height: auto;
  border-radius: 2px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

/* Gray-toned Image Layer */
.gray-image-layer {
  position: absolute;
  top: 15px;  /* Adjust positioning */
  left: 15px;
  width: calc(100% - 30px); /* Keeps spacing relative */
  height: auto;
  filter: grayscale(100%);
  opacity: 0.5; /* Semi-transparent effect */
}

/* Partners' Logos Section */
.partners-section {
  margin-top: 50px;
  text-align: center;
  animation: fadeInUp 1s ease-in-out;
}

.partners-section h3 {
  font-family: 'Georgia', serif;
  font-size: 2rem;
  color: #2c3e50;
}

.logo-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 10px;
}

.partner-logo {
  width: 100px;
  height: auto;
  transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
  filter: grayscale(100%);
  opacity: 0.8;
}

.partner-logo:hover {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.1);
}

/* Transition for logos when section scrolls into view */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
