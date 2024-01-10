<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <p :class="cn('text-sm text-muted-foreground p-3', props.class)">
    <slot />
  </p>
</template>
