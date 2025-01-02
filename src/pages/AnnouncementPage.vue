<template>
  <q-page class="announcement-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="title-IM">
        <h1>Announcements</h1>
        <p>Read the latest announcements from our company</p>
      </div>
    </section>

    <!-- Announcements Section -->
    <section class="announcements">
      <div v-for="announcement in announcementsItems" :key="announcement.id" class="announcement-list">
        <div class="announcement-item">
          <q-card @click="openAnnouncement(announcement.link)" class="announcement-btn" flat>
            <q-icon name="notifications" color="secondary"/>
            {{ announcement.title }}
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { announcementsItems } from 'src/components/AnnouncementData.vue'

const openAnnouncement = (link) => {
  window.open(link, '_blank')
}
</script>

<style scoped>
.hero-section {
  padding: 20px;
  height: 43vh;
  text-align: center;
  background-color: #006039;
  margin-top: -70px;
  color: white;
}

/* Responsive Design */
@media (min-width: 1110px) {
  .hero-section {
    margin-top: -70px;
}
}
@media (max-width: 1106px) {
  .hero-section {
    height: 44vh;
    margin-top: -85px;
}
}

@font-face {
  font-family: 'GeographWebMedium';
  src: url('src/assets/fonts/geograph/geographwebmedium.ttf') format('truetype');
  font-weight: bold;
}

.title-IM {
  font-family: 'GeographWebMedium', sans-serif;
}

.title-IM h1{
  margin-top: 80px;
  font-size: 50px;
}

.title-IM p {
  margin-top: -50px;
  font-size: 17px;
}

.announcements {
  padding: 20px;
padding-right: 70px;
padding-left: 150px;
margin-top: 10px;
padding-bottom: 100px;
}

.announcement-list {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(2, 1fr);
}

.announcement-item {
  display: flex;
  align-items: center;
}

@media (max-width: 768px){

.announcement-list {
  display: flex;
  flex-direction: column;
}

.title-IM h1 {
font-size: 40px;
}

.title-IM p {
font-size: 13px;
}
}

@media (max-width: 480px) {
.announcements{
  padding-left: 80px;
}
}

.announcement-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  padding: 12px 20px;
  width: fit-content;
  transition: color 0.3s;
  background-color: transparent;
  cursor: pointer;
  color: rgb(48, 48, 48);
}

.announcement-btn:hover {
  color: #02947e;
  background-color: transparent;
}

.q-icon {
  font-size: 1.5rem;
}
</style>
