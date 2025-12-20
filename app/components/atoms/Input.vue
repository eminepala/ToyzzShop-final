<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    v-model="model"
  />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<style>
.input {
  width: 100%;
  height: 44px;                 /* ToyzzShop yüksekliği */
  padding: 0 14px;              /* Soldan boşluk */
  border: 1px solid #dcdcdc;    /* Daha açık gri */
  border-radius: 6px;
  font-size: 15px;
  color: #444;
  outline: none;
  transition: all 0.15s;
}

.input::placeholder {
  color: #aaa;                  /* ToyzzShop placeholder */
}

.input:focus {
  border-color: #ffcb05;        /* Sarı focus */
  box-shadow: 0 0 0 2px rgba(255, 203, 5, 0.3);
}
</style>
