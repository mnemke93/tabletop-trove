<template>
    <v-app>
  
      <v-main>
        <v-container>
          <v-row>
            <v-carousel>
            <!-- Main Banner -->
            <v-carousel-item v-for="item in banners" :key="item.src" :src="item.src"></v-carousel-item>
          </v-carousel>
          </v-row>
  
          <!-- Featured Board Games -->
          <v-row>
            <v-col v-for="game in featuredGames" :key="game.name" cols="12" sm="6" md="4">
              <v-card>
                <v-img src="https://placehold.co/600x400" height="200px"></v-img>
                <v-card-title>{{ game.name }}</v-card-title>
                <v-card-text>{{ game.description }}</v-card-text>
                <v-card-actions>
                  <v-btn text>Details</v-btn>
                  <v-btn color="primary">Buy</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
  
          <!-- Categories Section -->
          <!-- Similar to Featured Games section -->
          
        </v-container>
      </v-main>
  
      
    </v-app>
  </template>
  
  <script>
  export default {
    data: () => ({
      banners: [
        { src: 'https://placehold.co/600x400' },
        { src: 'https://placehold.co/600x400' },
        // ...
      ],
      featuredGames: [
        { name: 'Game 1', description: 'Description 1' },
        { name: 'Game 2', description: 'Description 2' },
        // ...
      ],
      // Categories data...
    }),
  };
  </script>