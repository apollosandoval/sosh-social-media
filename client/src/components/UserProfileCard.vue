<template>
  <v-card>
    <v-img
      :src="user.profilePhotoURL"
      height="300px"
    ></v-img>
    <v-list two-line>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{user.email}}</v-list-tile-title>
          <v-list-tile-sub-title>Email</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action></v-list-tile-action>
      </v-list-tile>
      <v-divider inset />
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>room</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{user.location}}</v-list-tile-title>
          <v-list-tile-sub-title>Location</v-list-tile-sub-title>
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
      return this.$store.getters.userById(this.user_id);
    }
  }
}
</script>

