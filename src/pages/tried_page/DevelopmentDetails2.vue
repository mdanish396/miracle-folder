<template>
  <q-page>
    <!-- Overview Section -->
    <div class="hero-section">
      <div class="overview-section">
        <!-- banner image -->
        <img class="overview-image" src='src/assets/building.png'>
        <div class="gradient-overlay"></div>
      </div>

      <!-- Information overlay -->
      <div class="information-overlay">
        <div class="info-overlay" v-for="development in developments" :key="development.id">
          <div class="place-logo-section">
              <h4 class="logo-title">{{ development.name }}</h4>
          </div>
          <div class="info-details">
            <div class="info-item-1">
            </div>
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
            <div class="info-item-1">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Intro text -->
    <div class="intro-section">
      <div class="text-content" v-for="development in developments" :key="development.id">
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

      <!-- Highlight section -->
      <div class="card-section">
        <div class="card-grid">
          <div class="card" v-for="image in developmentImages" :key="image.id">
            <img :src="image.image" class="card-image"/>
            <div class="card-title">
              <p>{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rectangle-section">
    </div>

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
        <div class="product-card" v-for="product in visibleProducts" :key="product.id">
          <img :src="product.image" alt="Product Image" class="product-image"/>
          <q-separator/>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <div class="product-location">
              <i class="fas fa-map-marker-alt icon">
              </i>
              <span class="text-product-location">
                {{ product.location }}
              </span>
            </div>
            <q-separator/>
            <q-toolbar class="product-toolbar">
              <div class="product-item">
                <h4>Type</h4>
                <p>{{ product.type }}</p>
              </div>

              <q-separator vertical/>
              <div class="product-item-1">
                <h4>From</h4>
                <p>{{ product.price }}</p>
              </div>
            </q-toolbar>

            <q-separator/>
            <div class="product-feature-list">
              <div
              v-for="feature in product.features"
              :key="feature"
              class="product-feature-item"
              >
                <i class="fas fa-check-circle icon">
                </i>
                <span class="product-feature">
                  {{ feature }}
                </span>
              </div>
            </div>

            <q-space/>
            <q-separator/>
            <div class="btn-more">
              <q-btn flat label="Learn More" class="learn-more-btn" />
            </div>
          </div>
        </div>
      </div>
      <div class="btn-more-1" v-if="products.length > visibleCount">
        <q-btn
        flat
        label="Load More"
        class="learn-more-btn"
        @click="loadMore"
        />
      </div>
    </div>

    <div class="rectangle-section-1">
    </div>

    <!-- Gallery section-->
    <div class="gallery-section">
      <h2>Gallery</h2>
      <div class="line-holder">
        <div class="line">
          <div class="line-1">
            <div class="line-2"></div>
          </div>
        </div>
      </div>
      <div class="gallery-grid">
        <img v-for="image in galleryImages" :key="image" :src="image" alt="Gallery Image" />
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
        <div class="location-map">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>

        <div class="amenities">
          <q-list>
            <q-item class="amenities-section">
              <q-item-section>Nearby Amenities</q-item-section>
            </q-item>
            <q-separator color="white"/>
            <q-expansion-item
            expand-icon-class="text-white"
            group="somegroup"
            default-opened
            class="amenities-expand"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <i class="fas fa-graduation-cap" style="color: white; font-size: 18px;"></i>
                </q-item-section>
                <q-item-section>
                  <span class="text-white">Education</span>
                </q-item-section>
              </template>

              <!-- Content inside the expansion item -->
              <div class="q-pa-md">
                <q-item class="amenities-child">
                  <q-item-section class="amenities-location">SK <q-space class="amenities-km"/> 3.4 km </q-item-section>
                </q-item>
                <q-item class="amenities-child">
                  <q-item-section class="amenities-location">SMK <q-space class="amenities-km"/> 3.4 km</q-item-section>
                </q-item>
              </div>
            </q-expansion-item>

            <q-separator color="white"/>
            <q-expansion-item
            expand-icon-class="text-white"
            group="somegroup"
            class="amenities-expand"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <i class="fas fa-medkit" style="color: white; font-size: 18px;"></i>
                </q-item-section>
                <q-item-section>
                  <span class="text-white">Healthcare</span>
                </q-item-section>
              </template>
              <!-- Content inside the expansion item -->
              <div class="q-pa-md">
                  <q-item class="amenities-child">
                    <q-item-section class="amenities-location">Hospital <q-space class="amenities-km"/> 3.4 km</q-item-section>
                  </q-item>
                  <q-item class="amenities-child">
                    <q-item-section class="amenities-location">Clinic <q-space class="amenities-km"/> 3.4 km</q-item-section>
                  </q-item>
              </div>
            </q-expansion-item>

            <q-separator color="white"/>
            <q-expansion-item
            expand-icon-class="text-white"
            group="somegroup"
            class="amenities-expand"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <i class="fas fa-film" style="color: white; font-size: 18px;"></i>
                </q-item-section>
                <q-item-section>
                  <span class="text-white">Entertainment</span>
                </q-item-section>
              </template>
              <!-- Content inside the expansion item -->
              <div class="q-pa-md">
                  <q-item class="amenities-child">
                    <q-item-section class="amenities-location">Cinema <q-space class="amenities-km"/> 3.4 km</q-item-section>
                  </q-item>
              </div>
            </q-expansion-item>

            <q-separator color="white"/>
            <q-expansion-item
            expand-icon-class="text-white"
            group="somegroup"
            class="amenities-expand"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <i class="fas fa-bicycle" style="color: white; font-size: 18px;"></i>
                </q-item-section>
                <q-item-section>
                  <span class="text-white">Recreation</span>
                </q-item-section>
              </template>
              <!-- Content inside the expansion item -->
              <div class="q-pa-md">
                <q-item class="amenities-child">
                  <q-item-section class="amenities-location">Football Field <q-space class="amenities-km"/> 3.4 km</q-item-section>
                </q-item>
                <q-item class="amenities-child">
                  <q-item-section class="amenities-location">Playground <q-space class="amenities-km"/> 3.4 km</q-item-section>
                </q-item>
                <q-item class="amenities-child">
                  <q-item-section class="amenities-location">Playstore <q-space class="amenities-km"/> 3.4 km</q-item-section>
                </q-item>
              </div>
            </q-expansion-item>

            <q-separator color="white"/>
            <q-expansion-item
            expand-icon-class="text-white"
            group="somegroup"
            class="amenities-expand"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <i class="fas fa-shopping-bag" style="color: white; font-size: 18px;"></i>
                </q-item-section>
                <q-item-section>
                  <span class="text-white">Shopping</span>
                </q-item-section>
              </template>
              <!-- Content inside the expansion item -->
              <div class="q-pa-md">
                <q-item class="amenities-child">
                  <q-item-section class="amenities-location">Mall <q-space class="amenities-km"/> 3.4 km</q-item-section>
                </q-item>
                <q-item class="amenities-child">
                  <q-item-section class="amenities-location">TF Mall <q-space class="amenities-km"/> 3.4 km</q-item-section>
                </q-item>
              </div>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

const developments = ref([
  {
    id: 1,
    name: 'Miracle Land',
    type: 'Township',
    location: 'Kampala',
    size: '810 acres',
    topic: 'In a Garden Where Happiness Lives',
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`
  }
])

const developmentImages = ref([
  {
    id: 1,
    image: 'src/assets/career1.png',
    description: 'Living in Harmony with Nature'
  },
  {
    id: 2,
    image: 'src/assets/career2.png',
    description: 'Doorstep Lifestyle and Retail Convenience'
  },
  {
    id: 3,
    image: 'src/assets/career3.jpg',
    description: 'Exciting Placemaking Experience'
  }
])

const products = ref([
  {
    id: 1,
    name: 'Monarc Homes',
    location: 'Casa Hill',
    type: 'Double Storey',
    price: 'RM500,000',
    image: 'https://picsum.photos/200/300',
    features: ['Exclusive Amenities', 'Spacious Homes']
  },
  {
    id: 2,
    name: 'Casa Hill',
    location: 'Casa Hill',
    type: 'Bungalow',
    price: 'RM600,000',
    image: 'https://picsum.photos/200/300',
    features: ['Luxury Living', 'Green Spaces'],
    map: ''
  },
  {
    id: 3,
    name: 'Izona',
    location: 'Bukit Bahagia',
    type: '2 Storey Terrace',
    price: 'RM700,000',
    image: 'https://picsum.photos/200/300',
    features: ['Luxury Living', 'Lakeside']
  },
  {
    id: 4,
    name: 'Monarc Homes',
    location: 'Casa Hill',
    type: 'Double Storey',
    price: 'RM500,000',
    image: 'https://picsum.photos/200/300',
    features: ['Exclusive Amenities', 'Spacious Homes']
  }
]
)

const visibleCount = ref(3)

const visibleProducts = computed(() => {
  return products.value.slice(0, visibleCount.value)
})

const loadMore = () => {
  if (visibleCount.value < products.value.length) {
    visibleCount.value += 3
  }
}

const galleryImages = ref([
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300'
])
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
  padding: 20px 20px;
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
  line-height: 70px;
}

.sub-heading {
  font-size: 18px;
  padding-left: 110px;
  padding-right: 110px;
  padding-top: 20px;
  padding-bottom: 100px;
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
  padding-top: 20px;
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
  margin-top: -20px;
}

.line {
  display: inline-block;
  width: 12px; /* Thickness of the line */
  height: 6px; /* Height of the line */
  background-color: #08463c; /* Gold accent */
  padding-inline: 40px;

}

.line-1 {
  display: inline-block;
  width: 50px; /* Thickness of the line */
  height: 4px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-top: 1px; /* Space between the line and text */
  padding-inline-end: 200px;
  margin-inline-start: 40px;
}

.line-2 {
  display: inline-block;
  width: 220px; /* Thickness of the line */
  height: 4px; /* Height of the line */
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
  padding-bottom: 100px;
  color: #1e1e1e;
  margin: 0 auto;
  margin-top: 30px;
}

.rectangle-section {
  height: 250px;
  margin-top: -220px;
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
  padding:0 20px;
}

.card {
  border-radius: 3px;
  background: transparent;
  transition: transform 0.3s;
}

.card img {
  width: 100%;
  height: 200px;
  border-bottom: 3px solid #759403;
}

.card-title {
  font-size: 19px;
  font-weight: bold;
  line-height: 29px;
  color: rgb(235, 235, 235);
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
}

@media (max-width: 1024px) {

.card img {
  width: 100%;
  height: 160px;
}

.card-title {
  font-size: 16px;
  line-height: 24px;
}
}

@media (max-width: 768px) {

  .card-section {
    padding: 0 10px;
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

@media (max-width: 520px) {

.card-section {
  padding: 0 5px;
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
}

.products-section h2 {
  padding-top: 50px;
  font-size: 48px;
  line-height: 48px;
  font-weight: bold;
  color: #1e1e1e;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 40px;
  margin-top: 50px;
}

.product-card {
  border: 1px solid #ddd;
  text-align: center;
  overflow: hidden;
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
  padding: 0 20px; /* Optional: Adjust padding to create space around */
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
  padding-top: 60px;
}

.learn-more-btn {
  background-color: transparent;
  border: 2px solid #08463c;
  color: #000000;
  font-weight: bold;
  padding: 10px 20px;
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

@media (max-width: 620px) {
.products-grid {
    grid-template-columns: 1fr; /* 1 column */
    gap: 20px;
    padding: 0 10px;
  }
}

/* Extra small screens (480px and below) */
@media (max-width: 480px) {
  .products-section h2 {
    font-size: 32px;
  }

  .products-grid {
    gap: 15px;
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
  padding: 20px;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  overflow-x: auto; /* Disable horizontal scroll for grid */
  padding-bottom: 20px;
  padding-top: 80px;
  scrollbar-width: 1px;
  scroll-snap-type: none;
  width: 100%;
}

.gallery-grid img {
  width: 390px;
  height: 250px;
}

@media (max-width: 768px){

  .gallery-section h2 {
    font-size: 40px;
  }

  .gallery-grid {
    width: 100%;
  }
  .gallery-grid {
    width: 100%;
}
}

.location-section {
  padding: 20px;
  padding-bottom: 70px;
}

.location-title {
  text-align: center;
}

.location-section h2 {
  padding-top: 50px;
  font-size: 48px;
  line-height: 48px;
  font-weight: bold;
  color: #1e1e1e;
}

.location-container {
  display: flex;
  flex-direction: row; /* Arrange items in a row */
  padding-top: 80px;
  padding-bottom: 40px;
  padding-left: 50px;
  padding-right: 50px;
}

  .location-map iframe {
    width: 100%; /* Ensure map adjusts within its parent container */
    height: 400px; /* Adjust height for better visibility */
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
    height: 400px;
  }

  .amenities-section {
    padding: 20px 15px;
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
  padding-right: 20PX;
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
