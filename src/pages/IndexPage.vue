<template>
  <transition name="fade" mode="out-in">
    <q-page :key="$route.fullPath">
      <!-- Startup Animation Overlay -->
      <div v-if="showLoader" class="startup-overlay">
        <div>
          <img src="src/assets/logo4.png" class="startup-image">
        </div>
        <h4>MIRACLE LAND</h4>
      </div>

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
        <!-- Vertical Branding -->
        <div class="vertical-branding">MIRACLE LAND</div>
      </div>

      <!-- Current Developments Section -->
      <div class="developments-section">
        <h2>Current Developments</h2>
        <div class="line-holder">
          <div class="line">
            <div class="line-1">
             <div class="line-2"></div>
           </div>
          </div>
        </div>
        <p>Explore our current developments and find your dream home.</p>
        <div class="developments-container">
          <!-- Scrollable Development Card -->
          <div
            class="development-card"
            v-for="development in displayedDevelopments"
            :key="development.id">
            <img
              :src="development.image"
              :alt="development.name"
             class="development-image"/>
            <div class="status">
              {{ development.status }}
            </div>
            <div class="development-info">
              <h3>{{ development.name }}</h3>
              <p>{{ development.location }}</p>
              <p>From RM {{ development.price }}</p>
            </div>
            <!-- Hover Development Card Information -->
            <div class="development-hover-overlay">
              <span class="status-current">
                {{ development.status }}
              </span>
              <div class="description">
                {{ development.shortdescription }}
              </div>
              <div class="actions">
                <q-btn flat label="Open Details" class="action-btn" @click="navigateToDevelopmentDetails(development.slug)"/>
              </div>
            </div>
          </div>
        </div>
        <div v-if="allDevelopments.length > visibleCount">
          <div v-if="!showAllDevelopments">
            <q-btn
              flat
              label="Show More"
              class="view-all-btn"
              @click="showMoreDevelopments"
            />
          </div>
        </div>
        <div v-if="showAllDevelopments">
          <q-btn
            flat
            label="Show Less"
            class="view-all-btn"
            @click="showLessDevelopments"
          />
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

      <!-- About Us Section -->
      <div data-aos="fade-up">
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
              <q-btn flat label="ABOUT US" class="btn-story" to="/about-miracle"/>
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
        </div>
      </div>
    </q-page>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { developments } from 'src/components/CurrentDevelopmentData.vue'

const showLoader = ref(true)
const router = useRouter()
const allDevelopments = ref(developments)
const visibleCount = ref(4)
const displayedDevelopments = ref(allDevelopments.value.slice(0, visibleCount.value))
const showAllDevelopments = ref(false)

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false
  }, 3500)
})

const showMoreDevelopments = () => {
  displayedDevelopments.value = allDevelopments.value // Show all developments
  showAllDevelopments.value = true
}

const showLessDevelopments = () => {
  displayedDevelopments.value = allDevelopments.value.slice(0, 4) // Show only the first 2 developments
  showAllDevelopments.value = false
}

// Function to open the link
const navigateToDevelopmentDetails = (slug) => {
  router.push({ path: `/for-sale/${slug}` })
}
</script>

<style scoped>

