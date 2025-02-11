<template>
  <q-page :key="$route.fullPath">
    <!-- Startup Animation Overlay -->
    <div v-if="showLoader" class="startup-overlay">
      <div>
        <img src="src/assets/logo.png" class="startup-image">
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
        preload="auto">
        <source src="src/assets/landscape3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Text Overlay in Video (centered) -->
      <div class="video-text-overlay">
        <h1>MIRACLES MADE FOR YOU <br> - FOREVER</h1>
      </div>

      <!-- Scroll Indicator (mouse animation, visible from start and fixed inside the background video) -->
      <div class="scroll-indicator">
        <video autoplay loop muted class="mouse-animation" playsinline>
          <source src="src/assets/mouse.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <!-- Vertical Branding -->
      <!-- <div class="vertical-branding">MIRACLE LAND</div> -->
    </div>

    <!-- Current Developments Section -->
    <div class="developments-section">
      <h2 class="fade-up">Current Developments</h2>
      <div class="line-holder fade-up delay-1">
        <div class="line">
          <div class="line-1">
           <div class="line-2"></div>
         </div>
        </div>
      </div>
      <p class="fade-up delay-2">Explore our current developments and find your dream home or shop.</p>
      <div class="container fade-up delay-3">
        <div class="development-flex">
          <div class="developments-container" :class="{ 'flex-layout': displayedDevelopments.length < 4 }">
            <!-- Scrollable Development Card -->
            <div
              class="development-card"
              v-for="development in displayedDevelopments"
              :key="development.id">
              <img
                :src="development.image"
                :alt="development.name"
                class="development-image"
              />
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
    </div>

    <!-- Partners' Logos Section -->
    <div class="partners-section ">
      <h3 class="fade-up">Our Partners</h3>
      <div class="line-holder fade-up delay-1">
        <div class="line">
          <div class="line-1">
            <div class="line-2"></div>
          </div>
        </div>
      </div>
      <div class="logo-container fade-up delay-2">
        <img src="src/assets/logo.png" alt="Partner 1" class="partner-logo" />
        <img src="src/assets/logo.png" alt="Partner 2" class="partner-logo" />
        <img src="src/assets/logo.png" alt="Partner 3" class="partner-logo" />
      </div>
    </div>

    <!-- About Section -->
    <div class="about-section">
      <div class="content-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="text fade-up delay-1">
            <h2 class="text-above">Founder's Track Record</h2>
            <div class="line-holders fade-up">
              <div class="line-3">
                <div class="line-4">
                  <div class="line-5"></div>
                </div>
              </div>
            </div>
            <p class="text-below">From a family’s dream home to an entrepreneur’s aspiration, we strive to build sustainable communities through creativity and dedication at heart.</p>
            <div class="fade-up delay-2">
              <q-btn
                flat
                label="About Us"
                class="about-btn"
                to="/about-miracle"
              />
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="about-image-container fade-up">
          <img src="src/assets/currentproject/house1.jpg" class="about-image" />
        </div>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { developments } from 'src/components/Properties/CurrentProperties/CurrentDevelopmentData.vue'
import { useHead } from '@vueuse/head'

const showLoader = ref(true)
const router = useRouter()
const route = useRoute()
const allDevelopments = ref(developments.filter((d) => d.status === 'New Launch'))
const visibleCount = ref(4)
const displayedDevelopments = ref(allDevelopments.value.slice(0, visibleCount.value))
const showAllDevelopments = ref(false)
const sections = ref([])
const fadeItems = ref([])
let observer = null

useHead({
  title: 'Miracle Land | Developer in Pahang', // Page title
  meta: [
    { name: 'description', content: 'Miracle Land is a property development company in Pahang, Malaysia' },
    { name: 'keywords', content: 'property, development, real estate, Malaysia, Miracle Land, Pahang, Jengka, Mentakab, New Launch' },
    { name: 'author', content: 'Miracle Land Holdings Berhad' },
    { property: 'og:title', content: 'Miracle Land | Property Development' },
    { property: 'og:description', content: 'Miracle Land is a premier property development company in Malaysia' },
    { property: 'og:image', content: '/src/assets/logotext.png' },
    { property: 'og:url', content: `https://miracleland.com${route.fullPath}` } // Update with your actual domain
  ]
})

const updateLayout = () => {
  const container = document.querySelector('.developments-container')
  const cards = document.querySelectorAll('.development-card')

  if (!container) return // Prevent errors if container doesn't exist

  if (cards.length < 4) {
    container.style.display = 'flex'
    container.style.justifyContent = 'center'
    container.style.flexWrap = 'wrap'
  } else {
    container.style.display = 'grid'
    container.style.gridTemplateColumns = 'repeat(4, minmax(280px, 1fr))'
  }
}

