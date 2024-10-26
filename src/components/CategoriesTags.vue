<script setup>
</script>

<template>
    <div class="categories-tags">
        <h3>Categories: </h3>
        <ul>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Dessert</li>
        </ul>    
    </div>

    <div class="categories-tags">
        <h3>Tags</h3>
        <div class="tags-p">
            <p>#highprotein</p>
            <p>#vege</p>
            <p>#under15min</p>     
        </div>
    </div>
</template>

<style scoped>
/* .categories-tags{
    margin: 20px;
    width: 200px;
}

.categories-tags ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}

h3{
    padding: 0 0 20px 0;
    font-weight: 800;
}

.tags-p{
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
}

.categories-tags p{
    border: solid 1px #B9D300;
    width: max-content;
    padding: 7px;
    border-radius: 15%;
} */

.categories-tags {
    padding: 20px; 
    background-color: #f9f9f9; 
}

.tags-p {
    display: flex; 
    flex-direction: column; 
    margin-top: 10px; 
}

.tags-p p {
    margin: 5px 0; 
    padding: 8px; 
    background-color: #e8dd8fd4; 
    border-radius: 4px; 
    transition: background-color 0.3s; 
}

.tags-p p:hover {
    background-color: #c0c0c0;
    cursor: pointer; 
}
</style>