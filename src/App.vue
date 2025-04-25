<script setup>
import PasswordGenerator from "./components/PasswordGenerator.vue";
</script>

<template>
  <PasswordGenerator />
</template>
<style>
.custom-checkbox:checked {
  background-color: #a4ffaf;
  border: none;
}

.custom-checkbox:checked::before {
  content: "✔";
  display: block;
  color: #1a1a1a; /* veryDarkGrey */
  text-align: center;
  line-height: 1.2; /* veryDarkGrey */
}
</style>
