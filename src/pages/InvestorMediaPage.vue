<template>
  <q-page class="investor-media-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="title-IM">
      <h1>Investor & Media</h1>
      <p>Access important reports, media resources, announcements, and news.</p>
    </div>
    </section>

    <!-- Reports Section -->
    <section class="reports">
      <h2>Financial Reports</h2>
      <p>Access our latest financial reports and company statements here.</p>

      <div class="report-list">
        <div class="report-item" v-for="report in reports" :key="report.id">
          <q-card @click="downloadReport(report.file)" class="report-btn" flat>
            <q-icon name="picture_as_pdf" color="primary" />
            {{ report.title }}
          </q-card>
        </div>
      </div>
    </section>

    <!-- Announcements Section -->
    <section class="announcements">
      <h2>Announcements</h2>
      <p>Read the latest announcements from our company.</p>

      <div class="announcement-list">
        <div class="announcement-item" v-for="announcement in announcements" :key="announcement.id">
          <q-card @click="openAnnouncement(announcement.link)" class="announcement-btn" flat>
            <q-icon name="notifications" color="secondary"/>
            {{ announcement.title }}
          </q-card>
        </div>
      </div>
    </section>

    <!-- Investor Centre Section -->
    <section class="investor-centre">
      <h2>Investor Centre</h2>
      <p>Discover investor-related resources and presentations.</p>

      <div class="investor-list">
        <div class="investor-item" v-for="investor in investors" :key="investor.id">
          <q-card @click="openInvestor(investor.link)" class="investor-btn" flat>
            <q-icon name="account_balance_wallet" color="primary"/>
            {{ investor.title }}
          </q-card>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news">
      <h2>News</h2>
      <p>Stay updated with the latest company news.</p>

      <div class="news-list">
        <div class="news-item" v-for="news in newsItems" :key="news.id">
          <q-card @click="openNews(news.link)" class="news-btn" flat>
            <q-icon name="article" color="secondary"/>
            {{ news.title }}
          </q-card>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const reports = ref([
  { id: 1, title: '2023 Annual Report', file: '/path/to/annual_report_2023.pdf' },
  { id: 2, title: 'Q4 Earnings Report', file: '/path/to/q4_earnings_report.pdf' },
  { id: 3, title: 'Annual General Meeting Notice', file: '/path/to/agm_notice.pdf' }
])

const announcements = ref([
  { id: 1, title: 'Company Update - March 2024', link: '/path/to/company_update_march_2024.pdf' },
  { id: 2, title: 'Shareholder Meeting Announcement', link: '/path/to/shareholder_meeting_announcement.pdf' }
])

const investors = ref([
  { id: 1, title: 'Investor Presentation Q1', link: '/path/to/investor_presentation_q1.pdf' },
  { id: 2, title: 'Annual Shareholders Report', link: '/path/to/annual_shareholders_report.pdf' }
])

const newsItems = ref([
  { id: 1, title: 'New Project Launch', link: '/path/to/project_launch_news.pdf' },
  { id: 2, title: 'Company Partnership Announcement', link: '/path/to/partnership_announcement_news.pdf' }
])

const downloadReport = (file) => {
  const link = document.createElement('a')
  link.href = file
  link.download = file.split('/').pop()
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const openAnnouncement = (link) => {
  window.open(link, '_blank')
}

const openInvestor = (link) => {
  window.open(link, '_blank')
}

const openNews = (link) => {
  window.open(link, '_blank')
}
</script>

<style scoped>
.hero-section {
  padding: 20px;
  height: 47vh;
  text-align: center;
  background-color: #006039;
  margin-top: -70px;
  color: white;
}

/* Navigation Buttons Group */
.btn-nav {
  position: fixed;
  top: 15.3%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 100vw; /* Full viewport width */
  height: 10vh; /* Full viewport height */
  color: white;
  background-color: #00b398; /* Background color for the button container */
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove any default padding */
  justify-content: center;
  align-items: center;
  flex-direction: row; /* Arrange buttons vertically */
  gap: 10px; /* Space between buttons */
  z-index: 1000; /* Ensure it's above other elements */
}

/* Styling for the navigation card */
.flat-card {
  background-color: transparent; /* Transparent background */
  box-shadow: none; /* No shadow */
  border: none; /* No border */
  border-radius: 0;
}

.nav-section-card {
  padding: 10px 20px; /* Add some padding for better click area */
  font-size: 1rem; /* Adjust font size for readability */
  font-weight: 500; /* Semi-bold text */
  font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.nav-section-card:hover {
  color: peachpuff; /* Hover text color */
  border-radius: 5px; /* Add subtle border radius on hover */
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
}

@media (max-width: 768px){

.title-IM h1 {
  font-size: 40px;
}

.title-IM p {
  font-size: 13px;
}
}

.reports, .announcements, .investor-centre, .news {
  padding: 20px;
  padding-right: 70px;
  padding-left: 150px;
  margin-top: 10px;
}

@font-face {
  font-family: 'RobotoMedium';
  src: url('src\assets\fonts\Roboto-Medium.ttf') format('truetype');
  font-weight: bold;
}

.reports h2, .announcements h2, .investor-centre h2, .news h2{
font-family: 'RobotoMedium', sans-serif;
font-size: 30px;
}

.report-list, .announcement-list, .investor-list, .news-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.report-item, .announcement-item, .investor-item, .news-item {
  display: flex;
  align-items: center;
}

.report-btn, .announcement-btn, .investor-btn, .news-btn {
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

.report-btn:hover, .announcement-btn:hover, .investor-btn:hover, .news-btn:hover {
  color: #02947e;
  background-color: transparent;
}

.q-icon {
  font-size: 1.5rem;
}
</style>
