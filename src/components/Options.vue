<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  passwordLength: Number,
  includeUpperCase: Boolean,
  includeLowerCase: Boolean,
  includeNumbers: Boolean,
  includeSymbols: Boolean,
});

const emit = defineEmits([
  "update:passwordLength",
  "update:includeUpperCase",
  "update:includeLowerCase",
  "update:includeNumbers",
  "update:includeSymbols",
]);
</script>

<template>
  <div class="relative mb-4">
    <label class="text-base text-almostWhite text-bold" for="range"
      >Character Length</label
    >
    <span class="absolute right-[0px] text-2xl text-neonGreen">{{
      passwordLength
    }}</span>
    <input
      class="mt-[18px] w-full appearance-none h-2 bg-neonGreen"
      type="range"
      :value="passwordLength"
      @input="$emit('update:passwordLength', $event.target.value)"
      min="1"
      max="20"
    />
  </div>

  <div class="flex flex-col gap-4">
    <div class="flex gap-5 items-center">
      <input
        :checked="includeUpperCase"
        @change="$emit('update:includeUpperCase', $event.target.checked)"
        class="w-5 h-5 bg-veryDarkGrey custom-checkbox border-almostWhite border-2 appearance-none"
        type="checkbox"
      />
      <h2 class="text-base text-almostWhite text-bold">
        Include Uppercase Letters
      </h2>
    </div>
    <div class="flex items-center gap-5">
      <input
        :checked="includeLowerCase"
        @change="$emit('update:includeLowerCase', $event.target.checked)"
        class="w-5 h-5 bg-veryDarkGrey custom-checkbox border-almostWhite border-2 appearance-none"
        type="checkbox"
      />
      <h2 class="text-base text-almostWhite text-bold">
        Include Lowercase Letters
      </h2>
    </div>
    <div class="flex gap-5 items-center">
      <input
        :checked="includeNumbers"
        @change="$emit('update:includeNumbers', $event.target.checked)"
        class="w-5 h-5 bg-veryDarkGrey custom-checkbox border-almostWhite border-2 appearance-none"
        type="checkbox"
      />
      <h2 class="text-base text-almostWhite text-bold">Include Numbers</h2>
    </div>
    <div class="flex gap-5 items-center">
      <input
        :checked="includeSymbols"
        @change="$emit('update:includeSymbols', $event.target.checked)"
        class="w-5 h-5 bg-veryDarkGrey custom-checkbox border-almostWhite border-2 appearance-none"
        type="checkbox"
      />
      <h2 class="text-base text-almostWhite text-bold">Include Symbols</h2>
    </div>
  </div>
</template>
