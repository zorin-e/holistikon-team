<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/">Kompetenzen</router-link>
      <router-link to="/">Team</router-link>
      <router-link to="/">Events</router-link>
      <router-link to="/">Karriere</router-link>
      <router-link to="/">Blog</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import "@/styles/common.scss";
export default {

}
</script>
