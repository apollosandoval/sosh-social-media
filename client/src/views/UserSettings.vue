// TODO: prepopulate form fields
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
            <v-form>
              <v-subheader>Visible</v-subheader>
              <!-- Profile Photo -->
              <v-text-field
                label="Profile Image"
                prepend-icon="add_a_photo"
              ></v-text-field>
              <!-- Name -->
              <v-text-field
                label="Name"
                prepend-icon="person"
              ></v-text-field>
              <v-divider></v-divider>
              <v-subheader>Basic Info</v-subheader>
              <!-- update email -->
              <v-text-field
                label="Email"
                value="default@aol.com"
                prepend-icon="mail"
              ></v-text-field>
              <!-- update bio -->
              <v-text-field
                label="Bio"
                prepend-icon="mode_edit"
              ></v-text-field>
              <!-- update location -->
              <v-text-field
                label="Location"
                prepend-icon="room"
              ></v-text-field>
              <!-- update or delete -->
            </v-form>
          </v-card-text>
          <!-- card actions -->
          <v-card-actions>
            <v-btn>Update</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
// TODO: Func: updateUserSettings()
<script>
export default {
  
}
</script>

