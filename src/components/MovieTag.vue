<template>
  <router-link :to="'/movie/' + item.imdbID">
    <div class="movie-tag">
      <div class="tag">
        <img :src="item.Poster" />
      </div>
      <div class="name-eclips p-1 px-3">
        <span class="name" :title="item.Title">
          Name: <span>{{ item.Title }}</span>
        </span>
        <div class="d-flex justify-content-between align-items-center mt-4">
          <div>
            Year: <span>{{ item.Year }}</span>
          </div>
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "movie-tag",
  props: {
    item: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-tag {
  cursor: pointer;
  background-color: gray;
  color: white;
  border-radius: 2rem 0 2rem 0;
  .tag {
    height: 25rem;
    width: 100%;
    img {
      width: 100%;
      height: inherit;
      border-radius: 2rem 0 2rem 0;
      filter: grayscale(100%);
    }
  }
  .name-eclips {
    position: relative;
    .name {
      position: absolute;
      white-space: nowrap;
      width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.movie-tag:hover {
  transform: rotate3d(1, 1, 1, 360deg);
  background-color: #84c8dd !important ;
  transition-property: transform, background-color;
  transition-duration: 1s;
  transition-delay: 0.2s;
  .tag {
    img {
      filter: none;
      transition-property: filter;
      transition-duration: 2s;
      transition-delay: 0.5s;
    }
  }
}
</style>
