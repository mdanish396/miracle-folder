<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Conditionally render header based on the route -->
    <!-- Top Bar as Overlay -->
    <q-header class="q-pa-md navigation-bar" elevated :class="{ visible: scrolled, transparent: !scrolled }">
      <q-toolbar class="toolbar">
        <!-- Left-aligned: Logo and Title -->
        <router-link to="/" class="logo-title-group" @click="handleLogoClick">
          <img src="src/assets/logo.png" alt="Logo" class="logo" />
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
  <q-card class="nav-button flat-card" @mouseover="showDropdown" @mouseleave="hideDropdown">
  <q-card-section class="nav-card-section">Development</q-card-section>
  <q-menu :offset="getOffset()">
    <q-list>
      <q-item clickable to="/current-development">
        <q-item-section class="dropdown"> Current Development</q-item-section>
      </q-item>
      <q-item clickable to="/past-development">
        <q-item-section class="dropdown">Past Development</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</q-card>

  <q-card class="nav-button flat-card" clickable @click="$router.push('/for-sale')">
    <q-card-section class="nav-card-section">For Sale</q-card-section>
  </q-card>
  <q-card class="nav-button flat-card" clickable @click="$router.push('/for-lease')">
    <q-card-section class="nav-card-section">For Lease</q-card-section>
  </q-card>
  <q-card class="nav-button flat-card" clickable @click="$router.push('/awards')">
    <q-card-section class="nav-card-section">Awards</q-card-section>
  </q-card>
  <q-card class="nav-button flat-card" clickable @click="$router.push('/investor-media')">
    <q-card-section class="nav-card-section">Investor & Media</q-card-section>
  </q-card>
</div>

      <!-- Drawer toggle button for small screens -->
      <q-btn
        flat
        dense
        round
        icon="menu"
        class="q-ml-md"
        @click="toggleDrawer"
        v-if="isSmallScreen"
      />
    </q-toolbar>
  </q-header>

  <!-- Drawer for small screens -->
  <q-drawer v-model="drawerVisible" side="right" overlay bordered class="full-height-drawer">
    <q-list padding>
      <q-item clickable to="/about-miracle" class="drawer-item">
        <q-item-section>About Miracle</q-item-section>
      </q-item>
      <q-expansion-item label="Development" class="drawer-item-expand">
        <q-item clickable to="/current-development" class="drawer-item-child">
          <q-item-section>Current Development</q-item-section>
        </q-item>
        <q-item clickable to="/past-development" class="drawer-item-child">
          <q-item-section>Past Development</q-item-section>
        </q-item>
      </q-expansion-item>
      <q-item clickable to="/for-sale" class="drawer-item">
        <q-item-section>For Sale</q-item-section>
      </q-item>
      <q-item clickable to="/for-lease" class="drawer-item">
        <q-item-section>For Lease</q-item-section>
      </q-item>
      <q-item clickable to="/awards" class="drawer-item">
        <q-item-section>Awards</q-item-section>
      </q-item>
      <q-item clickable to="/investor-media" class="drawer-item">
        <q-item-section>Investor & Media</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
    <q-page-container>
      <q-page :style="{ backgroundColor: '#ffffed' }">
        <router-view /> <!-- This is where the content of your pages will be inserted -->
      </q-page>
    </q-page-container>

    <footer class="footer">
  <!-- Footer Content -->
  <div class="footer-content">
    <!-- Left Section -->
    <div class="footer-left">
      <div class="logo-container">
        <img src="src/assets/logo.png" alt="Company Logo" class="footer-logo">
        <span class="footer-logo-text">MIRACLE LAND</span>
      </div>
      <div class="footer-address">
        <p>No. 1, Tingkat Basement, Jalan Dagang 2,<br>
        Kg Bukit Angin, 28000 Temerloh, Pahang.</p>
      </div>
      <p class="footer-copyright">
        © 2025 Miracle Land Holdings Berhad (1111981-P). All rights reserved.
      </p>
    </div>

    <!-- Right Section -->
    <div class="footer-right">
      <div class="footer-navigation">
        <a href="#" class="footer-link">Contact Us</a>
        <a href="#" class="footer-link">Careers</a>
        <p class="footer-time">Mon - Fri, 9AM - 7PM <br>
        Sat, 9AM - 6PM</p>
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
  </div>
</footer>

  </q-layout>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar() // Get the $q object

const scrolled = ref(false)
const dropdownVisible = ref(false)
const drawerVisible = ref(false)
const screenBelow1105px = ref(false) // Add this line

const isSmallScreen = computed(() => {
  return $q.screen.lt.md // Adjust the breakpoint as needed
})

const handleScroll = () => {
  const scrollPosition = window.scrollY
  const windowHeight = window.innerHeight

  scrolled.value = scrollPosition > windowHeight * 0.35
}

// Call handleScroll on the window's scroll event
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleResize() // Initial check on mount
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleResize = () => {
  screenBelow1105px.value = window.innerWidth < 1105
}

