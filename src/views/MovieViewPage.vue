<template>
  <div class="container movie mt-3">
    <div v-if="isLoading" class="text-center d-flex justify-content-center">
      <b-spinner variant="success" type="grow"></b-spinner>
    </div>
    <template v-else>
      <div class="d-flex justify-content-between align-items-center">
        <h2>{{ data.Title }}</h2>
        <div class="d-flex gap">
          <div class="block">
            <span class="rate">IMDB Rating</span>
            <span>
              <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
              {{ data.imdbRating }}/10</span
            >
          </div>
          <div class="block">
            <span class="rate">POPULARITY</span>
            <span>
              <b-icon icon="arrow-up-right-circle" font-scale="1"></b-icon>
              {{ data.imdbVotes }}</span
            >
          </div>
        </div>
      </div>
      <div class="d-flex gap-10">
        <img :src="data.Poster" />
        <div class="mt-3">
          <p>{{ data.Plot }}</p>
          <div class="d-flex gap align-items-start">
            <span
              v-for="(cat, i) in data.Genre ? data.Genre.split(',') : []"
              :key="i"
              class="genre"
            >
              {{ cat }}
            </span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="detail">
              <table>
                <tr>
                  <td class="tag">Type</td>
                  <td class="value">{{ data.Type }}</td>
                </tr>
                <tr>
                  <td class="tag">Language</td>
                  <td class="value">{{ data.Language }}</td>
                </tr>
                <tr>
                  <td class="tag">Country</td>
                  <td class="value">{{ data.Country }}</td>
                </tr>
                <tr>
                  <td class="tag">Actors</td>
                  <td class="value">{{ data.Actors }}</td>
                </tr>
                <tr>
                  <td class="tag">Director</td>
                  <td class="value">{{ data.Director }}</td>
                </tr>
                <tr>
                  <td class="tag">Writer</td>
                  <td class="value">{{ data.Writer }}</td>
                </tr>
                <tr>
                  <td class="tag">Released</td>
                  <td class="value">{{ data.Released }}</td>
                </tr>
                <tr>
                  <td class="tag">Runtime</td>
                  <td class="value">{{ data.Runtime }}</td>
                </tr>
              </table>
            </div>
            <div>
              <div v-for="(rat, i) in data.Ratings" :key="i" class="card box">
                <div class="card-header">
                  {{ rat.Source }}
                </div>
                <div class="card-content">
                  {{ rat.Value }}
                </div>
              </div>
              <div class="card box">
                <div class="card-header">BoxOffice Earn</div>
                <div class="card-content">{{ data.BoxOffice }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="awards mt-3">
        <b-alert show variant="warning">
          <span>Awards:</span>
          <span class="ml-3">{{ data.Awards }}</span>
        </b-alert>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "movie-view-page",
  computed: {
    ...mapGetters({ data: "getMovie", isLoading: "getLoad" }),
  },
  mounted() {
    this.$store.dispatch("fetchMovieData", this.$route.params.id);
  },
};
</script>
<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  .rate {
    color: gray;
    font-weight: 600;
  }
}

.genre {
  border: 2px solid gray;
  border-radius: 50px;
  padding: 0.5rem 1em;
  font-size: 12px;
}
.gap {
  gap: 1rem;
}
.gap-10 {
  gap: 10rem !important;
}
.detail {
  margin-top: 2rem;
  td {
    padding: 0.5rem;
  }
  .tag {
    margin-right: 1rem;
  }
  .value {
    color: gray;
    font-weight: 500;
  }
}

.box {
  text-align: center;
}
</style>
