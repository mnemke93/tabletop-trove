<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="text-h5">Contact Us</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>
                
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
  
                <v-textarea
                  v-model="message"
                  :rules="messageRules"
                  label="Message"
                  required
                ></v-textarea>
  
                <v-btn
                  :disabled="!valid"
                  color="primary"
                  @click="submit"
                >
                  Send Message
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
    name: 'ContactPage',
    data() {
      return {
        valid: false,
        name: '',
        email: '',
        message: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 50) || 'Name must be less than 50 characters'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        messageRules: [
          v => !!v || 'Message is required',
          v => (v && v.length <= 500) || 'Message must be less than 500 characters'
        ]
      };
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          // Submit form logic here
          console.log('Form submitted:', this.name, this.email, this.message);
          // Reset form after submission
          this.reset();
        }
      },
      reset() {
        this.$refs.form.reset();
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  };
  </script>
  
  <style>
  /* Additional styles if needed */
  </style>
  