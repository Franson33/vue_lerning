import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUpdated } from "vue";

export const useHomeLifecycle = () => {
  onBeforeMount(() => {
    console.log("LOOK MOM, ITS BEFORE MOUNT!");
  });
  onBeforeUnmount(() => {
    console.log("LOOK MOM, ITS BEFORE UNMOUNT!");
  });
  onBeforeUpdate(() => {
    console.log("LOOK MOM, ITS BEFORE UPDATE!");
  });
  onUpdated(() => {
    console.log("LOOK MOM, ITS UPDATED!");
  });
};
