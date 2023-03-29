<template>
  <div class="payment-wrap">
    <h3 class="section--label">Payment</h3>
    <div class="payment-methods flex">
      <div
        v-for="(method, i) in methods"
        :key="i"
        class="payment-method flex items-center justify-center"
        :class="{'payment-method--active': method.active}"
        >
        <img :src="method.icon" />
        <span>{{ method.name }}</span>
      </div>
    </div>
    <q-form @submit="onSubmit">
      <basic-form :fields="creditCardFields" />
      <div class="terms-agreement cursor-pointer flex no-wrap">
        <q-checkbox v-model="agree" />
        <p @click="agree = !agree">By checking this box, I acknowledge that I have read and agree to the <a href="#">Terms of Service</a>, and
          <a href="#">Monthly Billing Terms</a> of this website and want to opt-in for the monthly billed Dream Collection Club®</p>
      </div>

      <div class="billing-info">
        <h3 class="section--label">Billing Address</h3>
        <p>Specify the address for your payment option</p>
        <div class="options">
          <q-option-group
            v-model="option"
            :options="addressOptions"
            />
        </div>
        <basic-form v-if="option === 2" :fields="addressFields" />
      </div>
      <div class="form-action">
        <btn width="280px" type="submit">Complete Purchase</btn>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts" setup>
import Btn from 'components/base/Btn.vue';
import BasicForm from 'components/base/BasicForm.vue';
import UserIcon from 'assets/fieldIcons/user-icon.svg';
import CreditCard from 'assets/fieldIcons/credit-card.svg';
import Field from 'src/interfaces/Field';
import {ref} from 'vue';
import flagIcon from 'assets/fieldIcons/flag-icon.svg';
import userIcon from 'assets/fieldIcons/user-icon.svg';
import locationIcon from 'assets/fieldIcons/location-icon.svg';
import buildingIcon from 'assets/fieldIcons/building-icon.svg';
import postalIcon from 'assets/fieldIcons/postal-code-icon.svg';
import paypal from 'assets/fieldIcons/paypal-logo.svg';
import {useRouter} from 'vue-router';

const agree = ref(false)
const option = ref(1)
const router = useRouter()

const addressOptions = [
  {
    label: 'Same as shipping address',
    value: 1
  },
  {
    label: 'Use a different billing address',
    value: 2
  }
]

const methods = [
  {
    name: 'Credit Card',
    icon: CreditCard,
    active: true
  },
  {
    name: 'Paypal',
    icon: paypal
  }
]

const addressFields: Field[] = [
  {
    name: 'country',
    placeholder: 'Select your country',
    icon: flagIcon,
    value: '',
    label: 'Country of Origin'
  },
  {
    name: 'first name',
    placeholder: 'Enter your first name',
    icon: userIcon,
    value: '',
    label: 'First Name',
    doesNotSpan: true
  },
  {
    name: 'last name',
    placeholder: 'Enter your last name',
    icon: userIcon,
    value: '',
    label: 'Last Name',
    doesNotSpan: true
  },
  {
    name: 'address',
    placeholder: 'Enter your address',
    icon: locationIcon,
    value: '',
    label: 'Address'
  },
  {
    name: 'apartment',
    placeholder: 'Enter your apartment',
    icon: buildingIcon,
    value: '',
    label: 'Apartment',
    doesNotSpan: true,
    optional: true
  },
  {
    name: 'suit',
    placeholder: 'Enter your suit',
    icon: buildingIcon,
    value: '',
    label: 'Suit',
    doesNotSpan: true,
    optional: true
  },
  {
    name: 'post code',
    placeholder: 'Enter your post code',
    icon: postalIcon,
    value: '',
    label: 'Post Code',
    doesNotSpan: true
  },
  {
    name: 'city',
    placeholder: 'Enter your city',
    icon: locationIcon,
    value: '',
    label: 'City',
    doesNotSpan: true
  }
]

const creditCardFields: Field[] = [
  {
    name: 'card number',
    placeholder: '2548 9841 2570 ****',
    value: '',
    label: 'Credit Card Number',
    type: 'text',
    icon: CreditCard
  },
  {
    name: 'name',
    placeholder: 'Enter name on card',
    value: '',
    label: 'Name on Card',
    type: 'text',
    icon: UserIcon
  },
  {
    name: 'date',
    placeholder: 'MM/YY',
    value: '',
    label: 'Expiry Date',
    type: 'text',
    icon: '',
    doesNotSpan: true
  },
  {
    name: 'cvv',
    placeholder: 'CVV',
    value: '',
    label: 'Security Code',
    type: 'text',
    doesNotSpan: true
  }
]

function onSubmit () {
  router.push({
    name: 'up-sell'
  })
}
</script>

<style scoped lang="scss">
.payment-wrap :deep {
  .section--label {
    font-size: clamp(1.25rem, 1vw + 1rem, 1.5rem);
    font-weight: 600;
    line-height: 150%;
    color: var(--q-primary);

    & + p {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: var(--dark_3);
      margin-bottom: 20px;
    }
  }

  .payment-methods {
    gap: 20px;
    margin-top: 24px;
    margin-bottom: 20px;

    .payment-method {
      background: rgba(228, 228, 255, 0.1);
      border: 1px solid var(--dark_5);
      border-radius: 16px;
      padding: 0 24px;
      height: 50px;
      cursor: pointer;

      &--active {
        border-color: #7782F1;
        img {
          color: #7782F1;
        }

        span {
          color: #7782F1;
        }
      }

      span {
        margin-left: 8px;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

  .q-checkbox {
    align-items: start !important;
  }

  .options {
    margin-bottom: 16px;
  }

  .terms-agreement {
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      /* or 171% */


      /* Dark/dark_2 */

      color: var(--dark_2);
    }
    a {
      text-decoration: none;
      color: var(--q-primary);
      font-weight: 600;
    }
  }

  .billing-info {
    margin-top: 32px;
  }

  .form-action {
    margin-top: 24px;

    .q-btn {
      width: 280px !important;
      height: 56px;
    }
  }
}
</style>
