<template>
  <q-page>
    <div>
      <div class="projects-section">
      <h2 class="section-title">Current Development Projects</h2>
      <div class="projects-container"
      :class="{ 'grid-layout': showAllProjects }"
      :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }">
        <!-- Scrollable Project Card -->
        <div class="project-card" v-for="project in displayedProjects" :key="project.id">
          <img :src="project.image" :alt="project.name" class="project-image" />
          <div class="project-info">
            <h3>{{ project.name }}</h3>
            <p>{{ project.location }}</p>
            <p>From RM {{ project.price }}</p>
          </div>
          <!-- Hover Project Card Information -->
          <div class="project-hover-overlay">
            <span class="status-sale">{{ project.status }}</span>
            <p>{{ project.description }}</p>
            <div class="project-details">
              <span><i class="fas fa-bed"></i> {{ project.bedrooms }}</span>
              <span><i class="fas fa-bath"></i> {{ project.bathrooms }}</span>
              <span><i class="fas fa-expand-arrows-alt"></i> {{ project.size }} m²</span>
            </div>
            <div class="actions">
              <q-btn flat label="Open Details" class="action-btn" @click="viewProject(project.id)" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="!showAllProjects">
        <q-btn flat label="Show More Projects" class="view-all-btn" @click="showMoreProjects" />
      </div>
      <div v-if="showAllProjects">
        <q-btn flat label="Show Less Projects" class="view-all-btn" @click="showLessProjects" />
      </div>
    </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { projectItems } from 'src/components/ProjectData.vue'

const columns = ref(2)
const showAllProjects = ref(false)
const displayedProjects = ref([])
const projects = ref([])

const saleProjects = computed(() =>
  projectItems.value.filter((project) => project.status === 'Sale')
)

onMounted(() => {
  if (saleProjects.value) {
    projects.value = saleProjects.value // Get projects after ProjectData mounts
    displayedProjects.value = projects.value // Display all projects initially
  }
})

const viewProject = (projectId) => {
  window.location.href(`/projects/${projectId}`)
}

const showMoreProjects = () => {
  columns.value += 2
  showAllProjects.value = true
}
const showLessProjects = () => {
  columns.value -= 2
  showAllProjects.value = false
}
</script>

<style scoped>

.projects-section {
    padding: 20px 20px;
    text-align: center;
  }

  .section-title {
    font-family: 'Georgia', serif;
    font-size: 2.5rem;
    color: #000000;
    margin-bottom: 50px;
    text-align: center;
  }

  .projects-container {
  display: flex; /* Default display is flex for horizontal scroll */
  gap: 20px;
  overflow-y: auto;
  padding-bottom: 20px;
}

.projects-container.grid-layout {
  display: grid; /* Apply grid layout when showAllProjects is true */
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  overflow-y: auto; /* Disable horizontal scroll for grid */
  padding-bottom: 20px;
}

  .project-card {
    position: relative;
    min-width: 280px;
    max-width: 300px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  .project-image {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }

  .project-info {
    padding: 25px;
    text-align: left;
  }

  .project-info h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  .project-info p {
    margin: 2px 0;
    color: #666;
  }

  /* Hover Overlay */
  .project-hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .project-hover-overlay {
    opacity: 1;
  }

  /* Conditional Status Badge */
  .status-sale {
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
    margin-bottom: 10px;
    text-transform: uppercase;
    background: #4caf50; /* Green for Sale */
  }

  .description {
    font-size: 0.9rem;
    margin-bottom: 10px;
    text-align: center;
  }

  .project-details {
    display: flex;
    gap: 15px;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .actions {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .action-btn {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  .icon-btn {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .icon-btn:hover {
    transform: scale(1.1);
  }

  /* view all button */
  .view-all-btn{
    background-color: transparent;
    border: 2px solid #02947e;
    color: #000000;
    font-weight: bold;
    padding: 10px 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 0;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  }

  .view-all-btn:hover {
    background-color: #00B398;
    color: white;
    transform: translateY(-3px);
  }

</style>
