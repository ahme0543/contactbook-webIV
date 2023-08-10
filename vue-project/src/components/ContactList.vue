<script setup>
import contacts from '../data.js'
</script>

<template>
  <div>
    <h2>Contact List</h2>
    <div>
      <input type="text" v-model="search">
    </div>
    <ul>
      <li v-for="contact in orderedContacts" :key="contact.id">
        <router-link :to="'/contact/' + contact.id">{{ contact.firstName }} {{contact.lastName}}</router-link>
      </li>
    </ul>
    <router-link :to="'/new'"><button>New Contact</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  data: function() {
    return {
      contacts: [],
      search: ''
    }
  },

  
  computed: {
    orderedContacts: function() {
      const contacts = [...this.contacts];

      contacts.sort((a,b) => a.lastName.toLowerCase() > 
      b.lastName.toLowerCase() ? 1 : a.lastName.toLowerCase()
      < b.lastName.toLowerCase ? -1 : 0)

      return contacts
    },

    
  },

  
};
</script>
