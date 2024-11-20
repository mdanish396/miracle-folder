<template>
  <transition name="fade" mode="out-in">
    <q-page :key="$route.fullPath">
      <!-- Star tup Animation Overlay -->
        <div v-if="showLoader" class="startup-overlay">
          <div>
        <img src="src/assets/logo4.png" class="startup-image">
      </div>
        <h4>MIRACLE LAND</h4>
    </div>
    <!-- Top Bar as Overlay -->
    <q-header class="q-pa-md navigation-bar" elevated :class="{ visible: scrolled, transparent: !scrolled }">
      <q-toolbar class="toolbar">
        <!-- Left-aligned: Logo and Title -->
        <div class="logo-title-group" @click="refreshPage">
          <img src="src/assets/logo.png" alt="Logo" class="logo" />
          <q-toolbar-title class="toolbar-title">
            MIRACLE LAND
          </q-toolbar-title>
        </div>

        <!-- Right-aligned: Navigation Buttons -->
        <div class="nav-buttons" @mouseover="showDropdown" @mouseleave="hideDropdown">
    <q-btn flat label="ABOUT US" to="/about-us" />

    <q-btn flat label="DEVELOPMENT" />
    <q-menu v-if="dropdownVisible" anchor="bottom left" self="top left" fit>
      <q-list>
        <q-item clickable to="/current-development">
          <q-item-section>Current Development</q-item-section>
        </q-item>
        <q-item clickable to="/past-development">
          <q-item-section>Past Development</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
    <q-btn flat label="CONTACT US" to="/contact-us" />
    </div>
      </q-toolbar>
    </q-header>

    <!-- Hero Section -->
    <div class="hero-section">
      <video
        autoplay
        loop
        muted
        class="hero-video"
        playsinline
        preload="auto"
      >
        <source src="src/assets/landscape3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Text Overlay in Video (centered) -->
      <div class="video-text-overlay">
        <h1>MIRACLE FOR YOU FOREVER</h1>
      </div>

      <!-- Scroll Indicator (mouse animation, visible from start and fixed inside the background video) -->
      <div class="scroll-indicator">
        <video autoplay loop muted class="mouse-animation" playsinline>
          <source src="src/assets/mouse.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

  <!-- About Us Section -->
  <div data-aos="fade-up">
  <div class="about-us-section">
    <div class="content-container">
      <div class="text-content">
        <h2>Leaders In Development</h2>
        <p>
          Miracle Land has a 20+ year track record of developing innovative,
          landmark residential, commercial, and retail projects that span Malaysia's cities and beyond.
        </p>
        <p>
          Our company is privately owned and has delivered over 100 projects
          valued at over RM5 billion. We aim to create dynamic places where people live, work, and thrive.
        </p>
        <q-btn flat label="ABOUT US" class="btn-story" to="/about-us"/>
      </div>
      <div class="image-container">
        <!-- Duplicate Gray-toned Image -->
        <div class="gray-image-layer">
          <img src="src/assets/building.png" alt="Building" class="building-image gray-tone" />
        </div>

        <!-- Main Image Layer -->
        <img src="src/assets/building.png" alt="Building" class="building-image" />
      </div>
    </div>

    <!-- Partners' Logos Section -->
    <div class="partners-section">
      <h3>Our Partners</h3>
      <div class="logo-container">
        <img src="src/assets/logo1.png" alt="Partner 1" class="partner-logo" />
        <img src="src/assets/logo1.png" alt="Partner 2" class="partner-logo" />
        <img src="src/assets/logo1.png" alt="Partner 3" class="partner-logo" />
      </div>
    </div>
  </div>
  </div>

      <!-- Current Development Projects Section -->
  <div class="projects-section">
    <h2 class="section-title">Current Development Projects</h2>
    <div class="projects-container">
      <!-- Scrollable Project Card -->
      <div class="project-card" v-for="project in projects" :key="project.id">
        <img :src="project.image" :alt="project.name" class="project-image" />
        <div class="project-info">
              <h3>{{ project.name }}</h3>
              <p>{{ project.location }}</p>
              <p>From RM {{ project.price }}</p>
            </div>
        <!-- Hover Project Card Information -->
          <div class="project-hover-overlay">
            <span :class="['status', project.status === 'Sold' ? 'sold' : 'sale']">{{ project.status }}</span>
            <p>{{ project.description }}</p>
              <div class="project-details">
                <span><i class="fas fa-bed"></i> {{ project.bedrooms }}</span>
                <span><i class="fas fa-bath"></i> {{ project.bathrooms }}</span>
                <span><i class="fas fa-expand-arrows-alt"></i> {{ project.size }} m²</span>
              </div>
        <div class="actions">
          <q-btn flat label="Open Details" class="action-btn" />
        </div>
      </div>
    </div>
  </div>
  <q-btn flat label="View All Projects" class="view-all-btn" />
