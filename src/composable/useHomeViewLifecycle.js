import { onBeforeUnmount, onUpdated, onMounted } from "vue";

export const useHomeViewLifecycle = (titleRef) => {
  onMounted(() => {
    console.log("LOOK MOM, ITS TITLE WIDTH!", titleRef.value.offsetWidth);
  });
  onBeforeUnmount(() => {
    console.log("LOOK MOM, ITS BEFORE UNMOUNT!");
  });
  onUpdated(() => {
    console.log("LOOK MOM, ITS UPDATED!");
  });
};
