<template>
  <!-- Start of Container for About Section-->
  <section
    class="flex flex-col gap roboto-condensed-regular dark:text-custom-white"
  >
    <p>
      I’m a junior software engineer with hands-on experience across various
      tech stacks, driven by a curiosity for solving complex problems and
      building seamless digital experiences. My journey began with a fascination
      for how code transforms ideas into interactive solutions, and today, I’m
      excited to apply that passion in real-world projects.
      <br />
      <br />
      I’ve worked with languages and frameworks such as JavaScript, React,
      Python, and Node.js, creating everything from dynamic front-end interfaces
      to robust back-end services. My experience includes personal projects,
      freelance work, and collaborative coding challenges that have strengthened
      my skills in responsive design, API integration, and building
      user-friendly web applications.
      <br />
      <br />
      I’m particularly interested in accessibility and usability, ensuring that
      the software I create is inclusive and optimized for all users. Whether
      it’s debugging tricky issues or learning new technologies, I approach
      challenges with persistence and adaptability.
    </p>
  </section>
  <!-- End of Container for About Section-->
</template>

<script>
  export default {
    name: 'AboutSection',
    data() {
      return {
        // Until I have something to put
      };
    },
  };
</script>

<style scoped>
  /* TEXT STYLING */

  /* Gap for Text within Frame */
  .gap {
    gap: 4px;
  }

  /* Roboto Condensed Font */
  .roboto-condensed-regular {
    font-family: 'Roboto Condensed', serif;
    font-weight: 370;
    font-optical-sizing: auto;
    font-size: 16px;
    font-style: normal;
  }

  .roboto-condensed-bold {
    font-family: 'Roboto Condensed', serif;
    font-weight: 670;
    font-optical-sizing: auto;
    font-size: 18px;
    font-style: normal;
  }

  /* TEXT STYLING */
</style>
