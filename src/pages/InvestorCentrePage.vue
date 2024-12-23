<template>
  <q-page class="investor-centre-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="title-IM">
        <h1>Investor Centre</h1>
      <p>Discover investor-related resources and presentations.</p>
    </div>
    </section>

    <InvestorData v-slot="{ investorsItems }">
    <!-- Investor Centre Section -->
    <section class="investor-centre">

      <div class="investor-list">
        <div class="investor-item" v-for="investor in investorsItems" :key="investor.id">
          <q-card @click="openInvestor(investor.link)" class="investor-btn" flat>
            <q-icon name="account_balance_wallet" color="primary"/>
            {{ investor.title }}
          </q-card>
        </div>
      </div>
    </section>
    </InvestorData>
  </q-page>
    </template>

<script setup>
import InvestorData from 'src/components/InvestorData.vue'

const openInvestor = (link) => {
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

.investor-centre {
padding: 20px;
padding-right: 70px;
padding-left: 150px;
margin-top: 10px;
padding-bottom: 100px;
}

.investor-list {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(2, 1fr);
}

.investor-item {
  display: flex;
  align-items: center;
}

@media (max-width: 768px){

.investor-list {
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
.investor-centre{
  padding-left: 80px;
}
}

.investor-btn {
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

.investor-btn:hover {
  color: #02947e;
  background-color: transparent;
}

.q-icon {
  font-size: 1.5rem;
}
</style>
