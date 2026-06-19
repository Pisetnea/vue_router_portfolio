<template>
  <NavBar />

  <div class="main">
    <h1 class="page-title">About Page</h1>
  </div>

  <div class="projects-grid">
    <article
      v-for="project in projects"
      :key="project.id"
      class="project-card"
    >
      <div class="card-header">
        <h2>{{ project.name }}</h2>
        <span
          class="status-badge"
          :class="formatStatus(project.status)"
        >
          {{ project.status }}
        </span>
      </div>

      <p class="project-desc">
        {{ project.description || "No description provided." }}
      </p>

      <div class="card-footer">
        <button class="btn">View</button>
      </div>
    </article>
  </div>
</template>

<script setup>
import { projects } from "../data/projects"
import NavBar from "../components/NavBar.vue"

const formatStatus = (status) =>
  status.toLowerCase().replace(/\s/g, "-")
</script>

<style scoped>
.main {
  padding: 20px;
}

.page-title {
  color: #111827;
  font-size: 2rem;
  font-weight: 600;
}

.projects-grid {
  margin: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}


.project-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 20px;

  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.card-header h2 {
  font-size: 1.2rem;
  color: #111827;
  margin: 0;
}

.project-desc {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 16px;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
}

.btn {
  padding: 6px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  background: #aa3bff;
  color: white;
  font-size: 0.8rem;

  transition: 0.3s;
}

.btn:hover {
  background: #9333ea;
}

.status-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
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

@media (max-width: 768px) {
  .projects-grid {
    gap: 16px;
  }

  .project-card {
    padding: 16px;
  }
}
</style>