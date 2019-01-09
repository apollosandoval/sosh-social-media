<template>
  <v-container>
    <!-- Top Section: User's banner, profile picture, and name -->
    <v-layout row justify-center>
      <v-flex xs12 sm6 offset-s3>
        <user-profile-card />
      </v-flex>
    </v-layout>
    <!-- Bottom Section: Status Timeline -->
    <v-layout row justify-center>
      <v-flex xs12 sm8>
        <status-timeline />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StatusTimeline from '../components/StatusTimeline';
import UserProfileCard from '../components/UserProfileCard';

export default {
  components: {
    'status-timeline': StatusTimeline,
    'user-profile-card': UserProfileCard,
  },
  mounted() {
    this.$store.dispatch('getAllUsers');
    this.$store.dispatch('getAllStatuses');
  }
}
</script>