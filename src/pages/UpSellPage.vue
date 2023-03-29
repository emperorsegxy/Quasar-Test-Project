<template>
  <div class="up-sell-page-wrap">
    <img class="order-image" :src="shoeImage" />

    <div class="price-box column items-center justify-center">
      <div class="flex items-center">
        <span>Price:</span>
        <div class="amount">$50</div>
        <div class="discount flex items-center justify-center">-80%</div>
      </div>
      <div class="count flex items-center justify-center">
        <span>Quantity:</span>
        <div class="counter flex items-center">
          <div class="count-modifier" @click="decrement">
            -
          </div>
          <div class="count-number">{{ count }}</div>
          <div class="count-modifier" @click="increment">
            +
          </div>
        </div>
      </div>
    </div>

    <p>
      <span class="block-title">
        Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.
      </span><br /><br />
      Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim elit orci malesuada. Lorem sit sagittis vitae nulla id. Mauris ipsum sed sed faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu lorem. Nullam ornare molestie nam id gravida volutpat bibendum sem feugiat. Neque vulputate in et maecenas porta mi tellus. In massa porttitor urna quis volutpat at.</p>
    <div class="checkout-and-support flex">
      <div class="checkout column items-center justify-center">
        <div class="flex secured">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_8747)">
              <path d="M19.0002 8V7C19.0002 5.14348 18.2627 3.36301 16.95 2.05025C15.6372 0.737498 13.8568 0 12.0002 0C10.1437 0 8.36325 0.737498 7.0505 2.05025C5.73774 3.36301 5.00024 5.14348 5.00024 7V8H2.00024V21C2.00024 21.7956 2.31631 22.5587 2.87892 23.1213C3.44153 23.6839 4.20459 24 5.00024 24H19.0002C19.7959 24 20.559 23.6839 21.1216 23.1213C21.6842 22.5587 22.0002 21.7956 22.0002 21V8H19.0002ZM7.00024 7C7.00024 5.67392 7.52703 4.40215 8.46471 3.46447C9.40239 2.52678 10.6742 2 12.0002 2C13.3263 2 14.5981 2.52678 15.5358 3.46447C16.4735 4.40215 17.0002 5.67392 17.0002 7V8H7.00024V7ZM20.0002 21C20.0002 21.2652 19.8949 21.5196 19.7074 21.7071C19.5198 21.8946 19.2655 22 19.0002 22H5.00024C4.73503 22 4.48067 21.8946 4.29314 21.7071C4.1056 21.5196 4.00024 21.2652 4.00024 21V10H20.0002V21Z" fill="#84849A"/>
              <path d="M13.0003 13.9995H11.0002V17.9995H13.0003V13.9995Z" fill="#84849A"/>
            </g>
            <defs>
              <clipPath id="clip0_0_8747">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span>Guaranteed <strong>Safe</strong> & <strong>Secure</strong> Checkout</span>
        </div>
        <div class="flex cards">
          <img
            v-for="(card, i) in cards"
            :key="i"
            :src="card"
            />
        </div>
      </div>
      <div class="support row items-center justify-center">
        <img :src="support" />
        <span class="support-text">
          <span>24/7</span>
          <br />
          <span>Support</span>
        </span>
      </div>
    </div>
    <div class="buttons column justify-center items-center">
      <btn :to="{ name: 'thank-you' }">Yes, I want</btn>
      <btn outline :to="{ name: 'thank-you' }">No, Thanks</btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import shoeImage from 'assets/orderItems/shoe.svg'
import masterCard from 'assets/checkoutCards/master-card.svg'
import amex from 'assets/checkoutCards/amex-card.svg'
import jcb from 'assets/checkoutCards/jcb-card.svg'
import paypal from 'assets/checkoutCards/paypal-card.svg'
import visa from 'assets/checkoutCards/visa-card.svg'
import chk from 'assets/checkoutCards/chk-card.svg'
import support from 'assets/support-icon.svg';
import Btn from 'components/base/Btn.vue';

const count = ref(0)

const cards = [masterCard, visa, paypal, amex, jcb, chk]

function increment () {
  count.value = count.value + 1
}

function decrement () {
  if (count.value) {
    count.value = count.value - 1
  }
}
</script>

<style scoped lang="scss">
.up-sell-page-wrap :deep {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 10px;

  img.order-image {
    width: 100%;
  }

  .price-box {
    border: 1px solid #DADDF5;
    box-shadow: 0px 10px 30px rgba(22, 8, 49, 0.05);
    border-radius: 16px;
    height: 170px;
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 16px;

    & > div > span {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var(--q-primary)
    }

    .amount {
      font-weight: 600;
      font-size: 30px;
      line-height: 40px;
      color: var(--q-primary);
      margin-left: 8px;
    }

    .discount {
      background: #EFF0F5;
      border-radius: 8px;
      padding: 4px 16px;
      margin-left: 12px;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var(--q-primary);
    }

    .count {
      background: #EFF0F5;
      opacity: 0.5;
      border-radius: 16px;
      padding: 16px;
      margin-top: 8px;
    }

    .counter {
      margin-left: 20px;
      gap: 20px;
    }

    .count-number {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: var(--q-primary);
    }

    .count-modifier {
      background: #FFF;
      border-radius: 16px;
      height: 50px;
      width: 57px;
      font-size: 24px;
      color: var(--q-primary);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: var(--dark_2)
    }
  }

  .checkout-and-support {
    margin-top: 30px;
    gap: 20px;

    .checkout {
      min-width: 345px;
      border: 1px solid #DADDF5;
      box-shadow: 0px 10px 30px rgba(22, 8, 49, 0.05);
      border-radius: 16px;
      height: 140px;

      .secured {
        gap: 8px;
        margin-bottom: 8px;
      }

      .cards {
        gap: 12px;
      }
    }

    .support {
      border: 1px solid #DADDF5;
      box-shadow: 0px 10px 30px rgba(22, 8, 49, 0.05);
      border-radius: 16px;
      height: 140px;
      flex: 1;

      &-text {
        span {
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          color: var(--dark_3);
        }
        span:first-child {
          color: var(--q-primary);
        }
      }
    }
  }

  .buttons {
    gap: 16px;
    width: 100%;
    max-width: 343px;
    margin: 32px auto;

    .q-btn {
      height: 72px;
      width: 100%;
    }
  }
}
</style>
