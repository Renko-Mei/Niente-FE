<template>
  <div class="home-page">
    <section class="intro">
      <h1>Welcome to neu</h1>
    </section>
    <section class="featured-posts">
      <articlePreview
        id="1"
        thumbnail="https://images.techhive.com/images/article/2016/11/computerworld_tech_forecast_2017_hottest-tech-skills-for-2017-100692085-large.jpg"
        title="Hello"
        previewText="This is the first preview"
      />
      <articlePreview
        id="2"
        thumbnail="https://images.techhive.com/images/article/2016/11/computerworld_tech_forecast_2017_hottest-tech-skills-for-2017-100692085-large.jpg"
        title="There"
        previewText="This is the second preview"
      />
      <articlePreview
        id="3"
        thumbnail="https://images.techhive.com/images/article/2016/11/computerworld_tech_forecast_2017_hottest-tech-skills-for-2017-100692085-large.jpg"
        title="Third"
        previewText="This is the third preview"
      />
    </section>
  </div>
</template>

<script>
import articlePreview from "@/components/articles/articlePreview";
export default {
  components: {
    articlePreview
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
