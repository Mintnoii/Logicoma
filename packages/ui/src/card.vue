<script lang="ts" setup>
const props = defineProps<{
  class?: string;
  title: string;
  href: string;
}>();
</script>

<template>
  <a
    :class="props.class"
    :href="`${props.href}`"
    rel="noopener noreferrer"
    target="_blank"
  >
    <h2 class="text-green-200">{{ props.title }}</h2>
    <div class="text-blue-200">
      卡片组件
    </div>
    <p><slot /></p>
  </a>
</template>
