<template>
  <div class="_headerLink">
    <div class="container-fluid d-flex justify-content-between">
      <router-link to="/"> MovEx` </router-link>
      <span v-if="getSearchBar">
        <b-input-group class="searchInput">
          <template #append>
            <b-input-group-text
              ><strong> <b-icon-search></b-icon-search></strong
            ></b-input-group-text>
          </template>
          <b-form-input
            v-model="value"
            type="text"
            debounce="100"
          ></b-form-input>
        </b-input-group>
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "header-com",
  computed: {
    ...mapGetters(["getSearchBar"]),
  },
  watch: {
    value(nV) {
      this.$store.dispatch("set_qry", nV);
    },
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style lang="scss" scoped>
._headerLink {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  background: black !important;
  -webkit-box-shadow: -2px -1px 37px -7px rgb(122, 122, 122);
  -moz-box-shadow: -2px -1px 37px -7px rgb(122, 122, 122);
  box-shadow: -2px -1px 37px -7px rgb(122, 122, 122);
  text-transform: uppercase;
  background-color: #fefffe;
  font-size: 2em;
  padding: 30px;
  margin: 0;
}

a {
  font-weight: bold;
  color: yellow;
  text-decoration: none;
}
.searchInput {
  margin-left: 2rem;
}
</style>
