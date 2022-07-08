<template>
  <section>
    <base-card>
      <template #header> 
        <!-- Use # is the same as use v-slot: -->
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '../components/BaseCard.vue';
export default {
  components:{
    'base-card': BaseCard
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>
