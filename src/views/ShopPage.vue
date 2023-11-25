<template>
  <v-app>

    <v-container>
      
      <v-row class="search-toolbar">
        <v-col cols="12" md="6">
          <!-- Search Bar -->
          <v-text-field
            class="search-field"
            label="Search games"
            dense
            hide-details
            solo-inverted
            flat
            readonly>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <!-- Filters Dropdown -->
          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn text v-bind="props">Filters</v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-select :items="['Strategy', 'Adventure', 'Puzzle']" label="Genre" readonly></v-select>
              </v-list-item>
              <v-list-item>
                <v-range-slider label="Price Range" :value="[20, 80]" readonly></v-range-slider>
              </v-list-item>
              <!-- Additional filter options -->
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      
      <!-- Products Grid -->
      <v-row>
        <v-col cols="12" md="4" v-for="n in 6" :key="n">
          <v-card>
            <v-img src="https://placehold.co/600x400" height="200px"></v-img>
            <v-card-title>Game Title</v-card-title>
            <v-card-subtitle>Genre</v-card-subtitle>
            <v-card-text>$Price</v-card-text>
            <v-card-actions>
              <v-btn>Add to Cart</v-btn>
            <v-btn>View Details</v-btn>
            </v-card-actions>
            
          </v-card>
        </v-col>
      </v-row>

      <!-- Pagination -->
      <v-row>
        <v-pagination :length="10" circle readonly></v-pagination>
      </v-row>
    </v-container>

  </v-app>
</template>

  


  
<script>
export default {
  name: "ShopPage",
  // No data or methods for now
  
};
</script>

<style>
.app-bar {
  background-color: #795548; /* Earthy tone, reminiscent of board game tables */
  color: white;
}

.footer {
  background-color: #263238; /* Dark footer for contrast */
  color: white;
}

/* Additional custom styles */
</style>

<style scoped>
/* Styles specific to this component */
.shop-container {
  background: #f5f5f5; /* Light background for contrast */
  padding: 20px;
}

.v-card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Soft shadow for depth */
  transition: 0.3s; /* Smooth transition for hover effect */
}

.v-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.3); /* Enhanced shadow on hover */
}

.v-btn {
  background-color: #8bc34a; /* Vibrant button color */
  color: white;
}

.v-img {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.v-card-title, .v-card-subtitle {
  color: #424242; /* Dark text for readability */
}

.search-toolbar {
  background-color: #496edc; /* Light background for the toolbar area */
  padding: 10px 20px; /* Padding for spacing */
  margin-bottom: 20px; /* Margin to separate from product grid */
}

.search-field {
  width: 100%; /* Full width for better visibility */
}
</style>