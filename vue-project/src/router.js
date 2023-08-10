import { createRouter, createWebHistory } from 'vue-router';
import ContactList from './components/ContactList.vue';
import ContactDetails from './components/ContactDetails.vue';
import NewContact from './components/NewContact.vue';
import EditContact from './components/EditContact.vue';

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList,
  },
  {
    path: '/contact/:id',
    name: 'ContactDetails',
    component: ContactDetails,
  },
  {
    path: '/new',
    name: 'NewContact',
    component: NewContact,
  },
  {
    path: '/edit/:id',
    name: 'EditContact',
    component: EditContact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
