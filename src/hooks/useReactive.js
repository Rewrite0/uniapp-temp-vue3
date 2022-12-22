import { reactive } from "vue";

/**
 * 用于创建能够快速初始化数据的reactive
 * @param {function} initState 返回值为初始数据
 */
function useReactive(initState) {
  const state = reactive(initState());
  const reset = () => {
    Object.assign(state, initState());
  };

  return {
    state,
    reset,
  };
}

export { useReactive };
