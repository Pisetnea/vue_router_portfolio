<template>
  <NavBar />

  <section class="about">
    <div class="about-container">
      
      <div class="about-text">
        <h1>About Me</h1>

        <p class="intro">
          Hello! I'm <span class="highlight">Your Name</span>, a passionate 
          frontend developer who loves building clean and modern web applications.
        </p>

        <p>
          I specialize in Vue.js, JavaScript, and UI/UX design. I enjoy turning 
          ideas into real products with smooth user experiences.
        </p>

        <div class="skills">
          <span>Vue.js</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Laravel</span>
        </div>
      </div>

      <div class="about-image">
        <img src="https://via.placeholder.com/300" alt="profile" />
      </div>

    </div>
  </section>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
.about {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 40px 20px;
}

.about-container {
  max-width: 1100px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 40px;
}

.about-text {
  flex: 1;
}

.about-text h1 {
  font-size: 40px;
  margin-bottom: 16px;
  color: #111827;
}

.intro {
  font-size: 18px;
  margin-bottom: 16px;
  color: #4b5563;
}

.about-text p {
  color: #6b7280;
  margin-bottom: 12px;
  line-height: 1.6;
}

.highlight {
  color: #aa3bff;
  font-weight: 600;
}

.skills {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skills span {
  background: #f3f4f6;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about-image img {
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    text-align: center;
  }

  .about-text h1 {
    font-size: 28px;
  }

  .about-image img {
    width: 200px;
    height: 200px;
  }
}
</style>