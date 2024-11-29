<template>
  <q-page class="past-development-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>Past Developments</h1>
      <p>Discover the projects we've completed, showcasing our expertise and commitment to excellence.</p>
    </section>

    <!-- Completed Projects Section -->
    <section class="completed-projects">
      <h2>Our Completed Projects</h2>
      <div class="projects-list">
        <div class="project-item" v-for="project in pastProjects" :key="project.id">
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

const pastProjects = ref([
  {
    id: 1,
    title: 'Sunset Heights',
    description: 'A residential complex offering luxury living with stunning views of the city skyline.',
    image: '/path/to/sunset_heights.jpg',
    link: '/path/to/sunset_heights_details'
  },
  {
    id: 2,
    title: 'Riverfront Residences',
    description: 'A waterfront development offering modern apartments with scenic river views.',
    image: '/path/to/riverfront_residences.jpg',
    link: '/path/to/riverfront_residences_details'
  },
  {
    id: 3,
    title: 'Skyline Towers',
    description: 'A commercial and residential project located in the heart of the business district.',
    image: '/path/to/skyline_towers.jpg',
    link: '/path/to/skyline_towers_details'
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
}

.completed-projects {
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
