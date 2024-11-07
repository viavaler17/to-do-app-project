
# Cook The World

This is a dynamic platform created for all culinary enthusiasts regardless of your level of cooking.The platform offers a wide range of recipes designed to inspire users. Cook the worlds provides a detailed explanation of all the required steps in preparation, so you don't need to worry about anything! Together with this webpage you will experience cooking as an enjoyable and creative process. 


## 🚀 About Us
We are two friends, Karolina and Valeria, with a shared passion for web design and front-end development. As beginners in the world of web design, we embarked on this journey to combine our love for cooking with our growing skills in web development. We're excited to represent our first developed project and we hope you enjoy our it as much as we enjoyed building it!


## Environment Variables

To run this project, we utilize Supabase as an external API for managing users and storing data.

Supabase Database Setup
User Authentication: Supabase handles user authentication, including sign-up, login, and logout functionalities. 

Recipes Table: This table stores all the recipe information, including the title, image URL, description, ingredients, preparation time, and more.

Favorites Table: This table links users to their favorite recipes. It’s connected to the user authentication system, allowing each user to have a personalized list of favorite recipes.


## Features

- User Authentication: Users can sign up, log in, and log out using their email and password.
- Recipe Search & Browse: Find recipes by title or browse by categories and tags.
- Favorites: Users can save their favorite recipes to easily edit them later, or remove them from the favourites.
- Add a recipe: Users can add a personal recipe with its title, ingredients, preparation time, image, category and more.
- Propositions: Suggestions for other recipes are dynamically displayed to help users discover new ideas.


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Compile and Hot-Reload for Development

```sh
npm run dev
```