@font-face {
  font-family: 'TitilliumWebRegular';
  src: url('src/assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'TitilliumWebSemiBold';
  src: url('src/assets/fonts/TitilliumWeb-SemiBold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'RecklessNeueMedium';
  src: url('src/assets/fonts/RecklessNeue-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'TitilliumWebBold';
  src: url('src/assets/fonts/TitilliumWeb-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'AvenirMedium';
  src: url('src/assets/fonts/Avenir LT Std 65 Medium.otf') format('opentype');
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
/* Startup Animation Overlay */
.startup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3d1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: slideUpOverlay 1.5s ease-in-out forwards 0.4s; /* Slide up after 2 seconds */
}

/* Logo Starter */
.startup-image {
  width: 80px;
  position: relative;
}

/*Text Startup Overlay */
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
@media (min-width: 1110px) {
  .hero-section {
    margin-top: -70px;
}
}
@media (max-width: 1106px) {
  .hero-section {
    height: 102vh;
    margin-top: -85px;
}
}
@media (max-width: 1005px) {
  .hero-section {
    height: 101vh;
    margin-top: -70px;
}
}

@media (max-width: 480px) {
  .hero-section {
    height: 102vh;
    margin-top: -70px;
}
}

@font-face {
  font-family: 'Empire';
  src: url('src/assets/fonts/Empire.ttf') format('truetype');
}

/* Text Overlay in Video */
.video-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(238, 238, 238);
  text-align: center;
  font-family: 'RecklessNeueMedium';
  z-index: 1000;
  cursor: default;
}

.video-text-overlay h1 {
  font-size: 4rem; /* Adjust as needed */
}

.vertical-branding {
  position: absolute;
  top: 55%;
  right: 50px;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  text-transform: uppercase;
  font-size: 64px;
  font-family: 'TitilliumWebBold';
  color: rgba(255, 255, 255, 0.1);
  z-index: 2;
  white-space: nowrap;
  cursor: default;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 48%;
  transform: translateX(-50%);
  color: white;
  z-index: 1100; /* Ensure it appears above the video but below the top bar */
  animation: bounce 3s infinite;
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

  /*Development Section*/
  .developments-section {
  padding: 60px 20px;
  background-color: #ffffed;
  text-align: center;
  padding-bottom: 80px;
}

.developments-section h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 42px;
  color: #000000;
}

.line-holder {
  position: static;
  margin-top: -30px;
}

.line {
  display: inline-block;
  width: 12px; /* Thickness of the line */
  height: 3px; /* Height of the line */
  background-color: #08463c; /* Gold accent */
  padding-inline: 40px;

}

.line-1 {
  display: inline-block;
  width: 50px; /* Thickness of the line */
  height: 1px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-top: 1px; /* Space between the line and text */
  padding-inline-end: 200px;
  margin-inline-start: 40px;
}

.line-2 {
  display: inline-block;
  width: 220px; /* Thickness of the line */
  height: 1px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-bottom: 20px; /* Space between the line and text */
  padding-inline-start: -100px;
  margin-inline-start: -380px;
}

@media (max-width: 768px) {

.development-section h2 {
  font-size: 40px;
}

.line {
  padding-inline: 20px;

}

.line-1 {
  padding-inline-end: 180px;
  margin-inline-start: 20px;
}

.line-2 {
  width: 180px;
  margin-inline-start: -260px;
}
}

@media (max-width: 540px) {

  .development-section h2 {
    font-size: 32px;
  }

.line {
  padding-inline: 15px;

}

.line-1 {
  padding-inline-end: 140px;
  margin-inline-start: 15px;
}

.line-2 {
  width: 140px;
  margin-inline-start: -200px;
}}

.developments-section p {
  font-family: 'TitilliumWebRegular';
  font-size: 18px;
  color: #000000;
  margin-bottom: 60px;
}

.developments-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 80px;
  align-items: center;
  justify-content: center;
}

.development-card {
  position: relative;
  min-width: 280px;
  max-width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.development-card:hover {
  transform: translateY(-5px);
}

.development-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.development-info {
  padding: 15px;
  text-align: left;
}

.development-info h3 {
  font-size: 21px;
  font-family: 'TitilliumWebSemiBold';
  margin-bottom: 5px;
}

.development-info p {
  margin: 2px 0;
  font-family: 'TitilliumWebRegular';
  color: #666;
}

/* Hover Overlay */
.development-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.development-card:hover .development-hover-overlay {
  opacity: 1;
}

/* Conditional Status Badge */
.status {
  position: absolute;
  top: 10px;
  left: -60px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  font-size: 13px;
  width: 200px;
  font-family: 'TitilliumWebBold';
  text-transform: uppercase;
  transform: rotate(-30deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.status-current {
  position: absolute;
  top: 10px;
  left: -60px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  font-size: 13px;
  width: 200px;
  font-family: 'TitilliumWebBold';
  text-transform: uppercase;
  transform: rotate(-30deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background: #4caf50;
  }

  .status-completed {
  position: absolute;
  top: 10px;
  left: -60px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  font-size: 13px;
  width: 200px;
  font-family: 'TitilliumWebBold';
  text-transform: uppercase;
  transform: rotate(-30deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background: #e53935;
  }

.description {
  font-size: 18px;
  font-family: 'TitilliumWebBold';
  margin-bottom: 70px;
  text-transform: capitalize;
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.action-btn {
  background-color: transparent;
  border: 1px solid #a39f1a;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'AvenirMedium';
}

.action-btn:hover {
  background-color: #a39f1a;
}

/* view all button */
.view-all-btn{
  background-color: transparent;
  border: 2px solid black;
  color: #000000;
  font-family: 'AvenirMedium';
  font-size: 17px;
  padding: 10px 20px;
  width: 300px;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.view-all-btn:hover {
  background-color: #a39f1a;
  border: none;
  color: #fff;
  transform: translateY(-3px);
}

/* Partners' Logos Section */
.partners-section {
  text-align: center;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  max-width: 1350px;
}

.partners-section h3 {
  font-family: 'RecklessNeueMedium';
  font-size: 40px;
  color: #000000;
}

.logo-container {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
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
    transform: translateY(28px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* About Us Section */
.about-us-section {
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
  .about-us-section {
  margin-bottom: -90px;
  margin-top: 20px;
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

  .video-text-overlay h1{
    font-size: 50px;
  }

  .text-content h2 {
    padding-left: 20px;
  }

  .text-content p {
    padding-left: 20px;
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

  .vertical-branding {
    font-size: 45px;
    margin-right: -40px;
  }
  }

/* Further adjust for small screen */
@media (max-width: 480px) {
  .text-content h2 {
    padding-left: 40px;
    font-size: 36px; /* Reduce font size */
  }

  .text-content p {
    padding-left: 40px;
    font-size: 16px;
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
    font-size: 36px;
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
  font-family: 'RecklessNeueMedium';
  font-size: 40px;
  color: #000000;
  margin-bottom: 20px;
}

.text-content p {
  font-size: 18px;
  font-family: 'TitilliumWebRegular';
  color: #000000;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-story {
  background-color: transparent;
  border: 2px solid #000;
  color: #000000;
  font-size: 17px;
  font-family: 'AvenirMedium';
  padding: 10px 20px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.btn-story:hover {
  background-color: #a39f1a;
  color: white;
  border: 2px solid #a39f1a;
  transform: translateY(-3px);
}

/* Image Section with Layered Effect */
.image-container {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: -60px;
}

@media (min-width: 1025px) {
.about-us-section {
  margin-bottom: -90px;
  margin-top: 50px;
}
.text-content {
  padding-top: 20px;
  margin-bottom: 170px;
}

.image-container {
  margin-bottom:-40px;
}
}

/* Main Image */
.building-image {
  max-width: 90%;
  height: 65%;
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

@media (min-width: 1024px) {

.btn-story {
  margin-left:220px;
}
}
</style>
