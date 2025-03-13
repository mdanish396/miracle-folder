<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <q-page class="property-details-page">
    <div>
      <div v-if="property">
        <div class="property-hero">
          <q-breadcrumbs class="breadcrumbs">
            <q-breadcrumbs-el label="Home" to="/" />
            <q-breadcrumbs-el
              :label="truncateLabel(property.place)"
              :to="`/developments/${developmentSlug}`">
              <q-tooltip v-if="$q.screen.lt.sm">{{ property.place }}</q-tooltip>
            </q-breadcrumbs-el>
            <q-breadcrumbs-el :label="truncateLabel(property.name)" >
              <q-tooltip v-if="$q.screen.lt.sm">{{ property.name }}</q-tooltip>
            </q-breadcrumbs-el>
          </q-breadcrumbs>
          <div class="property-hero-container">
            <div class="property-hero-image">
              <img :src="property.image" alt="Property Image" class="hero-image fade-up" />
            </div>
            <div class="property-hero-content">
              <div class="property-hero-info">
                <h3 class="property-name fade-up">{{ property.name }}</h3>
                <div class="property-location fade-up">
                   <i class="fas fa-map-marker-alt icon"></i>
                    <span class="text-property-location">
                      {{ property.location }}
                    </span>
                </div>
                <q-separator />
                <div class="property-toolbar-wrapper">
                  <div class="property-toolbar fade-up delay-1">
                    <div class="property-item">
                      <h4>Type</h4>
                      <p class="truncated-text">
                        {{ property.housetype }}
                        <q-tooltip>{{ property.housetype }}</q-tooltip>
                      </p>
                    </div>
                    <div class="property-item">
                      <h4>From</h4>
                      <p>{{ formatPrice(property.price) }}</p>
                    </div>
                    <div class="property-item">
                      <h4>Status</h4>
                      <p class="space">{{ property.status }}</p>
                    </div>
                  </div>
                </div>

                <q-separator />
                <div class="property-feature-list fade-up delay-2">
                  <div
                    v-for="feature in property.features"
                    :key="feature"
                    class="property-feature-item">
                    <i class="fa fa-check-circle-o icon-1"></i>
                    <span class="property-feature">
                      {{ feature }}
                    </span>
                  </div>
                </div>
                <div class="property-button fade-up delay-3">
                  <q-btn
                    stack
                    flat
                    :disable="!property.vr"
                    @click="property.vr ? open(property.vr) : null"
                    class="property-btn">
                    <img src="/assets/vr camera.svg" class="icon-2">
                    <span class="text-btn">VIRTUAL TOUR</span>
                  </q-btn>

                  <q-btn
                    stack
                    flat
                    :disable="!property.plan"
                    @click="property.plan ? scrollToFloorplan() : null" class="property-btn">
                    <img src="/assets/floor.svg" class="icon-2">
                    <span class="text-btn">FLOOR PLANS</span>
                  </q-btn>

                  <q-btn
                    stack
                    flat
                    @click="scrollToGallery"
                    class="property-btn">
                    <img src="/assets/gallery.svg" class="icon-2">
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

      <div class="description-section">
        <h2 class="fade-up">{{ property.name }}</h2>
        <p class="fade-up delay-1">{{ property.description }}</p>
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
              alt="Left Image"
            />
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
              alt="Center Image"
            />
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
              alt="Center Image"
            />
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
              alt="Right Image"
            />
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
              style="background: none !important;"
              class="carousel">
              <q-carousel-slide
                v-for="(image, index) in property.gallery"
                :key="index"
                :name="index"
                style="padding: 0; margin: 0; display: flex; align-items: center; justify-content: center;">
                <img :src="image" alt="Carousel Image" class="carousel-image" />
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
      </div>
    </div>

    <!-- Floor Plan Section -->
    <div v-if="property.plan" class="floorplan-section" id="section-floorplan">
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
            {{ property.name }}
          </div>
          <div class="plan-price fade-up delay-2">
            Price From <span class="price">{{ property.price }}</span>
          </div>
        </div>

        <!-- Floorplan Details Section -->
        <div class="floorplan-details">
          <div>
            <div class="details-floorplan">
              <div class="details-grid-items">
                <div class="details-grid fade-up delay-2">
                  <!-- Bedrooms -->
                  <div class="details-item" v-if="property.bedroom">
                    <img src="/assets/bed.png" alt="Bedroom" class="icon-5" />
                    <p>{{ property.bedroom }} Bedrooms</p>
                  </div>
                  <!-- Bathrooms -->
                  <div class="details-item" v-if="property.bathroom">
                    <img src="/assets/bathroom.svg" alt="Bathroom" class="icon-4" />
                    <p>{{ property.bathroom }} Bathrooms</p>
                  </div>
                  <!-- Area -->
                  <div class="details-item" v-if="property.area">
                    <img src="/assets/area.svg" alt="Area" class="icon-3" />
                    <p>{{ property.area }}</p>
                  </div>
                </div>

                <!-- Buttons Section -->
                <div class="floorplan-buttons fade-up delay-3">
                  <!-- <button @click="downloadBrochure(property.brochure)" class="btn download-btn">
                    <img src="/assets/brochure.svg" alt="Download" />
                    Download Brochure
                  </button> -->
                  <button @click="openImage(property.plan)" class="btn view-btn">
                    <img src="/assets/area.svg" alt="View" />
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
          <h2 class="popup-title">{{ property.name }}</h2>
          <div class="zoom-control">
            <button @click="zoomIn" class="close-btn"> <i class="fa fa-search-plus"></i></button>
            <button @click="zoomOut" class="close-btn"> <i class="fa fa-search-minus"></i></button>
            <button class="close-btn" @click="CloseImage"><i class="fa fa-times-circle"></i></button>
          </div>
        </div>

        <div class="popup-image-container"
          :class="{ grabbing: isDragging }"
          @mousedown="startDragging"
          @mousemove="dragImage"
          @mouseup="stopDragging"
          @mouseleave="stopDragging"
          @touchstart="startDragging"
          @touchmove="dragImage"
          @touchend="stopDragging">
          <img
            :src="property.plan"
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
                <div class="register-line-1"></div>
              </div>
            </div>
            <h5 class="address-title fade-up delay-2">Address</h5>
            <address class="fade-up delay-3">
              No. 1, Tingkat Basement, Jalan Dagang 2,<br>
              Kampung Bukit Angin, 28000 Temerloh, Pahang<br>
            </address>

            <div class="map-button fade-up delay-2">
              <button @click="gotofullmap" class="btn view-full-map-btn">
                <img src="/assets/brochure.svg" alt="Download" />
                  View Full Map
              </button>
            </div>
            <h5 class="contact-title fade-up delay-2">Contact Number</h5>
            <div class="fade-up delay-3">
              <i class="fa fa-phone phone-icon"></i>
              <a class="contact-no" href="tel:+60192966666">
                +60 19 296 6666
              </a>
            </div>
            <h5 class="email-title fade-up delay-2">General Enquiries</h5>
            <p class="email-subtitle fade-up delay-2">For general questions, please write to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
              <a class="email-address" href="mailto:kevin@interplandesigns.com">
                kevin@interplandesigns.com
              </a>
            </div>
            <h5 class="email-title fade-up delay-2">Job Application & Internship</h5>
            <p class="email-subtitle fade-up delay-2">We're always on the lookout for talented people - please send us <br> your CV and portfolio (no larger than 5MB) to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
              <a class="email-address" href="mailto:hmnrs.md3@gmail.com">
                hmnrs.md3@gmail.com
              </a>
              <div>
                <i class="fa fa-phone phone-icon"></i>
                <a class="contact-no" href="tel:+601169999888">
                  +60 116 9999 888
                </a>
              </div>
            </div>
            <h5 class="email-title fade-up delay-2">Business Enquiries</h5>
            <p class="email-subtitle fade-up delay-2">For any new business enquiries, please write to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
              <a class="email-address" href="mailto:kevin@interplandesigns.com">
                kevin@interplandesigns.com
              </a>
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
                <div class="register-line-1"></div>
              </div>
            </div>
            <p class="fade-up delay-3">Just send us your details, and our Miracle Land Relationship Associates will get back to you!</p>
            <form
              action="https://formspree.io/f/myzkjkew"
              method="POST"
              class="register-form fade-up delay-4">
              <!-- Name Field -->
              <input type="text" name="name" placeholder="Name*" required>

              <!-- Email Field -->
              <input type="email" name="email" placeholder="Email*" required>

              <!-- Telephone Field -->
              <input type="tel" name="telephone" placeholder="Telephone*" required>

              <!-- Enquiry Type Dropdown -->
              <select name="enquiryType" required>
                <option disabled selected>Select enquiry type</option>
                <option value="General">General</option>
                <option value="Interested Project">Interested Project</option>
                <option value="Consultation">Consultation</option>
                <option value="Business">Business</option>
                <option value="Contractor">Contractor</option>
              </select>

              <!-- Message Field -->
              <textarea name="message" placeholder="Questions/Comments*" required></textarea>

              <!-- Submit Button -->
              <button type="submit" class="submit-btn">SEND</button>
            </form>
            <div class="career">
              <h2 class="fade-up delay-1">Career Opportunities</h2>
              <div class="register-line-holder fade-up delay-2">
                <div class="register-line">
                  <div class="register-line-1"></div>
                </div>
              </div>
              <p class="fade-up delay-3">We are hiring talented, responsible, and hardworking individuals to join our dynamic team. Explore our career opportunities and grow with us!</p>
              <div class="fade-up delay-2">
                <q-btn
                  flat
                  label="APPLY NOW"
                  class="career-btn"
                  to="/careers"
                />
              </div>
            </div>
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
      <div class="product-grid fade-up delay-2">
        <div class="products-grid" :class="{ 'flex-layout': visibleSimilarProperties.length < 3 }">
          <div class="product-card" v-for="property in similarProperties" :key="property.id">
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
          @click="loadMore"/>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, onUnmounted, ref, onBeforeUnmount, computed } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { properties } from 'src/components/Properties/CurrentProperties/CurrentPropertiesData.vue'
