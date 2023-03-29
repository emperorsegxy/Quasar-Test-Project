<template>
  <div class="lifetime-warranty-wrap row items-center justify-between">
    <div>
      <h4>Lifetime Warranty</h4>
      <p>Add a lifetime warranty & enjoy peace of mind for life with your dream collections order for just $4.99</p>
    </div>
    <div>
      <btn>Add-$4.99</btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Btn from 'components/base/Btn.vue'
</script>

<style scoped lang="scss">
.lifetime-warranty-wrap :deep {
  width: 100%;
  height: 200px;
  background: #F1F3F6;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #E0E7F0;
  @media (min-width: 1092px) {
    padding: 30px;
  }
  @media (min-width: 960px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: start;
  }

  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 150% */
    color: var(--q-primary);
    margin-bottom: 8px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: var(--dark_2);
    margin-bottom: 16px;
    max-inline-size: 45ch;
  }
}
</style>
