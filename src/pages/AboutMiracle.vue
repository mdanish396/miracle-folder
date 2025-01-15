<template>
  <q-page>
    <div class="about-section">
      <div class="content-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-holder">
            <div class="line">
              <div class="line-1"></div>
            </div>
          </div>
          <h2 class="text-above">About</h2>
          <h2 class="text-below">Miracle Land</h2>
        </div>

        <!-- Image Section -->
        <div class="about-image-container">
          <img src="src/assets/currentproject/house1.jpg" class="about-image" />
        </div>
      </div>
    </div>

    <!-- Company Background Section -->
    <section class="company-background">
      <div class="container">
          <h2>Company Background</h2>
          <p>
            MLHB was incorporated in October 2014 as the holding company of various
            subsidiaries for upcoming development projects of the group. The company
            aspire to provide quality homes and valuable commercials in the country’s
            second and third tiered cities by creating townships with well-planned and
            integrated developments.
          </p>
          <p>
            The group’s initial focus would be on the high potential areas across Pahang
            and eventually progressing to the other parts of the country. The group has
            secured several development projects and it is actively seeking out to acquire
            new land banks to ensure continuing growth.
          </p>
          <p>
            MLHB’s core team has substantial experience in the property development industry
            which had completed to date numerous development projects covering Residential and
            Commercial as well as Light Industrial, under Dynaton Group - a series of ISO
            accredited property development and construction companies.
          </p>
          <p>
            With a team of experienced and dedicated workforce, MLHB is confident to further
            grow its capabilities while generating sustainable value for its stakeholders.
          </p>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section">
      <div class="container">
        <div class="content-wrapper">
          <div class="vision-text">
            <h2>Vision</h2>
            <p>
              To be one of the most trusted and<br/>
              leading developer in the country.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
          <h2>Mission</h2>
        <div class="mission-wrapper">
          <ul>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To strive for best planning and design for all our development projects ensuring each and every one is a masterpiece.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To give customer peace of mind by ensuring quality material and workmanship and completion on time.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To enhance the social and economic aspect of local community through our development projects.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To maximize the value of each project land while maintaining the conducive living environment.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To deliver sustainable return to our shareholders.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To develop and reward our employees.
              </span>
            </li>
          </ul>

          <div class="mission-image-container">
            <img src="src/assets/currentproject/house1.jpg" class="mission-image" />
          </div>
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
                <option disabled selected>Select enquiry type</option>
                <option>General</option>
                <option>Interested Project</option>
                <option>Consultation</option>
                <option>Business</option>
                <option>Contractor</option>
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
  font-family: 'TitilliumWebRegular';
  src: url('src/assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'RecklessNeueMedium';
  src: url('src/assets/fonts/RecklessNeue-Medium.ttf') format('truetype');
}

.about-section {
  background-color: #0d182b;
  display: flex;
  height: 71vh;
  justify-content: center;
  align-items: center;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.text-content {
  flex: 1;
  padding-left: 6%;
}

.line-holder {
  position: static;
  margin-top: -20px;
  padding-bottom: 30px;
}

.line {
  display: flex;
  width: 12px; /* Thickness of the line */
  height: 4px; /* Height of the line */
  background-color: #d9d323; /* Gold accent */
  padding-inline: 40px;

}

.line-1 {
  display: inline-block;
  height: 2px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-top: 1px; /* Space between the line and text */
  padding-inline-end: 140px;
  margin-inline-start: 40px;
}

.text-above,
.text-below {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  margin: 0;
}

.text-above {
  color: #fff;
}

.text-below {
  color: #d9d323;
}

/* Image Section */
.about-image-container {
  flex: 1; /* Adjusts the width for the image section to make it more than half the screen width */
  display:flex;
  justify-content: flex-end;
  align-items:flex-end;
}

.about-image {
  width: 850px;
  height: 71vh;
  object-fit: cover;
}

@media (max-width: 1260px) {

.text-above,
.text-below {
  font-size: 36px;
}

.line {
padding-inline: 20px;
}

.line-1 {
  padding-inline-end: 140px;
  margin-inline-start: 20px;
}

.about-image {
  width: 700px;
}
}

@media (max-width: 1024px) {
  .about-image {
  width: 600px;
}
}

@media (max-width: 910px) {
  .about-image {
  width: 500px;
}
}

@media (max-width: 820px) {

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -455px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 185px;
  }

.line-holder {
  display: none;
}

.about-image {
  width: 500px;
  height: 49vh;
  }
}
@media (max-width: 520px) {

  .about-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -460px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 190px;
  }

  .about-image {
  width: 100%;
  height: 49vh;
  }
}
/* Company Background Section */
.company-background {
  background: #fff;
  padding: 40px 20px;
  padding-bottom: 80px;
  text-align: center;
}

