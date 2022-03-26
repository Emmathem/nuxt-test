<template>
  <div class="t-h-screen t-bg-black t-p-5">
    <div class="t-border t-border-blue-100">
      <div class="t-flex t-justify-center t-p-5">
        <span class="t-text-blue-400">Welcome here</span>
      </div>
      <h3 class="t-text-blue-200"><nuxt-link to="/about">About Me</nuxt-link></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Welcome to my page'
    }
  },
}
</script>
