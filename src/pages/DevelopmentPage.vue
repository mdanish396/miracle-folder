<template>
  <q-page>
    <div class="development-section">
      <div class="content-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-holder">
            <div class="line">
              <div class="line-1"></div>
            </div>
          </div>
          <h2 class="text-above">Our</h2>
          <h2 class="text-below">Development</h2>
        </div>

        <!-- Image Section -->
        <div class="development-image-container">
          <img src="src/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
    </div>

    <!-- Current Developments Section -->
    <div class="developments-section">
      <h2>Current Developments</h2>
      <p>Explore our current developments and find your dream home.</p>
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
            <p>From RM {{ development.price }}</p>
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
      <div v-if="!showAllDevelopments">
        <q-btn
          flat
          label="Show More Developments"
          class="view-all-btn"
          @click="showMoreDevelopments"
        />
      </div>
      <div v-if="showAllDevelopments">
        <q-btn
          flat
          label="Show Less Developments"
          class="view-all-btn"
          @click="showLessDevelopments"
        />
      </div>
    </div>

    <!-- Past Developments Section -->
    <div class="developments-section">
      <h2>Past Developments</h2>
      <p>Explore our past developments and build your confidence.</p>
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
            <p>From RM {{ pastdevelopments.price }}</p>
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
      <div v-if="!showAllPastDevelopments">
        <q-btn
          flat
          label="Show More Developments"
          class="view-all-btn"
          @click="showMorePastDevelopments"
        />
      </div>
      <div v-if="showAllPastDevelopments">
        <q-btn
          flat
          label="Show Less Developments"
          class="view-all-btn"
          @click="showLessPastDevelopments"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { developments } from 'src/components/CurrentDevelopmentData.vue'
import { pastdevelopments } from 'src/components/PastDevelopmentData.vue'

const allDevelopments = ref(developments)
const allPastDevelopments = ref(pastdevelopments)
const displayedDevelopments = ref(allDevelopments.value.slice(0, 4))
const displayedPastDevelopments = ref(allPastDevelopments.value.slice(0, 4))
const showAllDevelopments = ref(false)
const showAllPastDevelopments = ref(false)

const showMoreDevelopments = () => {
  displayedDevelopments.value = allDevelopments.value // Show all developments
  showAllDevelopments.value = true
}

const showMorePastDevelopments = () => {
  displayedPastDevelopments.value = allPastDevelopments.value
  showAllPastDevelopments.value = true
}

const showLessDevelopments = () => {
  displayedDevelopments.value = allDevelopments.value.slice(0, 4) // Show only the first 2 developments
  showAllDevelopments.value = false
}

const showLessPastDevelopments = () => {
  displayedPastDevelopments.value = allPastDevelopments.value.slice(0, 4)
  showAllPastDevelopments.value = false
}

const router = useRouter()

// Function to open the link
const navigateToDevelopmentDetails = (slug) => {
  router.push({ path: `/development-details/${slug}` })
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
  font-family: 'RecklessNeueMedium';
  src: url('src/assets/fonts/RecklessNeue-Medium.ttf') format('truetype');
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
  padding-left: 120px;
}

.line-holder {
  position: static;
  margin-top: -20px;
  padding-bottom: 30px;
}

.line {
  display: flex;
  width: 12px; /* Thickness of the line */
  height: 4px; /* Height of the line */
  background-color: #d9d323; /* Gold accent */
  padding-inline: 40px;

}

.line-1 {
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
  width: 700px;
  height: 71vh;
  object-fit: cover;
}

@media (max-width: 1124px) {
  .top-image {
  width: 600px;
}
}

@media (max-width: 1024px) {

.text-above,
.text-below {
  font-size: 30px;
}

.line {
padding-inline: 20px;
}

.line-1 {
  padding-inline-end: 100px;
  margin-inline-start: 20px;
}

.top-image {
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

.line-holder {
  display: none;
}

.top-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  }
}
@media (max-width: 520px) {

  .development-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -445px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 138px;
  }
}

.developments-section {
  padding: 20px 20px;
  background-color: #ffffed;
  text-align: center;
}

.developments-section h2 {
  font-family: 'Georgia', serif;
  font-size: 42px;
  color: #000000;
}

.developments-section p {
  font-family: 'Georgia', serif;
  font-size: 18px;
  color: #000000;
  margin-top: -20px;
  margin-bottom: 60px;
}

.developments-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 20px;
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

.development-status {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  font-size: 12px;
  transform: rotate(-10deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.development-info {
  padding: 15px;
  text-align: left;
}

.development-info h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.development-info p {
  margin: 2px 0;
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
  font-size: 12px;
  width: 200px;
  font-weight: bold;
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
  font-size: 12px;
  width: 200px;
  font-weight: bold;
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
  font-size: 12px;
  width: 200px;
  font-weight: bold;
  text-transform: uppercase;
  transform: rotate(-30deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background: #e53935;
  }

.description {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 70px;
  text-transform: capitalize;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.action-btn {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
}

.action-btn:hover {
  background-color: #02947e;
}

.icon-btn {
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.icon-btn:hover {
  transform: scale(1.1);
}

/* view all button */
.view-all-btn{
  background-color: transparent;
  border: 2px solid #02947e;
  color: #000000;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.view-all-btn:hover {
  background-color: #00B398;
  color: white;
  transform: translateY(-3px);
}
</style>
