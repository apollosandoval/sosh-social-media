<template>
  <v-container>
    <v-layout>
      <!-- insert search-bar component here -->
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line>
            <template v-for="n in 4">
              <v-list-tile
                :key="n"
              >
                <v-list-avatar>

                </v-list-avatar>

                <v-list-content>
                  <v-list-tile-title>Name</v-list-tile-title>
                </v-list-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  
}
</script>

