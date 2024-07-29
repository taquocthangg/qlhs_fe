<template>
  <div class="home">
    <studentManager></studentManager>
  </div>
</template>

<script>
// @ is an alias to /src
import studentManager from "../components/studentManager.vue";

export default {
  name: "HomeView",
  components: { studentManager },
};
</script>
