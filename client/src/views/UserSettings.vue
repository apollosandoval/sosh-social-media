<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <!-- toolbar -->
          <v-toolbar dark color="primary">
            <v-toolbar-title>Settings</v-toolbar-title>
          </v-toolbar>
          <!-- user settings form -->
          <v-card-text>
            <v-form ref="form">
              <v-subheader>Visible</v-subheader>
              <!-- Profile Photo -->
              <v-text-field
                label="Profile Image"
                prepend-icon="add_a_photo"
                v-model="profilePhotoURL"
              ></v-text-field>
              <!-- Name -->
              <v-text-field
                label="Name"
                prepend-icon="person"
                v-model="name"
              ></v-text-field>
              <v-divider></v-divider>
              <v-subheader>Basic Info</v-subheader>
              <!-- update email -->
              <v-text-field
                label="Email"
                prepend-icon="mail"
                v-model="email"
              ></v-text-field>
              <!-- update bio -->
              <v-textarea
                clearable
                label="Bio"
                prepend-icon="mode_edit"
                v-model="bio"
              ></v-textarea>
              <!-- update location -->
              <v-text-field
                label="Location"
                prepend-icon="room"
                v-model="location"
              ></v-text-field>
              <!-- update or delete -->
              <v-btn @click="updateUserProfile">Update</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
// TODO: Func: updateUserSettings()
<script>
export default {
  data() {
    // TODO: Figure out how to bind data and prefill a form correctly, this is a mess.
    const { profilePhotoURL, name, email, bio, location} = this.$store.state.users.byId[1];
    return {
      profilePhotoURL: profilePhotoURL || '',
      name: name || '',
      email: email || '',
      bio: bio || '',
      location: location || '',
    }
  },
  methods: {
    updateUserProfile: function() {
      this.$store.dispatch('patchUserSettings', {
        profilePhotoURL: this.profilePhotoURL,
        name: this.name,
        email: this.email,
        bio: this.bio,
        location: this.location,
      })
    }
  },
  computed: {
    authUser() {
      let { auth, users } = this.$store.state;
      return users.byId[auth.user_id];
    }
  }
}
</script>

