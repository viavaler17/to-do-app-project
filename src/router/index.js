import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import BrowseRecipes from '@/views/BrowseRecipes.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import ProfileMain from '@/views/LoggedIn/ProfileMain.vue';
import Favourited from '@/views/LoggedIn/Favourited.vue';
import ShoppingList from '@/views/LoggedIn/ShoppingList.vue';
import ProfileDetails from '@/views/LoggedIn/ProfileDetails.vue';
import NotFound from '@/views/NotFound.vue';
import AddRecipe from '@/views/LoggedIn/AddRecipe.vue';
import AuthServicesView from '@/views/AuthServicesView.vue';
import RecipeDetail from '@/components/RecipeDetail.vue';
import SingularRecipe from '@/views/SingularRecipe.vue';


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/browserecipes', name: 'Browse Recipes', component: BrowseRecipes },
    { path: '/about', name: 'About', component: About},
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/login', name: 'Log in', component: Login },
    { path: '/signup', name: 'Sign up', component: SignUp },
    { path: '/profile', name: 'Profile', component: ProfileMain},
    { path: '/favourited', name: 'Favourited recipes', component: Favourited },
    { path: '/shippinglist', name: 'Shopping List', component: ShoppingList },
    { path: '/profiledetails', name: 'Profile details', component: ProfileDetails },
    { path: '/addrecipe', name: 'Add recipe', component: AddRecipe },
    { path: '/authservices', name: 'Auth Services', component: AuthServicesView },
    { path: '/:pathMatch(.*)*', name: 'Not Found', component: NotFound },
    { path: '/recipe/:id', name: 'RecipeDetail', component: () => import('@/components/RecipeDetail.vue'),},
    { path: '/recipe/:id', name: 'SingularRecipe', component: SingularRecipe },
    { path: '/:pathMatch(.*)*', name: 'Not Found', component: NotFound }
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