</div>

  <!-- Contact Us Section -->
  <div class="contact-section">
    <div class="contact-content">
      <div class="contact-text">
        <h2>Contact Us</h2>
        <p>We respond to inquiries regarding desired area, floor plan, budget, etc. in accordance with customer’s requests. Please feel free to contact us. Our professional staff will help you realize your dream home.</p>
        <p class="closed-days">Open Monday-Saturday </p>
      </div>
      <div class="contact-button">
        <q-btn flat label="Contact Us" class="contact-btn"/>
      </div>
  </div>
</div>

  <!-- Footer Section -->
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-title">
      <img src="src/assets/logo4.png" alt="Company Logo" class="footer-logo">
      <p>MIRACLE LAND</p>
      </div>
       <div class="footer-contact">
        <p>Miracle Land Holdings Sdn Bhd</p>
        <p>+81-70-4480-0349</p>
        <p>Contact Us</p>
       </div>
       <div class="social-links">
        <q-btn
      round
      flat
      dense
       icon="mdi-facebook"
       color="white"
      @click="openFacebook"
      aria-label="Facebook"
    />
</div>
    </div>
    <div class="footer-links">
      <div class="footer-column">
        <p>Development</p>
        <p>Current Development</p>
        <p>Past Development</p>
      </div>
      <div class="footer-column">
        <p>About Us</p>
        <p>Brand</p>
        <p>Staff</p>
      </div>
      <div class="footer-column">
        <p>FAQ</p>
      </div>
    </div>
    <div class="footer-content">
        © 2019 Miracle Land Holdings Berhad (1111981-P). All rights reserved.
      </div>
  </footer>
  </q-page>
</transition>
</template>

<script>
export default {
  data () {
    return {
      showLoader: true,
      scrolled: false,
      dropdownVisible: false,

      projects: [
        {
          id: 1,
          name: 'The Connaught One',
          location: 'Greater Kuala Lumpur',
          price: '350,900',
          image: 'src/assets/currentproject/house1.jpg',
          description: 'Service Apartment with excellent facilities and a scenic view.',
          status: 'Sale',
          bedrooms: 4,
          bathrooms: 10,
          size: 360
        },
        {
          id: 2,
          name: 'KAIA Heights Equine',
          location: 'Greater Kuala Lumpur',
          price: '567,800',
          image: 'src/assets/currentproject/house2.jpg',
          description: 'Condominium offering modern living spaces.',
          status: 'Sold',
          bedrooms: 4,
          bathrooms: 10,
          size: 360
        },
        {
          id: 3,
          name: 'Residensi ZIG',
          location: 'Greater Kuala Lumpur',
          price: '355,900',
          image: 'src/assets/currentproject/house3.jpg',
          description: 'Affordable service apartments in a serene location.',
          status: 'Sale',
          bedrooms: 4,
          bathrooms: 10,
          size: 360
        },
        {
          id: 4,
          name: 'KAIA Heights Equine',
          location: 'Greater Kuala Lumpur',
          price: '567,800',
          image: 'src/assets/currentproject/house2.jpg',
          description: 'Condominium offering modern living spaces.',
          status: 'Sold',
          bedrooms: 4,
          bathrooms: 10,
          size: 360
        },
        {
          id: 5,
          name: 'The Connaught One',
          location: 'Greater Kuala Lumpur',
          price: '350,900',
          image: 'src/assets/currentproject/house1.jpg',
          description: 'Service Apartment with excellent facilities and a scenic view.',
          status: 'Sale',
          bedrooms: 4,
          bathrooms: 10,
          size: 360
        }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.showLoader = false
    }, 2000)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      this.scrolled = scrollPosition > windowHeight * 0.35
    },
    refreshPage () {
      window.location.reload()
    },
    viewProject (projectId) {
      console.log('Navigating to project', projectId)
    },
    openFacebook () {
      window.open('https://www.facebook.com/dynaton.property', '_blank')
    },
    showDropdown () {
      this.dropdownVisible = true
    }
  }
}
</script>

<style scoped>
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
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: scaleUp 1s ease-in-out forwards 1s; /* Slide up after 2 seconds */
}

/* Logo Starter */
.startup-image {
  width: 80px;
  position: relative;
}

/*Text Startu Overlay */
.startup-overlay h4{
  font-family: 'Times New Roman', Times, serif;
  color: #fffbfb;
}

/* Slide Up Overlay Animation */
@keyframes scaleUp {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-top: -70px;
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
  color: white;
  text-align: center;
  z-index: 1000;
}

