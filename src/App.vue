<script setup>
import copyIcon from "./assets/Shape.svg";
import ArrowIcon from "./assets/arrow.svg";
import { ref, computed } from "vue";

const passwordLength = ref("10");
const includeUpperCase = ref(false);
const includeLowerCase = ref(false);
const includeNumbers = ref(false);
const includeSymbols = ref(false);
const generatedPassword = ref("");
const generatedPasswordLength = ref(passwordLength.value);

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
          class="generated-password text-[20px] bg-darkGrey placeholder:text-grey text-almostWhite md:text-2xl outline-none"
          :style="{ fontSize: fontSize }"
          type="text"
          :value="generatedPassword"
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
      <div class="bg-darkGrey p-4">
        <div class="relative">
          <label class="text-base text-almostWhite text-bold" for="range"
            >Character Length</label
          >
          <span class="absolute right-[0px] text-2xl text-neonGreen">{{
            passwordLength
          }}</span>
          <input
            class="mt-[18px] w-full appearance-none h-2 bg-neonGreen"
            type="range"
            v-model="passwordLength"
            min="1"
            max="20"
          />
        </div>

        <div class="mt-8">
          <div class="flex flex-col gap-4">
            <div class="flex gap-5 items-center">
              <input
                v-model="includeUpperCase"
                class="w-5 h-5 bg-veryDarkGrey custom-checkbox border-almostWhite border-2 appearance-none"
                type="checkbox"
              />
              <h2 class="text-base text-almostWhite text-bold">
                Include Uppercase Letters
              </h2>
            </div>
            <div class="flex items-center gap-5">
              <input
                v-model="includeLowerCase"
                class="w-5 h-5 bg-veryDarkGrey custom-checkbox border-almostWhite border-2 appearance-none"
                type="checkbox"
              />
              <h2 class="text-base text-almostWhite text-bold">
                Include Lowercase Letters
              </h2>
            </div>
            <div class="flex gap-5 items-center">
              <input
                v-model="includeNumbers"
                class="w-5 h-5 bg-veryDarkGrey custom-checkbox border-almostWhite border-2 appearance-none"
                type="checkbox"
              />
              <h2 class="text-base text-almostWhite text-bold">
                Include Numbers
              </h2>
            </div>
            <div class="flex gap-5 items-center">
              <input
                v-model="includeSymbols"
                class="w-5 h-5 bg-veryDarkGrey custom-checkbox border-almostWhite border-2 appearance-none"
                type="checkbox"
              />
              <h2 class="text-base text-almostWhite text-bold">
                Include Symbols
              </h2>
            </div>
          </div>

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

          <button
            @click="generatePassword"
            class="w-full flex justify-center items-center bg-neonGreen gap-4 py-[17px] mt-4"
          >
            <h3 class="text-base text-darkGrey font-bold">GENERATE</h3>
            <img class="w-3 h-3" :src="ArrowIcon" alt="arrow icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
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