onMounted(() => {
  nextTick(() => {
    updateLayout() // Ensure layout updates after DOM is rendered
    window.addEventListener('resize', updateLayout)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout)
})
onMounted(() => {
  setTimeout(() => {
    showLoader.value = false
  }, 3500)
})

onMounted(() => {
  // Initialize Intersection Observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  })

  // Observe all sections
  sections.value = Array.from(document.querySelectorAll('.section'))
  fadeItems.value = Array.from(document.querySelectorAll('.fade-up'))

  sections.value.forEach((section) => observer.observe(section))
  fadeItems.value.forEach((item) => observer.observe(item))
})

onBeforeUnmount(() => {
  // Clean up observer
  if (observer) observer.disconnect()
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

.section {
  opacity: 0.4;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-up.delay-1 {
  transition-delay: 0.2s;
}

.fade-up.delay-2 {
  transition-delay: 0.4s;
}

.fade-up.delay-3 {
  transition-delay: 0.6s;
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
  width: 60px;
  position: relative;
}

/*Text Startup Overlay */
.startup-overlay h4{
  font-family: 'Times New Roman', Times, serif;
  color: #fffbfb;
  padding-top: 10px;
  padding-left: 10px;
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
  left: 49%;
  transform: translate(-50%, -50%);
  color: rgb(238, 238, 238);
  text-align: center;
  font-family: 'RecklessNeueMedium';
  z-index: 1;
  cursor: default;
}

.video-text-overlay h1 {
  font-size: 50px; /* Adjust as needed */
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
  padding-bottom: 40px;
  text-align: center;
  background-color: #fff;
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
  padding-inline-end: 220px;
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
  align-items: center;
  flex-wrap: wrap;
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

.developments-container.flex-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  width: 100%;
  height: 225px;
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
  margin-top: -10px;
  height: 60px;
  line-height: 31px;
}

.development-info p {
  margin: 2px 0;
  font-family: 'TitilliumWebRegular';
  font-size: 18px;
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
  top: 12px;
  left: -62px;
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
  top: 12px;
  left: -62px;
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
  padding-top: 60px;
  padding-bottom: 130px;
}

.partners-section h3 {
  font-family: 'RecklessNeueMedium';
  font-size: 42px;
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
.line-holders {
  position: static;
  margin-top: -30px;
}

.line-3 {
  display: inline-block;
  width: 12px; /* Thickness of the line */
  height: 3px; /* Height of the line */
  background-color: #08463c; /* Gold accent */
  padding-inline: 40px;

}

.line-4 {
  display: inline-block;
  width: 50px; /* Thickness of the line */
  height: 1px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-top: 1px; /* Space between the line and text */
  padding-inline-end: 220px;
  margin-inline-start: 40px;
}

.line-5 {
  display: inline-block;
  width: 220px; /* Thickness of the line */
  height: 1px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-bottom: 20px; /* Space between the line and text */
  padding-inline-start: -100px;
  margin-inline-start: -380px;
}

.about-section {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.text-content {
  flex: 1;
  text-align: center;
}

.text {
  padding-left: 10%;
  padding-right: 10%;
}

.text-above {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  color: #000000;
}

.text-below {
  font-family: 'TitilliumWebRegular';
  font-size: 20px;
  color: #000000;
}

.about-btn{  width: 500px;
  height: 400px;
}

.about-btn:hover {
  background-color: #a39f1a;
  border: none;
  color: #fff;
  transform: translateY(-3px);
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

/* Image Section */
.about-image-container {
  flex: 1; /* Adjusts the width for the image section to make it more than half the screen width */
  display:flex;
  justify-content: flex-end;
  align-items:flex-end;
  width: 50%;
}

.about-image {
  width: 50vw;
  height: 71vh;
  object-fit: cover;
}

@media (max-width: 1260px) {

.text-above{
  font-size: 36px;
}

.line-3 {
padding-inline: 20px;
}

.line-4 {
  padding-inline-end: 180px;
  margin-inline-start: 20px;
}
.line-5 {
  width: 180px;
  margin-inline-start: -250px;
}

/* .about-image {
  width: 500px;
} */
}

/* @media (max-width: 1024px) {
  .about-image {
  width: 500px;
}
} */
/*
@media (max-width: 910px) {
  .about-image {
  width: 500px;
}
} */

@media (max-width: 960px) {

  .about-section {
    padding-bottom: 60px;
}

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-image-container {
    order: -1; /* Ensures image comes first */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-content {
    order:1;
  }

.about-image {
  width: 800px;
  height: 49vh;
  }
}

@media (max-width: 540x) {
  .about-image-container {
    top: 0%;
  }

  .text-content {
    padding-top: 324px;
  }
}
/* @media (max-width: 520px) {

  .about-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -460px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 190px;
  }

  .about-image {
  width: 100%;
  height: 49vh;
  }
} */

</style>
