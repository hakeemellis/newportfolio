<template>
  <!-- Start of Container for Stagnant Frame -->
  <section class="outer-container mt-2 dark:text-custom-white">
    <!-- Start of Section for Profile -->
    <section class="flex flex-col gap ">
      <h2 class="text-4xl font-bold font-sans">Hakeem Ellis</h2>
      <img
        :src="profileImageUrl"
        alt="Profile Photo"
        class="profile-photo shadow-lg shadow-zinc-500 dark:shadow-lg dark:shadow-zinc-800 dark:border-zinc-300"
      />
      <h3 class="font-bold text-2xl ">Full-Stack Web Developer</h3>
      <h3 class="font-bold text-2xl">UX/UI Designer</h3>
      <section class="flex flex-col inner-gap">
        <button
          @click="scrollToSection('about')"
          class="hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out font-medium"
          style="font-size: 20px"
        >
          About
        </button>

        <button
          @click="scrollToSection('experience')"
          class="hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out robotospecial"
          style="font-size: 20px"
        >
          Experience
        </button>

        <button
          @click="scrollToSection('projects')"
          class="hover:dark:text-rose-500 hover:text-cyan-800 hover:transition-all hover:duration-500 hover:ease-in-out robotospecial"
          style="font-size: 20px"
        >
          Projects
        </button>
      </section>
    </section>
    <!-- End of Section for Profile -->

    <!-- Start of Section for Icons -->
    <section class="flex flex-1 justify-center items-center gap-x-4">
      <!-- Start of Child Container for Socials: LinkedIn and GitHub-->

      <section
        class="flex justify-center items-center gap-x-1 transition-all duration-1000 ease-in-out"
      >
        <!-- LinkedIn Icon -->
        <svg
          v-if="!isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="54"
          viewBox="0 0 85 84"
          fill="none"
        >
          <path
            d="M64.6813 64.1812H55.3467V49.56C55.3467 46.074 55.2838 41.5852 50.4905 41.5852C45.629 41.5852 44.8835 45.3862 44.8835 49.3027V64.1812H35.549V34.1145H44.5108V38.2252H44.6367C46.4637 35.1067 49.8657 33.2377 53.4777 33.369C62.9382 33.369 64.6865 39.5902 64.6865 47.691L64.6813 64.176V64.1812ZM25.0175 30.0037C23.5836 29.9968 22.2103 29.4245 21.1959 28.4111C20.1814 27.3976 19.6078 26.0249 19.5995 24.591C19.5995 21.6195 22.046 19.173 25.0175 19.173C27.989 19.173 30.4303 21.6195 30.4355 24.591C30.4355 27.5625 27.989 30.0037 25.0175 30.0037ZM29.6847 64.1812H20.3398V34.1145H29.6847V64.1812ZM69.3275 10.5H15.6462C14.429 10.4929 13.2582 10.9665 12.3882 11.8178C11.5182 12.6691 11.0193 13.8294 11 15.0465V68.9535C11.0193 70.1706 11.5182 71.3308 12.3882 72.1821C13.2582 73.0335 14.429 73.5071 15.6462 73.5H69.3327C70.5528 73.5099 71.7274 73.0379 72.6013 72.1865C73.4753 71.3352 73.9779 70.1733 74 68.9535V15.0412C73.9779 13.8223 73.4749 12.6616 72.6007 11.8119C71.7264 10.9622 70.5518 10.4926 69.3327 10.5052L69.3275 10.5Z"
            fill="#0A66C2"
          />
          <path
            d="M64.6813 64.1812H55.3467V49.56C55.3467 46.074 55.2838 41.5852 50.4905 41.5852C45.629 41.5852 44.8835 45.3862 44.8835 49.3027V64.1812H35.549V34.1145H44.5108V38.2252H44.6367C46.4637 35.1067 49.8657 33.2377 53.4777 33.369C62.9382 33.369 64.6865 39.5902 64.6865 47.691L64.6813 64.176V64.1812ZM25.0175 30.0037C23.5836 29.9968 22.2103 29.4245 21.1959 28.4111C20.1814 27.3976 19.6078 26.0249 19.5995 24.591C19.5995 21.6195 22.046 19.173 25.0175 19.173C27.989 19.173 30.4303 21.6195 30.4355 24.591C30.4355 27.5625 27.989 30.0037 25.0175 30.0037ZM29.6847 64.1812H20.3398V34.1145H29.6847V64.1812ZM69.3275 10.5H15.6462C14.429 10.4929 13.2582 10.9665 12.3882 11.8178C11.5182 12.6691 11.0193 13.8294 11 15.0465V68.9535C11.0193 70.1706 11.5182 71.3308 12.3882 72.1821C13.2582 73.0335 14.429 73.5071 15.6462 73.5H69.3327C70.5528 73.5099 71.7274 73.0379 72.6013 72.1865C73.4753 71.3352 73.9779 70.1733 74 68.9535V15.0412C73.9779 13.8223 73.4749 12.6616 72.6007 11.8119C71.7264 10.9622 70.5518 10.4926 69.3327 10.5052L69.3275 10.5Z"
            fill="black"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="54"
          viewBox="0 0 85 84"
          fill="none"
        >
          <path
            d="M64.6813 64.1813H55.3467V49.5601C55.3467 46.0741 55.2838 41.5853 50.4905 41.5853C45.629 41.5853 44.8835 45.3863 44.8835 49.3028V64.1813H35.549V34.1146H44.5108V38.2253H44.6367C46.4637 35.1068 49.8657 33.2378 53.4777 33.3691C62.9382 33.3691 64.6865 39.5903 64.6865 47.6911L64.6813 64.1761V64.1813ZM25.0175 30.0038C23.5836 29.9969 22.2103 29.4246 21.1959 28.4112C20.1814 27.3977 19.6078 26.025 19.5995 24.5911C19.5995 21.6196 22.046 19.1731 25.0175 19.1731C27.989 19.1731 30.4303 21.6196 30.4355 24.5911C30.4355 27.5626 27.989 30.0038 25.0175 30.0038ZM29.6847 64.1813H20.3398V34.1146H29.6847V64.1813ZM69.3275 10.5001H15.6462C14.429 10.493 13.2582 10.9666 12.3882 11.8179C11.5182 12.6692 11.0193 13.8295 11 15.0466V68.9536C11.0193 70.1707 11.5182 71.3309 12.3882 72.1822C13.2582 73.0336 14.429 73.5071 15.6462 73.5001H69.3327C70.5528 73.51 71.7274 73.0379 72.6013 72.1866C73.4753 71.3353 73.9779 70.1734 74 68.9536V15.0413C73.9779 13.8224 73.4749 12.6617 72.6007 11.812C71.7264 10.9623 70.5518 10.4927 69.3327 10.5053L69.3275 10.5001Z"
            fill="#0A66C2"
          />
          <path
            d="M64.6813 64.1813H55.3467V49.5601C55.3467 46.0741 55.2838 41.5853 50.4905 41.5853C45.629 41.5853 44.8835 45.3863 44.8835 49.3028V64.1813H35.549V34.1146H44.5108V38.2253H44.6367C46.4637 35.1068 49.8657 33.2378 53.4777 33.3691C62.9382 33.3691 64.6865 39.5903 64.6865 47.6911L64.6813 64.1761V64.1813ZM25.0175 30.0038C23.5836 29.9969 22.2103 29.4246 21.1959 28.4112C20.1814 27.3977 19.6078 26.025 19.5995 24.5911C19.5995 21.6196 22.046 19.1731 25.0175 19.1731C27.989 19.1731 30.4303 21.6196 30.4355 24.5911C30.4355 27.5626 27.989 30.0038 25.0175 30.0038ZM29.6847 64.1813H20.3398V34.1146H29.6847V64.1813ZM69.3275 10.5001H15.6462C14.429 10.493 13.2582 10.9666 12.3882 11.8179C11.5182 12.6692 11.0193 13.8295 11 15.0466V68.9536C11.0193 70.1707 11.5182 71.3309 12.3882 72.1822C13.2582 73.0336 14.429 73.5071 15.6462 73.5001H69.3327C70.5528 73.51 71.7274 73.0379 72.6013 72.1866C73.4753 71.3353 73.9779 70.1734 74 68.9536V15.0413C73.9779 13.8224 73.4749 12.6617 72.6007 11.812C71.7264 10.9623 70.5518 10.4927 69.3327 10.5053L69.3275 10.5001Z"
            fill="#F7F7F7"
          />
        </svg>

        <!-- GitHub Icon -->
        <svg
          v-if="!isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 61 60"
          fill="none"
        >
          <g clip-path="url(#clip0_30_7)">
            <path
              d="M53.5 0.82193H8C1.64494 0.82193 1.32193 5.97372 1.32193 12.3288V47.6712C1.32193 54.0263 1.64494 59.1781 8 59.1781L53.5 60.5C59.8551 60.5 59.6781 54.0263 59.6781 47.6712V12.3288C59.6781 5.97372 59.8551 0.82193 53.5 0.82193Z"
              fill="black"
              stroke="black"
              stroke-width="1.64384"
            />
            <path
              d="M50.0672 19.256C48.0855 15.8607 45.3976 13.1727 42.0026 11.1912C38.6071 9.20969 34.9002 8.21918 30.8793 8.21918C26.8589 8.21918 23.1508 9.21 19.756 11.1912C16.3607 13.1726 13.6729 15.8607 11.6912 19.256C9.7099 22.6512 8.71918 26.3588 8.71918 30.3787C8.71918 35.2075 10.128 39.5496 12.9463 43.4063C15.7644 47.2633 19.4048 49.9321 23.8675 51.4132C24.3869 51.5096 24.7715 51.4418 25.0215 51.2115C25.2716 50.9808 25.3966 50.692 25.3966 50.3462C25.3966 50.2885 25.3916 49.7693 25.382 48.7881C25.3721 47.8069 25.3674 46.9509 25.3674 46.2205L24.7038 46.3353C24.2806 46.4128 23.7468 46.4457 23.1023 46.4364C22.4582 46.4274 21.7894 46.3599 21.097 46.2343C20.4044 46.1099 19.7601 45.8214 19.1637 45.3693C18.5676 44.9173 18.1445 44.3256 17.8944 43.5951L17.6058 42.9311C17.4135 42.489 17.1107 41.998 16.6971 41.4597C16.2834 40.921 15.8651 40.5557 15.442 40.3634L15.2399 40.2188C15.1053 40.1227 14.9804 40.0067 14.8649 39.8722C14.7495 39.7377 14.6631 39.6031 14.6054 39.4683C14.5476 39.3334 14.5955 39.2227 14.7496 39.1359C14.9037 39.0491 15.1822 39.0069 15.5864 39.0069L16.1633 39.0931C16.548 39.1702 17.0239 39.4006 17.5916 39.7855C18.1589 40.1702 18.6253 40.6702 18.9909 41.2855C19.4335 42.0744 19.9669 42.6755 20.5923 43.0892C21.2173 43.5028 21.8474 43.7093 22.4821 43.7093C23.1168 43.7093 23.6649 43.6612 24.1268 43.5655C24.5882 43.4693 25.021 43.3246 25.4252 43.1324C25.5983 41.8431 26.0696 40.8525 26.8388 40.1602C25.7425 40.0449 24.7568 39.8714 23.8813 39.6407C23.0063 39.4097 22.1021 39.0347 21.1693 38.5149C20.236 37.9957 19.4617 37.351 18.8464 36.5819C18.2309 35.8124 17.7258 34.8022 17.3317 33.5522C16.9375 32.3016 16.7403 30.8591 16.7403 29.2241C16.7403 26.8961 17.5003 24.915 19.02 23.2799C18.3081 21.5296 18.3753 19.5676 19.2218 17.394C19.7797 17.2206 20.607 17.3507 21.7033 17.7834C22.7998 18.2162 23.6027 18.587 24.1127 18.8944C24.6226 19.2018 25.0312 19.4622 25.339 19.6734C27.1284 19.1735 28.9749 18.9234 30.8791 18.9234C32.7833 18.9234 34.6303 19.1735 36.4197 19.6734L37.5161 18.9812C38.2659 18.5194 39.1513 18.0961 40.1702 17.7114C41.1897 17.3269 41.9693 17.2209 42.5082 17.3943C43.3735 19.568 43.4506 21.53 42.7385 23.2802C44.2581 24.9153 45.0184 26.8969 45.0184 29.2244C45.0184 30.8594 44.8205 32.3065 44.4269 33.5666C44.0327 34.827 43.5233 35.8362 42.8983 36.5964C42.2726 37.3565 41.4934 37.9961 40.5606 38.5152C39.6276 39.0346 38.7231 39.4096 37.8481 39.6406C36.9727 39.8716 35.987 40.0452 34.8907 40.1607C35.8906 41.026 36.3907 42.3918 36.3907 44.2576V50.3454C36.3907 50.6912 36.5109 50.9799 36.7517 51.2107C36.9921 51.441 37.3718 51.5088 37.8912 51.4123C42.3545 49.9314 45.995 47.2624 48.8129 43.4055C51.6305 39.5488 53.0398 35.2067 53.0398 30.3779C53.0388 26.3585 52.0476 22.6512 50.0672 19.256Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_30_7">
              <rect
                width="60"
                height="60"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 61 60"
          fill="none"
        >
          <g clip-path="url(#clip0_56_290)">
            <path
              d="M53.5 0.821777H8C1.64494 0.821777 1.32193 5.97357 1.32193 12.3286V47.6711C1.32193 54.0261 1.64494 59.1779 8 59.1779L53.5 60.4998C59.8551 60.4998 59.6781 54.0261 59.6781 47.6711V12.3286C59.6781 5.97357 59.8551 0.821777 53.5 0.821777Z"
              fill="#F7F7F7"
              stroke="black"
              stroke-width="1.64384"
            />
            <path
              d="M50.0672 19.2561C48.0855 15.8608 45.3976 13.1727 42.0026 11.1913C38.6071 9.20975 34.9002 8.21924 30.8793 8.21924C26.8589 8.21924 23.1508 9.21006 19.756 11.1913C16.3607 13.1726 13.6729 15.8608 11.6912 19.2561C9.7099 22.6513 8.71918 26.3589 8.71918 30.3788C8.71918 35.2075 10.128 39.5497 12.9463 43.4064C15.7644 47.2633 19.4048 49.9322 23.8675 51.4133C24.3869 51.5097 24.7715 51.4419 25.0215 51.2115C25.2716 50.9809 25.3966 50.6921 25.3966 50.3462C25.3966 50.2885 25.3916 49.7694 25.382 48.7882C25.3721 47.8069 25.3674 46.9509 25.3674 46.2206L24.7038 46.3354C24.2806 46.4129 23.7468 46.4457 23.1023 46.4364C22.4582 46.4274 21.7894 46.3599 21.097 46.2344C20.4044 46.11 19.7601 45.8215 19.1637 45.3694C18.5676 44.9173 18.1445 44.3256 17.8944 43.5951L17.6058 42.9312C17.4135 42.4891 17.1107 41.998 16.6971 41.4598C16.2834 40.921 15.8651 40.5558 15.442 40.3635L15.2399 40.2188C15.1053 40.1227 14.9804 40.0068 14.8649 39.8723C14.7495 39.7378 14.6631 39.6032 14.6054 39.4683C14.5476 39.3334 14.5955 39.2228 14.7496 39.1359C14.9037 39.0491 15.1822 39.007 15.5864 39.007L16.1633 39.0932C16.548 39.1703 17.0239 39.4006 17.5916 39.7856C18.1589 40.1702 18.6253 40.6703 18.9909 41.2856C19.4335 42.0744 19.9669 42.6756 20.5923 43.0892C21.2173 43.5029 21.8474 43.7093 22.4821 43.7093C23.1168 43.7093 23.6649 43.6612 24.1268 43.5655C24.5882 43.4693 25.021 43.3247 25.4252 43.1325C25.5983 41.8431 26.0696 40.8526 26.8388 40.1602C25.7425 40.045 24.7568 39.8715 23.8813 39.6408C23.0063 39.4097 22.1021 39.0348 21.1693 38.5149C20.236 37.9958 19.4617 37.3511 18.8464 36.582C18.2309 35.8125 17.7258 34.8023 17.3317 33.5522C16.9375 32.3017 16.7403 30.8591 16.7403 29.2241C16.7403 26.8961 17.5003 24.9151 19.02 23.2799C18.3081 21.5297 18.3753 19.5677 19.2218 17.394C19.7797 17.2207 20.607 17.3508 21.7033 17.7834C22.7998 18.2163 23.6027 18.5871 24.1127 18.8945C24.6226 19.2018 25.0312 19.4623 25.339 19.6735C27.1284 19.1735 28.9749 18.9235 30.8791 18.9235C32.7833 18.9235 34.6303 19.1735 36.4197 19.6735L37.5161 18.9813C38.2659 18.5195 39.1513 18.0962 40.1702 17.7115C41.1897 17.3269 41.9693 17.221 42.5082 17.3943C43.3735 19.5681 43.4506 21.53 42.7385 23.2802C44.2581 24.9154 45.0184 26.8969 45.0184 29.2244C45.0184 30.8594 44.8205 32.3065 44.4269 33.5667C44.0327 34.827 43.5233 35.8363 42.8983 36.5964C42.2726 37.3565 41.4934 37.9962 40.5606 38.5152C39.6276 39.0347 38.7231 39.4096 37.8481 39.6407C36.9727 39.8717 35.987 40.0453 34.8907 40.1607C35.8906 41.026 36.3907 42.3919 36.3907 44.2577V50.3454C36.3907 50.6913 36.5109 50.98 36.7517 51.2107C36.9921 51.441 37.3718 51.5089 37.8912 51.4123C42.3545 49.9315 45.995 47.2625 48.8129 43.4055C51.6305 39.5489 53.0398 35.2067 53.0398 30.378C53.0388 26.3586 52.0476 22.6513 50.0672 19.2561Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_56_290">
              <rect
                width="60"
                height="60"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </section>

      <!-- End of Child Container for Socials: LinkedIn and GitHub -->

      <!-- Start of Child Container for Light/Dark Mode -->
      <section class="flex justify-center items-center gap-x-1">
        <!-- Dark Mode Icon -->
        <svg
          v-if="!isDarkMode"
          @click="toggleDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 66 66"
          fill="none"
        >
          <path
            d="M54.3961 6.74864C53.9603 5.63933 52.396 5.63933 51.9602 6.74864L50.7946 9.71502C50.6616 10.0537 50.3945 10.3218 50.0571 10.4554L47.1015 11.6253C45.9962 12.0628 45.9962 13.6327 47.1015 14.0702L50.0571 15.2402C50.3945 15.3737 50.6616 15.6418 50.7946 15.9805L51.9602 18.9469C52.396 20.0562 53.9603 20.0562 54.3961 18.9469L55.5618 15.9805C55.6947 15.6418 55.9618 15.3737 56.2992 15.2402L59.2549 14.0702C60.3601 13.6327 60.3601 12.0628 59.2549 11.6253L56.2992 10.4554C55.9618 10.3218 55.6947 10.0537 55.5618 9.71502L54.3961 6.74864Z"
            fill="#1C274C"
          />
          <path
            d="M43.9222 22.5179C43.4861 21.4086 41.922 21.4086 41.486 22.5179L41.0611 23.5994C40.9281 23.9381 40.661 24.2062 40.3236 24.3398L39.2459 24.7663C38.1407 25.2038 38.1407 26.7737 39.2459 27.2113L40.3236 27.6378C40.661 27.7713 40.9281 28.0394 41.0611 28.3782L41.486 29.4597C41.922 30.569 43.4861 30.569 43.9222 29.4597L44.3471 28.3782C44.4801 28.0394 44.7471 27.7713 45.0846 27.6378L46.1622 27.2113C47.2675 26.7737 47.2675 25.2038 46.1622 24.7663L45.0846 24.3398C44.7471 24.2062 44.4801 23.9381 44.3471 23.5994L43.9222 22.5179Z"
            fill="#1C274C"
          />
          <path
            opacity="0.5"
            d="M33 60.0833C47.9576 60.0833 60.0833 47.9576 60.0833 33C60.0833 31.7468 58.2051 31.5397 57.557 32.6122C54.4741 37.7141 48.8749 41.125 42.4792 41.125C32.7565 41.125 24.875 33.2435 24.875 23.5208C24.875 17.125 28.2859 11.5258 33.3878 8.44288C34.4603 7.7948 34.2531 5.91666 33 5.91666C18.0423 5.91666 5.91666 18.0423 5.91666 33C5.91666 47.9576 18.0423 60.0833 33 60.0833Z"
            fill="#1C274C"
          />
        </svg>

        <!-- Light Mode Icon -->
        <svg
          v-else
          @click="toggleDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 66 66"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33 14.7208C22.9037 14.7208 14.7188 22.9057 14.7188 33.002C14.7188 43.0984 22.9037 51.2833 33 51.2833C43.0963 51.2833 51.2812 43.0984 51.2812 33.002C51.2812 22.9057 43.0963 14.7208 33 14.7208ZM33 49.252C24.0249 49.252 16.75 41.9761 16.75 33.002C16.75 24.028 24.0249 16.752 33 16.752C41.9751 16.752 49.25 24.028 49.25 33.002C49.25 41.9761 41.9751 49.252 33 49.252Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.4844 31.9844H54.3281C53.7665 31.9844 53.3125 32.4384 53.3125 33C53.3125 33.5616 53.7665 34.0156 54.3281 34.0156H64.4844C65.046 34.0156 65.5 33.5616 65.5 33C65.5 32.4384 65.046 31.9844 64.4844 31.9844Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.136 37.5388L8.21267 38.59C7.67032 38.7373 7.34837 39.2938 7.49462 39.8362C7.63986 40.3775 8.1954 40.6994 8.73876 40.5522L12.6621 39.501C13.2035 39.3558 13.5254 38.8012 13.3802 38.2569C13.2349 37.7155 12.6774 37.3936 12.136 37.5388Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50.5906 22.8437C50.8719 23.3302 51.4925 23.4968 51.979 23.2144L60.7743 18.1363C61.2608 17.857 61.4273 17.2355 61.145 16.75C60.8657 16.2635 60.2441 16.0969 59.7587 16.3793L50.9633 21.4574C50.4769 21.7387 50.3113 22.3573 50.5906 22.8437Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.637 47.364C18.2409 46.9669 17.5981 46.9689 17.2009 47.364L14.3288 50.2362C13.9316 50.6333 13.9327 51.2772 14.3298 51.6723C14.7259 52.0694 15.3677 52.0694 15.7649 51.6723L18.637 48.8001C19.0341 48.405 19.0341 47.7601 18.637 47.364Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.1562 15.4094C43.6427 15.6887 44.2633 15.5241 44.5446 15.0366L49.6227 6.24133C49.9041 5.75485 49.7375 5.13328 49.25 4.85399C48.7645 4.57266 48.145 4.73922 47.8637 5.22469L42.7866 14.022C42.5042 14.5085 42.6708 15.127 43.1562 15.4094Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.7431 52.6198C27.2028 52.4746 26.6462 52.7986 26.499 53.3379L25.4478 57.2612C25.3026 57.8046 25.6265 58.3601 26.1679 58.5054C26.7092 58.6526 27.2648 58.3307 27.41 57.7873L28.4612 53.864C28.6084 53.3247 28.2865 52.7671 27.7431 52.6198Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33 12.6875C33.5626 12.6875 34.0166 12.2335 34.0176 11.6719V1.51562C34.0176 0.953984 33.5637 0.5 33 0.5C32.4404 0.5 31.9864 0.953984 31.9854 1.51562L31.9864 11.6719C31.9864 12.2335 32.4404 12.6875 33 12.6875Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.502 53.3379C39.3588 52.7966 38.8023 52.4746 38.2579 52.6198C37.7166 52.7651 37.3966 53.3216 37.5398 53.864L38.591 57.7873C38.7373 58.3307 39.2948 58.6506 39.8372 58.5054C40.3795 58.3602 40.6994 57.8056 40.5532 57.2613L39.502 53.3379Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.4594 15.0356C21.7387 15.5221 22.3603 15.6887 22.8437 15.4084C23.3312 15.127 23.4988 14.5075 23.2175 14.02L18.1394 5.22469C17.8591 4.73922 17.2375 4.57266 16.75 4.85399C16.2655 5.13328 16.099 5.75485 16.3793 6.24032L21.4594 15.0356Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.8011 47.362C48.407 46.9669 47.7631 46.9669 47.365 47.362C46.9679 47.7591 46.9709 48.403 47.365 48.798L50.2372 51.6702C50.6353 52.0694 51.2782 52.0653 51.6743 51.6702C52.0714 51.2731 52.0714 50.6333 51.6733 50.2341L48.8011 47.362Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.22671 18.1363L14.0241 23.2124C14.5085 23.4937 15.1291 23.3272 15.4084 22.8437C15.6897 22.3562 15.5252 21.7367 15.0387 21.4554L6.24234 16.3773C5.75687 16.0949 5.13531 16.2625 4.85398 16.75C4.5757 17.2344 4.74125 17.855 5.22671 18.1363Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.3399 39.5L57.2633 40.5512C57.8066 40.6985 58.3622 40.3724 58.5074 39.8311C58.6537 39.2898 58.3327 38.7342 57.7894 38.589L53.866 37.5378C53.3267 37.3906 52.7681 37.7125 52.6219 38.2559C52.4756 38.7982 52.8006 39.3538 53.3399 39.5Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6875 33C12.6885 32.4363 12.2355 31.9844 11.6739 31.9823L1.51562 31.9844C0.955 31.9844 0.5 32.4363 0.5 33C0.501016 33.5596 0.955 34.0156 1.51664 34.0156L11.6739 34.0136C12.2335 34.0136 12.6885 33.5596 12.6875 33Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.866 28.4591L57.7894 27.408C58.3328 27.2627 58.6527 26.7041 58.5064 26.1618C58.3622 25.6225 57.8077 25.3005 57.2633 25.4458L53.3399 26.497C52.7986 26.6402 52.4767 27.1988 52.6219 27.7411C52.7651 28.2824 53.3247 28.6023 53.866 28.4591Z"
            fill="#394240"
          />
          <path
            d="M33 49.25C41.9746 49.25 49.25 41.9746 49.25 33C49.25 24.0254 41.9746 16.75 33 16.75C24.0254 16.75 16.75 24.0254 16.75 33C16.75 41.9746 24.0254 49.25 33 49.25Z"
            fill="#F9EBB2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4094 43.1562C15.1301 42.6687 14.5095 42.5012 14.0231 42.7815L5.22673 47.8616C4.74126 48.143 4.57266 48.7625 4.85399 49.25C5.13532 49.7344 5.75688 49.901 6.24235 49.6207L15.0377 44.5405C15.5221 44.2612 15.6907 43.6427 15.4094 43.1562Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.365 18.634C47.7601 19.0331 48.403 19.0291 48.8011 18.634L51.6733 15.7618C52.0714 15.3647 52.0694 14.7228 51.6712 14.3257C51.2772 13.9286 50.6343 13.9286 50.2372 14.3257L47.365 17.1979C46.9669 17.593 46.9689 18.2379 47.365 18.634Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.8437 50.5906C22.3573 50.3093 21.7387 50.4759 21.4574 50.9593L16.3793 59.7587C16.1 60.2431 16.2625 60.8637 16.75 61.145C17.2365 61.4223 17.857 61.2557 18.1383 60.7723L23.2144 51.9749C23.4948 51.4915 23.3312 50.8709 22.8437 50.5906Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.2589 13.3781C38.7982 13.5254 39.3537 13.1994 39.503 12.6601L40.5542 8.73671C40.6995 8.19335 40.3755 7.63577 39.8341 7.49257C39.2948 7.3453 38.7373 7.66725 38.592 8.21061L37.5409 12.134C37.3916 12.6733 37.7176 13.2308 38.2589 13.3781Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33 53.3125C32.4384 53.3105 31.9864 53.7645 31.9844 54.3261L31.9864 64.4864C31.9864 65.044 32.4363 65.5 33 65.5C33.5616 65.5 34.0156 65.044 34.0166 64.4844L34.0136 54.3261C34.0136 53.7665 33.5637 53.3125 33 53.3125Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.5 12.6601C26.6412 13.2014 27.2018 13.5233 27.7441 13.3781C28.2845 13.2349 28.6034 12.6763 28.4622 12.134L27.411 8.21061C27.2637 7.66725 26.7072 7.3453 26.1648 7.49257C25.6255 7.6378 25.3016 8.19233 25.4488 8.73671L26.5 12.6601Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.5406 50.9623C44.2613 50.4779 43.6438 50.3093 43.1563 50.5906C42.6698 50.8699 42.5052 51.4895 42.7835 51.977L47.8657 60.7723C48.145 61.2588 48.7625 61.4273 49.25 61.145C49.7365 60.8637 49.902 60.2421 49.6227 59.7566L44.5406 50.9623Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.1999 18.634C17.593 19.0351 18.2389 19.0311 18.636 18.634C19.0331 18.2409 19.0291 17.598 18.636 17.1979L15.7638 14.3257C15.3647 13.9286 14.7228 13.9306 14.3267 14.3277C13.9306 14.7228 13.9286 15.3647 14.3277 15.7618L17.1999 18.634Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.7753 47.8616L51.977 42.7856C51.4915 42.5063 50.873 42.6688 50.5927 43.1583C50.3103 43.6427 50.4789 44.2613 50.9623 44.5426L59.7617 49.6207C60.2462 49.9 60.8647 49.7375 61.146 49.25C61.4253 48.7625 61.2588 48.143 60.7753 47.8616Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6611 26.498L8.73673 25.4458C8.19236 25.3005 7.63681 25.6245 7.49259 26.1659C7.34634 26.7052 7.66626 27.2627 8.21064 27.41L12.134 28.4591C12.6733 28.6074 13.2319 28.2824 13.3781 27.7411C13.5254 27.2038 13.2004 26.6483 12.6611 26.498Z"
            fill="#394240"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33 20.8145C32.4384 20.8145 31.9844 21.2685 31.9844 21.8302C31.9844 22.3918 32.4384 22.8458 33 22.8458C38.6083 22.8458 43.1562 27.3927 43.1562 33.002C43.1562 33.5637 43.6102 34.0177 44.1719 34.0177C44.7335 34.0177 45.1875 33.5637 45.1875 33.002C45.1875 26.2715 39.7305 20.8145 33 20.8145Z"
            fill="#394240"
          />
        </svg>
      </section>
      <!-- End of Child Container for Light/Dark Mode -->
    </section>
    <!-- End of Section for Icons -->
  </section>
  <!-- End of Stagnant Frame -->
