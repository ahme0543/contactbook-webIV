<script setup>
import contacts from '../data.js'
</script>

<template>
  <div v-if="contact">
    <h2>Edit Contact</h2>
    <form @submit.prevent="updateContact">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="contact.firstName" required>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="contact.lastName" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="contact.email" required>
      <button type="submit">Update Contact</button>
    </form>
    <router-link :to="'/'"><button>Go Home</button></router-link>

  </div>
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script>
export default {
  name: 'EditContact',
  props: ['id'],
  data() {
    return {
      contact: null,
      contacts: []
    };
  },
  created() {
    const storedItems = localStorage.getItem('contacts')
    if (storedItems) {
      this.contacts = JSON.parse(storedItems)
      this.contact = JSON.parse(storedItems).find(item => item.id == this.id)
    }
  },

  methods: {
    updateContact() {
      localStorage.setItem('contacts', JSON.stringify(this.contacts.map(contact => contact.id == this.contact.id ? {...this.contact} : contact)))
    
    },
  }
}
</script>