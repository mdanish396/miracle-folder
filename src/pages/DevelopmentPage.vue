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
          <img src="src/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
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
      <p class="fade-up delay-2">Explore our current developments and find your dream home.</p>
      <div class="fade-up delay-3">
        <div class="development-flex">
          <div class="developments-container">
            <!-- Scrollable Development Card -->
            <div
              class="development-card"
              v-for="development in displayedDevelopments"
              :key="development.id"
            >
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
                <p>From {{ development.price }}</p>
              </div>
              <!-- Hover Development Card Information -->
              <div class="development-hover-overlay">
                <span
                class="status-current"
                >
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
        <!-- <div v-if="allDevelopments.length > visibleCount">
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
        </div> -->
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
      <div class=" fade-up delay-3">
        <div class="development-flex">
          <div class="developments-container">
            <!-- Scrollable Development Card -->
            <div
              class="development-card"
              v-for="pastdevelopments in displayedPastDevelopments"
              :key="pastdevelopments.id"
            >
                <img
                  :src="pastdevelopments.image"
                  :alt="pastdevelopments.name"
                  class="development-image"
                />
                <div class="status"
                >
                  {{ pastdevelopments.status }}
                </div>
                <div class="development-info">
                  <h3>{{ pastdevelopments.name }}</h3>
                  <p>{{ pastdevelopments.location }}</p>
                </div>
                <!-- Hover Development Card Information -->
                <div class="development-hover-overlay">
                  <span
                    class="status-completed"
                  >
                    {{ pastdevelopments.status }}
                  </span>
                  <div class="description">
                    {{ pastdevelopments.shortdescription }}
                  </div>
                  <div class="actions">
                    <q-btn flat label="Open Details" class="action-btn" @click="navigateToPastDevelopmentDetails(pastdevelopments.slug)" />
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!-- <div v-if="allPastDevelopments.length > visibleCount">
          <div v-if="!showAllPastDevelopments">
            <q-btn
              flat
              label="Show More"
              class="view-all-btn"
              @click="showMorePastDevelopments"
            />
          </div>
        </div>
        <div v-if="showAllPastDevelopments">
          <q-btn
            flat
            label="Show Less Developments"
            class="view-all-btn"
            @click="showLessPastDevelopments"
          />
        </div> -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { developments } from 'src/components/Properties/CurrentProperties/CurrentDevelopmentData.vue'
import { pastdevelopments } from 'src/components/Properties/PastProperties/PastDevelopmentData.vue'

const allDevelopments = ref(developments.filter((d) => d.status === 'New Launch'))
// const visibleCount = ref(4)
const allPastDevelopments = ref(pastdevelopments.filter((d) => d.status === 'Completed'))
const displayedDevelopments = ref(allDevelopments.value /* .slice(0, visibleCount.value) */)
const displayedPastDevelopments = ref(allPastDevelopments.value /* .slice(0, visibleCount.value) */)
// const showAllDevelopments = ref(false)
// const showAllPastDevelopments = ref(false)
const sections = ref([])
const fadeItems = ref([])
let observer = null

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
  router.push({ path: `/for-sale/${slug}` })
}

const navigateToPastDevelopmentDetails = (slug) => {
  router.push({ path: `/past-development/${slug}` })
}

</script>

<style scoped>

/*Project Section*/
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
  margin-top: -20px;
  padding-bottom: 30px;
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
  width: 850px;
  height: 71vh;
  object-fit: cover;
}

@media (max-width: 1260px) {

.text-above,
.text-below {
  font-size: 30px;
}

.line-hero {
padding-inline: 20px;
}

.line-hero-1 {
  padding-inline-end: 100px;
  margin-inline-start: 20px;
}

.top-image {
  width: 700px;
}
}

@media (max-width: 1024px) {
  .about-image {
  width: 600px;
}
}

@media (max-width: 910px) {
  .about-image {
  width: 500px;
}
}

@media (max-width: 820px) {

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
    margin-top: -455px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 185px;
  }

  .text-above,
  .text-below {
  font-size: 30px;
}

.line-hero-holder {
  display: none;
}

.top-image {
  width: 100%;
  max-width: 500px;
  height: 47vh;
  }
}
@media (max-width: 520px) {

  .development-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -460px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 190px;
  }

  .top-image {
  width: 100%;
  height: 49vh;
  }
}

.developments-section {
  padding: 60px 20px;
  background-color: #ffffed;
  text-align: center;
  padding-bottom: 80px;
}

.past-developments-section {
  padding: 60px 20px;
  background-color: #ebe3d5;
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

.past-development-section h2 {
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

  .past-development-section h2 {
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

.past-developments-section p {
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
  line-height: 31px;
  font-family: 'TitilliumWebSemiBold';
  margin-bottom: 5px;
  margin-top: -10px;
  height: 60px;
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
  left: -65px;
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
  left: -65px;
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
  left: -65px;
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
</style>