</template>

<script>
  // --- Import Application Dependencies ---
  import axios from 'axios'; // For API requests - tying both the backend and frontend using CORS

  // --- Import Reactive Dependencies ---
  import { ref, onMounted, onUnmounted } from 'vue'; // Import "ref" for reactive variables and "onMounted" for lifecycle hooks

  // --- Import Modular Dependencies ---
  import socket from '../../socket.js'; // To use WebSocket on the frontend

  export default {
    name: 'StagnantFrame', // Component Name
    // Setup Function
    setup() {
      // --- Reactive Variables (Defining Variables Prior to DOM) ---
      const isDarkMode = ref(false); // Reactive variable defining dark mode state
      const profileImageUrl = ref(''); // Reactive variable defining profile image URL

      // Toggle Dark Mode Function
      const toggleDarkMode = () => {
        // Setting isDarkMode to the opposite of its current value (true to false, false to true - initally set to false)
        isDarkMode.value = !isDarkMode.value;
        if (isDarkMode.value) {
          //if true
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          //if false
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      };

      // Function to fetch profile image from Cloudinary (backend)
      const fetchProfileImage = async () => {
        try {
          // Fetch photos from Cloudinary as defined in the backend
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/photos`,
            {
              withCredentials: true,
            }
          );
          console.log('Fetched photos:', response.data);

          // Find photo using array method "find ()"
          if (response.data && response.data.length > 0) {
            //const firstPhoto = response.data[22]; my first approach - but failed when photos changed order or were deleted/added
            const firstPhoto = response.data.find(
              (photo) => photo.name === 'Photo'
            );

            // Assign photo URL to a reactive variable as "profileImageUrl"
            profileImageUrl.value = firstPhoto.photoURL; // Reminder: photoURL is JSON instance from the loaded Cloudinary photo (gives us the photo URL)
            console.log('Profile image URL set to:', profileImageUrl.value);
          } else {
            console.warn('No photos available in the response.');
          }
        } catch (error) {
          console.error('Error fetching profile photo:', error);
        }
      };

      // --- Lifecycle Hooks: onMounted (tracks/changes what happens while defining variables are initialized) After DOM ---
      // Did it this way to let multiple functions run "onMounted" (allowing multiple functions to be called automatically after DOM loaded) simultaneously
      // Versus having (onMounted) for each function
      onMounted(() => {
        // 1. Handle Dark Mode Initialization

        // Check if dark mode is enabled in localStorage or system preferences
        if (
          localStorage.getItem('theme') === 'dark' ||
          (!localStorage.getItem('theme') &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          // execute
          isDarkMode.value = true;
          document.documentElement.classList.add('dark'); // Add the "dark" class to the <html> element
        } else {
          isDarkMode.value = false;
          document.documentElement.classList.remove('dark'); // Remove the "dark" class from the <html> element
        }

        // 2. Fetch Initial Profile Image (Just Calling the Function)
        fetchProfileImage();

        // 3. Setup/Initialize WebSocket to Update Photos on the Frontend

        // Listen for WebSocket events
        socket.on('photos-updated', () => {
          console.log('Photos updated via WebSocket!');
          fetchProfileImage(); // To broadcast update to clients - for the profile image fetched through the function
        });

        // Cleanup After Unmount - to avoid memory leaks and unexpected behavior in future
        onUnmounted(() => {
          socket.off('photos-updated', fetchProfileImage); // Removes the event listener on "fetchProfileImage" specifically
        });

        // Debugging WebSocket connection
        socket.on('connect', () => {
          console.log('Connected to WebSocket server');
        });

        socket.on('connect_error', (error) => {
          console.error('WebSocket connection error:', error);
        });

        socket.on('disconnect', () => {
          console.log('Disconnected from WebSocket server');
        });
      });
      // End of onMounted

      // Function to scroll to desired section
      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        console.log('Scrolling to section:', sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      console.log('Scroll to Section Function:', scrollToSection);
      // End of scrollToSection

      // Return everything that should be accessible in the template
      return {
        isDarkMode,
        scrollToSection,
        toggleDarkMode,
        profileImageUrl, // instead of "fetchProfileImage" due to it not affecting my template and I only need the image URL value
      };
      // End of Return
    },
    // End of Setup
  };
</script>

<style scoped>
  /* CSS STYLES */

  /* TEXT STYLING */

  /*Integral CF Font*/
  .h2 {
    font-family: 'Integral CF';
    font-weight: 800;
    font-size: 30px;
  }

  .subtitle {
    font-family: 'Integral CF';
    font-weight: 500;
    font-size: 21px;
  }

  /* Roboto Font */

  p,
  .robotospecial {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 23px;
  }

  /* TEXT STYLING */

  /* CONTAINER STYLING */

  /* Main/Parent Container For Stagnant Frame */
  .outer-container {
    display: flex;
    flex-direction: column; /* Arrange children in a column */
    align-items: center; /* Center children horizontally */
    text-align: center;
    gap: 30px; /* Space between elements */
    padding: 20px; /* Padding inside the container */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    overflow: hidden; /* Hide any content that overflows the container */
  }

  /* Stagnant Frame Gap Overall */
  .gap {
    gap: 10px;
  }
  /* Inner Frame Gap for Stagnant Frame Elements */
  .inner-gap {
    gap: 2px;
  }

  /* CONTAINER STYLING */

  /* MEDIA STYLING */

  /* Profile Photo */
  .profile-photo {
    border-radius: 50%; /* Keeps it a perfect circle */
    border: 3px solid #000; /* Black border */
    /*box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); /* Drop shadow */
    width: 19vw; /* Makes the width 50% of the viewport width */
    max-width: 200px; /* Shrinks the circle */
    height: auto; /* Maintains aspect ratio */
    margin: auto; /* Center the image */
  }

  /* MEDIA STYLING */
</style>
