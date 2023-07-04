<template>
  <div>
    {{ items }}
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>