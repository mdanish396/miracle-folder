<template>
  <q-page>
    <div v-if="development">
      <!-- Hero Section -->
      <div class="hero-section">
        <!-- Breadcrumbs overlay -->
        <div class="breadcrumbs-container">
          <q-breadcrumbs class="breadcrumbs">
            <q-breadcrumbs-el label="Home" to="/" />
            <q-breadcrumbs-el label="Our Development" to="/development" />
            <q-breadcrumbs-el :label="development.name" />
          </q-breadcrumbs>
        </div>
        <div class="overview-section">
          <!-- Banner Image -->
          <img class="overview-image" :src="development.bannerimage" alt="Banner Image">
          <!-- <div class="gradient-overlay"></div> -->
          <!-- Logo Section -->
          <div class="logo-container fade-up delay-1">
            <img class="logo-image" :src="development.logo" alt="Logo">
          </div>
        </div>

        <!-- Information Overlay -->
        <div class="information-overlay">
          <div class="info-overlay fade-up">
            <div class="info-details">
              <div class="info-item fade-up delay-1">
                <h4>Type</h4>
                <p>{{ development.type }}</p>
              </div>
              <div class="divider"></div>
              <div class="info-item fade-up delay-1">
                <h4>Location</h4>
                <p>{{ development.location }}</p>
              </div>
              <div class="divider"></div>
              <div class="info-item fade-up delay-1">
                <h4>Status</h4>
                <p>{{ development.statusbuyer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Intro Section -->
      <div class="intro-section">
        <div class="text-content">
          <h1 class="main-heading fade-up">{{ development.name }}</h1>
          <div class="line-holder fade-up delay-1">
            <div class="line">
              <div class="line-1">
                <div class="line-2"></div>
              </div>
            </div>
          </div>
          <p class="sub-heading fade-up delay-2">{{ development.description }}</p>
        </div>

        <!-- Highlight Section -->
        <div class="card-section">
          <div class="card-grid">
            <div class="card" v-for="(image, index) in development.gallerydevelopment" :key="index">
              <img :src="image.url" class="card-image fade-up" alt="Gallery Image">
              <div class="card-title fade-up delay-1">
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
      <h2 class="fade-up" >Our Products</h2>
      <div class="line-holder fade-up delay-1">
        <div class="line">
          <div class="line-1">
            <div class="line-2"></div>
          </div>
        </div>
      </div>
      <div class="product-grid fade-up delay-2">
        <div class="products-grid" :class="{ 'flex-layout': visibleProperties.length < 3 }">
          <div class="product-card" v-for="property in visibleProperties" :key="property.id">
            <img :src="property.image" alt="Product Image" class="product-image"/>
            <div class="product-info">
              <h3>{{ property.name }}</h3>
              <div class="product-location">
                <i class="fas fa-map-marker-alt icon"></i>
                <span class="text-product-location">
                  {{ property.location }}
                </span>
              </div>
              <q-separator/>
              <q-toolbar class="product-toolbar">
                <div class="product-item">
                  <h4>Type</h4>
                  <p class="truncated-text">{{ property.housetype }}
                    <q-tooltip>
                      {{ property.housetype }}
                    </q-tooltip>
                  </p>
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
                  <i class="fas fa-check-circle icon1"></i>
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
      </div>
      <div class="fade-up delay-3">
        <div class="btn-more-1" v-if="filteredProperties.length > visibleCount">
          <q-btn
            flat
            label="Load More"
            class="load-more-btn"
            @click="loadMore"
          />
        </div>
        <div class="btn-more-1" v-if="visibleCount > 3">
          <q-btn
            flat
            label="Show Less"
            class="load-more-btn"
            @click="showLess"
          />
        </div>
      </div>
    </div>

    <div class="rectangle-section-1"></div>

    <!-- Gallery section-->
    <div class="gallery-section" v-if="development">
      <div class="gallery-section-header">
        <h2 class="fade-up">Gallery</h2>
        <div class="line-holder fade-up delay-1">
          <div class="line">
            <div class="line-1">
              <div class="line-2"></div>
            </div>
          </div>
        </div>
        <div class="gallery-grid fade-up delay-2">

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
              <button class="visit-gallery-btn" @click="openPopup(2)">Visit Gallery</button>
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
      </div>

      <div v-if="isPopupOpen" class="gallery-popup">
        <div class="gallery-popup-content">
          <!-- Close Button -->
          <button class="popup-close" @click="closePopup">
            <i class="fa fa-close"></i>
          </button>

          <q-carousel
            v-model="currentImage"
            animated
            arrows
            navigation
            infinite
            swipeable
            transition-prev="slide-right"
            transition-next="slide-left"
            style="background: none !important;"
            class="carousel">

            <q-carousel-slide
              v-for="(image, index) in development.galleryImages"
              :key="index"
              :name="index"
              style="padding: 0; margin: 0; display: flex; align-items: center; justify-content: center;">
              <img :src="image" alt="Carousel Image" class="carousel-image" />
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>

    <!-- Location section -->
    <div class="location-section">
      <div class="location-sector">
        <div class="location-title">
          <h2 class="fade-up">Location</h2>
          <div class="line-holder fade-up delay-1">
            <div class="line">
              <div class="line-1">
                <div class="line-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="location-container">
          <div class="location-map fade-up delay-2" v-if="development">
            <iframe
              :src="development.map"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div class="amenities fade-up delay-3" v-if="Object.keys(filteredAmenities).length > 0">
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
                class="amenities-expand">

                <template v-slot:header>
                  <q-item-section avatar>
                    <i :class="getCategoryIcon(category)" style="color: white; font-size: 18px;"></i>
                  </q-item-section>
                  <q-item-section>
                    <span>{{ capitalizeFirstLetter(category) }}</span>
                  </q-item-section>
                </template>
                <q-separator color="white"/>

                <!-- Content inside the expansion item -->
                <div class="q-pa-md">
                  <q-item
                    v-for="(location, idx) in locations"
                    :key="idx"
                    class="amenities-child">
                    <q-item-section class="amenities-location">
                      <span class="amenities-name">{{ location.name }}</span>
                      <q-space/>
                      <span class="amenities-km">{{ location.distance }}</span>
                    </q-item-section>
                  </q-item>
                </div>
                <q-separator color="white"/>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { developments } from 'src/components/Properties/CurrentProperties/CurrentDevelopmentData.vue'
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { properties } from 'src/components/Properties/CurrentProperties/CurrentPropertiesData.vue'
import { nearbyAmenities } from 'src/components/Properties/CurrentProperties/CurrentDevelopmentAmenitiesData.vue'
import { useHead } from '@unhead/vue'

const route = useRoute()
const developmentSlug = route.params.slug
const development = ref(developments.find(item => item.slug === developmentSlug) || null)
const visibleCount = ref(3)
const isPopupOpen = ref(false)
const currentImage = ref(0)
const sections = ref([])
const fadeItems = ref([])
let observer = null
const selectedDevelopment = developments.find(dev => dev.slug === route.params.slug) || developments[0]

useHead({
  title: selectedDevelopment.name + ' | Miracle Land',
  meta: [
    { name: 'description', content: selectedDevelopment.shortdescription },
    { name: 'keywords', content: 'property for sale, ' + selectedDevelopment.location + ', ' + selectedDevelopment.type },
    { property: 'og:title', content: selectedDevelopment.name },
    { property: 'og:description', content: selectedDevelopment.shortdescription },
    { property: 'og:image', content: selectedDevelopment.bannerimage },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://miracleland.co/for-sale/' + selectedDevelopment.slug },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: selectedDevelopment.name },
    { name: 'twitter:description', content: selectedDevelopment.shortdescription },
    { name: 'twitter:image', content: selectedDevelopment.bannerimage }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: selectedDevelopment.name,
        image: selectedDevelopment.bannerimage,
        url: 'https://miracleland.co/for-sale/' + selectedDevelopment.slug,
        address: {
          '@type': 'PostalAddress',
          addressLocality: selectedDevelopment.location,
          addressRegion: selectedDevelopment.state,
          addressCountry: 'Malaysia'
        },
        priceRange: selectedDevelopment.price
      })
    }
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

onBeforeRouteUpdate((to, from, next) => {
  const newSlug = to.params.slug
  development.value = developments.find(item => item.slug === newSlug) || null
  next()
})

const updateLayout = () => {
  const container = document.querySelector('.products-grid')
  const cards = document.querySelectorAll('.product-card')

  if (!container) return // Prevent errors if container doesn't exist

  if (cards.length < 4) {
    container.style.display = 'flex'
    container.style.justifyContent = 'center'
    container.style.flexWrap = 'wrap'
  } else {
    container.style.display = 'grid'
    container.style.gridTemplateColumns = 'repeat(3, minmax(400px, 1fr))'
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

const showLess = () => {
  visibleCount.value = 3
}

const openPopup = (index) => {
  currentImage.value = index
  isPopupOpen.value = true
  document.body.style.overflow = 'hidden'
  emitToggleHeader(false) // Hide the header
}

const closePopup = () => {
  isPopupOpen.value = false
  document.body.style.overflow = 'auto'
  emitToggleHeader(true)
}

const emitToggleHeader = (value) => {
  // Emit the toggle-header event to the parent component
  const event = new CustomEvent('toggle-header', { detail: value })
  document.dispatchEvent(event)
}

onMounted(() => {
  document.addEventListener('toggle-header', (event) => {
    console.log('Header toggled:', event.detail)
  })
})

// const prevImage = () => {
//   const galleryImages = development.value.galleryImages
//   currentImage.value = (currentImage.value - 1 + galleryImages.length) % galleryImages.length
// }

// Navigate to the next image
// const nextImage = () => {
//   const galleryImages = development.value.galleryImages
//   currentImage.value = (currentImage.value + 1) % galleryImages.length
// }

const filteredAmenities = computed(() => {
  // Get the location of the current development
  const name = development.value?.name

  // Return amenities for the location if it exists or an empty array otherwise
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
  opacity: 0;
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

.breadcrumbs-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.3); /* Dark overlay */
  z-index: 1;
}

.breadcrumbs {
  font-size: 16px;
  font-family: 'TitilliumWebRegular';
  color: white; /* Breadcrumb text color */
}

.breadcrumbs a {
  text-decoration: underline;
  color: white;
}

.breadcrumbs a:hover {
  color:#a39f1a;
}

@media (max-width: 768px) {
  .breadcrumbs {
    font-size: 14px;
  }
}

.hero-section {
  position: relative;
  height: 60vh; /* Full-screen height */
}

.overview-section {
  position: relative;
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center; /* Center logo horizontally */
  align-items: center; /* Center logo vertically */
}

.overview-image{
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.gradient-overlay {
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.logo-container {
  position: relative;
  z-index: 2; /* Ensure it's above the background image */
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px); /* Applies a blur effect */
  -webkit-backdrop-filter: blur(2px); /* For Safari support */
  padding: 10px;
  box-shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-image {
  width: 120px;
  height: auto;
}

.information-overlay {
  position: relative; /* Changed from absolute to relative */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -40px;
  z-index: 2; /* Still above the gradient overlay */
}

.info-overlay {
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.info-details {
  display: flex;
  background: white;
  height: auto;
  width: 60vw;
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow:visible;
}

.info-item{
  padding: 0 10px;
  width: 320px;
  text-align: center;
}

.info-item-1{
  padding: 0 10px;
}

.info-item h4 {
  font-size: 14px;
  font-family: 'TitilliumWebBold';
  color: #666;
  margin-bottom: -10px;
}

.info-item p {
  font-size: 16px;
  font-family: 'TitilliumWebBold';
  color: #333;
}

.divider {
  width: 2px;
  background-color: #00B398;
  margin: 15px 0;
}

.intro-section {
  text-align: center;
  padding: 0px 1%;
  padding-top: 150px;
  margin-top: -10px;
}

.main-heading {
  font-size: 48px;
  font-family: 'RecklessNeueMedium';
  margin-bottom: 30px;
  color: #1e1e1e;
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

.sub-heading {
  font-size: 18px;
  font-family: 'TitilliumWebRegular';
  line-height: 27px;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 60px;
  color: #1e1e1e;
  margin: 0 auto;
}

@media (max-width: 768px) {

.info-item p{
  font-size: 14px;
}

.info-details {
    width: 80vw;
    height:auto;
  }

.main-heading {
  font-size: 40px;
}
}

@media (max-width: 550px) {

.info-details {
    width: 90vw;
    height:auto;
  }

.main-heading {
  font-size: 32px;
}
}

.card-section {
  text-align: center;
  padding: 20px 1%;
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
  width: 30vw;
  height: 45vh;
  max-width: min-content;
  max-width: min-content;
  border-bottom: 3px solid #759403;
}

.card-title {
  font-size: 18px;
  font-family: 'TitilliumWebBold';
  line-height: 29px;
  color: rgb(255, 255, 255);
  text-align: center;
  height: 100px;
}

.card:hover {
  transform: translateY(-5px);
}

@media (max-width: 1024px) {

.card-grid .card:nth-child(3) {
  display: none;
}

.card img {
  width: 45vw;
}

.card-title {
  font-size: 16px;
  line-height: 24px;
}
}

@media (max-width: 768px) {

.card img {
  width: 75vw;
}

.card-grid .card:nth-child(2) {
  display: none;
}

.card-title {
font-size: 16px;
line-height: 20px;
}
}

@media (max-width: 480px) {

.card img {
  width: 80vw;
  height: 35vh;
}
}

.rectangle-section {
  position:static;
  display: flex;
  width: 100%;
  height: 230px;
  margin-top: -260px;
  background-color: #08463c;
}

.products-section {
  text-align: center;
  padding: 20px;
  padding-top: 10px;
}

.products-section h2 {
  padding-top: 50px;
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  line-height: 48px;
  color: #1e1e1e;
}

.product-grid {
  display: flex;
  justify-content: center;
}

.products-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(370px, 1fr)); /* Responsive grid */
  justify-content: center; /* Center the grid within the container */
  padding-top: 10px;
}

@media (min-width: 1441px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  }
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, minmax(370px, 1fr));
  }
}

@media (max-width: 800px) {
  .products-grid {
    grid-template-columns: repeat(1, minmax(370px, 1fr));
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
}

.product-card {
  border: 1px solid #ddd;
  text-align: center;
  align-items: center;
  font-family: 'TitilliumWebRegular';
  overflow: hidden;
  width: 370px;
  flex-grow: 1;
  background-color: white;
  margin: 10px 0; /* Add vertical spacing between cards */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .product-card {
    max-width: 100%;
  }
}

.card-grid.flex-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-image {
  width: 100%;
  height: 242px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
  text-align: left;
}

.product-info h3 {
  font-size: 21px;
  font-family: 'TitilliumWebSemiBold';
  margin-top: -3px;
  line-height: 31px;
}

.product-location {
  text-align: left;
  margin-top: -10px;
  margin-bottom: 19px;
}

.icon {
  font-size: 20px;
  color: #08463c;
  margin-right: 10px;
}

.text-product-location {
  font-size: 16px;
  line-height: 24px;
  color: #000;
}

.q-separator {
  margin: 0 -15px; /* Extend beyond the padding */
}

.product-toolbar {
  display: flex; /* Ensures elements are placed in a row */
  align-items: center; /* Centers content vertically */
  padding: 0; /* Optional: Adjust padding to create space around */
  margin-bottom: -7px;
}

.product-item,
.product-item-1 {
  flex: 1; /* Makes both items take up equal space */
  text-align: left; /* Optional: Center-aligns content */
}

.product-item h4 {
  font-size: 16px;
  color: rgb(109, 114, 120);
  margin-bottom: 0px;
  margin-top: 4px;
  white-space: nowrap;
}

.product-item p {
  font-size: 16px;
  color: black;
  margin-top: -10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.truncated-text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.product-item p,
.product-item-1 p {
  width: 150px;
}

.product-item-1 h4 {
  font-size: 16px;
  color: rgb(109, 114, 120);
  margin-bottom: 0px;
  margin-top: 0px;
  padding-left: 30px;
}

.product-item-1 p {
  font-size: 16px;
  padding-left: 30px;
  margin-top: -6px;
  color: black;
}

.icon1 {
  font-size: 17px;
  color: #08463c;
  margin-right: 10px;
}

.product-feature-list {
  padding: 20px 0;
  padding-top: 15px;
  height: 162px;
  text-align: left;
}

.product-feature-item {
  display: flex;
  padding: 5px 0;
  padding-bottom: 7px;
  align-items: center;
}

.product-feature {
  font-size: 16px;
  line-height: 24px;
  margin-left: 5px;
}

.btn-more {
  padding: 30px 0;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 14px;
}

.btn-more-1 {
  padding-top: 50px;
}

.learn-more-btn {
  background-color: transparent;
  border: 1px solid black;
  color: #000000;
  font-family: 'AvenirMedium';
  font-size: 15px;
  padding: 11px 60px;
  margin-top: -10px;
  margin-bottom: -10px;
  width: 185px;
  border-radius: 0;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #a39f1a;
  border: 2px solid #a39f1a;
  color: #fff;
  transform: translateY(-3px);
}

.load-more-btn{
  background-color: transparent;
  border: 2px solid black;
  color: #000000;
  font-family: 'AvenirMedium';
  font-size: 17px;
  padding: 10px 20px;
  white-space: nowrap;
  width: 175px;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.load-more-btn:hover {
  background-color: #a39f1a;
  border: 2px solid #a39f1a;
  color: #fff;
  transform: translateY(-3px);
}

@media (max-width: 1024px) {

  .product-info h3 {
    font-size: 18px;
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
  font-family: 'RecklessNeueMedium';
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
  width: 200px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  font-family: 'AvenirMedium';
  transition: background-color 0.3s ease;
}

.visit-gallery-btn:hover {
  background-color: #a39f1a;
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
  padding-left: 5%;
  padding-right: 5%;
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
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.gallery-popup-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.carousel {
  width: fit-content;
  height: fit-content;
}

.carousel-image {
  width: 90vw;
  height: 80vh;
  max-width: min-content;
  max-height: min-content;
}

.popup-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  border-radius: 30%;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
}

.popup-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 480px) {
  .carousel-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-image {
    width: 90vw;
    height: auto; /* Maintain aspect ratio */
    object-fit: contain; /* Ensures the image is fully visible */
    display: block;
    margin: 0 auto; /* Center the image horizontally */
  }

  .popup-close {
  top:5px;
  right: 5px;
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
  font-family: 'RecklessNeueMedium';
  color: #1e1e1e;
}

.location-container {
  display: flex;
  flex-direction: row; /* Arrange items in a row */
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 5%;
  padding-right: 5%;
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
    font-family: 'TitilliumWebBold';
    cursor:default;
  }

  .amenities-expand {
    font-size: 16px;
    color: white;
    font-family: 'TitilliumWebSemiBold';
    line-height: 24px;
  }

  .amenities-child {
    font-size: 16px;
    line-height: 24px;
    color: antiquewhite;
    font-family: 'TitilliumWebSemiBold';
    cursor: default;
  }

  .amenities-location {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Push items to opposite ends */
  /* border: 2px solid wheat; Border for the whole container */
}

.amenities-name {
  display: flex;
  text-align: start; /* Align the name at the start */
  /* border: 2px solid #a7a4a4; */
  max-width: 13vw;
  min-height: 40px;
  white-space: wrap;
}

  .amenities-km {
    display: flex;
    flex-direction: row;
    justify-content: end; /* Align km at the end */
  /* border: 2px solid white; */
  }

/* For screens larger than 768px */
@media (max-width: 1024px) {

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
  padding-left: 0px;
  padding-right: 0px;
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
