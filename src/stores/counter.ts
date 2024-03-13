import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref<{ nr: number, sign?: "positive" | "negative" }>({ nr: 0 })
  function updateSign() {
    counter.value.sign = counter.value.nr > 0 ? "positive" : counter.value.nr < 0 ? "negative" : undefined
  }
  function increment() {
    counter.value.nr++
    updateSign();
  }

  function decrement() {
    counter.value.nr--
    updateSign();
  }

  return { counter, increment, decrement }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
