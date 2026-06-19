<template>
  <NavBar />
  <div class="main">
    <h1>This is About page</h1>
  </div>

  <div class="projects-grid">
    <article v-for="project in projects" :key="project.id" class="project-card">
      <div class="card-header">
        <h2>{{ project.name }}</h2>
        <span class="status-badge" :class="project.status.toLowerCase().replace(' ', '-')">
          {{ project.status }}
        </span>
      </div>
    </article>
  </div>

</template>

<script setup>
import { projects } from "../data/projects"
import NavBar from "../components/NavBar.vue";
</script>

<style scoped>
.page-title {
  color: #1f2937;
  margin-bottom: 32px;
  font-size: 2rem;
}

.projects-grid {
  margin: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.project-card {
  background: #ffffff;
  border: 1px solid #f3f4f6;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.card-header h2 {
  font-size: 1.25rem;
  color: #1f2937;
  margin: 0;
}

.status-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;
}

.status-badge.in-progress {
  background: #e0f2fe;
  color: #0369a1;
}

.status-badge.planning {
  background: #fef3c7;
  color: #b45309;
}

.status-badge.completed {
  background: #dcfce7;
  color: #15803d;
}

.status-badge.on-hold {
  background: #f3f4f6;
  color: #4b5563;
}
</style>
