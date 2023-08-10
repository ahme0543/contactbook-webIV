import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import ContactList from './components/ContactList.vue';
import ContactDetails from './components/ContactDetails.vue';
import NewContact from './components/NewContact.vue';
import EditContact from './components/EditContact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes : [
    {
      path: '/',
      name: 'ContactList',
      component: ContactList,
    },
    {
      path: '/contact/:id',
      name: 'ContactDetails',
      component: ContactDetails,
      props: true,
    },
    {
      path: '/new',
      name: 'NewContact',
      component: NewContact,
      props: true
    },
    {
      path: '/contact/edit/:id',
      name: 'EditContact',
      component: EditContact,
      props: true
    },
  ]
  });

createApp(App).use(router).mount('#app')
