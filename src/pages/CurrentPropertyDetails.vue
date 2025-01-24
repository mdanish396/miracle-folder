<template>
  <q-page class="property-details-page">
    <div class="property-hero">
      <div v-if="property">
        <div class="hero-section-1">
          <div class="before-hero-section"></div>
          <div class="hero-section">
            <img :src="property.image" alt="Property Image" class="hero-image fade-up" />
            <div class="property-section">
              <div class="property-grid">
                <div class="property-card">
                  <div class="property-info">
                    <h3 class="property-name fade-up">{{ property.name }}</h3>
                    <div class="property-location fade-up">
                      <i class="fas fa-map-marker-alt icon"></i>
                      <span class="text-property-location">
                        {{ property.location }}
                      </span>
                    </div>
                    <q-separator/>
                    <q-toolbar class="property-toolbar fade-up delay-1">
                      <div class="property-item ">
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
                    <div class="property-feature-list fade-up delay-2">
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

                    <div class="property-button fade-up delay-3">
                      <q-btn
                        stack
                        flat
                        @click="open(property.vr)"
                        class="property-btn">
                        <img src="src/assets/vr camera.svg" class="icon-2">
                        <span class="text-btn">VIRTUAL TOUR</span>
                      </q-btn>

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
                    <div class="register-button fade-up delay-4">
                      <q-btn flat @click="scrollToRegister" class="register-btn">
                        <span class="register-text-btn">Register Now</span>
                      </q-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="description-section">
        <h2 class="fade-up">{{ property.name }}</h2>
        <p class="fade-up delay-1">{{ property.description }}</p>
        <div class="description-icon"></div>
      </div>

      <!-- Gallery Section -->
      <div class="gallery-section" id="section-gallery">
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

                    <!-- Center Image -->
          <div
            v-if="property.gallery[2]"
            :key="2"
            class="gallery-item">
            <img
              :src="property.gallery[2]"
              @click="openPopup(2)"
              loading="lazy"
              alt="Center Image"/>
            <div class="gallery-overlay">
              <button class="visit-gallery-btn" @click="openPopup(2)">Visit Gallery</button>
            </div>
          </div>

          <!-- Right Image -->
          <div
            v-if="property.gallery[3]"
            :key="2"
            class="gallery-item">
            <img
              :src="property.gallery[3]"
              @click="openPopup(3)"
              loading="lazy"
              alt="Right Image"/>
            <div class="gallery-overlay"></div>
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
            class="carousel"
          >
            <q-carousel-slide
              v-for="(image, index) in property.gallery"
              :key="index"
              :name="index"
            >
              <img :src="image" alt="Carousel Image" class="carousel-image" />
            </q-carousel-slide>
          </q-carousel>
         </div>
        </div>
      </div>
    </div>

    <!-- Floor Plan Section -->
    <div class="floorplan-section" id="section-floorplan">
      <h2 class="floorplan-title fade-up">Floorplan</h2>
      <div class="line-holder fade-up delay-1">
        <div class="line">
          <div class="line-1">
            <div class="line-2"></div>
          </div>
        </div>
      </div>
      <div class="floorplan-container">
        <!-- Header Section -->
        <div class="floorplan-header">
          <div class="plan-select fade-up delay-2">
            <select v-model="selectedPlan" class="custom-select">
              <option
                v-for="(plans, planType) in currentFloorplans"
                :key="planType"
                :value="planType">
                {{ planType }}
              </option>
            </select>
          </div>
          <div class="plan-price fade-up delay-2">
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
                <div class="details-grid fade-up delay-3">
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
                <div class="floorplan-buttons fade-up delay-4">
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
        <div class="location-map fade-up delay-2" v-if="property">
          <iframe
            :src="property.map"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div class="amenities fade-up delay-3" v-if="computedNearbyAmenities">
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
              class="amenities-expand">
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
                  class="amenities-child">
                  <q-item-section class="amenities-location">
                    <span class="amenities-name">{{ location.name }}</span>
                    <q-space/>
                      <span class="amenities-km">{{ location.distance }}</span>
                  </q-item-section>
                </q-item>
              </div>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>

    <div class="register" id="section-register">
      <div class="register-container">
        <div class="register-wrapper">
          <!-- Left Section -->
          <div class="register-left">
            <h2 class="register-title fade-up">Contact Details</h2>
            <div class="register-line-holder fade-up delay-1">
              <div class="register-line">
                <div class="register-line-1">
                </div>
              </div>
            </div>
            <h5 class="address-title fade-up delay-2">Address</h5>
            <address class="fade-up delay-3">
              No. 1, Tingkat Basement, Jalan Dagang 2,<br>
              Kampung Bukit Angin, 28000 Temerloh, Pahang<br>
            </address>

            <div class="map-button fade-up delay-2">
              <button @click="gotofullmap" class="btn view-full-map-btn">
                    <img src="src/assets/brochure.svg" alt="Map" />
                    View Full Map
                  </button>
            </div>
            <h5 class="contact-title fade-up delay-2">Contact Number</h5>
            <div class="fade-up delay-3">
              <i class="fa fa-phone phone-icon"></i>
                <span class="contact-no">
                  019-296 6666
                </span>
            </div>
            <h5 class="email-title fade-up delay-2">General Enquiries</h5>
            <p class="email-subtitle fade-up delay-2">For general questions, please write to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
                <span class="email-address">
                  enquiries@woha.net
                </span>
            </div>
            <h5 class="email-title fade-up delay-2">Job Application & Internship</h5>
            <p class="email-subtitle fade-up delay-2">We're always on the lookout for talented people - please send us <br> your CV and portfolio (no larger than 5MB) to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
                <span class="email-address">
                  hmnrs.md3@gmail.com
                </span>
              <div>
                <i class="fa fa-phone phone-icon"></i>
                <span class="contact-no">
                  011-69999888
                </span>
              </div>
            </div>
            <h5 class="email-title fade-up delay-2">Business Enquiries</h5>
            <p class="email-subtitle fade-up delay-2">For any new business enquiries, please write to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
                <span class="email-address">
                  kevin@interplandesigns.com
                </span>
            </div>
            <h5 class="business-title fade-up delay-2">Business Hours</h5>
            <div class="fade-up delay-3">
              <i class="fas fa-business-time calendar-icon"></i>
                <span class="business-hours">
                  Mon - Sat , 9am - 5pm
                </span>
            </div>
          </div>

          <!-- Right Section -->
          <div class="register-right">
            <h2 class="fade-up delay-1">Got A Question?</h2>
            <div class="register-line-holder fade-up delay-2">
              <div class="register-line">
                <div class="register-line-1">
                </div>
              </div>
            </div>
            <p class="fade-up delay-3">Just send us your details, and our Miracle Land Relationship Associates will get back to you!</p>
            <form class="register-form fade-up delay-4">
              <input type="text" placeholder="Name*" required>
              <input type="email" placeholder="Email*" required>
              <input type="tel" placeholder="Telephone*" required>
              <select>
                <option disabled selected>Select enquiry type</option>
                <option>General</option>
                <option>Interested Project</option>
                <option>Consultation</option>
                <option>Business</option>
                <option>Contractor</option>
              </select>
              <textarea placeholder="Questions/Comments*" required></textarea>
              <button type="submit" class="submit-btn">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Similar Properties Section-->
    <div v-if='visibleSimilarProperties.length > 0' class="products-section">
      <h2 class="fade-up">Similar Properties</h2>
      <div class="line-holder fade-up delay-1">
        <div class="line">
          <div class="line-1">
            <div class="line-2"></div>
          </div>
        </div>
      </div>
      <div class="product-grid">
        <div class="products-grid fade-up delay-2">
          <div class="product-card" v-for="property in similarProperties" :key="property.id">
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
      </div>
      <div class="btn-more-1 fade-up delay-3" v-if="visibleSimilarProperties.length > visibleCount">
        <q-btn
        flat
        label="Load More"
        class="learn-more-btn"
        @click="loadMore"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, onUnmounted, ref, onBeforeUnmount, computed, watchEffect } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { properties } from 'src/components/Properties/CurrentProperties/CurrentPropertiesData.vue'