.video-text-overlay h1 {
  font-size: 3rem; /* Adjust as needed */
  font-weight: bold;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 48%;
  transform: translateX(-50%);
  color: white;
  z-index: 1100; /* Ensure it appears above the video but below the top bar */
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
.mouse-animation {
  width: 48px;
  height: auto;
}

/* Logo */
.logo {
  height: 30px;
  margin-right: -5px;
  transition: filter 0.4s ease-in-out;
}

/* Transition for logo: change logo color when scrolled */
.navigation-bar.transparent .logo {
  filter: brightness(0) invert(1); /* White logo when transparent bar */
}
.navigation-bar.visible .logo {
  filter: brightness(1); /* Normal logo when white bar */
}

/* Flexbox layout for the toolbar */
.toolbar {
  display: flex;
  justify-content: space-between; /* Pushes logo to left, buttons to right */
  align-items: center;
  width: 100%;
}

/* Logo and Title Group */
.logo-title-group {
  display: flex;
  align-items: center;
  cursor: pointer;
}

/* Transition for toolbar title */
.toolbar-title {
  font-family: 'Times New Roman', Times, serif;
  transition: color 0.4s ease-in-out;
}
.navigation-bar.transparent .toolbar-title {
  color: white;
}
.navigation-bar.visible .toolbar-title {
  color: black;
}

/* Navigation Buttons Group */
.nav-buttons {
  display: flex;
  gap: 15px; /* Space between buttons */
}

.q-menu {
  min-width: 100%; /* Ensures the menu's width fits the parent */
}
.q-item {
  white-space: nowrap; /* Prevents the menu items from wrapping */
}
/* Navigation Bar */
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  z-index: 1400;
  padding: 10px 20px;
  box-shadow: 0px 2px 10px rgb(255, 254, 254); /* Soft shadow for elevation */
  transition: opacity 0.4s ease-in-out, background-color 0.4s ease-in-out; /* Smooth transition */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Transparent bar when not scrolled */
.navigation-bar.transparent {
  background-color: transparent;
  color: white;
  pointer-events: auto;
  opacity: 1;
}

/* Show the navigation bar with white background when scrolled */
.navigation-bar.visible {
  background-color: white;
  color: black;
  opacity: 1;
  pointer-events: auto; /* Enable clicks when visible */
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  /* Adjust toolbar for tablet screens */
  .toolbar-title {
    font-size: 1.2rem; /* Slightly reduce title font size */
  }

  .nav-buttons {
    gap: 10px; /* Reduce space between buttons */
  }
}

@media (max-width: 768px) {
  /* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-top: -145px;
}

  /* Adjust toolbar for smartphone screens */
  .navigation-bar {
    flex-direction: column;
    padding: 10px 0;
  }

  .logo-title-group {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
  }

  .toolbar-title {
    font-size: 1.1rem;
  }

  /* Stack navigation buttons vertically for mobile */
  .nav-buttons {
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: 5px;
  }
}

@media (max-width: 480px) {
    /* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-top: -128px;
}

  /* Further adjustments for very small screens */
  .toolbar-title {
    font-size: 1rem;
  }

  .logo {
    height: 25px; /* Reduce logo size */
  }

  .nav-buttons {
    gap: 2px;
  }

  .navigation-bar {
    padding: 5px;
  }
}

/* About Us Section */
.about-us-section {
  background-color: #ffffed;
  padding: 80px 40px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Adjust layout for smaller screens */
@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text-content {
    padding-right: 0px;
    padding-bottom: 20px;
  }

  .image-container {
    width: 90%; /* Scale image down */
  }

  .gray-image-layer {
    display: block; /* Hide extra layers for smaller screens */
  }
}

/* Further adjust for tablet and smartphone */
@media (max-width: 768px) {
  .text-content h2 {
    padding-left: 20px;
    font-size: 2rem; /* Reduce font size */
  }

  .text-content p {
    padding-left: 20px;
    font-size: 1rem;
  }

  .image-container {
    padding-left: 20px;
    width: 100%;
    margin-top: 20px;
  }

  .btn-story {
    margin-left: 20px;
  }

  .partners-section h3 {
    padding-left: 20px;
  }

  .logo-container {
    padding-left: 20px;
  }
  }

/* Further adjust for small screen */
@media (max-width: 480px) {
  .text-content h2 {
    padding-left: 40px;
    font-size: 2rem; /* Reduce font size */
  }

  .text-content p {
    padding-left: 40px;
    font-size: 1rem;
  }

  .image-container {
    padding-left: 20px;
    width: 100%;
    margin-top: 20px;
  }

  .btn-story {
    margin-left: 40px;
  }

  .partners-section h3 {
    padding-left: 20px;
  }

  .logo-container {
    padding-left: 20px;
  }
}

.text-content {
  flex: 1;
  padding-right: 40px;
}

.text-content h2 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 20px;
}

