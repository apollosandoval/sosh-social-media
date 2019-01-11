<template>

  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card dark color="error">
          <v-card-text headline>404 NOT FOUND</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  beforeRouteEnter( to, from, next) {
    next(vm => {
      if (vm.$store.state.auth.loggedIn === false) {
        vm.$router.push({path: '/login'})
      }
    })
  },
}
</script>
