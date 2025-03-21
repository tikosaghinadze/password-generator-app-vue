<script setup>
import copyIcon from "./assets/Shape.svg";
</script>

<template>
  <div
    class="w-full min-h-screen flex flex-col justify-center items-center bg-veryDarkGrey"
  >
    <h1 class="text-grey text-base font-bold mb-4">Password Generator</h1>
    <div class="w-[343px]">
      <div
        class="relative flex justify-between items-center bg-darkGrey py-[22px] px-4"
      >
        <input
          class="placeholder:text-grey bg-darkGrey text-almostWhite text-[20px] md:text-2xl outline-none"
          type="text"
          value=""
          readonly
          placeholder="P4$5W0rD!"
        />
        <div
          class="absolute right-[22px] flex justify-between items-center gap-4 text-[18px] text-neonGreen uppercase"
        >
          <span class="text-[14px] md:text-base">copied</span>
          <img :src="copyIcon" alt="copy icon" class="w-4 md:w-full" />
        </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
