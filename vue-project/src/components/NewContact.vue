<script setup>
import contacts from '../data.js'
</script>

<template>
  <div>
    <form @submit.prevent="createContact">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="newContact.firstName" required>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="newContact.lastName" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="newContact.email" required>
      <button type="submit">Create Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewContact',
  data() {
    return {
      newContact: {
        firstName: '',
        lastName: '',
        email: '',
        id: ''
      },
      contacts: []
    };
  },
  created() {
    const storedItems = localStorage.getItem('contacts')
    if (storedItems) {
      this.contacts = JSON.parse(storedItems)
      this.contact = JSON.parse(storedItems).find(item => item.id === this.id)
    }
  },

  methods: {
    createContact() {
      

      const newId = this.contacts.length
      this.contacts.push({...this.newContact, id: newId})

      console.log(this.contacts, newId)

      localStorage.setItem('contacts', JSON.stringify(this.contacts))
      setInterval( () => this.$router.push('/'), 300);
    },
  },
};
</script>
