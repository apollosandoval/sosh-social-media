<template>
  <v-card>
    <v-img
      src="https://via.placeholder.com/300"
      height="300px"
    ></v-img>
    <v-list two-line>
      <v-list-tile>
        <v-list-tile-action></v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{user.email}}</v-list-tile-title>
          <v-list-tile-sub-title>email</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action></v-list-tile-action>
      </v-list-tile>
      <v-divider inset />
      <v-list-tile>
        <v-list-tile-action></v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{user.location}}</v-list-tile-title>
          <v-list-tile-sub-title>location</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action></v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ['user_id'],
  computed: {
    user() {
      // console.log('props: ', this.user_id);
      // console.log('user: ', this.$store.getters.userById(this.user_id));
      return this.$store.getters.userById(this.user_id);
    }
  }
}
</script>

