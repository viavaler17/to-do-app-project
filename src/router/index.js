import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import BrowseRecipes from '@/views/BrowseRecipes.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import ProfileMain from '@/views/LoggedIn/ProfileMain.vue';
import Favorited from '@/views/LoggedIn/Favorited.vue';
import ProfileDetails from '@/views/LoggedIn/ProfileDetails.vue';
import NotFound from '@/views/NotFound.vue';
import AddRecipe from '@/views/LoggedIn/AddRecipe.vue';
import SingularRecipe from '@/views/SingularRecipe.vue';
import SignUpByValeria from '@/views/SignUpByValeria.vue';
import AddedRecipes from '@/views/LoggedIn/AddedRecipes.vue';
import EditAddedRecipe from '@/views/LoggedIn/EditAddedRecipe.vue';
import Signup from '@/views/Signup.vue';


const routes = [
    { path: '/', name: 'Home', component: Home }, // set a homepage as a default page
    { path: '/home', redirect: '/' }, //when a user wants to click on home in bnavbar, it will redirect him back
    { path: '/browserecipes', name: 'BrowseRecipes', component: BrowseRecipes },
    { path: '/about', name: 'About', component: About},
    { path: '/login', name: 'Log in', component: Login },
    { path: '/profile', name: 'Profile', component: ProfileMain},
    { path: '/favorited', name: 'Favorited', component: Favorited },
    { path: '/profiledetails', name: 'Profile details', component: ProfileDetails },
    { path: '/addrecipe', name: 'Add recipe', component: AddRecipe },
    { path: '/addedrecipes', name: 'AddedRecipes', component: AddedRecipes },
    { path: '/recipe/:id', name: 'SingularRecipe', component: SingularRecipe },
    { path: '/:pathMatch(.*)*', name: 'Not Found', component: NotFound },
    { path: '/edit/:id', name: 'EditAddedRecipe', component: EditAddedRecipe },
    { path: '/signupbyvaleria', name: 'Sign Up By Valeria', component: SignUpByValeria },
    { path: '/signup', name: 'Sign up', component: Signup },
    
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
