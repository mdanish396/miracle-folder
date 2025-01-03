<template>
  <q-page>
    <div class="hero-section">
      <!-- Background Image -->
      <div class="hero-image">
        <img src="src/assets/aboutus.jpg" alt="Hero Background" />
        <div class="gradient-overlay"></div>
      </div>

      <!-- Overlay Text -->
      <div class="image-text-overlay">
        <div class="section-title">
          <span class="line"></span>
          ABOUT MIRACLE
        </div>
        <h1 class="main-title">The Miracle Story</h1>
        <p class="established-text">Established in 2014</p>
      </div>

      <!-- Vertical Branding -->
      <div class="vertical-branding">MIRACLE LAND</div>
    </div>

    <!-- Company Background Section -->
    <section class="company-background">
      <div class="container">
        <div class="content-wrapper">
          <i class="fas fa-building icon"></i>          <h2>Company Background</h2>
          <p>
            MLHB was incorporated in October 2014 as the holding company of various
            subsidiaries for upcoming development projects of the group. The company
            aspire to provide quality homes and valuable commercials in the country’s
            second and third tiered cities by creating townships with well-planned and
            integrated developments.
          </p>
          <p>
            The group’s initial focus would be on the high potential areas across
            Pahang and eventually progressing to the other parts of the country. The
            group has secured several development projects and it is actively seeking
            out to acquire new land banks to ensure continuing growth.
          </p>
          <p>
            MLHB’s core team has substantial experience in the property development
            industry which had completed to date numerous development projects covering
            Residential and Commercial as well as Light Industrial, under Dynaton Group
            - a series of ISO accredited property development and construction companies.
          </p>
          <p>
            With a team of experienced and dedicated workforce, MLHB is confident to
            further grow its capabilities while generating sustainable value for its
            stakeholders.
          </p>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section">
      <div class="container">
        <div class="content-wrapper">
          <i class="fas fa-lightbulb icon"></i>
          <h2>Our Vision</h2>
          <p>
            To be one of the most trusted and leading developers in the country, renowned for quality, innovation, and reliability.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="content-wrapper">
          <i class="fas fa-bullseye icon"></i>
          <h2>Our Mission</h2>
          <ul>
            <li>
              <strong>Exceptional Planning and Design:</strong> To strive for excellence in planning and design, ensuring every project is a masterpiece.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> To provide peace of mind with quality materials, superior workmanship, and timely completion.
            </li>
            <li>
              <strong>Community Development:</strong> To enhance the social and economic well-being of local communities through impactful projects.
            </li>
            <li>
              <strong>Sustainable Land Utilization:</strong> To maximize land value while maintaining a sustainable living environment.
            </li>
            <li>
              <strong>Stakeholder Value:</strong> To deliver sustainable returns to shareholders.
            </li>
            <li>
              <strong>Employee Growth:</strong> To foster the development and reward the dedication of our employees.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="contact-us" id="section-contact">
      <div class="contact-container">
        <div class="contact-wrapper">
          <!-- Left Section -->
          <div class="contact-left">
            <h2>Contact Us</h2>
            <address>
              No. 1, Tingkat Basement, Jalan Dagang 2,<br>
              Kampung Bukit Angin, 28000 Temerloh, Pahang<br>
              09-296 0000
            </address>
            <p>Please leave your details to receive more information about our developments or projects.</p>
          </div>

          <!-- Right Section -->
          <div class="contact-right">
            <form class="contact-form">
              <input type="text" placeholder="Name*" required>
              <input type="email" placeholder="Email*" required>
              <input type="tel" placeholder="Telephone*" required>
              <select>
                <option disabled selected>Nature of enquiry</option>
                <option>Consultation</option>
                <option>Contractor</option>
                <option>Business</option>
                <option>General</option>
              </select>
              <textarea placeholder="Questions/Comments*" required></textarea>
              <button type="submit" class="submit-btn">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>

