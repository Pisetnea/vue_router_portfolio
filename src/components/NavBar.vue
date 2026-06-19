<template>
    <div class="nav-container">
        <div class="nav-left"></div>
        <div class="nav-right">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Project</router-link>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.nav-container {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5; 
}
.nav-right a {
    margin-left: 20px;
    text-decoration: none;
    color: #333;
}
</style>
