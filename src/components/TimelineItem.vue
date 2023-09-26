<template>
  <div class="lg:w-1/5 md:w-full">
    <li class="relative mb-6 sm:mb-0 group hover:bg-gray-100 md:mb-2 p-5">
      <div class="flex items-center pb-1">
        <div
          class="flex z-10 justify-center items-center w-6 h-6 group-hover:w-10 transition-all ease-out group-hover:h-10 bg-green-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
        >
          <div class="w-6 h-6 bg-buttonGreen rounded-full hover:w-10 hover:h-10"></div>
        </div>
      </div>
      <div class="mt-3 sm:pr-8">
        <h3
          class="text-lg font-bold text-gray-700 group-hover:text-2xl dark:text-white transition-all ease-out"
        >
          {{ timelineItem.title }}
        </h3>
        <p
          class="text-sm text-gray-500 group-hover:pt-2 dark:text-gray-400 transition-all ease-out"
        >
          {{ timelineItem.text }}
        </p>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  name: 'TimelineItem',
  props: ['timelineItem'],
};
</script>
<style lang=""></style>