</script>
<style scoped>
/* General Font Definitions */
@font-face {
  font-family: 'GeographWebMedium';
  src: url('src/assets/fonts/geograph/geographwebmedium.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'GeographWebRegular';
  src: url('src/assets/fonts/geograph/geographwebregular.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'OaricBold';
  src: url('src/assets/fonts/Oaric-Bold.ttf') format('truetype');
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 47vh; /* Full-screen height */
  overflow: hidden;
  margin-top: -70px;
}

.hero-image img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  z-index: 2;
}

.image-text-overlay {
  padding-top: 80px;
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  text-align: left;
  font-family: 'GeographWebMedium', sans-serif;
  color: white;
  z-index: 3;
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

/* Styling for the section title with a vertical line */
.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'OaricBold', sans-serif;
  font-size: 16px;
  color: #00B398;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: -10px;
  margin-right: 330px;
}

.section-title .line {
  display: inline-block;
  width: 4px; /* Thickness of the line */
  height: 24px; /* Height of the line */
  background-color: #00B398; /* Gold accent */
  margin-right: 8px; /* Space between the line and text */
}

.image-text-overlay .main-title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 10px;
}

.image-text-overlay .established-text {
  font-size: 15px;
  font-family: 'GeographWebRegular', sans-serif;
  color: #ddd;
}

.vertical-branding {
  position: absolute;
  top: 55%;
  right: 50px;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  text-transform: uppercase;
  font-size: 27px;
  color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  z-index: 2;
  white-space: nowrap;
  margin-top: 20px;
}

@media (max-width: 768px) {

.section-title {
  margin-right: 240px;
  font-size: 15px;
}

.image-text-overlay .main-title {
  font-size: 35px;
}

.image-text-overlay .established-text {
  font-size: 15px;
}

.vertical-branding {
    font-size: 28px; /* Adjust size for smaller screens */
    right: 20px; /* Adjust position */
    margin-top: 20px;
  }
}

.content-wrapper {
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.content-wrapper .icon {
  font-size: 50px;
  color: #007acc;
  margin-bottom: 20px;
}

/* Company Background Section */
.company-background {
  background: linear-gradient(135deg, #ffed, rgb(243, 243, 193));
  padding: 60px 20px;
}

.company-background h2 {
  font-family: "OaricBold", sans-serif;
  font-size: 28px;
  margin-bottom: 20px;
  color: #007acc;
}

.company-background p {
  color: #555;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

/* Vision Section */
.vision-section {
  background: linear-gradient(135deg, #00B398, #01c5ae);
  color: #333;
  padding: 60px 20px;
}

.vision-section h2 {
  font-family: "OaricBold", sans-serif;
  font-size: 28px;
  margin-bottom: 20px;
}

.vision-section p {
  font-size: 18px;
  line-height: 1.8;
}

/* Mission Section */
.mission-section {
  background: linear-gradient(135deg, #ffed, rgb(243, 243, 193));
  padding: 60px 20px;
  margin-bottom:-20px;
}

.mission-section h2 {
  font-family: "OaricBold", sans-serif;
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.mission-section ul {
  list-style: none;
  padding: 0;
}

.mission-section li {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.8;
  color: #555;
}

.mission-section strong {
  color: #007acc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .content-wrapper {
    padding: 15px;
  }

  .icon {
    font-size: 40px;
  }

  h2 {
    font-size: 24px;
  }

  p,
  li {
    font-size: 14px;
  }
}

/* Contact Us Section */
.contact-us {
  background-color: peachpuff;
  color: #000;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 4px solid #00B398;
}

.contact-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(135deg, #ffed, rgb(243, 243, 193));
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.contact-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
}

/* Left Section */
.contact-left, .contact-right {
  flex: 1;
  width: 100%;
}

.contact-left h2 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.contact-left address {
  font-style: normal;
  margin-bottom: 15px;
  line-height: 1.6;
}

.contact-left a {
  color: #00B398;
  text-decoration: none;
}

.contact-left a:hover {
  text-decoration: underline;
}

/* Right Section */
.contact-right {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  padding: 20px;
  border-radius: 10px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-form input,
.contact-form textarea,
.contact-form select {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
}

.contact-form textarea {
  resize: none;
  height: 100px;
}

.contact-form select {
  font-size: 0.9rem;
  cursor: pointer;
}

.submit-btn {
  padding: 10px 20px;
  background-color: transparent;
  color: #000;
  border: 2px solid #02947e;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

.submit-btn:hover {
  background-color: #00B398;
  color: white;
}

@media screen and (min-width: 768px){
  .contact-wrapper {
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }

  .contact-container {
    gap: 40px;
  }

  .contact-left h2{
    font-size: 2.5rem;
  }

  .contact-right {
    width: 450px;
  }
}

@media screen and (min-width: 1024px){
  .contact-wrapper {
    gap: 150px;
  }

  .contact-left h2{
    font-size: 3rem;
  }
}

  </style>
