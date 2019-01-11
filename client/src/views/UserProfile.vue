<template>
  <v-container>
    <!-- Top Section: User's banner, profile picture, and name -->
    <v-layout row justify-center>
      <v-flex xs12 sm6 offset-s3>
        <!-- TODO: figure out why async is creating a race condition -->
        <user-profile-card :user_id="userId" />
      </v-flex>
    </v-layout>
    <!-- Bottom Section: Status Timeline -->
    <v-layout row justify-center>
      <v-flex xs12 sm8>
        <status-timeline :statuses="statusesById"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StatusTimeline from '../components/StatusTimeline';
import UserProfileCard from '../components/UserProfileCard';

export default {
  beforeRouteEnter( to, from, next) {
    next(vm => {
      if (vm.$store.state.auth.loggedIn === false) {
        vm.$router.push({path: '/login'})
      }
    })
  },
  components: {
    'status-timeline': StatusTimeline,
    'user-profile-card': UserProfileCard,
  },
  computed: {
    statusesById() {
      return this.$store.getters.statusesById(Number(this.$route.params.id));
    },
    userId() {
      return Number(this.$route.params.id);
    }
  }
}
</script>