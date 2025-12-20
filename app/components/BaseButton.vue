<template>
  <button
    :class="[
      'btn',
      variantClasses[variant],
      sizeClasses[size],
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  danger: 'bg-red-600 text-white hover:bg-red-700' // Keeping utility for danger for now or adding btn-danger
}

const sizeClasses = {
  sm: 'btn-sm',
  md: '',
  lg: 'text-lg px-6 py-3'
}

defineEmits(['click'])
</script>
