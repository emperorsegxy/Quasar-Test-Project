<template>
  <div class="order-summary-wrap">
    <div class="order-summary">
      <div class="summary-id flex justify-center items-center">
        <span>Order Summary #26450</span>
      </div>
      <order-item
        v-for="(order, i) in orderItems"
        :key="i"
        :order="order"
      />
      <div class="discount-field flex">
        <q-input
          v-model="discountCode"
          placeholder="Discount code"
          filled
          />
        <btn>Apply</btn>
      </div>
      <div class="total-price">
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>$362.70</span>
        </div>
        <div class="flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div class="divider-hr" />
        <div class="flex justify-between">
          <span>Total:</span>
          <span>$362.70</span>
        </div>
      </div>
    </div>
    <div class="more--info">
      <div class="first-info">
        <div
          v-for="(info, i) in infos"
          :key="i"
          class="flex items-center info-item"
        >
          <img :src="info.icon" alt="info">
          <div class="message" v-html="info.message" />
        </div>
      </div>
      <div class="jewellery-box">
        <h5>The ultimate jewellery club</h5>
        <p>Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.</p>
        <div class="benefits">
          <div v-for="(benefit, i) in clubBenefits" :key="i" class="benefit flex items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_0_2399)">
                <path d="M14.8794 2.95401L5.66675 12.166C5.60481 12.2282 5.5312 12.2775 5.45014 12.3112C5.36909 12.3449 5.28218 12.3622 5.19441 12.3622C5.10665 12.3622 5.01974 12.3449 4.93868 12.3112C4.85763 12.2775 4.78402 12.2282 4.72208 12.166L1.15941 8.60001C1.09747 8.53782 1.02387 8.48848 0.94281 8.45481C0.861755 8.42114 0.77485 8.40381 0.687081 8.40381C0.599312 8.40381 0.512406 8.42114 0.431351 8.45481C0.350296 8.48848 0.276687 8.53782 0.214747 8.60001C0.152563 8.66194 0.103221 8.73555 0.0695536 8.81661C0.0358858 8.89767 0.0185547 8.98457 0.0185547 9.07234C0.0185547 9.16011 0.0358858 9.24701 0.0695536 9.32807C0.103221 9.40912 0.152563 9.48273 0.214747 9.54467L3.77875 13.108C4.15471 13.4833 4.66421 13.694 5.19541 13.694C5.72662 13.694 6.23612 13.4833 6.61208 13.108L15.8241 3.89801C15.8862 3.83608 15.9354 3.76251 15.969 3.68152C16.0026 3.60052 16.0199 3.5137 16.0199 3.42601C16.0199 3.33832 16.0026 3.25149 15.969 3.17049C15.9354 3.0895 15.8862 3.01593 15.8241 2.95401C15.7621 2.89182 15.6885 2.84248 15.6075 2.80881C15.5264 2.77514 15.4395 2.75781 15.3517 2.75781C15.264 2.75781 15.1771 2.77514 15.096 2.80881C15.015 2.84248 14.9414 2.89182 14.8794 2.95401Z" fill="#374957"/>
              </g>
              <defs>
                <clipPath id="clip0_0_2399">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span class="benefit-text-content">{{ benefit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Order from 'src/interfaces/Order';
import Order1 from 'assets/orderItems/order-1.svg'
import Order2 from 'assets/orderItems/order-2.svg'
import Order3 from 'assets/orderItems/order-3.svg'
import OrderItem from 'components/checkout/OrderItem.vue';
import CashBack from 'assets/cash-back.svg'
import Truck from 'assets/truck.svg'
import Btn from 'components/base/Btn.vue';
import { ref } from 'vue'

const orderItems: Order[] = [
  {
    name: 'Nike Sneakers',
    count: 1,
    price: '$120.90',
    image: Order1
  },
  {
    name: 'Nike Sneakers',
    count: 1,
    price: '$120.90',
    image: Order2
  },
  {
    name: 'Nike Sneakers',
    count: 1,
    price: '$120.90',
    image: Order3
  }
]

const discountCode = ref('')

const infos = [
  {
    icon: CashBack,
    message: `<p>30 days satisfaction <strong>Guarantee</strong> with <strong>money back</strong></p>`
  },
  {
    icon: Truck,
    message: `<p>Over <strong>38,957</strong> successfully <strong>shipped orders</strong></p>`
  }
]

const clubBenefits: string[] = ['Extra 10$ off!', 'Free shipping on marked club items!', 'Free returns on marked club items!']
</script>

<style scoped lang="scss">
.order-summary-wrap :deep {
  .order-summary {
    background: #F5F6FE;
    border: 1px solid #DADDF5;
    border-radius: 16px;
    padding: 16px;

    @media (min-width: 960px) {
      padding: 30px;
    }

    .summary-id {
      background: #F5F6FE;
      border: 1px solid #DADDF5;
      box-shadow: 0px 10px 30px rgba(4, 12, 92, 0.03);
      border-radius: 8px;
      height: 44px;
      margin-bottom: 30px;
    }
  }

  .first-info {
    .info-item {
      flex-wrap: nowrap;
      padding: 8px 0;

      &:first-child {
        border-bottom: 1px solid #EBECF3;
      }

      img {
        margin-right: 24px;
      }

      .message {
        color: #4B4E68;
        p {
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          color: #4B4E68;
          max-inline-size: 30ch;
        }
      }
    }
  }

  .first-info, .jewellery-box {
    border: 1px solid #DADDF5;
    box-shadow: 0px 10px 30px rgba(22, 8, 49, 0.05);
    padding: 16px;
    border-radius: 16px;
    margin-top: 32px;

    @media (min-width: 960px) {
      padding: 30px;
    }
  }

  .jewellery-box {
    h5 {
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: var(--q-primary);
      margin-bottom: 8px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--dark_2);
      margin-bottom: 20px;
    }
  }

  .benefit-text-content {
    margin-left: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--dark_2);
  }

  .discount-field {
    gap: 4px;
    .q-input {
      flex: 1;

      .q-field--filled {
        .q-field__control {
          background: #FFF;
        }
      }

      .q-field__control {
        background: #FFFFFF;
        box-shadow: 0px 10px 30px rgba(4, 12, 92, 0.03);
        border-radius: 16px;

        &:after {
          display: none;
        }
      }
    }
  }

  .total-price {
    margin-top: 30px;
    & > div {
      margin-bottom: 10px;
    }
  }
}
</style>
