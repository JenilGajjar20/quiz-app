<template>
  <nav class="py-5 border-b border-gray-500">
    <div class="flex items-center justify-around">
      <h4 class="text-lg lg:text-2xl font-semibold">Question Bank</h4>
      <p class="lg:text-xl">
        Counter -
        <span class="font-medium">{{ correctAnswers }}/{{ total }}</span>
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  props: ["correctAnswers", "total"],
};
</script>
