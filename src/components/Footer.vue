<template>
  <footer class="py-5 border-t border-gray-500">
    <div
      class="flex flex-col px-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <p class="mb-3 sm:m-0">Created with ❤</p>
      <p class="flex items-center">
        Connect with me:
        <span class="flex items-center space-x-2 ml-2">
          <a href="https://twitter.com/gajjar_jenil" target="_blank">
            <MdiTwitter class="text-xl text-cyan-500" />
          </a>
          <a href="https://github.com/JenilGajjar20" target="_blank">
            <MdiGithub class="text-xl text-gray-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/jenil-gajjar-27934920a/"
            target="_blank"
          >
            <MdiLinkedin class="text-xl text-blue-800" />
          </a>
        </span>
      </p>
    </div>
  </footer>
</template>

<script>
import MdiTwitter from "../icons/MdiTwitter.vue";
import MdiGithub from "../icons/MdiGithub.vue";
import MdiLinkedin from "../icons/MdiLinkedin.vue";

export default {
  name: "TheFooter",
  components: { MdiTwitter, MdiGithub, MdiLinkedin },
};
</script>