window.addEventListener('resize', handleResize)

const handleLogoClick = (event) => {
  // Redirect to IndexPage.vue
  this.$router.push('/')
}

const openFacebook = () => {
  window.open('https://www.facebook.com/dynaton.property', '_blank')
}

const openInstagram = () => {
  window.open('https://www.facebook.com/dynaton.property', '_blank')
}

const openYoutube = () => {
  window.open('https://www.facebook.com/dynaton.property', '_blank')
}

const openTiktok = () => {
  window.open('https://www.facebook.com/dynaton.property', '_blank')
}

const showDropdown = () => {
  dropdownVisible.value = true
}

const hideDropdown = () => {
  dropdownVisible.value = false
}

const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value
}

const getOffset = () => {
  if (screenBelow1105px.value) {
    return [31, 23] // Offset for screens below 1105px
  } else {
    return [50, 23] // No offset for screens above 1105px
  }
}

</script>

<style>
/* Logo */
.logo {
  height: 40px;
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
  text-decoration: none;
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
  gap: 25px; /* Space between buttons */
}

/* Styling for the navigation card */
.flat-card {
  background-color: transparent; /* No background */
  box-shadow: none; /* No shadow */
  border: none; /* No border */
}

.nav-card-section {
  padding: 0;
  font-size: 1rem; /* Adjust font size */
  font-weight: 500; /* Adjust font weight */
  font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  transition: color 0.3s ease-in-out;
}

/* Hover effect for the navigation card */
.flat-card:hover .nav-card-section {
  color: #00B398; /* Text color on hover */
  background: none; /* Ensure no background is applied */
  cursor: pointer;
}

.q-menu {
  width: 15%; /* Ensures the menu's width fits the parent */
}
.q-item {
  white-space: nowrap; /* Prevents the menu items from wrapping */
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

.full-height-drawer {
  height: calc(100vh - 60px); /* Adjust 60px to match your navbar height */
  position: fixed; /* Fix the drawer to the viewport */
  top: 60px; /* Position the drawer below the navbar */
  z-index: 100; /* Ensure the drawer is on top of other elements */
}

/* Style for drawer items */
.drawer-item {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
}

.drawer-item:last-child {
  border-bottom: none;
}

.drawer-item:hover {
  background-color: #f5f5f5;
}

.drawer-item-expand {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
}

/* Style for drawer item children */
.drawer-item-child {
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
}

.drawer-item:hover {
  color: #00B398; /* Change the text color on hover */
}

.drawer-item-child:hover {
  color: #00B398; /* Change the text color on hover */
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
  padding: 15px 30px; /* Smaller footer padding */
  margin-top: 20px;
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
  margin-top: 15px;
  gap: 8px; /* Smaller spacing between logo and text */
}

.footer-logo {
  width: 40px; /* Smaller logo size */
  filter: brightness(0) invert(1); /* White logo */
}

.footer-logo-text {
  font-size: 1rem; /* Reduced text size */
  font-family: 'Times New Roman', Times, serif;
  color: #fff;
}

/* Footer Links */
.footer-address {
  margin-top: 10px;
  line-height: 1.4; /* Compact line height */
  font-size: 0.75rem; /* Smaller address text */
}

/* Copyright at the Bottom */
.footer-copyright {
  font-size: 0.65rem; /* Smaller copyright text */
  color: #bbb; /* Light gray for less emphasis */
  position: absolute;
  bottom: 10px; /* Place at the very bottom edge */
  left: 30px; /* Align with left padding */
  right: 30px; /* Maintain same right padding */
  text-align: left; /* Center-align text across the footer */
  margin-bottom: -5px;
}

/* Right Section */
.footer-right {
  text-align: right;
  flex: 1;
}

.footer-link {
  color: #fff; /* White links */
  font-size: 1rem; /* Smaller link size */
  margin-right: 20px;
  gap: 40px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-time {
  color: #fff; /* White links */
  font-size: 1rem; /* Smaller link size */
  margin-right: 20px;
  gap: 40px;
  text-decoration: none;
}

.footer-link:hover {
  color: #00B398; /* Light gray hover effect */
}

/* Social Icons Section */
.social-icons {
  display: flex;
  gap: 15px; /* Smaller spacing between icons */
  justify-content: flex-end;
  margin-top: 15px;
  margin-right: 20px;
}

.social-btn {
  width: 28px; /* Smaller button size */
  height: 28px;
  border: 1px solid #fff; /* White border for outlined effect */
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
    filter: invert(1);
}

.social-btn i {
  font-size: 24px; /* Consistent icon size */
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .footer-right {
    text-align: center;
    margin-top: 5px;
  }

  .footer-copyright {
    text-align: center;
    margin-bottom: -5px;
  }

  .footer-navigation {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px; /* Smaller gap */
  }

  .logo-container {
    justify-content: center;
  }

  .social-icons {
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 20px;
  }
}

</style>
