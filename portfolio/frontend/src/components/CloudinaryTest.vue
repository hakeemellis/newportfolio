<template>
  <div>
    <h1>Portfolio Gallery</h1>
    <div v-for="image in images" :key="image.id" class="portfolio-image">
      <img :src="image.signedUrl" :alt="image.alt" loading="lazy" />
    </div>
  </div>
</template>

<script>
import { fetchSignedUrl } from '@/utils/api';

export default {
  data() {
    return {
      images: [
        { id: 1, publicId: 'portfolio/sample', alt: 'Sample Project', signedUrl: '' },
        { id: 2, publicId: 'portfolio/project2', alt: 'Project 2', signedUrl: '' },
      ],
    };
  },
  async created() {
    // Fetch signed URLs for each image
    for (let image of this.images) {
      const transformations = { w: 300, h: 200, c: 'fill', q: 'auto', f: 'auto' };
      image.signedUrl = await fetchSignedUrl(image.publicId, transformations);
    }
  },
};
</script>

<style scoped>
.portfolio-image img {
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}
</style>