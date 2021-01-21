let app = new Vue({
  el: '#app',
  data: {
    social:[
      {
        iconName:'fab fa-facebook-f',
      },
      {
        iconName:'fab fa-instagram',
      },
      {
        iconName:'fab fa-twitter',
      },
      {
        iconName:'fab fa-youtube',
      }
    ],
    logo: {
      name:'assets/images/avada-food-logo.png',
    },
    navbar:[
      {
        text: 'Recipes',
      },
      {
        text: 'Places',
      },
      {
        text: 'Blog',
      },
      {
        text: 'About',
      },
      {
        text: 'Contact',
      }
    ],
    banner:{
      title: 'Food Corner: Top Japanese Restaurants for Sushi',
      day: 'March 25,2019',
    },
    icons:[
      {
        name:'DRINKS',
        url: 'assets/images/icone/drinks-recipes.png',
      },
      {
        name:'SOUP',
        url: 'assets/images/icone/soups-recipes.png',
      },
      {
        name:'BAKERY',
        url: 'assets/images/icone/baking-recipes.png',
      },
      {
        name:'DINNER',
        url: 'assets/images/icone/dinner-recipes.png',
      },
      {
        name:'HEALTHY',
        url: 'assets/images/icone/healthy-recipes.png',
      },
      {
        name:'STAFF PICKS',
        url: 'assets/images/icone/staff-picks.png',
      },
      {
        name:'APPETISERS',
        url: 'assets/images/icone/premium-recipes.png',
      },
      {
        name:'QUICK & EASY',
        url: 'assets/images/icone/quick-easy-recipes.png',
      }
    ],
    popularRecipes:[
      {
        icon: 'fas fa-link',
        title:'Fruit Platter with Banana, Mango, Berries and Orange',
        url: 'assets/images/Mixed-fruits.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Breakfast Delight With Strawberry, Egg And Fruit',
        url: 'assets/images/r-rachel-park-366508-unsplash-min.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Ice Cream Heaven With Vanilla, Chocolate And Pistachio',
        url: 'assets/images/r-michelle-tsang-500721-unsplash-min.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Video Recipe: How to Make a Cool Summer Drink',
        url: 'assets/images/quick-summer-drink-460x295.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Ketogenic Diet Recipe with Avocado',
        url: 'assets/images/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Video Recipe: The Perfect Cosmopolitan',
        url: 'assets/images/perfect-cosmopolitan-460x295.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Summer Cheese Platter with Berrie, Crackers and Wine',
        url: 'assets/images/fi2x-6-460x295.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Strawberry Fruit Pies Served With Tea',
        url: 'assets/images/r-brooke-lark-96398-unsplash-min-460x295.jpg',
      },
    ],
    image:[
      {
        icon: 'fas fa-link',
        title:'Lunch Favourite with Salad, Naan And Beans',
        url: 'assets/images/Yogurt-Nan.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Fruit Platter with Banana, Mango, Berries and Orange',
        url: 'assets/images/Mixed-fruits.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Breakfast Delight With Strawberry, Egg And Fruit',
        url: 'assets/images/r-rachel-park-366508-unsplash-min.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Ice Cream Heaven With Vanilla, Chocolate And Pistachio',
        url: 'assets/images/r-michelle-tsang-500721-unsplash-min.jpg',
      },
    ],
    contact:[
      {
        type: 'location',
        iconName: 'fas fa-map-marker-alt',
        info:'775 New York Ave, Brooklyn, Kings, New York 11203',
      },
      {
        type: 'phone',
        iconName:'fas fa-phone',
        info:'+ 0100-505-0000',
      },
      {
        type: 'email',
        iconName:'fas fa-envelope',
        info:'info@your-domain.com',
      }
    ],
    get_app:[
      {
        type: 'Android',
        imageUrl:'assets/images/download-android.png',
      },
      {
        type:'Apple',
        imageUrl:'assets/images/download-app-store.png',
      }
    ],
    farmToTable:[
      {
        icon: 'fas fa-link',
        title:'Roundup: My New Favorite Recipes For Healthy Living',
        url: 'assets/images/fi-roundup.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Meal Prep: Korean Bibimbap with Kimchi',
        url: 'assets/images/fi-korean-food.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Why These Toasts with Tea are My New Favorite',
        url: 'assets/images/fi-toasts.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Exploring Street Food in Bangkok',
        url: 'assets/images/fi-street-food.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'Organic Choices For Healthier Living',
        url: 'assets/images/fi-organic-breakfast.jpg',
      },
      {
        icon: 'fas fa-link',
        title:'5 Waterside Restaurants in Istanbul for Special Events',
        url: 'assets/images/fi-water-side-rest.jpg',
      },

    ],

  }
})
