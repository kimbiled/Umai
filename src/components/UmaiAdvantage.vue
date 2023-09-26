<template>
  <div
    class="bg-buttonGreen mx-4 my-10 rounded-2xl shadow-xl w-full lg:w-1/3 px-4 py-2 sm:px-8"
  >
    <div class="space-y-4 flex flex-col items-center ">
      <img
        :src="require('../assets/' + umaiAdvantage.img)"
        class="w-20 h-20 md:w-36 md:h-36 lg:float-right mt-8"
        alt=""
      />
      <h3
        class="text-white text-2xl font-nunitoSans font-extrabold md:text-xl lg:text-2xl font-semibold"
      >
        {{ umaiAdvantage.title }}
      </h3>
      <p
        class="text-white font-semibold text-center px-6 font-nunitoSans md:mb-6 text-sm lg:text-base md:text-base md:h-24 h-20"
      >
        {{ umaiAdvantage.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UmaiAdvantage',
  props: ['umaiAdvantage'],
};
</script>