import { nearbyAmenities } from 'src/components/Properties/CurrentProperties/CurrentDevelopmentAmenitiesData.vue'
import { useQuasar } from 'quasar'
import { developments } from 'src/components/Properties/CurrentProperties/CurrentDevelopmentData.vue'
import { useHead } from '@vueuse/head'

// Assuming you have a store or an API to fetch properties
const route = useRoute()
const $q = useQuasar()
const router = useRouter()
const propertySlug = route.params.slug
const flattenedProperties = Object.values(properties).flat()
const property = ref(flattenedProperties.find(item => item.slug === propertySlug))
const screenBelow540px = ref(window.innerWidth < 540)
const isPopupOpen = ref(false)
const currentImage = ref(0)
const selectedPlanImage = ref('')
const showPopup = ref(false)
const zoomLevel = ref(1)
const isDragging = ref(false)
const translateX = ref(0)
const translateY = ref(0)
const lastMouseX = ref(0)
const lastMouseY = ref(0)
const visibleCount = ref(3)
const sections = ref([])
const fadeItems = ref([])
let observer = null

useHead({
  title: property.value.name + ' | Miracle Land',
  meta: [
    { name: 'description', content: property.value.description },
    { name: 'keywords', content: 'property for sale, ' + property.value.location + ', ' + property.value.housetype },
    { name: 'geo.region', content: 'MY-' }, // Geo-targeting for Malaysia
    { name: 'geo.placename', content: property.value.location }, // Geo-targeting for the specific place
    { name: 'robots', content: 'index, follow' }, // Ensures search engines index the page
    { property: 'og:title', content: property.value.name },
    { property: 'og:description', content: property.value.description },
    { property: 'og:image', content: property.value.image },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://miracleland.co/developments/property/' + property.value.slug },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: property.value.name },
    { name: 'twitter:description', content: property.value.description },
    { name: 'twitter:image', content: property.value.image },
    { rel: 'canonical', href: 'https://miracleland.co/developments/property/' + property.value.slug } // Prevents duplicate content issues
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: property.value.name,
        image: property.value.image,
        url: 'https://miracleland.co/developments/property/' + property.value.slug,
        address: {
          '@type': 'PostalAddress',
          addressLocality: property.value.location,
          addressCountry: 'Malaysia'
        },
        priceRange: property.value.price
      })
    }
  ]
})

