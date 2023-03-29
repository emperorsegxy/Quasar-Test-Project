<template>
  <div class="thank-you-page-wrap flex">
    <div class="first-section">
      <div class="thank-illustration-wrap column justify-center items-center">
        <img :src="orderComplete" />
        <p>Thank You!</p>
        <span class="confirmation-text">
          Your order <span class="order-number">#15636561</span> has been placed
        </span>
        <div>
          <btn>Back to Shop</btn>
        </div>
      </div>
      <div class="user-information-box">
        <div v-for="(v, k, i) in userInfo" :key="i" class="flex user-information">
          <span class="info-key">{{ k }}:</span>
          <span class="info-value">{{ v }}</span>
        </div>
      </div>
    </div>
    <div class="second-section">
      <order-summary />
    </div>
  </div>
</template>

<script lang="ts" setup>
import orderComplete from 'assets/order-complete.svg'
import OrderSummary from 'components/checkout/OrderSummary.vue';
import Btn from 'components/base/Btn.vue';
import {computed} from 'vue';

const userInfo = computed(() => {
  const data = JSON.parse(sessionStorage.getItem('information_data') || '{}')
  return {
    'Name': `${data.first_name} ${data.last_name}`,
    'Email': `${data.email}`,
    'Ship To': `${data.address} ${data.post_code}`,
    'Bill To': `${data.address} ${data.post_code}`,
    'Payment': 'Credit Card'
  }
})
</script>

<style scoped lang="scss">
.thank-you-page-wrap :deep {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  .first-section {
    flex: 1;

    @media (max-width: 900px) {
      order: 2;
    }

    .thank-illustration-wrap {
      background: #FFFFFF;
      border: 1px solid var(--dark_5);
      border-radius: 16px;
      padding: 64px 12px;

      p {
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
        color: var(--q-primary);
        margin-top: 24px;
        margin-bottom: 12px;
      }

      span.confirmation-text {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: var(--dark_3);
        margin-bottom: 40px;

        .order-number {
          color: var(--q-primary);
          font-weight: 600;
        }
      }

      .q-btn {
        height: 56px;
        width: 213px;
      }
    }

    .user-information-box {
      padding: 40px;
      background: #F1F3F6;
      border: 1px solid #E0E7F0;
      border-radius: 16px;
      margin-top: 32px;
    }

    .user-information {
      gap: 16px;
      margin-bottom: 16px;
    }
  }

  .second-section {
    flex: 1;
    @media (max-width: 900px) {
      order: 1;
    }
  }
}
</style>
