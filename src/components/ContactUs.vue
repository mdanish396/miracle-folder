<template>
  <div class="contact-us">
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
</template>

<script >
export default {
  name: 'ContactUs'
}
</script>

<style scoped>
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
