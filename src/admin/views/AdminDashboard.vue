<template>
  <v-container>
    <h1>Admin Dashboard</h1>
    
    <!-- UseCase Table -->
    <v-card>
      <v-card-title>
        User Activities
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="useCaseHeaders"
          :items="useCases"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      useCaseHeaders: [
        { title: 'User', value: 'user' },
        { title: 'Use Case', value: 'useCase' },
        { title: 'Timestamp', value: 'timestamp' }
      ],
      useCases: [
        // Placeholder data - replace with real data
        { user: 'User 1', useCase: 'Login', timestamp: '2023-04-01 10:00' },
        { user: 'User 2', useCase: 'View Product', timestamp: '2023-04-01 10:30' },
        // Add more use case data here
      ]
    };
  }
};
</script>
