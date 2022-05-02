<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ 'Alter Price' }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
}
</script>
