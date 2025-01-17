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
        <div class="development-flex">
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
        <div class="line-holder">
          <div class="line">
            <div class="line-1">
             <div class="line-2"></div>
           </div>
          </div>
        </div>
        <div class="logo-container">
          <img src="src/assets/logo1.png" alt="Partner 1" class="partner-logo" />
          <img src="src/assets/logo1.png" alt="Partner 2" class="partner-logo" />
          <img src="src/assets/logo1.png" alt="Partner 3" class="partner-logo" />
        </div>
      </div>

      <!-- About Section -->
      <section class="about-section">
      <div class="container">
        <div class="about-wrapper">
          <ul>
            <h2>Founder's Track Record</h2>
            <div class="line-holder">
              <div class="line">
                <div class="line-1">
                  <div class="line-2"></div>
                </div>
              </div>
            </div>
            <li>
                From a family’s dream home to an entrepreneur’s aspiration, we strive to build sustainable communities through creativity and dedication at heart.
            </li>
          </ul>

          <div class="about-image-container">
            <img src="src/assets/currentproject/house1.jpg" class="about-image" />
          </div>
        </div>
        <q-btn
              flat
              label="About Us"
              class="about-btn"
              to="/about-miracle"
            />
      </div>
    </section>
    </q-page>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { developments } from 'src/components/Properties/CurrentDevelopmentData.vue'

const showLoader = ref(true)
const router = useRouter()
const allDevelopments = ref(developments.filter((d) => d.status === 'Current'))
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
  height: 90vh;
  overflow: hidden;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire hero section */
}

@media (max-width: 480px) {
  .hero-section {
    height: 102vh;
}
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

@media (max-width: 540px) {
  .vertical-branding {
    right: 0%;
  }
}

  /*Development Section*/
  .developments-section {
  padding: 60px 20px;
  background-color: #ffffed;
  text-align: center;
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

.development-flex {
  display: flex;
  justify-content: center;
}

.developments-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(280px, 1fr)); /* Responsive grid */
  padding-bottom: 80px;
  justify-content: center; /* Center the grid within the container */
}

@media (max-width: 1224px) {
  .developments-container {
    grid-template-columns: repeat(3, minmax(280px, 1fr));
  }
}

@media (max-width: 1000px) {
  .developments-container {
    grid-template-columns: repeat(2, minmax(280px, 1fr));
  }
}

@media (max-width: 650px) {
  .developments-container {
    grid-template-columns: repeat(1, minmax(280px, 1fr));
  }
}

.development-card {
  position: relative;
  min-width: 280px;
  max-width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.development-card:hover {
  transform: translateY(-5px);
}

.development-image {
  width: 300px;
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
  margin-top: -20px;
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

/* Further adjust for small screen */
@media (max-width: 480px) {

  .partners-section h3 {
    font-size: 36px;
    padding-left: 20px;
  }

  .logo-container {
    padding-left: 20px;
  }
}

/* About Section */
.about-section {
  padding: 100px 20px;
  padding-bottom: 0px;
  text-align: center;
}

.about-section h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 46px;
  align-items: flex-start;
  color: #000;
}

.about-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.about-section ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

.about-section li {
  font-family: 'TitilliumWebRegular';
  margin-bottom: 20px;
  font-size: 19px;
  line-height: 35px;
  text-align: justify;
  display: flex;
  align-items: flex-start;
  padding-right: 140px;
  padding-left: 100px;
}

.about-image-container {
  flex: 1; /* Adjusts the width for the image section to make it more than half the screen width */
  display:flex;
  justify-content: center;
  padding-right: 90px;
}

.about-image {
  width: 500px;
  height: 400px;
}

.about-btn{
  background-color: transparent;
  border: 2px solid black;
  color: #000000;
  font-family: 'AvenirMedium';
  font-size: 17px;
  padding: 10px 20px;
  margin-top: 40px;
  width: 300px;
  height: 60px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.about-btn:hover {
  background-color: #a39f1a;
  border: none;
  color: #fff;
  transform: translateY(-3px);
}

/* Responsive Design */
@media (min-width: 1200px) {
  .about-section h2 {
    margin-left: -25px;
  }

  .about-btn{
    right: 25%;
    bottom: 160px;
  }

  .about-section ul {
    margin-top: -110px;
  }
}

@media (max-width: 1200px) {
  .about-section {
    padding-bottom: 80px;
  }

  .about-wrapper {
    flex-direction: column;
  }

  .about-image-container {
  margin: 20px auto; /* Adds spacing and centers the container */
  padding-right: 0px;
}
}

@media (max-width: 1024px) {

  .about-section h2 {
    font-size: 36px;
  }

  .about-wrapper {
    flex-direction: column;
  }

  .about-section li {
    padding-right: 40px;
    padding-left: 40px;
    font-size: 18px;
  }

  .about-image {
    width: 400px;
    height: 300px;
  }
}

</style>