import { floorplan } from 'src/components/Properties/CurrentProperties/CurrentPropertiesFloorplan.vue'
import { nearbyAmenities } from 'src/components/Properties/CurrentProperties/CurrentDevelopmentAmenitiesData.vue'

// Assuming you have a store or an API to fetch properties
const route = useRoute()
const router = useRouter()
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
const selectedProperty = ref(property.value?.name || '') // Default to the current property name
const visibleCount = ref(3)
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

const open = (vr) => {
  window.open(vr, '_blank')
}

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

const scrollToRegister = () => {
  const registerSection = document.getElementById('section-register')

  if (registerSection) {
    registerSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const gotofullmap = () => {
  window.open('https://maps.app.goo.gl/XcCFgR9Lg8vpdLfh7', '_blank')
}

const openImage = (plan) => {
  selectedPlanImage.value = plan
  showPopup.value = true
  resetImagePosition()
  document.body.style.overflow = 'hidden'
  emitToggleHeader(false) // Hide the header
}

const ClosePopup = () => {
  showPopup.value = false
  document.body.style.overflow = 'auto'
  emitToggleHeader(true)
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

watchEffect(() => {
  if (property.value) {
    selectedProperty.value = property.value.name
    const firstPlan = Object.keys(floorplan[property.value.name]?.[0] || {})[0]
    selectedPlan.value = firstPlan || '' // Update the selected plan
  }
})

const similarProperties = computed(() => {
  return flattenedProperties.filter(
    (item) =>
      item.place === property.value?.place && item.id !== property.value?.id
  )
})

const visibleSimilarProperties = computed(() => {
  return similarProperties.value.slice(0, visibleCount.value)
})

const navigateToPropertyDetails = (slug) => {
  router.push({ path: `/property/${slug}` })
}

onBeforeRouteUpdate((to, from, next) => {
  const newSlug = to.params.slug
  const newProperty = flattenedProperties.find(item => item.slug === newSlug) || null
  if (newProperty) {
    property.value = newProperty
  }next()
})

const loadMore = () => {
  visibleCount.value += 3 // Increment by the number of items to load
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
  font-family: 'TitilliumWebBoldItalic';
  src: url('src/assets/fonts/TitilliumWeb-BoldItalic.ttf') format('truetype');
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
.fade-up.delay-4 {
  transition-delay: 0.8s;
}

.property-hero{
  font-family: Arial, sans-serif;
  color: #333;
}

.before-hero-section {
  position:static;
  display: flex;
  height: 65vh;
  background-color: #08463c;
  margin-left: -20px;
  margin-right: -20px;
}

.hero-section-1{
  padding: 20px 20px;
  margin-top: -20px;
  overflow-x: hidden;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 87vh;
  margin-top: -420px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.hero-image {
  margin-top: 20px;
  margin-left: 20px;
  padding-bottom: 20px;
  width: 46vw;
  height: 80vh;
  max-width: min-content;
  border-radius: 2px;
}

.property-section{
  padding: 0px 50px;
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
  font-family: 'TitilliumWebSemiBold';
  color: #1e1e1e;
  text-align: left;
  padding-left: 20px;
}

.property-location {
  text-align: left;
  padding-left: 20px;
  margin-top: -20px;
  margin-bottom: 20px;
}

.icon {
  font-size: 16px;
  color: #08463c;
  margin-right: 10px;
}

.text-property-location {
  font-size: 17px;
  font-family: 'TitilliumWebRegular';
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
  white-space: nowrap;  /*all text in this will be in straight line */
}

.property-item {
  text-align: left;
}

.property-item h4 {
  font-family: 'TitilliumWebRegular';
  font-size: 18px;
  line-height: 27px;
  color: rgb(109, 114, 120);
  margin-bottom: 0px;
  padding-left: 10px;
}

.property-item p {
  font-family: 'TitilliumWebSemiBold';
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
  font-family: 'TitilliumWebRegular';
  font-size: 15px;
  line-height: 23px;
  margin-left: 10px;
  color: #000;
}

.property-button {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.icon-2 {
  width: 30px;
  height: 30px;
  transition: filter 0.3s ease; /* Smooth transition */
}

.text-btn {
  font-family: 'TitilliumWebSemiBold';
  font-size: 14px;
}

.property-btn {
  background-color: transparent;
  border: 2px solid #08463c;
  color: #000000;
  padding: 0px 10px;
  border-radius: 0;
  width: 130px;
  height: 80px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.property-btn:hover {
  background-color: #08463c;
  color: white;
}

.property-btn:hover .icon-2 {
  filter: invert(1); /* Invert the icon color when button is hovered */
}

.register-button {
  padding-top: 20px;
}

.register-btn {
  background-color: transparent;
  border: 2px solid #08463c;
  color: #000000;
  font-weight: bold;
  padding: 0px 20px;
  border-radius: 0;
  width: 150px;
  height: 50px;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.register-btn:hover {
  background-color: #08463c;
  color: white;
}

.register-text-btn {
  font-size: 14px;
  font-family: 'TitilliumWebSemiBold';

}

.q-tooltip {
  display: inline-block;
}

@media (max-width: 1252px) {

  .property-toolbar {
    gap: 30px;
  }

}

@media (max-width: 1104px) {
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

@media (max-width: 560px) {

  .before-hero-section {
  height: 106vh;
}

.hero-section {
  margin-top: -700px;
}

.property-section{
  padding: 20px 10px;
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
  margin: 30px 40px;
  text-align: center;
  padding-top: 20px;
}

.description-section h2{
  font-size: 48px;
  line-height: 56px;
  font-family: 'TitilliumWebBold';
  color: #777777;
  text-transform: uppercase;
}

.description-section p{
  font-family: 'TitilliumWebRegular';
  font-size: 18px;
  line-height: 27px;
  padding: 10px 150px;
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

.gallery-section {
  padding: 0px;
  padding-top: 20px;
  text-align: center;
}

.gallery-section h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  line-height: 48px;
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
  max-width: 25%;
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
  .gallery-grid {
  padding-left: 40px;
  padding-right: 40px;
}
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
  width: 75vw;
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

 /*Floorplan Section */
.floorplan-section {
  margin-top: 60px;
  padding: 20px 200px;
  text-align: center;
  background-color:#fff;
}

.floorplan-title {
  font-family: 'RecklessNeueMedium';
  padding-top: 40px;
  font-size: 48px;
  line-height: 48px;
}

.floorplan-container {
  background-color: white;
  border: 1px solid #ddd;
  padding-bottom: 20px;
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
  font-family: 'TitilliumWebRegular';
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
  font-family: 'TitilliumWebRegular';
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
  font-family: 'TitilliumWebRegular';
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
  font-family: 'TitilliumWebBold';
  font-size: 14px;
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

@media (max-width: 1000px) {
  .floorplan-section {
  padding: 20px 110px;
}
}

@media (max-width: 768px) {
  .floorplan-section {
  padding: 20px 20px;
}

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
  width: 250px;
  justify-content: center;
}
}

@media (max-width: 580px) {

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
  z-index: 1;
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
  max-width: min-content;
  max-height: min-content;
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
  padding-bottom: 20px;
}

.location-title {
  text-align: center;
}

.location-section h2 {
  font-family: 'RecklessNeueMedium';
  padding-top: 20px;
  font-size: 48px;
  line-height: 48px;
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
    font-family: 'TitilliumWebSemiBold';
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    cursor:default;
  }

  .amenities-expand {
    font-size: 16px;
    font-family: 'TitilliumWebSemiBold';
    color: antiquewhite;
    line-height: 24px;
  }

  .amenities-child {
    font-size: 16px;
    line-height: 24px;
    font-family: 'TitilliumWebSemiRegular';
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

/* Contact Us Section */
.register {
  color: #000;
  background-color: white;
  padding: 40px 100px;
  padding-top: 0px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-line-holder {
  position: static;
  margin-top: -20px;
}

.register-line {
  display: inline-block;
  width: 12px; /* Thickness of the line */
  height: 3px; /* Height of the line */
  background-color: #08463c; /* Gold accent */
  padding-inline: 45px;

}

.register-line-1 {
  display: inline-block;
  width: 170px; /* Thickness of the line */
  height: 1px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-bottom: 13px; /* Space between the line and text */
  margin-inline-start: 45px;
}

.register-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  overflow: hidden;
}

.register-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.register-left, .register-right {
  flex: 1;
  width: 100%;
}

.register-left {
  padding: 0px 10px;
  padding-left: 30px;
}

.register-left .register-title {
  font-family: 'RecklessNeueMedium';
  margin-bottom: 35px;
  white-space: nowrap;
  font-size: 36px;
}

.address-title {
  font-family: 'TitilliumWebSemiBold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 0px;
}

.register-left p {
  font-family: 'TitilliumWebRegular';
  font-size: 16px;
  line-height: 21px;
}

.register-left address {
  font-family: 'TitilliumWebRegular';
  font-style: normal;
  margin-bottom: 0px;
  font-size: 16px;
  line-height: 21px;
}

.map-button {
  padding-top: 20px;
}

.view-full-map-btn {
  border: 2px solid #08463c;
  color: #08463c;
}

.view-full-map-btn:hover img {
  filter: invert(1);
}

.contact-title {
  font-family: 'TitilliumWebSemiBold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.phone-icon {
  font-size: 16px;
  color: #08463c;
  margin-right: 10px;
}

.contact-no {
  font-family: 'TitilliumWebRegular';
  font-style: normal;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
}

.email-title {
  font-family: 'TitilliumWebSemiBold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.register-left .email-subtitle {
  font-family: 'TitilliumWebRegular';
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: -15px;
  color: #555;
}

.email-icon {
  font-size: 16px;
  color: #08463c;
  margin-right: 10px;
}

.email-address {
  font-family: 'TitilliumWebRegular';
  font-style: normal;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
}

.email-subtitle br {
  display: none;
}

.business-title {
  font-family: 'TitilliumWebSemiBold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.calendar-icon {
  font-size: 16px;
  color: #08463c;
  margin-right: 10px;
}

.business-hours {
  font-family: 'TitilliumWebRegular';
  font-style: normal;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
}

/* Right Section */
.register-right {
  padding: 0px 10px;
}

.register-right h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 36px;
  margin-bottom: 35px;
  white-space: nowrap;}

.register-right p {
  font-family: 'TitilliumWebRegular';
  font-size: 16px;
  line-height: 21px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.register-form input,
.register-form textarea,
.register-form select {
  width: 100%;
  padding: 10px;
  border: 1px solid #5555555e;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
}

.register-form textarea {
  resize: none;
  height: 100px;
}

.register-form select {
  font-size: 0.9rem;
  cursor: pointer;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #555;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

@media (min-width: 900px){
  .register-wrapper {
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }

  .register-container {
    gap: 40px;
  }

  .register-right {
    width: 450px;
  }
}

@media (min-width: 1024px) {
  .email-subtitle br {
    display: initial;
  }
}

@media (max-width: 786px){

  .register {
  padding: 40px 20px;
}

}

@media (max-width: 520px){
  .register-left address br:first-child {
    display: none;
  }

  .register-left .register-title {
    font-size: 34px;
  }

  .address-title {
  font-size: 17px;
}
}

@media (min-width: 1024px){
  .register-wrapper {
    gap: 150px;
  }
}

.products-section {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 130px;
  background-color: #e8e1d3;
}

.products-section h2 {
  padding-top: 50px;
  font-size: 48px;
  line-height: 48px;
  font-family: 'RecklessNeueMedium';
  color: #1e1e1e;
}

.product-grid {
display: flex;
justify-content: center;
}

.products-grid {
display: grid;
gap: 5px;
grid-template-columns: repeat(3, minmax(340px, 1fr)); /* Responsive grid */
justify-content: center; /* Center the grid within the container */
padding-left: 10%;
padding-right: 10%;
padding-top: 10px;
}

@media (max-width: 1180px) {
.products-grid {
  grid-template-columns: repeat(2, minmax(340px, 1fr));
}
}

@media (max-width: 800px) {
.products-grid {
  grid-template-columns: repeat(1, minmax(340px, 1fr));
}
}

.product-card {
  border: 1px solid #ddd;
  text-align: center;
  align-items: center;
  font-family: 'TitilliumWebRegular';
  overflow: hidden;
  width: 340px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
  font-family: 'TitilliumWebBold';
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
  white-space: nowrap;
}

.product-item p {
  font-size: 16px;
  line-height: 24px;
  color: black;
  padding-left: 10px;
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
  height: 200px;
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
  padding: 40px 0;
}

.btn-more-1 {
  padding-top: 50px;
}

.learn-more-btn {
  background-color: transparent;
  border: 2px solid black;
  color: #000000;
  font-family: 'AvenirMedium';
  font-size: 15px;
  padding: 15px 60px;
  margin-top: -10px;
  margin-bottom: -10px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.learn-more-btn:hover {
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

/* Small screens (768px and below) */
@media (max-width: 768px) {

  .product-info h3 {
    font-size: 18px;
  }

}

/* Extra small screens (480px and below) */
@media (max-width: 480px) {
  .products-section h2 {
    font-size: 32px;
  }

  .learn-more-btn {
    font-size: 14px;
  }
}
</style>
