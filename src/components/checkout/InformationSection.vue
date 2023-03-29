<template>
  <div class="information-wrap">
    <q-form @submit.prevent="submitForm">
      <div
        v-for="(section, i) in sections"
        :key="i"
        class="section-wrapper"
      >
        <h3 class="section--label">{{ section.label }}</h3>
        <basic-form @input="onInput(section.label, $event)" :fields="section.fields" />
      </div>
      <div class="form-action">
        <btn width="280px" type="submit">Continue to Payment</btn>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts" setup>
import userIcon from 'assets/fieldIcons/user-icon.svg'
import flagIcon from 'assets/fieldIcons/flag-icon.svg'
import emailIcon from 'assets/fieldIcons/user-icon.svg'
import phoneIcon from 'assets/fieldIcons/phone-icon.svg'
import locationIcon from 'assets/fieldIcons/location-icon.svg'
import buildingIcon from 'assets/fieldIcons/building-icon.svg'
import postalIcon from 'assets/fieldIcons/postal-code-icon.svg'
import Field from 'src/interfaces/Field';
import BasicForm from 'components/base/BasicForm.vue';
import Btn from 'components/base/Btn.vue';

type Section = {
  label: string,
  fields: Field[]
}

const sections: Section[] = [
  {
    label: 'Contact Information',
    fields: [
      {
        name: 'email',
        placeholder: 'Enter your email',
        icon: emailIcon,
        value: '',
        label: 'Email'
      },
      {
        name: 'phone number',
        placeholder: 'Enter your phone number',
        icon: phoneIcon,
        value: '',
        label: 'Phone Number'
      }
    ]
  },
  {
    label: 'Shipping Address',
    fields: [
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
        doesNotSpan: true,
        // type: 'select',
        // items: ['AllenTown', 'Boston'] as never[]
      }
    ]
  }
]

const emits = defineEmits(['submit'])

function onInput (parent: string, { name, value }: { name: string, value: string }) {
  const section = sections.find(section => section.label === parent)
  if (parent) {
    const field = section?.fields.find(field => field.name === name)
    if (field) {
      field.value = value
    }
  }
}

function submitForm() {
  const [contactInfo, shippingInfo] = sections
  emits('submit', {
    ...generatePayload(contactInfo.fields),
    ...generatePayload(shippingInfo.fields)
  })
}

const generatePayload = (fields: Field[]) => {
  return fields.reduce((acc, curr) => ({
    [curr.name.split(/\s/).join('_')]: curr.value,
    ...acc
  }), {})
}
</script>
<style scoped lang="scss">
.information-wrap :deep {
  .section--label {
    font-size: clamp(1.25rem, 1vw + 1rem, 1.5rem);
    font-weight: 600;
    line-height: 150%;
    color: var(--q-primary);
    margin-bottom: 16px;
  }

  .section-wrapper {
    margin-bottom: 32px;
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
