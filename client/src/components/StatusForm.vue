<template>
  <v-card>
    <v-toolbar dark color="red lighten-2">
      <v-toolbar-title>Update Your Friends</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Post a new status..."
          prepend-icon="mode_edit"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary">Post</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  
}
</script>

