<template>
  <section class="outer-container">
    <section>
      <h2>Hakeem Ellis</h2>
      <img src="../assets/images/profile.jpg" class="profile-photo">
      <p>Component description or content goes here.</p>
    </section>
  </section>
</template>

<script>
export default {
  name: 'StagnantFrame',
  data() {
    return {
      message: 'Stagnant Frame Component'
    };
  }
};
</script>

<style scoped>

/* CSS STYLES */

/*Integral CF Font*/
h2 {
  font-family: 'Integral CF';
}

/*Container For Stagnant Frame*/
.outer-container {
  display: flex;
  width: 50vw; /* 50% of the viewport's width */
  height: 50vh; /* 50% of the viewport's height */
  padding-bottom: 1161px; /* Adjusted based on 50vh */
  flex-direction: column; /*used with display: flex to create a column layout*/
  align-items: center; /*used because of flex-direction: column to align elements (vertical if column/horizontal if row */
  text-align: center;
  gap: 81px;
  flex-shrink: 0; /*prevents container from shrinking elements inside*/
  position: absolute; /* Positioning relative to the nearest positioned ancestor (position being used)*/
  top: 36px; /* Set top to 86px */
  left: 32px; /* Set left to 32px */
  overflow: hidden; /* Hide any content that overflows the container */
}

/*Profile Photo*/
.profile-photo {
  border-radius: 50%; /* Makes it a perfect circle */
  border: 3px solid #000; /* Black border */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); /* Drop shadow */
  width: 100vw; /* Scales with the container width */
  max-width: 200px; /* Prevents it from getting too large */
  height: auto; /* Maintains aspect ratio */ 
}

h1 {
  color: blue;
  font-size: 2rem;
}

p {
  color: gray;
  font-size: 1rem;
}
</style>