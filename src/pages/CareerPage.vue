<template>
  <q-page>
    <!-- Hero Image (Full Width) -->
    <div class="hero-section">
      <div class="hero-image">
        <img
        src="src/assets/career1.png"
        alt="Hero Image"/>
        <div class="gradient-overlay"></div>
      </div>
    </div>

    <!-- Why Join Us Section -->
    <div class="career-section">
      <div class="content-container">
        <div class="text-content-1">
          <h2>Why Join Us</h2>
          <ul>
            <li><strong>Flat structure:</strong> Hierarchy is not our focus; we value contributions from all levels.</li>
            <li><strong>Fast career progression:</strong> We ensure you have the tools and opportunities to grow.</li>
            <li><strong>Vibrant Work Culture:</strong> We celebrate collaboration and diversity.</li>
            <li><strong>Realistic bosses:</strong> Our leaders are supportive and result-oriented.</li>
          </ul>
        </div>
        <div class="image-container">
          <!-- Image -->
          <img src="src/assets/career3.jpg" alt="Why Join Us" class="career-image" />
        </div>
      </div>
    </div>

    <!-- Why Teamwork Matters Section -->
    <div class="career-section">
      <div class="content-container">
        <div class="image-container">
          <!-- Image -->
          <img src="src/assets/career3.jpg" alt="Why Join Us" class="career-image" />
        </div>
        <div class="text-content-2">
          <h2>Why Teamwork Matters</h2>
          <p>
            Teamwork is essential for success in today’s professional world. Collaboration fosters productivity, strengthens
            relationships, and enhances problem-solving skills.
          </p>
          <p>
            The ability to effectively work as a team is key to achieving shared goals and individual growth.
          </p>
        </div>
      </div>
    </div>

    <!-- Our People Section -->
    <div class="career-section">
      <div class="content-container">
        <div class="text-content-1">
          <h2>Our People</h2>
          <p>
            Our people are the heart of our business. Whatever you need, we’re here to help.
          </p>
        </div>
        <div class="image-container">
          <!-- Image -->
          <img src="src/assets/career2.png" alt="Why Join Us" class="career-image" />
        </div>
      </div>
      <q-btn flat label="Career Opportunities" class="btn-story" to="/about-miracle"/>
    </div>
  </q-page>
</template>

<script setup>
// This is a setup script for CareerPage.vue
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 47vh; /* Full-screen height */
  overflow: hidden;
  margin-top: -70px;
}

.hero-image img {
  width: 100%;
  height: 70vh;
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

.career-section {
  padding: 80px 40px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content-1{
  flex: 1;
  padding-right: 40px;
}

.text-content-2{
  flex: 1;
  padding-left: 40px;
}

.text-content-1 h2 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 20px;
}

.text-content-2 h2 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 20px;
}

.text-content-1 li {
  font-size: 18px;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 20px;
}

.text-content-1 p {
  font-size: 18px;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 20px;
}

.text-content-2 p {
  font-size: 18px;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Image Section*/
.image-container {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
}

/* Image */
.career-image {
  max-width: 100%;
  height: auto;
  border-radius: 2px;
}

ul {
  padding-left: 20px;
  list-style: disc;
}

.btn-story {
  background-color: transparent;
  border: 2px solid #02947e;
  color: #000000;
  font-weight: bold;
  padding: 10px 40px;
  margin-top: 100px;
  left: 40%;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.btn-story:hover {
  background-color: #00B398;
  color: white;
  transform: translateY(-3px);
}

@media (min-width: 1110px) {
  .hero-section {
    margin-top: -70px;
}
}
@media (max-width: 1106px) {
  .hero-section {
    height: 48vh;
    margin-top: -85px;
}
}

/* Adjust layout for smaller screens */
@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text-content-2 {
    padding-right: 0px;
    padding-bottom: 0px;
  }

  .text-content-1 {
    padding-right: 0px;
    padding-bottom: 20px;
  }

  .image-container {
    width: 90%; /* Scale image down */
  }

}

/* Image Below Text for Smaller Screens */
@media (max-width: 768px) {
  .content-container {
    flex-direction: column; /* Stack elements vertically */
    align-items: center;
    text-align: center;
  }

  .text-content-1, .text-content-2 {
    padding: 0 10px;
    margin-bottom: 20px;
  }

  .text-content-2 {
    order: -1;
  }

  .image-container {
    width: 100%;
  }

  .career-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  /* Tablet Adjustments */
  .career-section {
    padding: 12px;
  }

  .text-content-1 h2 {
    font-size: 1.9rem;
  }

  .text-content-2 h2 {
    font-size: 1.9rem;
  }

  ul {
    padding-left: 20px;
    text-align: left;
  }

  .text-content-1 li {
    font-size: 17px;
  }

  .text-content-1 p {
    font-size: 17px;
  }

  .text-content-2 p {
    font-size: 17px;
  }

  .btn-story {
    left: 24%;
    margin-top: 40px;
    margin-bottom: 30px;
  }
}

@media (max-width: 480px) {
  /* Phone Adjustments */
  .career-section {
    padding: 8px;
  }

  h2 {
    font-size: 1.25rem;
  }

  ul {
    font-size: 0.9rem;
    padding-left: 12px;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
