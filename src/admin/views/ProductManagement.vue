<template>
    <v-container>
      <h1>Product Management</h1>
  
      <!-- Product Management Table -->
      <v-card>
        <v-card-title>
          Products
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="addProduct">Add Product</v-btn>
        </v-card-title>
  
        <v-card-text>
          <v-data-table
            :headers="productHeaders"
            :items="products"
            :items-per-page="10"
            class="elevation-1"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn icon @click="editProduct(item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="deleteProduct(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ProductManagement',
    data() {
      return {
        productHeaders: [
          { title: 'Product Name', value: 'productName' },
          { title: 'Description', value: 'productDescription' },
          { title: 'Price', value: 'price' },
          { title: 'Quantity', value: 'quantity' },
          { title: 'Category ID', value: 'categoryID' },
          { title: 'Supplier ID', value: 'supplierID' },
          { title: 'Created At', value: 'createdAt' },
          { title: 'Updated At', value: 'updatedAt' },
          { title: 'Is Active', value: 'isActive' },
          { title: 'Actions', value: 'actions', sortable: false }
        ],
        products: [
          // Placeholder data - replace with real data
        ],
      };
    },
    methods: {
      addProduct() {
        // Logic to add product
      },
      editProduct() {
        // Logic to edit product
      },
      deleteProduct() {
        // Logic to delete product
      }
    }
  };
  </script>
  