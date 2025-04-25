<template>
  <div
    class="w-full min-h-screen flex flex-col justify-center items-center bg-veryDarkGrey"
  >
    <h1 class="text-grey text-base font-bold mb-4">Password Generator</h1>
    <div class="w-[343px] bg-darkGrey p-4">
      <Input
        class="mb-6"
        :generatedPassword="generatedPassword"
        :fontSize="fontSize"
        :isCopied="isCopied"
        :copyToClipboard="copyToClipboard"
      />
      <Options
        :passwordLength="passwordLength"
        :includeUpperCase="includeUpperCase"
        :includeLowerCase="includeLowerCase"
        :includeNumbers="includeNumbers"
        :includeSymbols="includeSymbols"
        @update:passwordLength="passwordLength = $event"
        @update:includeUpperCase="includeUpperCase = $event"
        @update:includeLowerCase="includeLowerCase = $event"
        @update:includeNumbers="includeNumbers = $event"
        @update:includeSymbols="includeSymbols = $event"
      />
      <Strength :passwordStrength="passwordStrength" />
      <button
        @click="generatePassword"
        class="w-full flex justify-center items-center bg-neonGreen gap-4 py-[17px] mt-4"
      >
        <h3 class="text-base text-darkGrey font-bold">GENERATE</h3>
        <img class="w-3 h-3" :src="ArrowIcon" alt="arrow icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import Input from "./Input.vue";
import Options from "./Options.vue";
import Strength from "./Strength.vue";
import ArrowIcon from "../assets/arrow.svg";
import { ref, computed } from "vue";

const passwordLength = ref(10);
const includeUpperCase = ref(false);
const includeLowerCase = ref(false);
const includeNumbers = ref(false);
const includeSymbols = ref(false);
const generatedPassword = ref("");
const generatedPasswordLength = ref(passwordLength.value);
const isCopied = ref(false);

const generatePassword = () => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = includeUpperCase.value
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : "";
  const numbersChars = includeNumbers.value ? "0123456789" : "";
  const symbolsChars = includeSymbols.value
    ? "!@#$%^&*()_+[]{}|;:,.<>?/~`"
    : "";
  const allChars =
    lowercaseChars + upperCaseChars + numbersChars + symbolsChars;

  let password = "";
  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  generatedPassword.value = password;
  generatedPasswordLength.value = passwordLength.value;
  isCopied.value = false;
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(generatedPassword.value).then(() => {
    isCopied.value = true;
  });
};

const passwordStrength = computed(() => {
  let strength = 0;
  if (includeUpperCase.value) strength++;
  if (includeLowerCase.value) strength++;
  if (includeNumbers.value) strength++;
  if (includeSymbols.value) strength++;
  if (passwordLength.value >= 12) strength++;

  switch (strength) {
    case 1:
      return "TOO WEAK!";
    case 2:
      return "WEAK";
    case 3:
      return "MEDIUM";
    case 4:
    case 5:
      return "STRONG";
    default:
      return " ";
  }
});

const fontSize = computed(() => {
  if (
    generatedPasswordLength.value >= 15 &&
    generatedPasswordLength.value <= 20
  ) {
    return "16px";
  }
  return "20px";
});
</script>
