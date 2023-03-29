<template>
  <div class="check-out-wrap">
    <div class="grid-1">
      <h3 class="page--title">Checkout</h3>
      <page-tabs :tabs="tabs" :active="active" />
    </div>

    <div class="grid-2">
      <order-summary />
    </div>

    <div class="grid-3">
      <lifetime-warranty />
      <express-checkout />
      <information v-if="active === PageTabIndex.INFORMATION_TAB" @submit="onInformationSubmit" />
      <payment v-if="active === PageTabIndex.PAYMENT_TAB" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Information from 'components/checkout/InformationSection.vue';

type Tab = string;
enum PageTabIndex {
  INFORMATION_TAB,
  PAYMENT_TAB
}

import { ref } from 'vue';
import PageTabs from 'components/PageTabs.vue';
import ExpressCheckout from 'components/checkout/ExpressCheckout.vue';
import LifetimeWarranty from 'components/checkout/LifetimeWarranty.vue';
import OrderSummary from 'components/checkout/OrderSummary.vue';
import Payment from 'components/checkout/Payment.vue';

const active = ref(PageTabIndex.INFORMATION_TAB)

const tabs: Tab[] = ['Information', 'Payment']

function onInformationSubmit (info: object) {
  sessionStorage.setItem('information_data', JSON.stringify(info))
  active.value = PageTabIndex.PAYMENT_TAB
}

</script>

<style scoped lang="scss">
.check-out-wrap :deep {
  display: grid;
  width: 80%;
  max-width: var(--max-screen-width);
  min-height: 100vh;
  grid-row-gap: 50px;
  grid-column-gap: 70px;
  padding: 32px 12px 140px 12px;
  grid-template-areas:
    'grid1 grid2 grid2'
    'grid3 grid2 grid2'
    'grid3 grid2 grid2';
  grid-template-rows: 80px 1fr;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 820px) {
    grid-template-areas:
      'grid1 grid1'
      'grid2 grid2'
      'grid3 grid3';
  }

  @media (min-width: 821px) and (max-width: 1150px) {
    width: 100%;
  }

  @media (max-width: 580px) {
    width: 100%;
  }

  .grid-1 {
    .page--title {
      font-size: clamp(1.875rem, 1.7vw + 1rem, 2.25rem);
      line-height: 133%;
      font-weight: 700;
      margin-bottom: 20px;
    }
    grid-area: grid1;
    margin-bottom: 32px;
  }

  .grid-2 {
    grid-area: grid2;
  }

  .grid-3 {
    grid-area: grid3;
  }
}
</style>
