<template>
  <q-page>
    <div class="development-section">
      <div class="content-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-hero-holder fade-up">
            <div class="line-hero">
              <div class="line-hero-1"></div>
            </div>
          </div>
          <div class="text-content-holder fade-up delay-1">
            <h2 class="text-above">Our</h2>
            <h2 class="text-below">Development</h2>
          </div>
        </div>

        <!-- Image Section -->
        <div class="development-image-container">
          <img src="/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
    </div>

    <!-- <q-breadcrumbs class="breadcrumbs">
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="Our Development" />
    </q-breadcrumbs> -->

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
      <div class="fade-up delay-3">
        <div :class="['developments-container', displayedDevelopments.length >= 3 ? 'grid-layout' : 'flex-layout']">
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
            </div>
          </div>
        </div>
    </div>

    <!-- Past Developments Section -->
    <div class="past-developments-section">
  <h2 class="fade-up">Past Developments</h2>
  <div class="line-holder fade-up delay-1">
    <div class="line">
      <div class="line-1">
        <div class="line-2"></div>
      </div>
    </div>
  </div>
  <p class="fade-up delay-2">Explore our past developments and build your confidence.</p>
  <div class="fade-up delay-3">
    <div :class="['developments-container', displayedPastDevelopments.length >= 3 ? 'grid-layout' : 'flex-layout']">
      <div
        class="development-card"
        v-for="pastdevelopments in displayedPastDevelopments"
        :key="pastdevelopments.id">
        <img
          :src="pastdevelopments.image"
          :alt="pastdevelopments.name"
          class="development-image clickable"
          @click="navigateToPastDevelopmentDetails(pastdevelopments.slug)"
        />
        <div class="status">{{ pastdevelopments.status }}</div>
        <div class="development-info">
          <h3>{{ pastdevelopments.name }}</h3>
          <div class="development-location">
            <i class="fas fa-map-marker-alt icon"></i>
            <span class="text-development-location">
              {{ pastdevelopments.location }}
            </span>
          </div>
          <q-separator />
          <div class="development-item">
            <h4>Type</h4>
            <p>{{ pastdevelopments.type }}</p>
          </div>
          <q-separator />
          <q-toolbar class="development-toolbar">
            <div class="development-item">
              <h4>From</h4>
              <p>-</p>
            </div>
            <div class="development-item-1">
              <h4>Up to</h4>
              <p>{{ pastdevelopments.size }}</p>
            </div>
          </q-toolbar>
          <q-separator />
        </div>
        <div class="development-feature-list">
          <div
            v-for="feature in pastdevelopments.features"
            :key="feature"
            class="development-feature-item">
            <i class="far fa-dot-circle icon1"></i>
            <span class="development-feature">{{ feature }}</span>
          </div>
        </div>
        <div class="actions">
          <q-btn flat class="action-btn" @click="navigateToPastDevelopmentDetails(pastdevelopments.slug)">
            <q-icon name="fas fa-arrow-right" class="arrow-icon" />
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { developments } from 'src/components/Properties/CurrentProperties/CurrentDevelopmentData.vue'
import { pastdevelopments } from 'src/components/Properties/PastProperties/PastDevelopmentData.vue'
import { useHead } from '@vueuse/head'

const allDevelopments = ref(developments /* .filter((d) => d.status === 'New Launch') */)
// const visibleCount = ref(4)
const allPastDevelopments = ref(pastdevelopments /* .filter((d) => d.status === 'Completed') */)
const displayedDevelopments = ref(allDevelopments.value /* .slice(0, visibleCount.value) */)
const displayedPastDevelopments = ref(allPastDevelopments.value /* .slice(0, visibleCount.value) */)
// const showAllDevelopments = ref(false)
// const showAllPastDevelopments = ref(false)
const sections = ref([])
const fadeItems = ref([])
let observer = null

