<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
</script>

<template>
  <button @click="store.increment">Increment</button>
  <button @click="store.decrement">Decrement</button>
  <div>Value: {{ store.counter.nr }}</div>
  <div>Sign: {{ store.counter.sign ?? "-" }}</div>
</template>
