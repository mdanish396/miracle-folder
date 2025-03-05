<template>
  <q-page :key="$route.fullPath">
    <!-- Startup Animation Overlay -->
    <div v-if="showLoader" class="startup-overlay">
      <div>
        <img src="/assets/logotext-white.png" class="startup-image">
      </div>
      <!-- <h4>MIRACLE LAND</h4> -->
    </div>

    <!-- Hero Section -->
    <div class="hero-section">
      <img src="/assets/index.png" alt="Hero Image" class="hero-video" />
      <!-- <video
        autoplay
        loop
        muted
        class="hero-video"
        playsinline
        preload="auto">
        <source src="/assets/landscape3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> -->

      <!-- Text Overlay in Video (centered) -->
      <div class="video-text-overlay">
        <h1>MIRACLES MADE FOR YOU <br> - FOREVER</h1>
      </div>

      <!-- Scroll Indicator (mouse animation, visible from start and fixed inside the background video) -->
      <div class="scroll-indicator">
        <video autoplay loop muted class="mouse-animation" playsinline>
          <source src="/assets/mouse.webm" type="video/webm" />
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
                class="development-image clickable"
                @click="navigateToDevelopmentDetails(development.slug)"
              />
              <div class="status">
                {{ development.status }}
              </div>
              <div class="development-info">
                <h3>{{ development.name }}</h3>
                <div class="development-location">
                  <i class="fas fa-map-marker-alt icon"></i>
                  <span class="text-development-location">
                    {{ development.location }}
                  </span>
                </div>
                <q-separator/>
                <div class="development-item">
                  <h4>Type</h4>
                  <p>{{ development.type }}</p>
                </div>
                <q-separator/>
                <q-toolbar class="development-toolbar">
                  <div class="development-item">
                    <h4>From</h4>
                    <p>{{ development.price }}</p>
                  </div>

                  <div class="development-item-1">
                    <h4>Up to</h4>
                    <p>{{ development.size }}</p>
                  </div>
                </q-toolbar>
                <q-separator/>
              </div>
              <div class="development-feature-list">
                <div
                  v-for="feature in development.features"
                  :key="feature"
                  class="development-feature-item">
                  <i class="far fa-dot-circle icon1"></i>
                  <span class="development-feature">
                    {{ feature }}
                  </span>
                </div>
              </div>
              <div class="actions">
                <q-btn flat class="action-btn" @click="navigateToDevelopmentDetails(development.slug)">
                  <q-icon name="fas fa-arrow-right" class="arrow-icon" />
                </q-btn>
              </div>
              <!-- Hover Development Card Information
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
              </div> -->
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
        <img src="/assets/wf.png" alt="Partner 2" class="partner-logo1" />
        <img src="/assets/interplan.png" alt="Partner 1" class="partner-logo" />
        <img src="/assets/ag.png" alt="Partner 3" class="partner-logo1" />
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
                to="/about-miracle-land"
              />
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="about-image-container fade-up">
          <img src="/assets/currentproject/house1.jpg" class="about-image" />
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
  title: 'Miracle Land | Premier Property Development in Malaysia',
  meta: [
    // English Meta Tags
    { name: 'description', content: 'Discover high-quality property developments by Miracle Land Holdings Berhad. Explore our latest projects in Pahang, Malaysia, including houses and shops for sale.' },
    { name: 'keywords', content: 'property development, real estate, buy house, buy shop, Malaysia, Pahang, Miracle Land, Mentakab, Bukit Bendera, Jengka' },
    { name: 'author', content: 'Miracle Land Holdings Berhad' },

    // Malay Meta Tags
    { name: 'description', content: 'Temui pembangunan hartanah berkualiti tinggi oleh Miracle Land. Dapatkan rumah dan kedai untuk dijual di Pahang, Malaysia.' },
    { name: 'keywords', content: 'hartanah, beli rumah, beli kedai, pembangunan hartanah, Malaysia, Pahang, Miracle Land, Mentakab, Bukit Bendera, Jengka' },

    // Open Graph (OG) - Facebook & Social Media
    { property: 'og:title', content: 'Miracle Land | Pembangunan Hartanah di Malaysia' },
    { property: 'og:description', content: 'Miracle Land Holdings Berhad adalah syarikat pembangunan hartanah terkemuka. Jelajahi projek terbaru kami di Pahang, Malaysia.' },
    { property: 'og:image', content: 'https://miracleland.co/assets/logotext.png' },
    { property: 'og:url', content: `https://miracleland.co${route.fullPath}` },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:title', content: 'Miracle Land | Pembangunan Hartanah di Malaysia' },
    { name: 'twitter:description', content: 'Jelajahi projek terbaru Miracle Land di Malaysia, termasuk rumah dan kedai untuk dijual.' },
    { name: 'twitter:image', content: 'https://miracleland.co/assets/logotext.png' },
    { name: 'twitter:card', content: 'summary_large_image' },

    // Geo & Language Targeting
    { name: 'language', content: 'ms-MY' }, // Malay (Malaysia)
    { name: 'geo.region', content: 'MY' }, // Malaysia
    { name: 'geo.placename', content: 'Pahang, Malaysia' },

    // Canonical URL (Prevents duplicate content issues)
    { rel: 'canonical', href: `https://miracleland.co${route.fullPath}` }
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
    container.style.gridTemplateColumns = 'repeat(3, minmax(280px, 1fr))'
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
  displayedDevelopments.value = allDevelopments.value.slice(0, 3) // Show only the first 2 developments
  showAllDevelopments.value = false
}

