<template>
  <v-container>
    <!-- Top Section: User's banner, profile picture, and name -->
    <v-layout row justify-center>
      <v-flex xs12 sm6 offset-s3>
        <user-profile-card user_id="5" v-if="Object.keys(statusesById).length > 0" />
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
  components: {
    'status-timeline': StatusTimeline,
    'user-profile-card': UserProfileCard,
  },
  mounted() {
    this.$store.dispatch('getAllUsers');
    this.$store.dispatch('getAllStatuses');
  },
  computed: {
    statusesById() {
      return this.$store.getters.statusesById(5);
    },
  }
}
</script>