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
        <status-timeline :statuses="statuses" />
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
  computed: {
    statuses() {
      const { allIds, byId } = this.$store.state.statuses;
      const sortedStatuses = allIds.map( id => byId[id] ).sort( (a,b) => {
        return a.created_at - b.created_at;
      });
      return sortedStatuses;
    }
  },
}
</script>