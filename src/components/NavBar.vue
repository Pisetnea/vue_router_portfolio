<template>
  <nav class="nav-container">
    <div class="nav-left">
      <h4 class="logo">Portfolio</h4>
    </div>

    <div class="nav-right">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/projects" class="nav-link">Project</router-link>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.nav-container {
  height: 64px;
  margin: 16px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(0, 0, 0, 0.05);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.logo {
  font-size: 20px;
  font-weight: 600;
  color: #111;
}

.nav-right {
  display: flex;
  gap: 24px;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: #444;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0%;
  height: 2px;
  background: #aa3bff;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #aa3bff;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active {
  color: #aa3bff;
}

.router-link-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    height: auto;
    padding: 16px;
    gap: 10px;
  }

  .nav-right {
    gap: 16px;
  }
}
</style>