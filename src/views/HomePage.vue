<template>
  <NavBar />

  <section class="hero">
    <div class="hero-content">
      <h1>
        Hi, I'm <span class="highlight">Your Name</span>
      </h1>

      <p class="subtitle">
        I build modern web applications with Vue, Node.js, and clean UI design.
      </p>

      <div class="actions">
        <router-link to="/projects" class="btn primary">
          View Projects
        </router-link>

        <router-link to="/about" class="btn secondary">
          About Me
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

/* CONTENT */
.hero-content {
  text-align: center;
  max-width: 700px;
}

/* TITLE */
.hero h1 {
  font-size: 48px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
}

.highlight {
  color: #aa3bff;
}

/* SUBTITLE */
.subtitle {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 32px;
  line-height: 1.6;
}

/* BUTTONS */
.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

/* BASE BUTTON */
.btn {
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
}

/* PRIMARY */
.btn.primary {
  background: #aa3bff;
  color: white;
}

.btn.primary:hover {
  background: #9333ea;
  transform: translateY(-2px);
}

/* SECONDARY */
.btn.secondary {
  border: 1px solid #e5e7eb;
  color: #111827;
  background: white;
}

.btn.secondary:hover {
  background: #f9fafb;
  transform: translateY(-2px);
}

/* MOBILE */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .subtitle {
    font-size: 16px;
  }

  .actions {
    flex-direction: column;
  }
}
</style>