function formatPrice (price) {
  return price.replace(/RM (\d+)k\*/, (match, p1) => `RM ${p1},000*`)
}

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

const truncateLabel = (text, length = 20) => {
  return $q.screen.lt.sm && text.length > length ? text.substring(0, length) + '...' : text
}

// Find the matching development slug from the developments array
const developmentSlug = computed(() => {
  const development = developments.find(dev => dev.name === property.value.place)
  return development ? development.slug : ''
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

const open = (vr) => {
  if (!property.value.vr) return

  window.open(vr, '_blank')
}

const scrollToGallery = () => {
  const gallerySection = document.getElementById('section-gallery')

  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToFloorplan = () => {
  if (!property.value.plan) return

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

// const downloadBrochure = (file) => {
//   window.open(file, '_blank')
// }

const openImage = (plan) => {
  if (!plan) return
  selectedPlanImage.value = plan
  showPopup.value = true
  setTimeout(() => { // Wait for popup to open, then reset zoom
    resetImagePosition()
  }, 50)
  document.body.style.overflow = 'hidden'
  emitToggleHeader(false) // Hide the header
}

const CloseImage = () => {
  showPopup.value = false
  document.body.style.overflow = 'auto'
  emitToggleHeader(true)
}

const resetImagePosition = () => {
  setTimeout(() => {
    const popupContainer = document.querySelector('.popup-image-container')
    const imgElement = document.querySelector('.popup-image')

    if (!popupContainer || !imgElement) return

    // Reset zoom level
    zoomLevel.value = 1

    // Center the image
    translateX.value = 0
    translateY.value = 0
  }, 50) // Wait for popup to render
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

let animationFrameId = null

const startDragging = (event) => {
  isDragging.value = true

  const clientX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX
  const clientY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY

  lastMouseX.value = clientX
  lastMouseY.value = clientY

  event.preventDefault() // Prevents unwanted text selection on desktop
}

const dragImage = (event) => {
  if (!isDragging.value) return

  const clientX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX
  const clientY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY

  const deltaX = clientX - lastMouseX.value
  const deltaY = clientY - lastMouseY.value

  lastMouseX.value = clientX
  lastMouseY.value = clientY

  if (animationFrameId) cancelAnimationFrame(animationFrameId)

  animationFrameId = requestAnimationFrame(() => {
    translateX.value += deltaX
    translateY.value += deltaY
  })
}

const stopDragging = () => {
  isDragging.value = false
  cancelAnimationFrame(animationFrameId)
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
  router.push({ path: `/developments/property/${slug}` })
}

onBeforeRouteUpdate((to, from, next) => {
  const newSlug = to.params.slug
  const newProperty = flattenedProperties.find(item => item.slug === newSlug) || null
  if (newProperty) {
    property.value = newProperty
  } else {
    router.push('/not-found') // Redirect if property not found
  }
  next()
})

const loadMore = () => {
  visibleCount.value += 3 // Increment by the number of items to load
}

</script>

<style scoped>

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
  font-family: 'TitilliumWebBoldItalic';
  src: url('/assets/fonts/Titillium_Web/TitilliumWeb-BoldItalic.ttf') format('truetype');
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

.property-hero {
  padding: 20px 5%;
  min-height: 100vh;
  background: linear-gradient(to top, #fefefe 50%, #08463c 50%);
}

.breadcrumbs {
  padding: 0;
  padding-bottom: 20px;
  font-size: 16px;
  background-color: transparent;
  font-family: 'TitilliumWebRegular';
  max-width: 100%;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

.property-hero-container {
  background-color: white;
  border: 1px solid #ddd;
  padding: 20px;
}

.property-hero-image {
  display: flex;
  min-width: 60%;
  max-height: 535px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.property-hero-content {
  padding: 0 10px;
}

.property-hero-info {
  text-align: left;
}

.property-hero-info h3 {
  font-size: 26px;
  font-family: 'TitilliumWebSemiBold';
  color: #1e1e1e;
}

.property-location {
  margin-top: -25px;
  margin-bottom: 20px;
}

.property-location .icon {
  font-size: 24px;
  color: #08463c;
  margin-right: 10px;
}

.text-property-location {
  font-size: 16px;
  font-family: 'TitilliumWebRegular';
  color: black;
}

.property-toolbar {
  display: flex;
  align-items: center; /* Centers content vertically */
  gap: 15px;
  justify-content: center;
  flex-wrap: nowrap;
  max-height: 120px;
  height: 95px;
  padding: 0; /* Optional: Adjust padding to create space around */
}

.property-item {
  align-items: center;
  justify-content: center;
  width: 280px;
  min-width: 140px;
}

.property-item .space {
  white-space: wrap;
  overflow: visible;
}

.truncated-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.property-item h4 {
  font-size: 18px;
  color: rgb(84, 89, 95);
  margin-bottom: 0px;
  margin-top: -2px;
  white-space: nowrap;
  font-family: 'TitilliumWebRegular';
}

.property-item p {
  font-size: 18px;
  font-family: 'TitilliumWebSemiBold';
  color: rgb(51, 51, 51);
  margin-top: -10px;
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
}

.icon-1 {
  font-size: 20px;
  color: #08463c;
  margin-right: 5px;
}

.property-feature-list {
  text-align: left;
  padding: 20px 0;
}

.property-feature-item {
  display: flex;
  padding: 1px 0;
  align-items: center;
}

.property-feature {
  font-family: 'TitilliumWebRegular';
  font-size: 16px;
  line-height: 23px;
  margin-left: 10px;
  color: #000;
}

.property-button {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: nowrap;
}

.icon-2 {
  width: 40px;
  height: 40px;
  transition: filter 0.3s ease; /* Smooth transition */
}

.text-btn {
  font-family: 'TitilliumWebSemiBold';
  font-size: 12px;
  line-height: 16px;
}

.property-btn {
  background-color: transparent;
  border: 1px solid #E5E7EB;
  color: #000000;
  padding: 0px 10px;
  border-radius: 0;
  max-width: 120px;
  width: 100%;
  height: 90px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.property-btn:hover {
  background-color: #08463c;
  color: white;
}

.property-btn:hover .icon-2 {
  filter: invert(1); /* Invert the icon color when button is hovered */
}

.property-btn:disabled .icon-2 {
  filter: none; /* Remove any filter effect */
  opacity: 0.5; /* Optionally make the icon look faded */
}

.property-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #686868; /* Keep text light gray */
  background-color: transparent; /* Ensure background remains transparent */
}

/* Prevent hover effects on disabled buttons */
.property-btn:disabled:hover {
  color: #686868; /* Keep text color unchanged */
  background-color: transparent; /* Keep background transparent */
  filter: none; /* Ensure no filters affect disabled state */
}

.register-button {
  padding-top: 20px;
}

.register-btn {
  background-color: #08463c;
  color: #ffff;
  font-weight: bold;
  padding: 0px;
  border-radius: 0;
  width: 100%;
  height: 50px;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.register-btn:hover {
  background-color: #5e5c5c;
  color: white;
}

.register-text-btn {
  font-size: 17px;
  font-family: 'TitilliumWebSemiBold';
}

.q-tooltip {
  display: inline-block;
}

@media (min-width: 1025px) {
  .property-hero-container {
    display: flex;
    flex-direction: row;
    padding-bottom: 40px;
  }

  .property-hero-image {
  min-width: 54%;
  max-height: 420px;
  margin: auto; /* Center horizontally */
}

  .property-hero-content {
    width: 46%;
    margin-top: -10px;
    padding-left: 60px;
    padding-right: 20px;
  }

  .property-toolbar {
  max-height: 180px;
  height: 120px;
}

  .property-item {
  align-items: center;
  justify-content: center;
  width: 280px;
  min-width: 50px;
}

.property-btn {
    max-width: 300px;
    width: 100%;
  }
}

@media (min-width: 1280px) {

  .property-hero-container {
    padding-bottom: 20px;
  }

  .property-hero-content {
    width: 36.5%;
    margin-top: -10px;
    padding-left: 60px;
    padding-right: 20px;
  }

.property-hero-image {
max-width: 63.5%;
max-height: 536px;
}

.hero-image {
  height: auto;
}
}

@media (max-width: 1024px) {
  .property-btn {
    max-width: 300px;
    width: 100%;
  }

  .property-hero-info h3 {
  font-size: 36px;
}

  .property-hero-image {
    height:310px;
  }
  .property-image {
    height: 310px;
  }
}

@media (max-width: 640px) {
  .property-hero-container {
    padding: 0px;
    padding-bottom: 20px;
    margin: 0;
    border: none;
  }

  .property-hero-info h3 {
  font-size: 26px;
}

  .property-toolbar-wrapper {
  display: table;
  width: 100%;
  padding: 15px 0; /* Top & bottom padding */
}

.property-toolbar {
  display: table-row;
  white-space: nowrap;
  min-height: 120px;
}

.property-item {
  align-items: center;
  justify-content: center;
  max-height:150px;
  width:auto;
  max-width: 100%;
  height: 70px;
}

  .property-hero-content {
  padding: 0 20px;
  margin-top: -10px;
  padding-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

  .property-hero-image {
    height:270px;
  }
  .property-image {
    height: 270px;
  }

}
.description-section {
  margin: 30px 0;
  text-align: center;
  padding-top: 20px;
}

.description-section h2{
  font-size: 48px;
  line-height: 56px;
  font-family: 'TitilliumWebBold';
  color: #666666;
  text-transform: uppercase;
}

.description-section p{
  font-family: 'TitilliumWebRegular';
  font-size: 18px;
  line-height: 27px;
  padding: 10px 10%;
}

@media (max-width: 1024px) {

/* .description-section p {
  padding-left: 110px;
  padding-right: 110px;
} */
}

@media (max-width: 768px) {

.description-section h2 {
  font-size: 42px;
  line-height: 50px;
}

/* .description-section p {
  padding-left: 20px;
  padding-right: 20px;
} */
}

@media (max-width: 520px) {
  .description-section h2 {
    font-size: 32px;
  }

  /* .description-section p {
    padding-left: 0px;
    padding-right: 0px;
    margin-left: -20px;
    margin-right: -20px;

  } */
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
  font-family: 'AvenirMedium';
  transition: background-color 0.3s ease;
}

.visit-gallery-btn:hover {
  background-color: #a39f1a;
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
  top: 5px;
  right: 5px;
}
}

 /*Floorplan Section */
.floorplan-section {
  margin-top: 60px;
  padding: 20px 10%;
  text-align: center;
  background-color:#fff;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.floorplan-title {
  font-family: 'RecklessNeueMedium';
  padding-top: 40px;
  font-size: 48px;
  line-height: 48px;
}

.floorplan-container {
  background-color: white;
  width: 100%;
  min-height: 375px;
  height: auto;
  border: 1px solid #ddd;
  padding-bottom: 20px;
}

@media (min-width: 1200px) {
  .floorplan-container {
    width:765px;
  }
}
.floorplan-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  min-height: 78px;
  background-color: #08463c;
  color: white;
}

.plan-select {
  font-family: 'TitilliumWebRegular';
  padding: 10px 5%;
  font-size: 18px;
  color: white;
}

.plan-price {
  font-family: 'TitilliumWebRegular';
  white-space: nowrap;
  padding: 10px 5%;
  font-size: 18px;
}

.floorplan-details {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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
  min-width: 190px;
  flex-grow: 1;
  white-space: nowrap;
  height: 120px;
  border: 2px solid rgb(221, 221, 221, 0.2);
}

.details-item h4 {
  font-family: 'TitilliumWebBold';
  font-size: 17px;
  line-height: 27px;
  color: #0000
}

.details-item p {
  font-family: 'TitilliumWebRegular';
  font-size: 17px;
  line-height: 27px;
  color: #000000;
}

.icon-3 {
  width: 48px;
  margin-bottom: 10px;
}

.icon-4 {
  height: 45px;
  margin-bottom: 10px;
}

.icon-5 {
  height: 50px;
  margin-bottom: 5px;
}

.floorplan-buttons {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border: 1px solid #ccc;
  background: #fff;
  min-width: 220px;
  max-width: 100%;
  height: 50px;
  cursor: pointer;
  font-family: 'TitilliumWebBold';
  font-size: 17px !important;
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
@media (max-width: 1200px) {
  .floorplan-section{
    padding: 20px 5%;
  }
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
}
/* .floorplan-buttons {
  margin-top: -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
} */
.btn {
  justify-content: center;
}
}

@media (max-width: 580px) {

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
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: grab;
}

.popup-image-container.grabbing {
  cursor: grabbing;
}

.popup-image {
  object-fit: contain;
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
  padding: 40px 6%;
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
  padding-left: 2%;
  padding-right: 2%;
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

.btn img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.btn:hover {
  background-color: #08463c;
  color: white;
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
  text-decoration: none;
  color: inherit;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
}

.contact-no:hover {
  color: #08463c;
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
  text-decoration: none;
  color: inherit;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
}

.email-address:hover {
  color: #08463c;
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

.register-form input {
  font-size: 14px;
  font-family: 'TitilliumWebRegular';
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
  font-size: 14px;
  cursor: pointer;
  font-family: 'TitilliumWebRegular';
}

.submit-btn {
  padding: 10px 20px;
  background-color: #555;
  color: #fff;
  border: none;
  cursor: pointer;
font-size: 14px;
  font-family: 'AvenirMedium';
  text-transform: uppercase;
}

.career {
  padding-top: 20px;
}

.career-btn{
  background-color: transparent;
  border: 2px solid black;
  color: #000000;
  font-family: 'AvenirMedium';
  font-size: 17px;
  padding: 10px 20px;
  margin-top: 10px;
  width: 100%;
  height: 60px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.career-btn:hover {
  background-color: #a39f1a;
  border: none;
  color: #fff;
  transform: translateY(-3px);
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
  padding: 40px 2%;
}

}

@media (max-width: 520px){
  .register-left address br:first-child {
    display: none;
  }

  .register-left .register-title {
    font-size: 34px;
  }

  .register-right h2 {
    font-size: 32px;
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
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 130px;
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

.products-grid.flex-layout {
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

q-separator.vertical {
  height: 90%;
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
</style>
