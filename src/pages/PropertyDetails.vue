<template>
  <q-page class="property-details-page">
    <div class="property-hero">
      <div v-if="property">
        <div class="before-hero-section"></div>
        <div class="hero-section">
          <img :src="property.image" alt="Property Image" class="hero-image" />
          <div class="property-section">
            <div class="property-grid">
              <div class="property-card">
                <div class="property-info">
                  <h3 class="property-name">{{ property.name }}</h3>
                  <div class="property-location">
                    <i class="fas fa-map-marker-alt icon"></i>
                    <span class="text-property-location">
                      {{ property.location }}
                    </span>
                  </div>
                  <q-separator/>
                  <q-toolbar class="property-toolbar">
                    <div class="property-item">
                      <h4>Type</h4>
                      <p class="truncated-text">{{ property.housetype }}
                        <q-tooltip v-if="!screenBelow540px">
                          {{ property.housetype }}
                        </q-tooltip>
                      </p>
                    </div>

                    <div class="property-item">
                      <h4>From</h4>
                      <p>{{ property.price }}</p>
                    </div>

                    <div class="property-item">
                      <h4>Status</h4>
                      <p>{{ property.status }}</p>
                    </div>
                  </q-toolbar>
                  <q-separator/>
                  <div class="property-feature-list">
                    <div
                      v-for="feature in property.features"
                      :key="feature"
                      class="property-feature-item">
                      <i class="fas fa-check-circle icon-1"></i>
                      <span class="property-feature">
                        {{ feature }}
                      </span>
                    </div>
                  </div>
                  <div class="property-button">
                    <q-btn
                      stack
                      flat
                      @click="scrollToFloorplan"
                      class="property-btn">
                      <img src="src/assets/floor.svg" class="icon-2">
                      <span class="text-btn">FLOOR PLANS</span>
                    </q-btn>

                    <q-btn
                      stack
                      flat
                      @click="scrollToGallery"
                      class="property-btn">
                      <img src="src/assets/gallery.svg" class="icon-2">
                      <span class="text-btn">GALLERY</span>
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="description-section">
          <h2>{{ property.name }}</h2>
          <p>{{ property.description }}</p>
          <div class="description-icon"></div>
        </div>

        <!-- Gallery Section -->
        <div class="gallery-section" id="section-gallery">
          <h2>Gallery</h2>
          <div class="gallery-grid">

            <!-- Left image -->
            <div
              v-if="property.gallery[0]"
              :key="0"
              class="gallery-item">
              <img
              :src="property.gallery[0]"
              @click="openPopup(0)"
              loading="lazy"
              alt="Left Image"/>
              <div class="gallery-overlay"></div>
            </div>

            <!-- Center Image -->
            <div
              v-if="property.gallery[1]"
              :key="1"
              class="gallery-item">
              <img
              :src="property.gallery[1]"
              @click="openPopup(1)"
              loading="lazy"
              alt="Center Image"/>
              <div class="gallery-overlay">
                <button class="visit-gallery-btn" @click="openPopup(1)">Visit Gallery</button>
              </div>
            </div>

            <!-- Right Image -->
            <div
              v-if="property.gallery[2]"
              :key="2"
              class="gallery-item">
              <img
              :src="property.gallery[2]"
              @click="openPopup(2)"
              loading="lazy"
              alt="Right Image"/>
              <div class="gallery-overlay"></div>
            </div>
          </div>

          <div v-if="isPopupOpen" class="gallery-popup">
            <div class="gallery-popup-content">
              <!-- Close Button -->
              <button class="popup-close" @click="closePopup">&#9747;</button>

              <!-- Image Display -->
              <img :src="property.gallery[currentImage]" alt="Popup Image" loading="lazy" class="gallery-popup-image" />

              <!-- Previous Button -->
              <button class="popup-prev" @click="prevImage">&#8592;</button>

              <!-- Next Button -->
              <button class="popup-next" @click="nextImage">&#8594;</button>
           </div>
          </div>
        </div>
      </div>

      <!-- Floor Plan Section -->
      <div class="floorplan-section" id="section-floorplan">
        <h2 class="floorplan-title">Floorplan</h2>
        <div class="floorplan-container">
          <!-- Header Section -->
          <div class="floorplan-header">
            <div class="plan-select">
              <select v-model="selectedPlan" class="custom-select">
                <option
                  v-for="(plans, planType) in currentFloorplans"
                  :key="planType"
                  :value="planType">
                    {{ planType }}
                </option>
              </select>
            </div>
            <div class="plan-price">
              Price From <span class="price">{{ property.price }}</span>
            </div>
          </div>

          <!-- Floorplan Details Section -->
          <div class="floorplan-details">
            <div
              v-for="(plans, planType) in currentFloorplans"
              :key="planType">
              <div v-if="selectedPlan === planType" class="details-floorplan">
                <div class="details-grid-items">
                  <div class="details-grid">
                    <!-- Bedrooms -->
                    <div class="details-item">
                      <img src="src/assets/bed.png" alt="Area" class="icon-3" />
                      <p>{{ plans[0].bedroom }} Bedrooms</p>
                    </div>
                    <!-- Bathrooms -->
                    <div class="details-item">
                      <img src="src/assets/bathroom.svg" alt="Area" class="icon-3" />
                      <p>{{ plans[0].bathroom }} Bathrooms</p>
                    </div>
                    <!-- Area -->
                    <div class="details-item">
                      <img src="src/assets/area.svg" alt="Area" class="icon-3" />
                      <p>{{ plans[0].area }}</p>
                    </div>
                  </div>

                  <!-- Buttons Section -->
                  <div class="floorplan-buttons">
                    <button @click="downloadBrochure(plans[0].brochure)" class="btn download-btn">
                      <img src="src/assets/brochure.svg" alt="Download" />
                      Download Brochure
                    </button>
                    <button @click="openImage(plans[0].plan)" class="btn view-btn">
                      <img src="src/assets/area.svg" alt="View" />
                      View Floorplan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Popup for floorplan image -->
      <div class="popup" v-if="showPopup">
        <div class="popup-content">
          <div class="popup-header">
            <h2 class="popup-title">{{ selectedPlan }}</h2>
            <div class="zoom-control">
              <button @click="zoomIn" class="close-btn"> <i class="fa fa-search-plus"></i></button>
              <button @click="zoomOut" class="close-btn"> <i class="fa fa-search-minus"></i></button>
              <button class="close-btn" @click="ClosePopup"><i class="fa fa-times-circle"></i></button>
            </div>
          </div>

          <div class="popup-image-container"
            :class="{ grabbing: isDragging }"
            @mousedown="startDragging"
            @mousemove="dragImage"
            @mouseup="stopDragging"
            @mouseleave="stopDragging">
              <img
              :src="selectedPlanImage"
              alt="Floorplan"
              class="popup-image"
              :style="{transform: `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`, }"/>
          </div>
        </div>
      </div>

      <div class="location-section">
        <div class="location-title">
          <h2>Location</h2>
        </div>

        <div class="location-container">
        <div class="location-map" v-if="property">
          <iframe
            :src="property.map"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div class="amenities" v-if="computedNearbyAmenities">
          <q-list>
            <q-item class="amenities-section">
              <q-item-section>Nearby Amenities</q-item-section>
            </q-item>
            <q-separator color="white"/>

            <q-expansion-item
            v-for="(locations, category) in computedNearbyAmenities"
            :key="category"
            expand-icon-class="text-white"
            group="somegroup"
            class="amenities-expand"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <i :class="getCategoryIcon(category)" style="color: white; font-size: 18px;"></i>
                </q-item-section>
                <q-item-section>
                  <span class="text-white">{{ capitalizeFirstLetter(category) }}</span>
                </q-item-section>
              </template>

              <!-- Content inside the expansion item -->
              <div class="q-pa-md">
                <q-item
                v-for="(location, idx) in locations"
                :key="idx"
                class="amenities-child"
              >
                  <q-item-section class="amenities-location">{{ location.name }}<q-space class="amenities-km"/> {{ location.distance }} </q-item-section>
                </q-item>
              </div>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { properties } from 'src/components/Properties/PropertiesData.vue'
