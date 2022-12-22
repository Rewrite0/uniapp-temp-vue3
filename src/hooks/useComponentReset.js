import { ref, nextTick } from "vue";

/**
 * 重置component
 */
function useComponentReset() {
  const show = ref(true);

  const reset = () => {
    show.value = false;
    nextTick(() => {
      show.value = true;
    });
  };

  return {
    show,
    reset,
  };
}

export { useComponentReset };
