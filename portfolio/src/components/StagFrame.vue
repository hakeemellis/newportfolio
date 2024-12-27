<template>
  
    <section class="outer-container">

      <section>
        <section>
          <h2>Hakeem Ellis</h2>
          <img src="../assets/images/profile.jpg" class="profile-photo">
          <h3 class="subtitle">Junior Software Engineer</h3>
          <p style="font-size: 23px; line-height: 50%;">About</p>
          <p style="font-size: 23px; line-height: 50%;">Experience</p>
          <p style="font-size: 23px; line-height: 50%;">Projects</p>
        </section>
      </section>

      <section style="text-align: center;">
        <p> Random Shit</p>
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
  font-weight: 800;
  font-size: 31px;
}

.subtitle {
  font-family: 'Integral CF';
  font-weight: 500;
  font-size: 23px;
}

/* Roboto Font */

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 23px;
}

/*Container For Stagnant Frame*/


.outer-container {
  display: flex;
  flex-direction: column; /* Arrange children in a column */
  align-items: center; /* Center children horizontally */
  text-align: center;
  gap: 20px; /* Space between elements */
  padding: 20px; /* Padding inside the container */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  overflow: hidden; /* Hide any content that overflows the container */
}

/* Profile Photo */
.profile-photo {
  border-radius: 50%; /* Keeps it a perfect circle */
  border: 3px solid #000; /* Black border */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); /* Drop shadow */
  width: 50vw; /* Makes the width 50% of the viewport width */
  max-width: 200px; /* Shrinks the circle */
  height: auto; /* Maintains aspect ratio */
}

h1 {
  color: blue;
  font-size: 2rem;
}

p {
  
  font-size: 1rem;
}
</style>