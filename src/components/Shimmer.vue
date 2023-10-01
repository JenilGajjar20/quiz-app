<template>
  <div class="animate-pulse py-6 px-8 h-screen">
    <div class="">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div class="bg-gray-300 w-80 h-4 rounded-sm"></div>
        <div class="bg-gray-300 w-80 h-4 rounded-sm mt-2 sm:m-0"></div>
      </div>
      <div class="space-y-6 py-5">
        <div class="bg-gray-300 h-10 rounded-sm"></div>
        <ul class="space-y-4">
          <li
            v-for="(n, i) in 4"
            :key="i"
            class="bg-gray-300 w-80 h-4 rounded-sm mx-4"
          ></li>
        </ul>
        <div class="flex items-center justify-between">
          <div class="bg-gray-300 rounded h-8 w-24"></div>
          <div class="bg-gray-300 rounded h-8 w-24"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheShimmer",
};
</script>