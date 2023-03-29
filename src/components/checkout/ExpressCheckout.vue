<template>
  <div class="express-checkout-wrap">
    <h4>Express Checkout</h4>
    <div class="express-grid flex">
      <div
        v-for="(checkout, i) in checkouts"
        :key="i"
        class="express-checkout flex items-center justify-center"
        :style="{ backgroundColor: checkout.color }"
      >
        <img :src="checkout.icon" :alt="checkout.name">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ShopPayIcon from 'assets/shop-pay.svg';
import PaypalIcon from 'assets/paypal.svg';
import GPayIcon from 'assets/gPay.svg';

type Checkout = {
  name: string
  icon: string
  color: string
}

const checkouts: Checkout[] = [
  {
    name: 'shop-pay',
    icon: ShopPayIcon,
    color: '#5A31F4'
  },
  {
    name: 'paypal',
    icon: PaypalIcon,
    color: '#F6C657'
  },
  {
    name: 'gpay',
    icon: GPayIcon,
    color: '#000'
  }
]
</script>

<style scoped lang="scss">
.express-checkout-wrap :deep {
  background: #FFFFFF;
  border: 1px solid #DADDF5;
  box-shadow: 0px 10px 30px rgba(22, 8, 49, 0.05);
  border-radius: 16px;
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 32px;
  @media (min-width: 1092px) {
    padding: 30px;
  }
  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 150% */
    color: var(--q-primary);
    margin-bottom: 20px;
  }
  .express-grid {
    gap: 16px;
    min-width: 310px;
    width: 100%;
    .express-checkout {
      width: 141px;
      height: 50px;
      border-radius: 12px;
    }
  }
}
</style>