.company-background h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  margin-bottom: 50px;
  color: rgb(0, 26, 43);
}

.company-background p {
  font-family: 'TitilliumWebRegular';
  font-size: 19px;
  line-height: 35px;
  margin-bottom: 20px;
  text-align: justify;
  padding-left: 8%;
  padding-right: 8%;
}

@media (max-width: 768px) {
  .company-background h2 {
  font-size: 40px;
}

.company-background p {
  font-size: 18px;
  line-height: 30px;
}
}

@media (max-width: 520px) {
  .company-background h2 {
  font-size: 30px;
}

.company-background p {
  font-size: 18px;
  line-height: 30px;
}
}

.content-wrapper {
  padding: 20px;
  padding-left: 120px;
  padding-right: 120px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

/* Vision Section */
.vision-section {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), /* Gradient overlay */
    url('src/assets/career3.jpg'); /* Background image */
  background-size: cover; /* Ensure the image covers the section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image repetition */  color: #333;
  padding: 60px 20px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}

.vision-text {
  margin-top: -30px;
}

.vision-text h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  margin-bottom: 20px;
}

.vision-text p {
  font-family: 'TitilliumWebRegular';
  font-size: 19px;
  line-height: 27px;
}

@media (max-width: 768px) {
  .vision-text h2 {
    font-size: 40px;
}

.vision-text p {
  font-size: 18px;
  white-space: nowrap;
}

.content-wrapper {
  padding: 20px;
  padding-left: 100px;
  padding-right: 100px;
}
}

@media (max-width: 520px) {

  .vision-text h2 {
    font-size: 30px;
    margin-bottom: 10px;
}

.vision-text p {
  font-size: 18px;
}

}

/* Mission Section */
.mission-section {
  background: #ebe4d8;
  padding: 40px 20px;
  padding-bottom: 80px;
  text-align: center;
}

.icon {
  font-size: 20px;
  color: #08463c;
  margin-right: 10px;
  margin-top: 10px;
}

.mission-section h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  color: #000;
}

.mission-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mission-section ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

.mission-section li {
  font-family: 'TitilliumWebRegular';
  margin-bottom: 20px;
  font-size: 19px;
  line-height: 35px;
  text-align: justify;
  display: flex;
  align-items: flex-start;
  padding-right: 15%;
  padding-left: 15%;
}

.mission-section li span {
  display: inline-block;
  flex: 1; /* Ensures text occupies remaining space */
}

.mission-image-container {
  flex: 1; /* Adjusts the width for the image section to make it more than half the screen width */
  display:flex;
  justify-content: center;
  padding-right: 90px;
}

.mission-image {
  width: 500px;
  height: 500px;
}

/* Responsive Design */

@media (max-width: 1024px) {

  .mission-wrapper {
    flex-direction: column;
  }

  .mission-section li {
    padding-right: 7%;
    padding-left: 7%;
    font-size: 18px;
  }

  .mission-image {
    width: 400px;
    height: 400px;
  }

  .mission-image-container {
  margin: 20px auto; /* Adds spacing and centers the container */
  padding-right: 0px;
}
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .mission-section h2 {
    font-size: 40px;
  }

  .mission-wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .mission-section li {
    padding-left: 8%;
    padding-right: 8%;
  }

  .mission-image {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 576px) {
  .mission-section h2 {
    font-size: 30px;
  }

  .mission-image {
    width: 250px;
    height: 250px;
  }
}

/* Contact Us Section */
.contact-us {
  background-color: #fff;
  color: #000;
  padding: 40px;
  padding-left: 7%;
  padding-right: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-wrapper {
  display: flex;
  flex-direction: column;
  font-family: 'TitilliumWebRegular';
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.contact-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: max-content;
  min-width: min-content;
  gap: 20px;
}

/* Left Section */
.contact-left, .contact-right {
  flex: 1;
  width: 100%;
}

.contact-left {
  padding-left: 3%;
}

.contact-left h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 2rem;
  margin-bottom: 15px;
}

.contact-left p {
  font-size: 16px;
  line-height: 24px;
}

.contact-left address {
  font-style: normal;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 24px;
}

/* Right Section */
.contact-right {
  padding: 20px;
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
  border: 1px solid #5555555e;
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
  background-color: #555;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

@media (min-width: 768px){
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

@media (min-width: 1024px){
  .contact-wrapper {
    gap: 150px;
  }

  .register-right {
    padding-right: -4%;
  }

  .contact-left h2{
    font-size: 3rem;
  }
}

  </style>
