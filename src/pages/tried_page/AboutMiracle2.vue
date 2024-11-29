<template>
  <q-page>
    <div class="hero-section">
      <img src="src/assets/aboutus.jpg" alt="Hero Image" class="hero-image" />
      <div class="image-text-overlay">
        <h4>ABOUT MIRACLE</h4>
        <h1>The Miracle Story</h1>
      </div>
    </div>

    <!-- Company Background -->
    <div class="company-background">
      <div class="container">
        <h2>Company Background</h2>
        <p>
          MLHB was incorporated in October 2014 as the holding company of various
          subsidiaries for upcoming development projects of the group. The company
          aspire to provide quality homes and valuable commercials in the country’s
          second and third tiered cities by creating townships with well-planned
          and integrated developments.
        </p>
        <p>
          The group’s initial focus would be on the high potential areas across
          Pahang and eventually progressing to the other parts of the country. The
          group has secured several development projects and it is actively
          seeking out to acquire new land banks to ensure continuing growth.
        </p>
        <p>
          MLHB’s core team has substantial experience in the property
          development industry which had completed to date numerous development
          projects covering Residential and Commercial as well as Light Industrial,
          under Dynaton Group - a series of ISO accredited property development
          and construction companies.
        </p>
        <p>
          With a team of experienced and dedicated workforce, MLHB is confident
          to further grow its capabilities while generating sustainable value for
          its stakeholders.
        </p>
      </div>
    </div>

    <!-- Vision and Mission -->
    <div class="vision-mission">
      <div class="container">
        <h2>Our Vision</h2>
        <p>
          To be a leading property developer in Malaysia, renowned for delivering
          exceptional quality, sustainable developments, and enriching
          communities.
        </p>
        <h2>Our Mission</h2>
        <p>
          To create innovative and inspiring living spaces that enhance the lives
          of our customers, while contributing to the growth and prosperity of
          the communities we serve.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AboutMiracle'
}
</script>

<style>
.hero-section {
  position: relative;
  height: 101vh;
  overflow: hidden;
  margin-top: -80px;
  margin-left: -16px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@font-face {
  font-family: 'GeographWebBold';
  src: url('src/assets/fonts/geograph/geographwebmedium.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'OaricBold';
  src: url('src/assets/fonts/Oaric-Bold.ttf') format('truetype');
}

.image-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'OaricBold', sans-serif;  font-weight: 900;
  color: white;
  z-index: 1000; /* Ensure text is on top of the image */
}

.hero-section {
  position: relative;
  height: 101vh; /* Full screen height */
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the hero section */
}

.image-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'OaricBold', sans-serif;
  font-weight: 900;
  color: white;
  z-index: 1; /* Ensure text is above the image */
}

.image-text-overlay h1 {
  font-size: 48px;
  margin: 10px 0;
  line-height: 1.2;
  color: #ffffff;
}

.image-text-overlay h4 {
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #00B398; /* Accent color */
}

/* Adding a background overlay for better contrast */
.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  z-index: 0; /* Below text but above the image */
}

.company-background {
  padding: 40px 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.container p {
  line-height: 1.6;
  margin-bottom: 20px;
}

.vision-mission {
  padding: 40px 0;
}

.vision-mission h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
