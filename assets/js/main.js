let app = new Vue({
  el: '#app',
  data: {
    social:[
      {
        name:'fab fa-facebook-f',
      },
      {
        name:'fab fa-instagram',
      },
      {
        name:'fab fa-twitter',
      },
      {
        name:'fab fa-youtube',
      }
    ],
    logo: {
      name:'assets/images/avada-food-logo.png',
    },
    navbar:[
      {
        text: 'Home',
      },
      {
        text: 'Replice',
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

  }
})