.text-content p {
  font-size: 1.1rem;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-story {
  background-color: transparent;
  border: 2px solid #02947e;
  color: #000000;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.btn-story:hover {
  background-color: #00B398;
  color: white;
  transform: translateY(-3px);
}

/* Image Section with Layered Effect */
.image-container {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
}

/* Main Image */
.building-image {
  max-width: 100%;
  height: auto;
  border-radius: 2px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

/* Gray-toned Image Layer */
.gray-image-layer {
  position: absolute;
  top: 15px;  /* Adjust positioning */
  left: 15px;
  width: calc(100% - 30px); /* Keeps spacing relative */
  height: auto;
  filter: grayscale(100%);
  opacity: 0.5; /* Semi-transparent effect */
}

/* Partners' Logos Section */
.partners-section {
  margin-top: 70px;
  text-align: center;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  background-color:   #ffffED;
  max-width: 1400px;
  margin-left: -40px;
  margin-right: -40px;
}

.partners-section h3 {
  font-family: 'Georgia', serif;
  font-size: 2rem;
  color: #000000;
}

.logo-container {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.partner-logo {
  width: 100px;
  height: auto;
  transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
  filter: grayscale(100%);
  opacity: 0.8;
}

.partner-logo:hover {
  filter: grayscale(0);
  opacity: 1;
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

/*Project Section*/
.projects-section {
  padding: 20px 20px;
  background-color: #ffffed;
  text-align: center;
}

.section-title {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 50px;
}

.projects-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 20px;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}

.project-card {
  position: relative;
  min-width: 280px;
  max-width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  scroll-snap-align: start;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.project-info {
  padding: 15px;
  text-align: left;
}

.project-info h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.project-info p {
  margin: 2px 0;
  color: #666;
}

/* Hover Overlay */
.project-hover-overlay {
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

.project-card:hover .project-hover-overlay {
  opacity: 1;
}

/* Conditional Status Badge */
.status {
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.sold {
  background: #e53935; /* Red for Sold */
}

.sale {
  background: #4caf50; /* Green for Sale */
}

.description {
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-align: center;
}

.project-details {
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
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

/* Contact Us Section Styling */
.contact-section {
  position: relative;
  padding: 10px 20px;
  background-image: url('src/assets/contact.jpeg'); /* image path */
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.contact-content {
  position: relative;
  display: flex;
  flex-wrap: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1400px;
  margin: -10px -20px;
  padding: 40px 40px;
  background: rgba(255, 255, 255, 0.45); /* Semi-transparent */
  border-radius: 0;
  z-index: 1;
}

.contact-text {
  max-width: 600px;
  margin-right: 250px;
}

.contact-text h2 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: #253442;
  margin-bottom: 20px;
}

.contact-text p {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  color: #3a3a3a;
  line-height: 1.6;
  margin-bottom: 10px;
}

.closed-days {
  font-weight: bold;
}

.contact-button {
  display: flex;
  align-items: flex-start;
  margin-top: 55px;
}

.contact-btn {
  font-weight: bold;
  background-color: white;
  color: #2c3e50;
  border: 2px solid #2c3e50;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 0
}

.contact-btn:hover {
  background-color: #2c3e50;
  color: white;
  transform: translateY(-3px);
}

@media (max-width: 768px) {

  /* Contact Us Section Styling */
  .contact-content {
    flex-direction: column; /* Stack content vertically */
    align-items: center;
  }
  .contact-text {
    max-width: 100%;
    margin-right: 0; /* Remove right margin on smaller screens */
    margin-bottom: 15px; /* Add a gap between text and button */
  }
  .contact-button {
    margin-top: 10px; /* Reduce top margin on smaller screens */
  }
}

/* Footer Section Styling */
.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 20px 0;
  max-width: 1400px;
}

.footer-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding-bottom: 15px;
  padding-right: 40px;
}

.footer-logo {
  width: 60px;
  margin-left: 20px;
}

.footer-title {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  color: #f8f6f6;
  align-content: flex-start;
  line-height: 0.5;
  margin-bottom: 10px;
}

.footer-contact {
  text-align: left;
  margin-right: 80px;
}

.footer-contact p {
  margin: 5px 0;
}

.social-links {
  display: flex;
  gap: 10px;
}

.button-blue {
  transition: transform 0.3s ease;
}

.q-btn:hover {
  transform: scale(1.1); /* Slightly enlarges icon on hover */
}

.footer-links {
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-right: 60px;
  border-top: 1px solid #444;
  margin-top: 10px;
  margin-right: 60px;
  gap: 20px;
}

.footer-column {
  text-align: left  ;
}

.footer-column p {
  margin: 5px 0;
  color: #bbb;
  font-size: 0.9rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 60px;
  font-size: 0.659rem; /* Small font size for footer text */
}
</style>
