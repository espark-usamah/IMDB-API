<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <template v-if="getData">
        <div
          v-for="(row, i) in getData"
          :key="i"
          class="col-xs-12 col-sm-12 col-md-2 mb-3"
        >
          <MovieTag :item="row" />
        </div>
      </template>
      <div v-else class="text-center">
        <b-alert show variant="danger">
          <span class="">No Record Found!!!</span>
        </b-alert>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieTag from "@/components/MovieTag.vue";

export default {
  name: "HomeView",
  components: {
    MovieTag,
  },
  computed: {
    ...mapGetters(["getData"]),
  },
  mounted() {
    this.$store.dispatch("set_Data");
  },
};
</script>
