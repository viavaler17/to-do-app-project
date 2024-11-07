
<script setup>
import Propositions from '@/components/Propositions.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/services/supabase';

const router = useRouter();
const searchQuery = ref('');

async function searchRecipe() {
  const recipeTitle = searchQuery.value.trim();
  
  if (recipeTitle) {
    const { data, error } = await supabase
      .from('recipes')
      .select('id')
      .ilike('title', recipeTitle); 

    if (error) {
      console.error('Search error:', error);
      return;
    }

    if (data && data.length > 0) {
      const recipeId = data[0].id;
      router.push({ name: 'SingularRecipe', params: { id: recipeId } });
    } else {
      alert('No recipe found with that title');
      router.push('/browserecipes');
    }
  } else {
    alert('Please enter a search term');
  }
}

</script>

<template> 
  <div class="main-container">

    <header class="welcome"> 
      <h1>Cook the World</h1> 
      <h2>Recipes made</h2> 
      <h1>easy!</h1> 
      <p class="title">"Cook the world"</p> 
      <p class="description"> 
        is a dynamic platform for culinary enthusiasts, providing a wide range of recipes for all skill levels. It encourages users to explore international cuisines, turning meals into exciting cultural adventures. 
      </p> 

      <h2 class="welcome">Discover New Recipes Every Day!</h2>
      <p class="description">Join our community and explore culinary adventures from around the world.</p>
    </header> 
 
    <div class="search-bar"> 
      <input type="text" v-model="searchQuery"  
        placeholder="Type your recipe's title here..." /> 
      <img  
        src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png"  
        alt="search icon"  
        @click="searchRecipe"/> 
    </div> 
    <Propositions /> 
  </div> 
</template> 
 
<style scoped> 

/* Main container with background image */
.main-container { 
  position: relative; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  min-height: calc(100vh - 100px);  
  width: 100%;  
  padding: 20px; 
  text-align: center; 
  color: #fff;  
  background: url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center/cover no-repeat fixed; 
  background-size: cover;
} 
 
/* Overlay effect for contrast */
.main-container::before { 
  content: ""; 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 0; 
}

.welcome, 
.search-bar, 
.propositions { 
  position: relative; 
  z-index: 1; 
} 

.welcome { 
  margin-bottom: 40px; 
}

.welcome h1 { 
  font-size: 3rem; 
  color: #FFEB3B; 
  margin: 20px; 
  font-weight: 700;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}

.welcome h2 { 
  font-size: 1.8rem; 
  color: #FFEB3B; 
  margin: 10px 0; 
  font-weight: 600; 
  letter-spacing: 2px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}

.welcome .title {
  font-size: 1.2rem;
  font-style: italic;
  color: #F8F8F8; 
  margin-top: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.welcome .description { 
  font-size: 1.1rem; 
  color: #F1F1F1; 
  line-height: 1.7;
  font-weight: 300;
  max-width: 600px;
  margin: 20px auto;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.search-bar { 
  display: flex; 
  align-items: center; 
  background-color: rgba(255, 255, 255, 0.8); 
  border-radius: 30px; 
  padding: 12px 20px; 
  width: 100%; 
  max-width: 600px; 
  margin-bottom: 40px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.search-bar:hover {
  transform: scale(1.02);
}

.search-bar input { 
  flex: 1; 
  padding: 10px 15px; 
  border: none; 
  outline: none; 
  font-size: 1rem; 
  background: transparent; 
  color: #333; 
  font-weight: 500;
  border-radius: 25px;
}

.search-bar input::placeholder {
  color: #888;
}

.search-bar img { 
  width: 28px; 
  height: 28px; 
  margin-left: 12px; 
  cursor: pointer; 
  transition: transform 0.3s ease-in-out;
}

.search-bar img:hover {
  transform: scale(1.2);
}

.propositions { 
  width: 100%; 
  margin-top: 40px;
}

.propositions ul {
  list-style-type: none;
  padding: 0;
}

.propositions li {
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 12px;
}

.propositions li a {
  color: #FFEB3B;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.propositions li a:hover {
  color: #fff;
  text-decoration: underline;
}

.banner { 
  background: #fe7c70; /* Warm coral */
  padding: 20px 600px;
  text-align: center;
  box-shadow: 0px 10px 8px rgba(105, 104, 104, 0.1);
  z-index: 2;
}

.banner h2 {
  font-size: 1,5rem; 
  color: #FFEB3B; 
  margin: 20px; 
  font-weight: 700;
  text-shadow: 2px 9px 9px rgba(0, 0, 0, 0.3);
}

.banner p {
  font-size: 1.1rem; 
  color: #F1F1F1; 
  line-height: 1.7;
  font-weight: 300;
  max-width: 600px;
  margin: 20px auto;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
</style>



