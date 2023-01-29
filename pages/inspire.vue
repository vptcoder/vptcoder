<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <nuxt-content :document="page" />
      <ContentDoc />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  async asyncData({ $content }) {
    const page = await $content('test').fetch()

    return {
      page,
    }
  },
}
</script>