useHead({
  title: 'Our Developments | Miracle Land',
  meta: [
    { name: 'description', content: 'Explore our current and past developments to find your dream property in Malaysia.' },
    { name: 'keywords', content: 'property for sale, Malaysia real estate, new developments, past projects' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Our Developments | Miracle Land' },
    { property: 'og:description', content: 'Explore our current and past developments to find your dream property in Malaysia.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://miracleland.co/our-developments' },
    { property: 'og:image', content: '/assets/currentproject/house1.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Our Developments | Miracle Land' },
    { name: 'twitter:description', content: 'Explore our current and past developments to find your dream property in Malaysia.' },
    { name: 'twitter:image', content: '/assets/currentproject/house1.jpg' },
    { rel: 'canonical', href: 'https://miracleland.co/our-developments' }
  ]
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

// const showMoreDevelopments = () => {
//   displayedDevelopments.value = allDevelopments.value // Show all developments
//   showAllDevelopments.value = true
// }

// const showMorePastDevelopments = () => {
//   displayedPastDevelopments.value = allPastDevelopments.value
//   showAllPastDevelopments.value = true
// }

// const showLessDevelopments = () => {
//   displayedDevelopments.value = allDevelopments.value.slice(0, 4) // Show only the first 2 developments
//   showAllDevelopments.value = false
// }

// const showLessPastDevelopments = () => {
//   displayedPastDevelopments.value = allPastDevelopments.value.slice(0, 4)
//   showAllPastDevelopments.value = false
// }

const router = useRouter()

// Function to open the link
const navigateToDevelopmentDetails = (slug) => {
  router.push({ path: `/developments/${slug}` })
}

const navigateToPastDevelopmentDetails = (slug) => {
  router.push({ path: `/past-developments/${slug}` })
}

</script>

<style scoped>

/*Project Section*/
@font-face {
  font-family: 'TitilliumWebRegular';
  src: url('/assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'TitilliumWebSemiBold';
  src: url('/assets/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'RecklessNeueMedium';
  src: url('/assets/fonts/RecklessNeue-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'TitilliumWebBold';
  src: url('/assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf') format('truetype');
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

.breadcrumbs {
  padding: 10px 20px;
  font-size: 16px;
  background: #f8f9fa;
  border-radius: 5px;
  font-family: 'TitilliumWebRegular';
}

.breadcrumbs a {
  text-decoration: underline;
  color: black;
}

.breadcrumbs a:hover {
  color:#a39f1a;
}

@media (max-width: 768px) {
  .breadcrumbs {
    font-size: 14px;
  }
}

.development-section {
  background-color: #0d182b;
  display: flex;
  height: 71vh;
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
  padding-left: 6%;
}

.line-hero-holder {
  position: static;
  margin-bottom: 20px;
}

.line-hero {
  display: flex;
  width: 12px; /* Thickness of the line */
  height: 4px; /* Height of the line */
  background-color: #d9d323; /* Gold accent */
  padding-inline: 40px;

}

.line-hero-1 {
  display: inline-block;
  height: 2px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-top: 1px; /* Space between the line and text */
  padding-inline-end: 140px;
  margin-inline-start: 40px;
}

.text-above,
.text-below {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  margin: 0;
}

.text-above {
  color: #fff;
}

.text-below {
  color: #d9d323;
}

/* Image Section */
.development-image-container {
  flex: 1; /* Adjusts the width for the image section to make it more than half the screen width */
  display:flex;
  justify-content: flex-end;
  align-items:flex-end;
}

.top-image {
  width: 65vw;
  height: 71vh;
  object-fit: cover;
}

@media (max-width: 1260px) {

.text-above,
.text-below {
  font-size: 40px;
}

.line-hero {
padding-inline: 20px;
}

.line-hero-1 {
  padding-inline-end: 100px;
  margin-inline-start: 20px;
}

}

/* @media (max-width: 1024px) {
  .about-image {
  width: 600px;
}
}

@media (max-width: 910px) {
  .about-image {
  width: 500px;
}
} */

@media (max-width: 880px) {

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .development-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    order: -1;
  }

  .text-content {
    order: 1;
  padding-left: 0;
  }

  .text-above,
  .text-below {
  font-size: 30px;
}

.line-hero-holder {
  display: none;
}

.top-image {
  width: 70vw;
  height: 50vh;
  margin-top: -22px;
  }
}
@media (max-width: 520px) {

  .top-image {
    margin-top: -40px;
    margin-bottom: 20px;
    width: 100vw;
  }
}

.developments-section {
  padding: 60px 10%;
  background-color: #ffffed;
  text-align: center;
  padding-bottom: 80px;
}

.past-developments-section {
  padding: 60px 5%;
  align-items: center;
  justify-content: center;
  background-color: #ebe4d8;
  text-align: center;
}

.developments-section h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 42px;
  color: #000000;
}

.past-developments-section h2 {
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

.past-developments-section h2 {
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

  .past-developments-section h2 {
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

.past-developments-section p {
  font-family: 'TitilliumWebRegular';
  font-size: 18px;
  color: #000000;
  margin-bottom: 60px;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 80px;
}

@media (max-width: 768px) {

  .developments-section {
    padding: 60px 5%;
  }
}

.development-card {
  position: relative;
  background-color: white;
  border-radius: 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 830px;
  margin: 20px 0; /* Center align */
}

@media (max-width: 1440px) {
  .development-card {
    max-width: 100%;
  }
}

@media (max-width: 827px) {
  .development-card {
    max-width: 100%;
  }
}

/* ✅ Default layout: Centered for 1-2 cards */
.flex-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 80px;
}

  .flex-layout .development-card {
    width: 360px !important;
    min-width: 360px;
    max-width: 360px;
    flex: 0 0 360px; /* Prevents flex from resizing */
  }

  @media (max-width: 1250px) {
    .flex-layout .development-card {
    width: auto !important;
    min-width: 320px;
    max-width: 100%;
    flex: 1; /* Prevents flex from resizing */
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
  padding-right: 5%;
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
  background: #a39f1a;
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
</style>
