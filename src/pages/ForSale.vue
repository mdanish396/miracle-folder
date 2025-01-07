<template>
  <q-page>
    <div v-if="development">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="overview-section">
          <!-- Banner Image -->
          <img class="overview-image" :src="development.bannerimage" alt="Banner Image">
          <div class="gradient-overlay"></div>
        </div>

        <!-- Information Overlay -->
        <div class="information-overlay">
          <div class="info-overlay">
            <div class="place-logo-section">
              <h4 class="logo-title">{{ development.name }}</h4>
            </div>
            <div class="info-details">
              <div class="info-item">
                <h4>Type</h4>
                <p>{{ development.type }}</p>
              </div>
              <div class="divider"></div>
              <div class="info-item">
                <h4>Location</h4>
                <p>{{ development.location }}</p>
              </div>
              <div class="divider"></div>
              <div class="info-item">
                <h4>Size</h4>
                <p>{{ development.size }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <!-- Intro Section -->
      <div class="intro-section">
        <div class="text-content">
            <h1 class="main-heading">{{ development.topic }}</h1>
          <div class="line-holder">
            <div class="line">
              <div class="line-1">
                <div class="line-2"></div>
              </div>
            </div>
          </div>
          <p class="sub-heading">{{ development.description }}</p>
        </div>

        <!-- Highlight Section -->
        <div class="card-section">
          <div class="card-grid">
            <div class="card" v-for="(image, index) in development.gallerydevelopment" :key="index">
              <img :src="image.url" class="card-image" alt="Gallery Image">
              <div class="card-title">
                <p>{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rectangle-section"></div>

    <!-- Our Product Section-->
    <div class="products-section">
      <h2>Our Products</h2>
      <div class="line-holder">
        <div class="line">
          <div class="line-1">
            <div class="line-2"></div>
          </div>
        </div>
      </div>
      <div class="products-grid">
        <div class="product-card" v-for="property in visibleProperties" :key="property.id">
          <img :src="property.image" alt="Product Image" class="product-image"/>
          <q-separator/>
          <div class="product-info">
            <h3>{{ property.name }}</h3>
            <div class="product-location">
              <i class="fas fa-map-marker-alt icon">
              </i>
              <span class="text-product-location">
                {{ property.location }}
              </span>
            </div>
            <q-separator/>
            <q-toolbar class="product-toolbar">
              <div class="product-item">
                <h4>Type</h4>
                <p>{{ property.housetype }}</p>
              </div>

              <q-separator vertical/>
              <div class="product-item-1">
                <h4>From</h4>
                <p>{{ property.price }}</p>
              </div>
            </q-toolbar>

            <q-separator/>
            <div class="product-feature-list">
              <div
                v-for="feature in property.features"
                :key="feature"
                class="product-feature-item">
                <i class="fas fa-check-circle icon"></i>
                <span class="product-feature">
                  {{ feature }}
                </span>
              </div>
            </div>

            <q-space/>
            <q-separator/>
            <div class="btn-more">
              <q-btn flat label="Learn More" class="learn-more-btn" @click="navigateToPropertyDetails(property.slug)"/>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-more-1" v-if="filteredProperties.length > visibleCount">
        <q-btn
        flat
        label="Load More"
        class="learn-more-btn"
        @click="loadMore"
        />
      </div>
    </div>

    <div class="rectangle-section-1"></div>

    <!-- Gallery section-->
    <div class="gallery-section" v-if="development">
      <h2>Gallery</h2>
      <div class="line-holder">
        <div class="line">
          <div class="line-1">
            <div class="line-2"></div>
          </div>
        </div>
      </div>
      <div class="gallery-grid">

        <!-- Left image -->
        <div class="gallery-item"
          v-if="development.galleryImages[0]"
          :key="idx">
          <img
            :src="development.galleryImages[0]"
            @click="openPopup(0)"
            loading="lazy"
            alt="Left Image"
          />
          <div class="gallery-overlay"></div>
        </div>

        <!-- Center Image -->
        <div class="gallery-item"
          v-if="development.galleryImages[1]"
          :key="idx">
          <img
            :src="development.galleryImages[1]"
            @click="openPopup(1)"
            loading="lazy"
            alt="Center Image"
          />
          <div class="gallery-overlay">
            <button class="visit-gallery-btn" @click="openPopup(1)">Visit Gallery</button>
          </div>
        </div>

        <!-- Center Image -->
        <div class="gallery-item"
          v-if="development.galleryImages[2]"
          :key="idx">
          <img
            :src="development.galleryImages[2]"
            @click="openPopup(2)"
            loading="lazy"
            alt="Center Image"
          />
          <div class="gallery-overlay">
            <button class="visit-gallery-btn" @click="openPopup(1)">Visit Gallery</button>
          </div>
        </div>

        <!-- Right Image -->
        <div class="gallery-item"
          v-if="development.galleryImages[3]"
          :key="idx">
          <img
            :src="development.galleryImages[3]"
            @click="openPopup(3)"
            loading="lazy"
            alt="Left Image"
          />
          <div class="gallery-overlay"></div>
        </div>
      </div>

      <div v-if="isPopupOpen" class="gallery-popup">
        <div class="gallery-popup-content">
          <!-- Close Button -->
          <button class="popup-close" @click="closePopup">&#9747;</button>

          <!-- Image Display -->
          <img :src="development.galleryImages[currentImage]" alt="Popup Image" loading="lazy" class="gallery-popup-image" />

          <!-- Previous Button -->
          <button class="popup-prev" @click="prevImage">&#8592;</button>

          <!-- Next Button -->
          <button class="popup-next" @click="nextImage">&#8594;</button>
        </div>
      </div>
    </div>

    <!-- Location section -->
    <div class="location-section">
      <div class="location-title">
        <h2>Location</h2>
        <div class="line-holder">
          <div class="line">
            <div class="line-1">
              <div class="line-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="location-container">
        <div class="location-map" v-if="development">
          <iframe
          :src="development.map"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>

        <div class="amenities" v-if="Object.keys(filteredAmenities).length > 0">
          <q-list>
            <q-item class="amenities-section">
              <q-item-section>Nearby Amenities</q-item-section>
            </q-item>
            <q-separator color="white"/>

            <q-expansion-item
            v-for="(locations, category) in filteredAmenities"
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
              <q-separator color="white"/>

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
              <q-separator color="white"/>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { developments } from 'src/components/CurrentDevelopmentData.vue'
import { ref, computed } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { properties } from 'src/components/Properties/PropertiesData.vue'
import { nearbyAmenities } from 'src/components/AmenitiesData.vue'

const route = useRoute()
const developmentSlug = route.params.slug
const development = ref(developments.find(item => item.slug === developmentSlug) || null)
const visibleCount = ref(3)
const isPopupOpen = ref(false)
const currentImage = ref(0)

onBeforeRouteUpdate((to, from, next) => {
  const newSlug = to.params.slug
  development.value = developments.find(item => item.slug === newSlug) || null
  next()
})

const visibleProperties = computed(() => {
  return filteredProperties.value.slice(0, visibleCount.value)
})

const filteredProperties = computed(() => {
  return properties[development.value.name] || []
})

const router = useRouter()

const navigateToPropertyDetails = (slug) => {
  router.push({ path: `/property/${slug}` })
}

const loadMore = () => {
  if (visibleCount.value < filteredProperties.value.length) {
    visibleCount.value += 3
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
  const galleryImages = development.value.galleryImages
  currentImage.value = (currentImage.value - 1 + galleryImages.length) % galleryImages.length
}

// Navigate to the next image
const nextImage = () => {
  const galleryImages = development.value.galleryImages
  currentImage.value = (currentImage.value + 1) % galleryImages.length
}

const filteredAmenities = computed(() => {
  // Get the location of the current development
  const location = development.value?.name

  // Return amenities for the location if it exists or an empty array otherwise
  return nearbyAmenities[location]?.amenities || {}
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

.hero-section {
  position: relative;
  height: 60vh; /* Full-screen height */
  overflow: hidden;
  margin-top: -70px;
}

.overview-section {
  position: sticky;
  height: 63vh;
  overflow: hidden;
  width: 100%;
  margin-top: -80px;
}
.overview-image{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.information-overlay {
    position: absolute;
    top: 76%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

.info-overlay {
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  white-space: nowrap;
  gap: 20px;
}

.place-logo-section {
  position: absolute;
  top: -180px;
  left: 50%;
  transform: translateX(-50%);
}

.logo-title {
    font-size: 36px;
    color: #fff;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

.info-details {
  display: flex;
  background: white;
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 0 20px;
}

.info-item{
  padding: 0 20px;
  text-align: center;
}

.info-item-1{
  padding: 0 20px;
  padding-right: 110px;
}

.info-item h4 {
  font-size: 14px;
  font-weight: bold;
  color: #666;
  margin-bottom: -10px;
}

.info-item p {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.divider {
  width: 2px;
  background-color: #00B398;
  margin: 15px 0;
}

.intro-section {
  text-align: center;
  padding: 0px 20px;
  margin-top: -10px;
}

.main-heading {
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #1e1e1e;
}

@media (max-width: 1024px) {

.information-overlay {
    bottom: 89.7%;
  }

.main-heading {
  font-size: 52px;
  line-height: 60px;
  margin-bottom: 40px;
}

.sub-heading {
  font-size: 18px;
  padding-left: 110px;
  padding-right: 110px;
}

.rectangle-section {
  margin-top: -210px;
  height: 200px;
}
}

@media (max-width: 768px) {

.information-overlay {
    left: 55.5%;
  }

.info-item-1{
  padding-right: 0px;
}

.main-heading {
  font-size: 42px;
  line-height: 50px;
}

.sub-heading {
  padding-left: 20px;
  padding-right: 20px;
}

.rectangle-section {
  margin-top: -170px;
}
}

@media (max-width: 620px) {

  .rectangle-section {
  height: 200px;
}
}

@media (max-width: 610px) {

.rectangle-section {
  margin-top: -190px;
}
}

@media (max-width: 520px) {

  .overview-section {
  height: 50vh;
}

.information-overlay {
    top: 53%;
    left: 50%;
  }

.place-logo-section {
  top: -100px;
}

.logo-circle {
  width: 100px;
  height: 100px;
}

  .logo-subtitle {
    font-size: 16px;
  }

.info-details {
  padding: 0 10px;
}

.info-item{
  padding: 0 20px;
}

.info-item-1{
  padding: 0;
  padding-right: 0;
}

.intro-section {
  padding-top: 0px;
  margin-top: -70px;
}

.main-heading {
  font-size: 32px;
  line-height: 32px;
}

.sub-heading {
  margin-left: -40px;
  margin-right: -40px;
}

.rectangle-section {
  margin-top: -150px;
}
}

@media (max-width: 480px) {
  .rectangle-section {
  margin-top: -165px;
}
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

@media (min-width: 1025px) {

.sub-heading {
  font-size: 18px;
  line-height: 27px;
  padding-left: 250px;
  padding-right: 250px;
  padding-bottom: 60px;
  color: #1e1e1e;
  margin: 0 auto;
}

.rectangle-section {
  height: 230px;
  margin-top: -200px;
}
}

.card-section {
  text-align: center;
  padding: 20px;
}

.card-grid {
  display: flex;
  grid-template-columns: (3, 1fr);
  gap: 30px;
  align-items: center;
  justify-content: center;
}

.card {
  border-radius: 3px;
  background: transparent;
  transition: transform 0.3s;
}

.card img {
  width: 360px;
  height: 200px;
  border-bottom: 3px solid #759403;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  line-height: 29px;
  color: rgb(235, 235, 235);
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
}

@media (max-width: 1184px) {

  .sub-heading {
  padding-left: 80px;
  padding-right: 80px;
}

.card img {
  width: 280px;
  height: 160px;
}

.card-title {
  font-size: 16px;
  line-height: 24px;
}

.rectangle-section {
  height: 180px;
  margin-top: -170px;
}
}

@media (max-width: 1015px) {

  .card-section {
    padding: 40px 10px;
  }

  .card-grid {
    padding: 0;
  }

.card-grid .card:nth-child(3) {
  display: none;
}

.card-title {
  font-size: 16px;
  line-height: 24px;
}
}

@media (max-width: 695px) {

  .rectangle-section {
  height: 160px;
  margin-top: -170px;
}

.card-grid {
  padding: 0;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.card-grid .card:nth-child(2) {
  display: none;
}

.card {
  width: 90%;
}

.card img {
  width: 320px;
  height: 160px;
}

.card-title {
font-size: 16px;
line-height: 20px;
}
}

.rectangle-section {
  position:static;
  display: flex;
  width: 100%;
  background-color: #08463c;
}

.products-section {
  text-align: center;
  padding: 20px;
  padding-top: 10px;
}

.products-section h2 {
  padding-top: 50px;
  font-size: 48px;
  line-height: 48px;
  font-weight: bold;
  color: #1e1e1e;
}

.products-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 60px;
  padding: 0 40px;
  padding-top: 10px;
}

.product-card {
  border: 1px solid #ddd;
  text-align: center;
  align-items: center;
  overflow: hidden;
  width: 340px;
  background-color: white;
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: -6px;
}

.product-info h3 {
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  color: #1e1e1e;
  text-align: left;
  padding-left: 10px;
}

.product-location {
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

.text-product-location {
  font-size: 16px;
  line-height: 24px;
  color: #424040;
}

.product-toolbar {
  display: flex; /* Ensures elements are placed in a row */
  align-items: center; /* Centers content vertically */
  padding: 0 10px; /* Optional: Adjust padding to create space around */
}

.product-item,
.product-item-1 {
  flex: 1; /* Makes both items take up equal space */
  text-align: left; /* Optional: Center-aligns content */
}

.product-item h4 {
  font-size: 16px;
  line-height: 24px;
  color: rgb(109, 114, 120);
  margin-bottom: 0px;
  padding-left: 10px;
}

.product-item p {
  font-size: 16px;
  line-height: 24px;
  color: black;
  padding-left: 10px;
}

.product-item-1 h4 {
  font-size: 16px;
  line-height: 24px;
  color: rgb(109, 114, 120);
  margin-bottom: 0px;
  padding-left: 30px;
}

.product-item-1 p {
  font-size: 16px;
  line-height: 24px;
  padding-left: 30px;
  color: black;
}

.product-feature-list {
  padding: 20px 30px;
  text-align: left;
}

.product-feature-item {
  display: flex;
  padding: 5px 0;
  align-items: center;
}

.product-feature {
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
}

.btn-more {
  padding: 20px 0;
}

.btn-more-1 {
  padding-top: 50px;
}

.learn-more-btn {
  background-color: transparent;
  border: 2px solid #08463c;
  color: #000000;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: -10px;
  margin-bottom: -10px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #08463c;
  color: white;
  transform: translateY(-3px);
}

@media (max-width: 1024px) {

  .products-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    gap: 40px;
    padding: 0 20px;
    justify-content: center;
  }

  .product-info h3 {
    font-size: 18px;
  }

}

/* Small screens (768px and below) */
@media (max-width: 768px) {

  .product-info {
    padding: 10px;
  }

  .product-info h3 {
    font-size: 18px;
  }

}

/* Extra small screens (480px and below) */
@media (max-width: 480px) {
  .products-section h2 {
    font-size: 32px;
  }

  .product-image {
    height: 200px;
  }

  .learn-more-btn {
    font-size: 14px;
    padding: 8px 16px;
  }
}

.rectangle-section-1 {
  position:static;
  display: flex;
  width: 100%;
  height: 400px;
  background-color: white;
  margin-top: 80px;
}

.gallery-section {
  padding: 0px;
  margin-top: -400px;
  text-align: center;
}

.gallery-section h2 {
  padding-top: 50px;
  font-size: 48px;
  line-height: 48px;
  font-weight: bold;
  color: #1e1e1e;
}

.gallery-grid {
  display: flex;
  padding-bottom: 120px;
  padding-top: 10px;
  gap: 10px;
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
  max-width: 35%;
  height: 550px;
  clip-path: inset(0 0 0 0);
}

.gallery-grid .gallery-item:nth-child(2) {
  flex: 2;
  max-width: 50%;
  height: 550px;
}

.gallery-grid .gallery-item:nth-child(3) {
  flex: 2;
  max-width: 50%;
  height: 550px;
}

.gallery-grid .gallery-item:nth-child(4) {
  flex: 1;
  width: 25%;
  height: 550px;
  clip-path: inset(0 0 0 0);
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
  max-width: 550px;
}

.gallery-grid .gallery-item:nth-child(3) {
  display: none;
}

.gallery-grid .gallery-item:nth-child(4) {
  display: none;
}

.gallery-grid {
  padding-left: 70px;
  padding-right: 70px;
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
  width: 100%;
  height: 100%;
  padding-top: 76px;
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
  width: 800px;
  height: 500px;
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
