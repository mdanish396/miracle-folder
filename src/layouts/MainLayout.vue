<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Conditionally render header based on the route -->
    <!-- Top Bar as Overlay -->
    <q-header class="q-pa-md navigation-bar">
      <q-toolbar class="toolbar">
        <!-- Left-aligned: Logo and Title -->
        <router-link to="/" class="logo-title-group" @click="handleLogoClick">
          <img src="src/assets/icons/logo-96X96.png" alt="Logo" class="logo" />
          <q-toolbar-title class="toolbar-title">
            MIRACLE LAND
          </q-toolbar-title>
        </router-link>

        <!-- Right-aligned: Navigation Buttons for larger screens -->
        <q-space v-if="!drawerVisible" />
        <div class="nav-buttons q-mr-md" v-if="!isSmallScreen">
          <q-card class="nav-button flat-card" clickable @click="$router.push('/about-miracle')">
            <q-card-section class="nav-card-section">About Miracle</q-card-section>
          </q-card>
          <q-card
            class="nav-button flat-card" clickable @click="$router.push('/development')">
            <q-card-section class="nav-card-section">Development</q-card-section>
          </q-card>

          <q-card
          class="nav-button flat-card"
          @mouseover="showDropdown('sale')"
          @mouseleave="hideDropdown('sale')"
          >
            <q-card-section class="nav-card-section">For Sale
              <q-icon :name="'arrow_drop_down'" class="dropdown-arrow" />
            </q-card-section>
            <q-menu
            v-if="activeDropdown === 'sale'"
            anchor="bottom middle"
            self="top middle"
            fit
            @mouseover="showDropdown('sale')"
            @mouseleave="hideDropdown('sale')"
            class="dropdown-container"
            >
              <div class="dropdown-content">
                <!-- district list -->
                <div v-for="(districts, state) in groupedDevelopments" :key="state" class="district-list">
                  <h6>{{ state }}</h6>
                  <ul>
                    <li
                    v-for="(district, index) in districts"
                    :key="index"
                    @mouseover="setSelectedDistrict(district)"
                    @click="setSelectedDistrict(district)"
                    class="district-item"
                    default-opened
                    >
                      {{ district }}
                    </li>
                  </ul>
                </div>

                <!-- Images Grid -->
                <div class="image-grid">
                  <div class="grid-item" v-for="(project, index) in filteredProjects" :key="index">
                    <div class="image-container"
                    @click="navigateToSlug(project.slug)">
                      <img :src="project.image" alt="Project Image" />
                      <div class="overlay">
                        <p>{{ project.name }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-menu>
          </q-card>

          <q-card class="nav-button flat-card"
          @mouseover="showDropdown('lease')"
          @mouseleave="hideDropdown('lease')"
          >
            <q-card-section class="nav-card-section">For Lease
              <q-icon :name="'arrow_drop_down'" class="dropdown-arrow" />
            </q-card-section>
            <q-menu
            v-if="activeDropdown === 'lease'"
            anchor="bottom middle"
            self="top middle"
            @mouseover="showDropdown('lease')"
            @mouseleave="hideDropdown('lease')"
            class="dropdown-container"
            >
              <div class="dropdown-content">
                <!-- district list -->
                <div class="district-list">
                  <h6>Pahang</h6>
                  <ul>
                    <li
                    v-for="(district, index) in districts"
                    :key="index"
                    @mouseover="setSelectedDistrict(district.name)"
                    @click="setSelectedDistrict(district.name)"
                    class="district-item"
                    >
                      {{ district.name }}
                    </li>
                  </ul>
                </div>

                <!-- Images Grid -->
                <div class="image-grid">
                  <div class="grid-item" v-for="(lease, index) in filteredLeases" :key="index">
                    <div class="image-container">
                      <img :src="lease.image" alt="Lease Image" />
                      <div class="overlay">
                        <p>{{ lease.name }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-menu>
          </q-card>
          <q-card class="nav-button flat-card" clickable @click="$router.push('/awards')">
            <q-card-section class="nav-card-section">Awards</q-card-section>
          </q-card>

          <q-card
          class="nav-button flat-card"
          @mouseover="showDropdown('investor')"
          @mouseleave="hideDropdown('investor')"
          >
            <q-card-section class="nav-card-section">
              Investor & Media
              <q-icon :name="'arrow_drop_down'" class="dropdown-arrow" />
            </q-card-section>
            <q-menu
            v-if="activeDropdown === 'investor'"
            anchor="bottom left"
            self="top left"
            fit
            @mouseover="showDropdown('investor')"
            @mouseleave="hideDropdown('investor')"
            >
              <q-list>
                <q-item clickable @click="$router.push('/investor-centre')" class="menu-section">
                  <q-item-section>Investor Centre</q-item-section>
                </q-item>
                <q-item clickable @click="$router.push('/announcement')" class="menu-section">
                  <q-item-section>Announcements</q-item-section>
                </q-item>
                <q-item clickable @click="$router.push('/reports')" class="menu-section">
                  <q-item-section>Reports</q-item-section>
                </q-item>
                <q-item clickable @click="$router.push('/news')" class="menu-section">
                  <q-item-section>News</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-card>
        </div>

        <!-- Drawer toggle button for small screens -->
        <q-btn
        flat
        icon="menu"
        class="q-ml-md"
        style="color: black;"
        @click="toggleDrawer"
        v-if="isSmallScreen"
        />
      </q-toolbar>
    </q-header>

    <!-- Drawer for small screens -->
    <q-drawer v-model="drawerVisible" side="right"
    :width="350"
    :breakpoint="300"
    overlay
    bordered
    class="full-height-drawer"
    v-if="isSmallScreen"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable to="/about-miracle" class="drawer-item" v-ripple>
            <q-item-section>About Miracle</q-item-section>
          </q-item>
          <q-item clickable to="/development" class="drawer-item" v-ripple>
            <q-item-section>Development</q-item-section>
          </q-item>
          <q-expansion-item
          group="somegroup"
          label="For Sale"
          class="drawer-item-expand"
          v-for="(districts, state) in groupedDevelopments" :key="state"
          >
            <q-item class="drawer-item-child-1">
              <q-item-section>{{ state }}</q-item-section>
            </q-item>
            <q-expansion-item
            group="somegroup1"
            class="drawer-item-expand-2"
            v-for="(district, index) in districts"
                    :key="index"
                    @click="setSelectedDistrict(district)"
                    :label="district"
            >
              <q-item
              v-for="(project, index) in filteredProjects" :key="index"
              clickable :to="`/development-details/${project.slug}`"
              class="drawer-item-child-2">
                <q-item-section>{{ project.name }}</q-item-section>
              </q-item>
            </q-expansion-item>
          </q-expansion-item>
          <q-expansion-item
          group="somegroup"
          label="For Lease"
          class="drawer-item-expand"
          >
            <q-expansion-item
            group="somegroup1"
            label="Jengka"
            class="drawer-item-expand-2"
            >
              <q-item clickable to="/reports" class="drawer-item-child-2">
                <q-item-section>43 gireeess</q-item-section>
              </q-item>
            </q-expansion-item>
            <q-expansion-item
            group="somegroup1"
            label="Maran"
            class="drawer-item-expand-2"
            >
              <q-item clickable to="/reports" class="drawer-item-child-2">
                <q-item-section>1 gireeess</q-item-section>
              </q-item>
            </q-expansion-item>
          </q-expansion-item>
          <q-item clickable to="/awards" class="drawer-item">
            <q-item-section>Awards</q-item-section>
          </q-item>
          <q-expansion-item
          group="somegroup"
          label="Investor & Media"
          class="drawer-item-expand"
          >
            <q-item clickable to="/investor-centre" class="drawer-item-child">
              <q-item-section>Investor Centre</q-item-section>
            </q-item>
            <q-item clickable to="/announcement" class="drawer-item-child">
              <q-item-section>Announcements</q-item-section>
            </q-item>
            <q-item clickable to="/reports" class="drawer-item-child">
              <q-item-section>Reports</q-item-section>
            </q-item>
            <q-item clickable to="/news" class="drawer-item-child">
              <q-item-section>News</q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page :style="{ backgroundColor: '#ffffed', }">
        <router-view /> <!-- This is where the content of your pages will be inserted -->
      </q-page>
    </q-page-container>

    <footer class="footer">
      <!-- Footer Content -->
      <div class="footer-content">
        <!-- Left Section -->
        <div class="footer-left">
          <div class="logo-container">
            <img src="src/assets/icons/logo-32X32.png" alt="Company Logo" class="footer-logo">
            <span class="footer-logo-text">MIRACLE LAND</span>
          </div>
          <div class="footer-address">
            <p>No. 1, Tingkat Basement, Jalan Dagang 2,<br>
            Kg Bukit Angin, 28000 <br>Temerloh, Pahang.</p>
          </div>
        </div>

        <!-- Right Section -->
        <div class="footer-right">
          <div class="footer-navigation">
            <a @click.prevent="navigateToContactUs" class="footer-link" href="#">Contact Us</a>
            <router-link to="/career" class="footer-link">Careers</router-link>
            <p class="footer-time">Mon - Sat, 9AM - 5PM</p>
          </div>
          <div class="social-icons">
            <button class="social-btn facebook" aria-label="Facebook" @click="openFacebook">
              <i class="mdi mdi-facebook"></i>
            </button>
            <button class="social-btn youtube" aria-label="YouTube" @click="openYoutube">
              <i class="mdi mdi-youtube"></i>
            </button>
            <button class="social-btn instagram" aria-label="Instagram" @click="openInstagram">
              <i class="mdi mdi-instagram"></i>
            </button>
            <button class="social-btn tiktok" aria-label="TikTok" @click="openTiktok">
              <img class="tiktok" src="src\assets\tiktok1.png" alt="Tiktok">
            </button>
          </div>
        </div>
        <div class="footer-copyright">
          <p>© 2025 Miracle Land Holdings Berhad (1111981-P). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { developments } from 'src/components/CurrentDevelopmentData.vue'
import { districts } from 'src/components/DropdownProjectSaleData.vue'

const leases = [
  { name: '43 gireeess', image: 'src/assets/currentproject/house1.jpg', district: 'Jengka' },
  { name: '1 gireeess', image: 'src/assets/building.png', district: 'Maran' }
]

const displayedDevelopments = ref(developments)
const selectedDistrict = ref('')

const groupedDevelopments = computed(() => {
  return developments.reduce((acc, dev) => {
    if (!acc[dev.state]) {
      acc[dev.state] = []
    }
    if (!acc[dev.state].includes(dev.districts)) {
      acc[dev.state].push(dev.districts)
    }
    return acc
  }, {})
})

// Computed projects based on selected district
const filteredProjects = computed(() => {
  return displayedDevelopments.value.filter(
    (dev) => dev.districts === selectedDistrict.value
  )
}
)

const setSelectedDistrict = (district) => {
  selectedDistrict.value = district
}

const navigateToSlug = (slug) => {
  router.push(`/development-details/${slug}`).catch(() => {})
}

const filteredLeases = computed(() =>
  leases.filter((lease) => lease.district === selectedDistrict.value)
)

const $q = useQuasar() // Get the $q object
const router = useRouter()

const activeDropdown = ref(null)
const drawerVisible = ref(false)
const screenBelow1105px = ref(false) // Screen width state

// Computed property for small screens
const isSmallScreen = computed(() => {
  return $q.screen.lt.md // Adjust the breakpoint as needed
})

// Resize handler
const handleResize = () => {
  screenBelow1105px.value = window.innerWidth < 1105
}

// Dropdown hover logic
let hoverTimeout = null

const showDropdown = (key) => {
  clearTimeout(hoverTimeout) // Cancel any pending hide
  activeDropdown.value = key // Set the active dropdown to the given key
}

const hideDropdown = (key) => {
  hoverTimeout = setTimeout(() => {
    if (activeDropdown.value === key) {
      activeDropdown.value = null // Clear the active dropdown
    }
  }, 150) // Small delay to allow smooth transitions
}

// Drawer toggle
const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value
}

// Logo click handler
const handleLogoClick = () => {
  this.$router.push('/') // Redirect to IndexPage.vue
}

const navigateToContactUs = () => {
  router.push({ path: '/about-miracle', hash: '#section-contact' })
}

// Social media handlers
const openFacebook = () => {
  window.open('https://www.facebook.com/dynaton.property', '_blank')
}

const openInstagram = () => {
  window.open('https://www.instagram.com/dynaton.property', '_blank')
}

const openYoutube = () => {
  window.open('https://www.youtube.com/channel/dynaton.property', '_blank')
}

const openTiktok = () => {
  window.open('https://www.tiktok.com/@dynaton.property', '_blank')
}

// Mount/unmount lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize() // Initial check on mount
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
@import 'src/css/global.css';
/* Logo */
.logo {
  height: 40px;
  margin-right: -5px;
  transition: filter 0.4s ease-in-out;
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
  text-decoration: none;
}

/* Transition for toolbar title */
.toolbar-title {
  font-family: 'Times New Roman', Times, serif;
  transition: color 0.4s ease-in-out;
  padding-top: 10px;
  color: black;
}
/* Navigation Buttons Group */
.nav-buttons {
  display: flex;
  gap: 25px; /* Space between buttons */
}

/* Styling for the navigation card */
.flat-card {
  background-color: transparent; /* No background */
  box-shadow: none; /* No shadow */
  border: none; /* No border */
}

.nav-card-section {
  padding: 5px;
  font-size: 1rem; /* Adjust font size */
  font-weight: 500; /* Adjust font weight */
  font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  transition: color 0.3s ease-in-out;
  color: #000;
}

/* Hover effect for the navigation card */
.flat-card:hover .nav-card-section {
  color: #00B398; /* Text color on hover */
  background: none; /* Ensure no background is applied */
  cursor: pointer;
}

.q-menu-enter-active,
.q-menu-leave-active {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-arrow {
  margin-left: 5px;
}

.q-menu {
  transition: opacity 0.6s ease, transform 0.3s ease;
}
.q-item {
  white-space: nowrap; /* Prevents the menu items from wrapping */
}

.menu-section:hover{
  color: #00B398;
}

.dropdown-container {
  width: 800px;
  padding: 20px 0;
  padding-bottom: 40px;
}

.dropdown-content {
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.district-list {
  width: 30%;
  border-right: 1px solid #ddd;
  padding-right: 10px;
}

.district-list h6 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: -15px;
}

.district-list ul {
  list-style: none;
  padding-left: 20px;
}

.district-item {
  padding: 5px 0;
  cursor: pointer;
  font-size: 14px;
}

.district-item:hover {
  background-color: #f0f0f0;
  box-shadow: none;
  color:#00B398;
}

.image-grid {
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-left: 10px;
  height:300px;
  overflow-y: auto;
}

.grid-item {
position: relative;
}

.image-container {
  position: relative;
  width: 100%; /* Allows it to adapt to the column width */
  aspect-ratio: 1; /* Keeps a square aspect ratio */
  overflow: hidden; /* Ensures the image doesn't overflow the container */
  border-radius: 2px;
  cursor: pointer;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.image-container img:hover {
    transform: scale(1.2);
  }

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
  color: #fff;
  padding-top: 15px;
  margin-bottom: -5px;
  text-align: center;
  font-size: 0.75rem;
}

.overlay p {
  margin-bottom: 7px;
}

.dropdown {
  padding: 5px;
}

.dropdown:hover {
color:#00B398;
}

/* Navigation Bar */
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  z-index: 1200;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0px 1px 8px rgb(139, 139, 139); /* Soft shadow for elevation */
  transition: opacity 0.4s ease-in-out, background-color 0.4s ease-in-out; /* Smooth transition */
  border: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.full-height-drawer {
  padding-top: 10px;
}

/* Style for drawer items */
.drawer-item {
  font-family: 'Arial', sans-serif;
  font-size: 15px;
  padding: 0px 15px;
  font-weight: bold;
  margin-bottom: -10px;
}

.drawer-item:last-child {
  border-bottom: none;
}

.drawer-item:hover {
  background-color: #f5f5f5;
}

.drawer-item-expand {
  font-family: 'Arial', sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 0px 0px;
  margin-bottom: -10px;
}

.drawer-item-child:hover {
  color: #00B398; /* Change the text color on hover */
}

/* Style for drawer item children */
.drawer-item-child {
  padding: 0px 25px;
  font-family: 'Arial', sans-serif;
  font-size: 13.5px;
  font-weight: bold;
  color: #3d3c3c;
  margin-top: -10px;
}

.drawer-item:hover {
  color: #00B398; /* Change the text color on hover */
}

.drawer-item-child-1 {
  padding: 0px 25px;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  cursor:default;
  margin-bottom: -10px;
  margin-top: -10px;
  color: #3d3c3c;
}

.drawer-item-expand-2 {
  font-family: 'Arial', sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding-left: 20px;
  margin-bottom: -10px;
  color: #494c52;
}

.drawer-item-child-2 {
  padding: 0px 30px;
  font-family: 'Arial', sans-serif;
  font-size: 13px;
  font-weight: bold;
  margin-top: -10px;
  margin-bottom: -10px;
  color: #58595B;
}

.drawer-item-child-2:hover {
  color: #00B398; /* Change the text color on hover */
}

/* Responsive Adjustments */
@media (max-width: 1090px) {
  /* Adjust toolbar for tablet screens */
  .logo {
  height: 35px;
  margin-top: -5px;
}

  .toolbar-title {
    font-size: 1.2rem; /* Slightly reduce title font size */
    margin-top: -5px;
  }

  .nav-buttons {
    gap: 10px; /* Reduce space between buttons */
  }
}

@media (max-width: 768px) {

  /* Adjust toolbar for smartphone screens */
  .navigation-bar {
    flex-direction: column;
    padding: 10px 0;
  }

  .logo-title-group {
    flex-direction: row;
    justify-content: center;
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

/* Footer Styling */
.footer {
  background-color: #58595B; /* Dark gray background */
  color: #fff; /* White text */
  padding: 0 120px; /* Smaller footer padding */
  padding-top: 8px;
  padding-bottom: 30px;
  font-family: Arial, sans-serif; /* Set default font */
  position: relative; /* Set position for nested elements */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px; /* Reduced gap */
}

/* Logo with Text */
.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: -15px;
  padding-top: 0px;
  gap: 8px; /* Smaller spacing between logo and text */
}

.footer-logo {
  width: 25px; /* Smaller logo size */
  filter: brightness(0) invert(1); /* White logo */
  margin-top: 30px;
}

.footer-logo-text {
  font-size: 20px; /* Reduced text size */
  font-family: 'Times New Roman', Times, serif;
  color: #fff;
  padding-top: 0px;
  margin-top: 38px;
}

/* Footer Links */
.footer-address {
  margin-top: 30px;
  line-height: 1.2; /* Compact line height */
  font-size: 12px; /* Smaller address text */
}

/* Copyright at the Bottom */
.footer-copyright {
  font-size: 12px; /* Smaller copyright text */
  color: #fff; /* Light gray for less emphasis */
  position: absolute;
  text-align: left; /* Center-align text across the footer */
  margin-top: 120px;
}

/* Right Section */
.footer-right {
  text-align: right;
  flex: 1;
}

.footer-navigation {
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
    margin-top: 42px;
    gap: 20px;
  }

  @font-face {
  font-family: 'Modista';
  src: url('src\assets\fonts\Modista-9ME6y.otf') format('opentype');
  font-weight: 400;
}

.footer-link {
  color: #fff; /* White links */
  font-size: 16px; /* Smaller link size */
  margin-right: 20px;
  gap: 40px;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Modista', sans-serif;

}

.footer-time {
  color: #fff; /* White links */
  font-size: 16px; /* Smaller link size */
  margin-right: 20px;
  gap: 40px;
  text-decoration: none;
  font-family: 'Modista', sans-serif;

}

.footer-link:hover {
  color: #00B398; /* Light gray hover effect */
}

/* Social Icons Section */
.social-icons {
  display: flex;
  gap: 15px; /* Smaller spacing between icons */
  justify-content: flex-end;
  margin-top: 5px;
  margin-right: 20px;
}

.social-btn {
  width: 24px; /* Smaller button size */
  height: 24px;
  border: none; /* White border for outlined effect */
  background: transparent; /* Transparent background */
  color: #fff; /* Icon/text color */
  border-radius: 4px; /* Slightly rounded corners */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px; /* Smaller icon size */
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background-color: #fff; /* White background on hover */
  color: #58595B; /* Dark gray text on hover */
  transform: scale(1.1); /* Slightly increase size on hover */
}

.tiktok:hover {
  background-color: #fff; /* White background on hover */
  color: #58595B; /* Dark gray text on hover */
  transform: scale(1.1);
}

.social-btn i {
  font-size: 24px; /* Consistent icon size */
}

/* Responsive Design */
@media (min-width: 1025px) {
  .footer-address br:first-child {
    display: none;
  }
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  /* Adjust toolbar for tablet screens */
  .footer-address br:last-child {
    display: none;
  }

  .footer-time {
    display: none;
  }

}

@media (max-width: 768px) {

  .footer-content {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .logo-container {
    margin-left: -7px;
    margin-top: -20px;
  }

  .footer-logo {
    width: 40px;
  }

  .footer-logo-text {
    font-size: 24px;
  }

  .footer-address {
    font-size: 12px;
  }

  .footer-address br:last-child {
    display: none;
  }

  .footer-right {
    text-align: center;
    margin-top: 5px;
  }

  .footer-copyright {
    right: 40%;
    bottom: 0%;
    text-align: left;
    font-size: 9px;
  }

  .footer-navigation {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 4px; /* Smaller gap */
    padding-left: 20px;
    margin-top: -30px;
  }

  .logo-container {
    justify-content: center;
  }

  .footer-time {
    display: none;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
}

@media (max-width: 480px) {

  .footer-logo {
    margin-left: -8px;
  }

  .footer-content {
    margin-left: -10px;
    margin-right: -17px;
  }

  .footer-address {
    margin-left: -8px;
  }

  .footer-logo {
    width: 38px;
  }

  .footer-logo-text {
    font-size: 22px;
  }

  .footer-navigation {
    margin-left: -8px;
  }

  .social-icons {
    margin-left: 18px;
  }

  .footer-copyright {
    right: 35%;
  }
}

</style>
