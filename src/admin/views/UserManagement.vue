<template>
    <v-container>
        <h1>User Management</h1>

        <!-- User Management Table -->
        <v-card>
            <v-card-title>
                Users
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="addUser">Add User</v-btn>
            </v-card-title>

            <v-card-text>
                <v-data-table :headers="userHeaders" :items="users" :items-per-page="10" class="elevation-1">
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-btn icon @click="() => editUser(item)">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn icon @click="() => deleteUser(item)">
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
    name: 'UserManagement',
    data() {
        return {
            userHeaders: [
                { title: 'First Name', value: 'firstName' },
                { title: 'Last Name', value: 'lastName' },
                { title: 'Email', value: 'email' },
                { title: 'Phone Number', value: 'phoneNumber' },
                { title: 'Address', value: 'userAddress' },
                { title: 'Is Admin', value: 'isAdmin' },
                { title: 'Created At', value: 'createdAt' },
                { title: 'Updated At', value: 'updatedAt' },
                { title: 'Is Active', value: 'isActive' },
                { title: 'Actions', value: 'actions', sortable: false }
            ],
            users: [
                // Placeholder data - replace with real data
            ],
        };
    },
    methods: {
        addUser() {
            // Logic to add user
        },
        editUser() {
            // Logic to edit user
        },
        deleteUser() {
            // Logic to delete user
        }
    }
};
</script>
  