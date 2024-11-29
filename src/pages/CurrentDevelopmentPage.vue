<template>
  <q-page class="current-development-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>Current Developments</h1>
      <p>Explore our ongoing projects and stay up-to-date with our developments.</p>
    </section>

    <!-- Development Projects Section -->
    <section class="development-projects">
      <h2>Ongoing Projects</h2>
      <div class="projects-list">
        <div class="project-item" v-for="project in projects" :key="project.id">
          <q-card class="project-card">
            <q-img :src="project.image" alt="Project Image" class="project-image" />
            <q-card-section>
              <div class="project-title">{{ project.title }}</div>
              <div class="project-description">{{ project.description }}</div>
            </q-card-section>
            <q-card-actions>
              <q-btn flat label="Learn More" @click="openProjectDetails(project.link)" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'Lakeside Residences',
    description: 'A luxury residential project located by a serene lakeside, offering high-end living spaces.',
    image: '/path/to/lakeside_residences.jpg',
    link: '/path/to/lakeside_residences_details'
  },
  {
    id: 2,
    title: 'City Central Plaza',
    description: 'A mixed-use development in the heart of the city, featuring commercial and residential spaces.',
    image: '/path/to/city_central_plaza.jpg',
    link: '/path/to/city_central_plaza_details'
  },
  {
    id: 3,
    title: 'Greenfield Estates',
    description: 'A sustainable and eco-friendly development offering modern villas surrounded by nature.',
    image: '/path/to/greenfield_estates.jpg',
    link: '/path/to/greenfield_estates_details'
  }
])

const openProjectDetails = (link) => {
  window.location.href = link // Redirect to the project's detailed page
}
</script>

<style scoped>
.hero-section {
  text-align: center;
  padding: 40px 0;
  margin-top: -70px;
}

.development-projects {
  padding: 20px;
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.project-image {
  height: 200px;
  object-fit: cover;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
}

.project-description {
  font-size: 1rem;
  color: #555;
}

.q-btn {
  font-size: 0.9rem;
}
</style>
