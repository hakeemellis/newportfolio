<template>
  <section class="flex flex-row flex-1 justify-center gap-4 h-screen bg-custom-gray overflow-y-auto">
    <section class="flex-[0.42] sticky top-0 h-screen">
      <StagFrame />
    </section>
    <section class="outer-container-home flex-[0.58] mt-4 max-w-2xl">
      <section class="flex flex-col gap roboto-condensed-regular">
        <p>
          I’m a junior software engineer with hands-on experience across various
          tech stacks, driven by a curiosity for solving complex problems and
          building seamless digital experiences. My journey began with a
          fascination for how code transforms ideas into interactive solutions,
          and today, I’m excited to apply that passion in real-world projects.
          <br />
          <br />
          I’ve worked with languages and frameworks such as JavaScript, React,
          Python, and Node.js, creating everything from dynamic front-end
          interfaces to robust back-end services. My experience includes
          personal projects, freelance work, and collaborative coding challenges
          that have strengthened my skills in responsive design, API
          integration, and building user-friendly web applications.
          <br />
          <br />
          I’m particularly interested in accessibility and usability, ensuring
          that the software I create is inclusive and optimized for all users.
          Whether it’s debugging tricky issues or learning new technologies, I
          approach challenges with persistence and adaptability.
        </p>
      </section>
      <section class="flex flex-row flex-1 gap-4 roboto-condensed-regular">
        <section class="flex-[0.20]">
          <p>2024 - Present</p>
        </section>
        <section class="flex-[0.80] break-words">
          <!-- While flex[0.XX] is enabled, the section becomes its own container
            as such, it becomes better to establish a flex container within it to achieve desired result
            as I have below. Using "flex" in it is not recommended -->

          <!-- Start of Container for Experience Section-->
          <section class="flex flex-col gap-10">
            <!-- Company One-->
            <section class="flex flex-col gap-2">
              <p class="roboto-condensed-bold">
                Role for Company | Name of Company
              </p>
              <p>
                wdwjebsjdlwkswsxlcnewdkjcbnejwnsfcjcebijvbwedafve fewwmsdnwqjb
                ndf efdewfefefeijqwebevwijdbvnadlne wodwqdsneqjnffedfeeqfn
              </p>
              <section class="flex flex-row flex-wrap gap-2">
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
              </section>
            </section>
            <!-- End of Company One-->

            <!-- Company Two-->
            <section class="flex flex-col gap-2">
              <p class="roboto-condensed-bold">
                Role for Company | Name of Company
              </p>
              <p>
                wdwjebsjdlwkswsxlcnewdkjcbnejwnsfcjcebijvbwedafve fewwmsdnwqjb
                ndf efdewfefefeijqwebevwijdbvnadlne wodwqdsneqjnffedfeeqfn
              </p>
              <section class="flex flex-row flex-wrap gap-2">
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
              </section>
            </section>
            <!-- End of Company Two-->

            <!-- Company Three-->
            <section class="flex flex-col gap-2">
              <p class="roboto-condensed-bold">
                Role for Company | Name of Company
              </p>
              <p>
                wdwjebsjdlwkswsxlcnewdkjcbnejwnsfcjcebijvbwedafve fewwmsdnwqjb
                ndf efdewfefefeijqwebevwijdbvnadlne wodwqdsneqjnffedfeeqfn
              </p>
              <section class="flex flex-row flex-wrap gap-2">
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
                <section class="tag-icon">
                  <p>wdwjebsjdlwks</p>
                </section>
              </section>
            </section>
            <!-- End of Company Three-->
          </section>
          <!-- End of Container for Experience Section-->
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import StagFrame from '../components/StagFrame.vue'; // Adjust the path as necessary

export default {
  name: 'Home',
  components: {
    StagFrame,
  },
  data() {
    return {
      message: 'This is the Home page!',
    };
  },
};
</script>

<style scoped>
/* CONTAINER STYLING */

/* Style for Outer Container */
.outer-container-home {
  display: flex;
  flex-direction: column; /* Arrange children in a column */
  gap: 90px; /* Space between elements */
  padding: 20px; /* Padding inside the container */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  height: 100%; /* Ensure the container takes the full height */
  min-height: 0; /* Allow the container to shrink properly */
}

/* Style for Experience Container */
.experience-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}

/* CONTAINER STYLING */

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

/* TAGS STYLING */

/* Tag Icons for Portfolio */
.tag-icon {
  display: inline-flex; /* to make container flex inline to align with content */
  justify-content: center;
  border-radius: 30px; /* round out border edges */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3); /* Drop shadow */
  padding: 5px 10px;
  width: auto;
  font-size: 14px;
}

/* TAGS STYLING */
</style>