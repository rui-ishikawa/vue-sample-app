<template>
  <div>
    <p>住所: {{ address }}</p>
    <input type="text" v-model="zip" />
    <button @click="getAddress">検索</button>
  </div>
</template>

<script lang="ts">
// import store from './store/address'
import { mapState } from "vuex"
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Address extends Vue {
  // store,
  data() {
    return {
      zip: ""
    };
  },
  computed: {
    ...mapState({
      address: state: => state.address
    }),
  },
  methods: {
    getAddress() {
      this.$store.dispatch("getAddressAction", this.zip);
    }    
  }
}
</script>