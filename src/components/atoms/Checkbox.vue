<template>
  <label class="checkbox-wrapper">
    <input 
      type="checkbox" 
      v-model="model" 
      class="checkbox"
    />

    <div class="text">
      <slot>{{ text }}</slot>
    </div>
  </label>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: Boolean,
  text: String
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val)
});
</script>

<style>
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 18px;
}

.checkbox {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: #ffcb05;
}

.text {
  font-size: 15px;
  line-height: 21px;
  color: #333;
}

.text a {
  color: #333;
  font-weight: 600;
  text-decoration: underline;
}
</style>
