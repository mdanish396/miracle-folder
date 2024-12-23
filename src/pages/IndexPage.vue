<template>
  <transition name="fade" mode="out-in">
    <q-page :key="$route.fullPath">
      <!-- Startup Animation Overlay -->
        <div v-if="showLoader" class="startup-overlay">
          <div>
        <img src="src/assets/logo4.png" class="startup-image">
      </div>
        <h4>MIRACLE LAND</h4>
    </div>

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
              <!-- Vertical Branding -->
              <div class="vertical-branding">MIRACLE LAND</div>
    </div>

    <!-- Current Development Projects Section -->
    <div class="projects-section">
      <h2 class="section-title">Current Development Projects</h2>
      <div class="projects-container"
      :class="{ 'grid-layout': showAllProjects }"
      :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }">
        <!-- Scrollable Project Card -->
        <div class="project-card" v-for="project in displayedProjects" :key="project.id">
          <img :src="project.image" :alt="project.name" class="project-image" />
          <div class="project-info">
            <h3>{{ project.name }}</h3>
            <p>{{ project.location }}</p>
            <p>From RM {{ project.price }}</p>
          </div>
          <!-- Hover Project Card Information -->
          <div class="project-hover-overlay">
            <span class="status-sale">{{ project.status }}</span>
            <p>{{ project.description }}</p>
            <div class="project-details">
              <span><i class="fas fa-bed"></i> {{ project.bedrooms }}</span>
              <span><i class="fas fa-bath"></i> {{ project.bathrooms }}</span>
              <span><i class="fas fa-expand-arrows-alt"></i> {{ project.size }} m²</span>
            </div>
            <div class="actions">
              <q-btn flat label="Open Details" class="action-btn" @click="viewProject(project.id)" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="!showAllProjects">
        <q-btn flat label="Show More Projects" class="view-all-btn" @click="showMoreProjects" />
      </div>
      <div v-if="showAllProjects">
        <q-btn flat label="Show Less Projects" class="view-all-btn" @click="showLessProjects" />
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
        <q-btn flat label="ABOUT US" class="btn-story" to="/about-miracle"/>
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
  </div>
  </div>

  </q-page>
</transition>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { projectItems } from 'src/components/ProjectData.vue'

const showLoader = ref(true)
const columns = ref(2)
const showAllProjects = ref(false)
const displayedProjects = ref([])
const projects = ref([])

const saleProjects = computed(() =>
  projectItems.value.filter((project) => project.status === 'Sale')
)

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false
  }, 3500)
  if (saleProjects.value) {
    projects.value = saleProjects.value // Get projects after ProjectData mounts
    displayedProjects.value = projects.value // Display all projects initially
  }
})

const viewProject = (projectId) => {
  window.location.href(`/projects/${projectId}`)
}

const showMoreProjects = () => {
  columns.value += 2
  showAllProjects.value = true
}
const showLessProjects = () => {
  columns.value -= 2
  showAllProjects.value = false
}
</script>

<style scoped>
.fade-ent er-active, .fade-leave-active {
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
  background-color: #3d1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: slideUpOverlay 1.5s ease-in-out forwards 2s; /* Slide up after 2 seconds */
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
@keyframes slideUpOverlay {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
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
@media (min-width: 1110px) {
  .hero-section {
    margin-top: -70px;
}
}
@media (max-width: 1106px) {
  .hero-section {
    height: 102vh;
    margin-top: -85px;
}
}
@media (max-width: 1005px) {
  .hero-section {
    height: 101vh;
    margin-top: -70px;
}
}

@media (max-width: 480px) {
  .hero-section {
    height: 102vh;
    margin-top: -70px;
}
}

@font-face {
  font-family: 'Empire';
  src: url('src/assets/fonts/Empire.ttf') format('truetype');
}

/* Text Overlay in Video */
.video-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(238, 238, 238);
  text-align: center;
  font-family: 'Empire', serif;
  z-index: 1000;
  cursor: default;
}

.video-text-overlay h1 {
  font-size: 4rem; /* Adjust as needed */
}

.vertical-branding {
  position: absolute;
  top: 55%;
  right: 50px;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  text-transform: uppercase;
  font-size: 64px;
  color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  z-index: 2;
  white-space: nowrap;
  cursor: default;
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

  /*Project Section*/
  .projects-section {
    padding: 20px 20px;
    text-align: center;
  }

  .section-title {
    font-family: 'Georgia', serif;
    font-size: 2.5rem;
    color: #000000;
    margin-bottom: 50px;
    text-align: center;
  }

  .projects-container {
  display: flex; /* Default display is flex for horizontal scroll */
  gap: 20px;
  overflow-x: auto; /* Enable horizontal scroll */
  padding-bottom: 20px;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}

.projects-container.grid-layout {
  display: grid; /* Apply grid layout when showAllProjects is true */
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  overflow-x: auto; /* Disable horizontal scroll for grid */
  padding-bottom: 20px;
  scrollbar-width: none;
  scroll-snap-type: none;
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
    height: 260px;
    object-fit: cover;
  }

  .project-info {
    padding: 25px;
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
  .status-sale {
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
    margin-bottom: 10px;
    text-transform: uppercase;
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

/* Partners' Logos Section */
.partners-section {
  margin-top: -40px;
  text-align: center;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  max-width: 1350px;
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

/* About Us Section */
.about-us-section {
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
  .about-us-section {
  margin-bottom: -90px;
  margin-top: 20px;
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

  .video-text-overlay h1{
    font-size: 50px;
  }

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

  .vertical-branding {
    font-size: 45px;
    margin-right: -40px;
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
  margin-bottom: -60px;
}

@media (min-width: 1025px) {
.about-us-section {
  margin-bottom: -90px;
  margin-top: 50px;
}
.text-content {
  padding-top: 20px;
  margin-bottom: 170px;
}

.image-container {
  margin-bottom:-40px;
}
}

/* Main Image */
.building-image {
  max-width: 90%;
  height: 65%;
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

@media (min-width: 1024px) {

.btn-story {
  margin-left:220px;
}
}
</style>
