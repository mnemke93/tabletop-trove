<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="text-h5">User Registration</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                
                <v-text-field
                  v-model="firstName"
                  :rules="nameRules"
                  label="First Name"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="lastName"
                  :rules="nameRules"
                  label="Last Name"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="passwordConfirm"
                  :rules="passwordConfirmRules"
                  label="Confirm Password"
                  type="password"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="phoneNumber"
                  label="Phone Number"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="userAddress"
                  label="User Address"
                  required
                ></v-text-field>
  
                <v-btn
                  :disabled="!valid"
                  color="primary"
                  @click="submit"
                >
                  Register
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'RegisterPage',
    data() {
      return {
        valid: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phoneNumber: '',
        userAddress: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 50) || 'Name must be less than 50 characters'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be at least 8 characters long'
        ],
        passwordConfirmRules: [
          v => !!v || 'Confirming password is required',
          v => v === this.password || 'Passwords must match'
        ]
      };
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          // Submit form logic here
          console.log('Form submitted:', this.firstName, this.lastName, this.email, this.phoneNumber, this.userAddress);
          // Reset form after submission or navigate to another page
          this.reset();
        }
      },
      reset() {
        this.$refs.form.reset();
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
        this.phoneNumber = '';
        this.userAddress = '';
      }
    }
  };
  </script>
  