// Function to open the link
const navigateToDevelopmentDetails = (slug) => {
  router.push({ path: `/developments/${slug}` })
}
</script>

<style scoped>

@font-face {
  font-family: 'TitilliumWebRegular';
  src: url('/assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'TitilliumWebSemiBold';
  src: url('/assets/fonts/TitilliumWeb-SemiBold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'RecklessNeueMedium';
  src: url('/assets/fonts/RecklessNeue-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'TitilliumWebBold';
  src: url('/assets/fonts/TitilliumWeb-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'AvenirMedium';
  src: url('/assets/fonts/Avenir LT Std 65 Medium.otf') format('opentype');
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
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  animation: slideUpOverlay 1.5s ease-in-out forwards 0.4s; /* Slide up after 2 seconds */
}

/* Logo Starter */
.startup-image {
  width: 35vw;
  position: relative;
}

@media (max-width: 768px) {
  .startup-image {
  width: 40vw;
}
}

@media (max-width: 480px) {
  .startup-image {
  width: 50vw;
}
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
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  color: rgb(238, 238, 238);
  text-align: center;
  font-family: 'RecklessNeueMedium';
  z-index: 1;
  cursor: default;
}

.video-text-overlay h1 {
  font-size: 4vw; /* Adjust as needed */
  white-space: nowrap;
  font-weight: bolder;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  line-height: 1.2;
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
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(rgb(0,0,0,0.05), rgb(0,0,0,0.5)); /* Dark semi-transparent background */
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 80px;
  z-index: 2; /* Ensures it's above the video but below the top bar */
}

.mouse-animation {
  padding-top: 10px;
  width: 48px;
  height: auto;
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

@media (max-width: 1024px) {
  .video-text-overlay h1 {
    font-size: 5vw;
  }
}

@media (max-width: 768px) {
  .video-text-overlay h1 {
    font-size: 6.5vw;
  }
}

  /*Development Section*/
  .developments-section {
  padding: 60px 10%;
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

.developments-section h2 {
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

  .developments-section h2 {
    font-size: 30px;
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
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); /* Responsive grid */
  padding-bottom: 80px;
  justify-content: center; /* Center the grid within the container */
}

@media (min-width: 1441px) {
  .developments-container {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .developments-container {
    width: 100%;
  }

  .developments-section {
    padding: 60px 5%;
  }
}

@media (max-width: 768px) {
  .developments-container {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Allow 2 per row if possible */
  }
}

.developments-container.flex-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.development-card {
  position: relative;
  background-color: white;
  border-radius: 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  width: 360px;
  flex-grow: 1;
  height: 100%;
  margin: 20px 0; /* Add vertical spacing between cards */
}

@media (max-width: 768px) {
  .development-card {
    max-width: 100%;
  }
}

.development-image {
  width: 100%;
  height: 295px;
  object-fit: cover;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.development-info {
  padding: 15px;
  text-align: left;
}

.development-info h3 {
  font-size: 21px;
  font-family: 'TitilliumWebSemiBold';
  margin-top: 3px;
  line-height: 31px;
}

.development-location {
  text-align: left;
  margin-top: -18px;
  margin-bottom: 13px;
}

.icon {
  font-size: 16px;
  color: #08463c;
  margin-right: 10px;
}

.icon1 {
  font-size: 12px;
  color: #08463c;
  margin-right: 10px;
}

.text-development-location {
  font-size: 16px;
  line-height: 24px;
  color: rgb(51, 51, 51);
}

.development-item h4 {
  font-size: 13px;
  color: rgb(84, 89, 95);
  margin-bottom: 0px;
  margin-top: -2px;
  white-space: nowrap;
  font-family: 'TitilliumWebRegular';
}

.development-item p {
  font-size: 17px;
  font-family: 'TitilliumWebRegular';
  color: rgb(51, 51, 51);
  margin-top: -7px;
  white-space: nowrap;
  margin-bottom: 10px;
  overflow: hidden;
}

.development-toolbar {
  display: flex; /* Ensures elements are placed in a row */
  align-items: center; /* Centers content vertically */
  padding: 0; /* Optional: Adjust padding to create space around */
}

.development-item,
.development-item-1 {
  flex: 1; /* Makes both items take up equal space */
  text-align: left; /* Optional: Center-aligns content */
}

.development-item-1 h4 {
  font-size: 13px;
  color: rgb(84, 89, 95);
  margin-bottom: 0px;
  margin-top: -2px;
  white-space: nowrap;
  font-family: 'TitilliumWebRegular';
}

.development-item-1 p {
  font-size: 17px;
  font-family: 'TitilliumWebRegular';
  color: rgb(51, 51, 51);
  margin-top: -7px;
  white-space: nowrap;
  margin-bottom: 10px;
  overflow: hidden;
}

.q-separator {
  margin: 0 -15px; /* Extend beyond the padding */
}

.development-feature-list {
  padding-left: 15px;
  padding-top: 0;
  height: 218px;
  text-align: left;
}

.development-feature-item {
  display: flex;
  padding: 5px 0;
  padding-bottom: 15px;
  align-items: center;
}

.development-feature {
  font-size: 18px;
  line-height: 24px;
  margin-left: 10px;
  font-family: 'TitilliumWebRegular';
  color: rgb(51, 51, 51);
}

/* .development-info p {
  margin: 2px 0;
  font-family: 'TitilliumWebRegular';
  font-size: 18px;
  color: #666;
} */

/* Hover Overlay */
/* .development-hover-overlay {
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
} */

/* Conditional Status Badge */
.status {
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px 20px;
  color: #fff;
  border-bottom-right-radius: 25px;
  border-top-left-radius: 8px;
  font-size: 13px;
  font-family: 'TitilliumWebBold';
  text-transform:capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background: #B31921;
}

.clickable {
  cursor: pointer;
}

/*
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
  } */

.description {
  font-size: 18px;
  font-family: 'TitilliumWebBold';
  margin-bottom: 70px;
  text-transform: capitalize;
}

.actions {
  position: absolute;
  bottom: -30px; /* Moves button below the border */
  left: 50%;
  transform: translateX(-50%); /* Centers horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.action-btn {
  background-color: #a39f1a; /* Match card background */
  border: 1px solid #a39f1a;
  color: white;
  padding: 10px 20px;
  border-radius: 50%; /* Makes it a circle */
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'AvenirMedium';
  width: 64px; /* Ensure round shape */
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional shadow */
}

.action-btn:hover {
  background-color: white;
  color: #a39f1a;
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
  align-items: center;
  justify-content: flex-start; /* Align items to the start */
  gap: 40px; /* Space between logos */
  width: 100%; /* Full width */
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevents wrapping */
  padding-left: 5%;
  padding-right: 5%;
  margin: 0 auto;
  padding-bottom: 20px;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE & Edge */
}

.logo-container::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari */
}

.partner-logo {
  width: 100px;
  height: auto;
  transition: transform 0.5s ease-in-out;
}

.partner-logo1 {
  width: auto;
  height: 100px;
  transition: transform 0.5s ease-in-out;
}

.partner-logo:hover, .partner-logo1:hover {
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

@media (min-width: 769px) {
  .logo-container {
  justify-content: center;
}
}

@media (max-width: 768px) {
  .partners-section h3 {
    font-size: 40px;
  }
}

/* Further adjust for small screen */
@media (max-width: 540px) {

  .partners-section h3 {
    font-size: 30px;
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

@media (max-width: 1240px) {

.text-above{
  font-size: 40px;
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
  margin-inline-start: -260px;
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

@media (max-width: 768px) {
  .about-image {
    width: 98vw;
  }

  .text-above {
    font-size: 40px;
  }
}

@media (max-width: 540px) {
  .text-above {
    font-size: 30px;
  }

  .line-3 {
padding-inline: 15px;
}

.line-4 {
  padding-inline-end: 140px;
  margin-inline-start: 15px;
}
.line-5 {
  width: 140px;
  margin-inline-start: -200px;
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
