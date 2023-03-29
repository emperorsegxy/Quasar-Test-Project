<template>
  <div class="order-item-wrap flex items-center justify-between">
    <div class="flex items-center">
      <div class="item-image">
        <img :src="props.order.image" :alt="props.order.name">
      </div>
      <div class="column">
        <span class="item-name">{{ props.order.name }}</span>
        <span class="count">X {{ props.order.count }}</span>
      </div>
    </div>
    <div>
      <span class="item-price">{{ props.order.price }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Order from 'src/interfaces/Order';

interface Props {
  order: Order
}
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.order-item-wrap :deep {
  margin-bottom: 16px;

  .item-image {
    margin-right: 16px;
  }

  .item-name {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--q-primary);
  }

  .count {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--dark_2);
  }

  .item-price {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--q-primary);
  }
}
</style>