import { floorplan } from 'src/components/Properties/PropertiesFloorplan.vue'
import { nearbyAmenities } from 'src/components/AmenitiesData.vue'

// Assuming you have a store or an API to fetch properties
const route = useRoute()
const propertySlug = route.params.slug
const flattenedProperties = Object.values(properties).flat()
const property = ref(flattenedProperties.find(item => item.slug === propertySlug))
const screenBelow540px = ref(window.innerWidth < 540)
const isPopupOpen = ref(false)
const currentImage = ref(0)
const selectedPlan = ref('') // Default selected plan
const selectedPlanImage = ref('')
const showPopup = ref(false)
const zoomLevel = ref(1)
const isDragging = ref(false)
const translateX = ref(0)
const translateY = ref(0)
const lastMouseX = ref(0)
const lastMouseY = ref(0)

const checkScreenSize = () => {
  screenBelow540px.value = window.innerWidth < 540
}

onMounted(() => {
  window.addEventListener('resize', checkScreenSize)
  checkScreenSize() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const currentFloorplans = computed(() => floorplan[property.value.name]?.[0] || {})

onMounted(() => {
  const firstPlan = Object.keys(currentFloorplans.value)[0]
  selectedPlan.value = firstPlan
})

const scrollToGallery = () => {
  const gallerySection = document.getElementById('section-gallery')

  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToFloorplan = () => {
  const floorplanSection = document.getElementById('section-floorplan')

  if (floorplanSection) {
    floorplanSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const downloadBrochure = (brochure) => {
  if (brochure) {
    window.open(brochure, '_blank')
  }
}

const openImage = (plan) => {
  selectedPlanImage.value = plan
  showPopup.value = true
  resetImagePosition()
  document.body.style.overflow = 'hidden'
}

const ClosePopup = () => {
  showPopup.value = false
  document.body.style.overflow = 'auto'
}

const resetImagePosition = () => {
  zoomLevel.value = 1
  translateX.value = 0
  translateY.value = 0
}

const zoomIn = () => {
  if (zoomLevel.value < 3) {
    zoomLevel.value += 0.2
  }
}

const zoomOut = () => {
  if (zoomLevel.value > 1) {
    zoomLevel.value -= 0.2
  } else {
    resetImagePosition()
  }
}

const startDragging = (event) => {
  isDragging.value = true
  lastMouseX.value = event.clientX
  lastMouseY.value = event.clientY
}

const dragImage = (event) => {
  if (isDragging.value) {
    const deltaX = event.clientX - lastMouseX.value
    const deltaY = event.clientY - lastMouseY.value
    translateX.value += deltaX
    translateY.value += deltaY
    lastMouseX.value = event.clientX
    lastMouseY.value = event.clientY
  }
}

const stopDragging = () => {
  isDragging.value = false
}

const handleKeydown = (event) => {
  if (isPopupOpen.value) {
    if (event.key === 'ArrowRight') nextImage()
    else if (event.key === 'ArrowLeft') prevImage()
    else if (event.key === 'Escape') closePopup()
  }
}

const openPopup = (index) => {
  currentImage.value = index
  isPopupOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closePopup = () => {
  isPopupOpen.value = false
  document.body.style.overflow = 'auto'
}

const prevImage = () => {
  const gallery = property.value.gallery
  currentImage.value = (currentImage.value - 1 + gallery.length) % gallery.length
}

// Navigate to the next image
const nextImage = () => {
  const gallery = property.value.gallery
  currentImage.value = (currentImage.value + 1) % gallery.length
}

const computedNearbyAmenities = computed(() => {
  const name = property.value?.place
  return nearbyAmenities[name]?.amenities || {}
})
const getCategoryIcon = (category) => {
  const icons = {
    education: 'fas fa-graduation-cap',
    healthcare: 'fas fa-medkit',
    entertainment: 'fas fa-film',
    recreation: 'fas fa-bicycle',
    shopping: 'fas fa-shopping-bag',
    transportation: 'fas fa-bus'
  }
  return icons[category] || 'fas fa-map-marker-alt' // Default icon
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

</script>

<style scoped>
.property-hero{
  font-family: Arial, sans-serif;
  color: #333;
  padding: 30px 0px;
  margin-top: -80px;
  overflow-x: hidden;
}

.before-hero-section {
  position:static;
  display: flex;
  height: 65vh;
  background-color: #08463c;
  margin-top: -80px;
  margin-left: -40px;
  margin-right: -40px;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 80vh;
  margin-top: -260px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.hero-image {
  margin-top: 10px;
  margin-left: 10px;
  width: 50%;
  height: 77vh;
  border-radius: 2px;
}

.property-section{
  padding: 30px 0px;
  overflow-x: hidden;
}

.property-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 0 20px;
  width: 100%;
  margin-top: 10px;
}

.property-card {
  text-align: center;
  overflow: hidden;
}

.property-info h3 {
  font-size: 26px;
  line-height: 24px;
  font-weight: bold;
  color: #1e1e1e;
  text-align: left;
  padding-left: 20px;
}

.property-location {
  text-align: left;
  padding-left: 20px;
  margin-top: -10px;
  margin-bottom: 20px;
}

.icon {
  font-size: 16px;
  color: #08463c;
  margin-right: 10px;
}

.text-property-location {
  font-size: 16px;
  line-height: 24px;
  color: #424040;
}

.property-toolbar {
  display: flex; /* Ensures elements are placed in a row */
  flex-wrap: nowrap;
  justify-content: space-between; /* Distributes elements evenly */
  align-items: center;
  padding: 0 10px; /* Optional: Adjust padding to create space around */
  cursor: default;
  gap: 70px;
  white-space: nowrap;
}

.property-item {
  text-align: left;
}

.property-item h4 {
  font-size: 18px;
  line-height: 27px;
  color: rgb(109, 114, 120);
  margin-bottom: 0px;
  padding-left: 10px;
}

.property-item p {
  font-size: 17px;
  line-height: 26px;
  font-weight: bold;
  color: black;
  padding-left: 10px;
  overflow: hidden;
  max-width: 150px;
}

.truncated-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-1 {
  font-size: 16px;
  color: #08463c;
  margin-right: 5px;
}

.property-feature-list {
  padding: 20px 20px;
  text-align: left;
}

.property-feature-item {
  display: flex;
  padding: 5px 0;
  align-items: center;
}

.property-feature {
  font-size: 15px;
  line-height: 23px;
  margin-left: 10px;
}

.property-button {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.icon-2 {
  width: 35px;
  transition: filter 0.3s ease; /* Smooth transition */
}

.text-btn {
  font-size: 14px;
  line-height: 21px;
  padding-top: 10px;
}

.property-btn {
  background-color: transparent;
  border: 2px solid #08463c;
  color: #000000;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 0;
  width: 150px;
  height: 100px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.property-btn:hover {
  background-color: #08463c;
  color: white;
}

.property-btn:hover .icon-2 {
  filter: invert(1); /* Invert the icon color when button is hovered */
}

.q-tooltip {
  display: inline-block;
}

@media (max-width: 1122px) {

  .property-toolbar {
    gap: 30px;
  }

}

@media (max-width: 1024px) {
  .property-toolbar {
    gap: 25px;
  }

}

@media (max-width: 944px) {
  .hero-section {
    flex-direction: column;
    height: auto;
  }

  .hero-image {
    margin: 20px auto;
    width: 96%;
    height: 300px;
  }

  .property-grid {
    padding: 30px 30px;
    margin-top: -40px;
  }

  .property-toolbar {
    gap: 10px;
  }

}

@media (max-width: 540px) {

  .before-hero-section {
  height: 120vh;
}

.hero-section {
  margin-top: -640px;
}

  .property-toolbar {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }

  .property-item {
    margin-top: -10px;
    padding-right: 0px;
}

.truncated-text {
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}
}

.description-section {
  margin: 60px 40px;
  text-align: center;
  padding-top: 20px;
}

.description-section h2{
  font-size: 48px;
  line-height: 56px;
  font-weight: bold;
  color: #777777;
  text-transform: uppercase;
}

.description-section p{
  font-size: 18px;
  line-height: 27px;
  padding: 0 150px;
}

@media (max-width: 1024px) {

.description-section p {
  padding-left: 110px;
  padding-right: 110px;
}
}

@media (max-width: 768px) {

.description-section h2 {
  font-size: 42px;
  line-height: 50px;
}

.description-section p {
  padding-left: 20px;
  padding-right: 20px;
}
}

@media (max-width: 520px) {
  .description-section h2 {
    font-size: 32px;
  }

  .description-section p {
    padding-left: 0px;
    padding-right: 0px;
    margin-left: -20px;
    margin-right: -20px;

  }
}.gallery-section

 {
  padding: 20px;
  text-align: center;
}

.gallery-section h2 {
  padding-top: 10px;
  font-size: 48px;
  line-height: 48px;
  font-weight: bold;
  color: #1e1e1e;
}

.gallery-grid {
  display: flex;
  padding-bottom: 20px;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-grid .gallery-item:nth-child(1) {
  flex: 1;
  max-width: 25%;
  height: 500px;
  clip-path: inset(0 10% 0 0);
}

.gallery-grid .gallery-item:nth-child(2) {
  flex: 2;
  max-width: 50%;
  height: 500px;
}

.gallery-grid .gallery-item:nth-child(3) {
  flex: 1;
  width: 25%;
  height: 500px;
  clip-path: inset(0 0 0 10%);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.visit-gallery-btn {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  transition: background-color 0.3s ease;
}

.visit-gallery-btn:hover {
  background-color: #08463c;
  color: white;
}

@media (max-width: 900px) {
  .gallery-grid .gallery-item:nth-child(1) {
    display: none;
}

.gallery-grid .gallery-item:nth-child(2) {
  max-width: 100%;
}

.gallery-grid .gallery-item:nth-child(3) {
  display: none;
}
}

@media (max-width: 600px) {
  .gallery-grid .gallery-item:nth-child(2) {
  height: 300px;
}
}

.gallery-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.gallery-popup-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.gallery-popup img {
  width: 100%;
  height: auto;
}

.popup-close, .popup-prev, .popup-next {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.2s ease;
}

.popup-close {
  top: 10px;
  right: 10px;
  width: 50px;
}

.popup-prev {
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.popup-next {
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.popup-prev:hover,
.popup-next:hover {
  transform: translateY(-50%) scale(1.2);
}

.floorplan-section {
  padding: 20px 5%;
  font-family: Arial, sans-serif;
  text-align: center;
  background-color:#0a5b4d;
}

.floorplan-title {
  padding-top: 50px;
  font-size: 48px;
  line-height: 48px;
  font-weight: bold;
  color: #fff;
}

.floorplan-container {
  background-color: white;
  border: 1px solid #ddd;
  padding: 20px 5%;
}

.floorplan-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #08463c;
  color: white;
}

.plan-select {
  padding: 5px;
  font-size: 17px;
  color: white;
}

/* Custom select styling */
.custom-select {
  width: 300px;
  background-color: #08463c; /* Background color */
  color: white; /* Text color */
  border: 1px solid #727272;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Dropdown hover effect */
.custom-select:hover {
  background-color: #0a5b4d; /* Slightly darker green */
}

/* Styling the options */
.custom-select option {
  background-color: #0a5b4d; /* Default background */
  color: white; /* Text color */
  padding: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.plan-price {
  white-space: nowrap;
  padding: 10px;
  font-size: 17px;
  line-height: 27px;
}

.floorplan-details {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-wrap: nowrap;
}

.details-grid-items {
  gap: 20px;
}

.details-grid {
  display: flex;
  gap: 20px;
}

.details-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:20px;
  width: 190px;
  min-height: 200px;
}

.details-item p {
  font-size: 17px;
  line-height: 27px;
  color: #000000;
}

.icon-3 {
  width: 60px;
  margin-bottom: 10px;
}

.floorplan-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 1px solid #ccc;
  background: #fff;
  width: 200px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
}

.download-btn {
  border: 2px solid #08463c;
  color: #08463c;
}

.view-btn {
  border: 2px solid #08463c;
  color: #08463c;
}

.btn img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.btn:hover {
  background-color: #08463c;
  color: white;
}

.download-btn:hover img,
.view-btn:hover img {
  filter: invert(1);
}

@media (max-width: 768px) {
  .floorplan-header {
    flex-direction: column;
    align-items: center;
    color: white;
}

  .details-grid {
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 10px;
}
.floorplan-buttons {
  margin-top: -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.btn {
  width: 300px;
  justify-content: center;
}
}

@media (max-width: 580px) {

  .floorplan-section {
  padding: 20px 0%;
  margin: 0 -15px;
}

  .details-grid {
    gap: 0px;
}

.details-item {
  width: 170px;
}
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 20px;
  padding-top: 0px;
  color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  max-width: 90%;
  max-height: 90%;
}

.popup-header {
  display: flex;
  margin-top: -10px;
  justify-content: space-between;
  align-items: center;
  margin-bottom:10px;
}

.zoom-control {
  display: flex;
  gap: 20px;
  align-items: center;
}

.popup-title {
  flex: 1;
  text-align: left;
  font-size: 30px;
  line-height: 40px;
}

.close-btn {
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
}

.popup-image-container {
  position: relative;
  flex: 1;
  overflow: hidden;
  cursor: grab;
}

.popup-image-container.grabbing {
  cursor: grabbing;
}

.popup-image {
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;
  transform-origin: center;
}

@media (max-width: 580px) {

  .popup-title {
  font-size: 20px;
}
}

.location-section {
  padding: 20px;
  padding-bottom: 70px;
  background-color: #e3ddd3;
}

.location-title {
  text-align: center;
}

.location-section h2 {
  padding-top: 40px;
  font-size: 48px;
  line-height: 48px;
  font-weight: bold;
  color: #1e1e1e;
}

.location-container {
  display: flex;
  flex-direction: row; /* Arrange items in a row */
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 80px;
  padding-right: 80px;
}

  .location-map iframe {
    width: 100%; /* Ensure map adjusts within its parent container */
    height: 550px; /* Adjust height for better visibility */
  }

  .location-map {
    width: 70%;
  }

  .amenities {
    width: 30%;
    background-color: #08463c;
    color: #a7a4a4;
    overflow-y: auto; /* Disable horizontal scroll for grid */
    scrollbar-width: 1px;
    scroll-snap-type: none;
    height: 550px;
  }

  .amenities-section {
    padding: 20px 15px;
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    cursor:default;
  }

  .amenities-expand {
    font-size: 16px;
    color: antiquewhite;
    line-height: 24px;
  }

  .amenities-child {
    font-size: 16px;
    line-height: 24px;
    cursor: default;
  }

  .amenities-location {
    display: flex;
    flex-direction: row;

  }

  .amenities-km {
    display: flex;
    flex-direction: row;
  }

/* For screens larger than 768px */
@media (max-width: 1023px) {

  .location-container {
  display: flex;
  flex-direction: column; /* Arrange items in a row */
  padding-top: 30px;
  padding-bottom: 40px;
}

.location-map {
  width: 100%;
}

.location-map iframe {
  display: flex;
  height: 350px;
}

.q-list {
  width: 100%;
}

.amenities {
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 0;
}
}

@media (max-width: 768px) {

.location-section h2 {
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

.amenities-section {
    font-size: 20px;
  }

  .location-container {
  padding-left: 20px;
  padding-right: 20px;
  }

}

@media (max-width: 540px) {

  .gallery-section h2 {
    font-size: 32px;
  }

  .location-section h2 {
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

</style>
