<template>
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
</template>

<script>
  export default {
    name: 'ExperienceSection',
    data() {
      return {
        message: 'This is a default reusable Vue component!',
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