<script setup>
import { defineProps } from "vue";
import copyIcon from "../assets/Shape.svg";

const props = defineProps({
  generatedPassword: String,
  isCopied: Boolean,
  copyToClipboard: Function,
  fontSize: String,
});
</script>

<template>
  <div
    class="relative flex justify-between items-center bg-darkGrey py-[22px] px-4"
  >
    <input
      class="generated-password text-[20px] bg-darkGrey placeholder:text-grey text-almostWhite md:text-2xl outline-none"
      :style="{ fontSize: fontSize }"
      type="text"
      :value="generatedPassword"
      readonly
      placeholder="P4$5W0rD!"
    />
    <div
      @click="copyToClipboard"
      class="absolute right-[22px] cursor-pointer flex justify-between items-center gap-4 text-[18px] text-neonGreen uppercase"
    >
      <span v-if="isCopied" class="text-[14px] md:text-base">copied</span>
      <img
        :src="copyIcon"
        alt="copy icon"
        class="w-4 md:w-full hover:scale-105"
      />
    </div>
  </div>
</template>
