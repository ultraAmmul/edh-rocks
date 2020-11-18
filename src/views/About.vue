<template>
  <div class="about">
  </div>
</template>

<script>
import queue from "../plugins/queue";

export default {
    name: "About",
    mounted: function(){
      queue.init();
    }
}
</script>

<style scoped>

</style>
