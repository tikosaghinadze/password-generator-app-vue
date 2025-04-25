<script setup>
const props = defineProps({
  passwordStrength: String,
});
</script>

<template>
  <div
    class="flex justify-between items-center w-full mt-8 px-4 py-[17px] bg-veryDarkGrey"
  >
    <h3 class="text-base text-grey text-bold">STRENGTH</h3>
    <div class="flex gap-4">
      <span class="text-[18px] text-bold text-almostWhite">{{
        passwordStrength
      }}</span>
      <div class="flex gap-2">
        <div
          :class="{
            'bg-red': passwordStrength === 'TOO WEAK!',
            'bg-orange': passwordStrength === 'WEAK',
            'bg-yellow': passwordStrength === 'MEDIUM',
            'bg-neonGreen': passwordStrength === 'STRONG',
          }"
          class="w-[10px] h-[28px] border-almostWhite border"
        ></div>
        <div
          :class="{
            'bg-orange': passwordStrength === 'WEAK',
            'bg-yellow': passwordStrength === 'MEDIUM',
            'bg-neonGreen': passwordStrength === 'STRONG',
          }"
          class="w-[10px] h-[28px] border-almostWhite border"
        ></div>
        <div
          :class="{
            'bg-yellow': passwordStrength === 'MEDIUM',
            'bg-neonGreen': passwordStrength === 'STRONG',
          }"
          class="w-[10px] h-[28px] border-almostWhite border"
        ></div>
        <div
          :class="{
            'bg-neonGreen': passwordStrength === 'STRONG',
          }"
          class="w-[10px] h-[28px] border-almostWhite border"
        ></div>
      </div>
    </div>
  </div>
</template>
