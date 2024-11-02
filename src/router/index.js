import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import BrowseRecipes from '@/views/BrowseRecipes.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import ProfileMain from '@/views/LoggedIn/ProfileMain.vue';
import Favourited from '@/views/LoggedIn/Favourited.vue';
import ShoppingList from '@/views/LoggedIn/ShoppingList.vue';
import ProfileDetails from '@/views/LoggedIn/ProfileDetails.vue';
import NotFound from '@/views/NotFound.vue';
import AddRecipe from '@/views/LoggedIn/AddRecipe.vue';
import SingularRecipe from '@/views/SingularRecipe.vue';
import SignUpByValeria from '@/views/SignUpByValeria.vue';



const routes = [
    { path: '/home', name: 'Home', component: Home },
    { path: '/browserecipes', name: 'Browse Recipes', component: BrowseRecipes },
    { path: '/about', name: 'About', component: About},
    { path: '/login', name: 'Log in', component: Login },
    { path: '/profile', name: 'Profile', component: ProfileMain},
    { path: '/favourited', name: 'Favourited recipes', component: Favourited },
    { path: '/shippinglist', name: 'Shopping List', component: ShoppingList },
    { path: '/profiledetails', name: 'Profile details', component: ProfileDetails },
    { path: '/addrecipe', name: 'Add recipe', component: AddRecipe },
    { path: '/:pathMatch(.*)*', name: 'Not Found', component: NotFound },
    { path: '/recipe/:id', name: 'SingularRecipe', component: SingularRecipe },
    { path: '/:pathMatch(.*)*', name: 'Not Found', component: NotFound },
    { path: '/signupbyvaleria', name: 'Sign Up By Valeria', component: SignUpByValeria },
  ];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
  });

export default router
