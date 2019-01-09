<template>

  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm6>
        <!-- Insert New Status Form -->
        <new-status-form />
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12 sm8>
        <status-timeline />
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import StatusForm from '../components/StatusForm';
import StatusTimeline from '../components/StatusTimeline';

export default {
  components: {
    'status-timeline': StatusTimeline,
    'new-status-form': StatusForm,
  },
  mounted() {
    this.$store.dispatch('getAllUsers');
    this.$store.dispatch('getAllStatuses');
  },
}
</script>