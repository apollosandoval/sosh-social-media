<template>
  <v-timeline>
    <template v-for="n in 5">
      <v-timeline-item
        :key="`timeline-${n}`"
        hide-dot
      >
        <v-card
          class="mx-auto"
          dark
          color="primary"
        >
          <!-- edit here to styling in body of card -->
          <v-card-text class="headline font-weight-light">
            This is a sample of text. It is useful for layout purposes but nothing else. Don't bother reading this, instead of programming I am writing filler.
          </v-card-text>
          <!-- edit here for styling in footer of card -->
          <v-card-actions>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-img
                  src="http://placehold.it/32x32"
                  class="elevation-6"
                ></v-img>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Name Surname</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </template>
  </v-timeline>
</template>

<script>
export default {
  
}
</script>

