<script setup>
import contacts from '../data.js'
</script>

<template>
  <div v-if="contact" class="contact-details">
    <h2>Contact Details</h2>
    <p>First Name: {{ contact.firstName }}</p>
    <p>Last Name: {{ contact.lastName }}</p>
    <p>Email: {{ contact.email }}</p>
    <router-link :to="'/contact/edit/' + id"><button>Edit Contact</button></router-link>
    <button @click='deleteContact'>Delete Contact</button>
    <router-link :to="'/'"><button>Go Home</button></router-link>
  </div>
  <div v-else>
    <p>Details of {{ id }}</p>
  </div>
</template>

<script>
export default {
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
  deleteContact() {
    

      localStorage.setItem('contacts', JSON.stringify(this.contacts.filter(contact => contact.id != this.id)))
      contacts.filter(contact => contact.id != this.id)
    
    },
  }    
}
</script>

<style scoped>
.contact-details {
  margin-top: 20px;
}

.contact-details h2 {
  margin-bottom: 10px;
}

.contact-details p {
  margin-bottom: 5px;
}

.contact-details button {
  margin-top: 10px;
}
</style>
