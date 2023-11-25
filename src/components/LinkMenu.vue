<template>
  <v-app-bar app>
    <v-toolbar-title>Board Game Shop</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/shop">Shop</v-btn>
    <v-btn text to="/product">Product</v-btn>
    <v-btn text to="/register">Register</v-btn>
    <v-btn text to="/contact">Contact</v-btn>
    <v-btn text @click="loginDialog = true">Login</v-btn>
    <v-btn icon @click="cartDialog = true">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn text to="/admin">Admin</v-btn>
  </v-app-bar>

  <!-- Cart Dialog -->
  <v-dialog v-model="cartDialog" width="auto">
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        Shopping Cart
        <v-btn icon class="mt-n1" @click="cartDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <!-- Cart Table -->
        <v-data-table :headers="cartHeaders" :items="cartItems" class="elevation-1">
          <!-- Named Slots for Customizing Columns -->
          <template v-slot:[`item.thumbnail`]="{ item }">
            <v-img :src="item.thumbnail" height="50px"></v-img>
          </template>
          <template v-slot:[`item.total`]="{ item }">
            ${{ (item.quantity * item.price).toFixed(2) }}
          </template>
        </v-data-table>

        <!-- Total Price Placeholder -->
        <div class="text-right">
          <strong>Total:</strong> ${{ overallTotal.toFixed(2) }}
        </div>
      </v-card-text>

      <v-card-actions>
        <!-- Clear Cart Button -->
        <v-btn color="red" @click="clearCart">
          Clear Cart
        </v-btn>

        <!-- Spacer to push Checkout button to the right -->
        <v-spacer></v-spacer>

        <!-- Checkout Button -->
        <v-btn color="green" @click="proceedToCheckout">
          Proceed to Checkout
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Login Dialog -->
  <v-dialog v-model="loginDialog" max-width="500px">
    <v-card>
      <v-card-title class="text-h5 d-flex justify-space-between">
        Login
        <v-btn icon @click="closeLoginDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form ref="loginForm" v-model="validLogin" lazy-validation>
          <v-text-field
            v-model="loginEmail"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="loginPassword"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="submitLogin" :disabled="!validLogin">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LinkMenu',
  data() {
    return {
      cartDialog: false,
      cartHeaders: [
        { title: 'Thumbnail', value: 'thumbnail' },
        { title: 'Product', value: 'name' },
        { title: 'Quantity', value: 'quantity' },
        { title: 'Price', value: 'price' },
        { title: 'Total', value: 'total' }
      ],
      cartItems: [
        // Placeholder data structure
        { name: 'Product 1', quantity: 1, price: 10.00, thumbnail: 'https://via.placeholder.com/100' },
        { name: 'Product 2', quantity: 2, price: 20.00, thumbnail: 'https://via.placeholder.com/100' },
        // More items will be added dynamically from the API
      ],
      overallTotal: 50.00, // This will be calculated by the API

      loginDialog: false,
      validLogin: false,
      loginEmail: '',
      loginPassword: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters long'
      ]
    };
  },
  methods: {
    clearCart() {
      // Logic to clear the cart
      console.log('Clearing cart...');
      // Update cartItems or relevant data to reflect the cleared cart
    },
    proceedToCheckout() {
      // Logic to proceed to checkout
      console.log('Proceeding to checkout...');
      // This could involve routing to a different page or triggering checkout process
    },
    submitLogin() {
      if (this.$refs.loginForm.validate()) {
        // Login form submission logic here
        console.log('Login submitted:', this.loginEmail, this.loginPassword);
        // Handle login logic, possibly involving an API call
        this.loginDialog = false;
        this.resetLoginForm();
      }
    },
    resetLoginForm() {
      this.$refs.loginForm.reset();
      this.loginEmail = '';
      this.loginPassword = '';
    },
    closeLoginDialog() {
      this.loginDialog = false;
      this.resetLoginForm();
    },
  }
};
</script>