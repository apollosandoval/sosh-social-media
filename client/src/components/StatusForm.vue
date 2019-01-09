<template>
  <v-card>
    <v-toolbar dark color="red lighten-2">
      <v-toolbar-title>Update Your Friends</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="addStatus" >
        <v-text-field
          v-model="status"
          label="Post a new status..."
          prepend-icon="mode_edit"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="addStatus" color="primary">Post</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      'status': '',
    }
  },
  methods: {
    addStatus: function() {
      const { user_id } = this.$store.state.auth;
      const img_url = this.$store.state.users.byId[user_id].profilePhotoURL;

      this.$store.dispatch('postStatus', {
        'status': this.status,
        'user_id': user_id,
        'img_url': img_url,
      });
      this.status = '';
    }
  }
}
</script>

