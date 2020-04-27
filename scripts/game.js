class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.createLevel();
  }

  createLevel() {
    this.createWalls();
    this.createAisles();
    this.createCheckouts();
  }

  createWalls() {
    const walls = [];
    walls.push(
      this.createWall(
        0,
        0,
        'start-corner-wall',
        '/images/walls/Start Corner-Wall.png'
      )
    );

    walls.push(
      this.createWall(0, 150, 'entrance', '/images/walls/Entrance.png')
    );

    walls.push(
      this.createWall(
        0,
        300,
        'checkout-divider-entrance',
        '/images/walls/Checkout Divider Entrance.png'
      )
    );

    walls.push(
      this.createWall(
        0,
        675,
        'checkout-divider-3-4',
        '/images/walls/Checkout Divider 3-4.png'
      )
    );

    walls.push(
      this.createWall(
        0,
        975,
        'checkout-divider-3-2',
        '/images/walls/Checkout Divider 3-2.png'
      )
    );

    walls.push(
      this.createWall(
        0,
        1275,
        'checkout-divider-2-1',
        '/images/walls/Checkout DIvider 2-1.png'
      )
    );

    walls.push(
      this.createWall(
        0,
        2100,
        'wine-corner-left',
        '/images/walls/Wine Corner Left.png'
      )
    );

    walls.push(
      this.createWall(
        0,
        1575,
        'left-side-wall',
        '/images/walls/Left Side Wall.png'
      )
    );

    walls.push(
      this.createWall(
        300,
        2100,
        'wine-corner-right',
        '/images/walls/Wine Corner Right.png'
      )
    );

    walls.push(
      this.createWall(
        450,
        1050,
        'store-divider',
        '/images/walls/Store Divider.png'
      )
    );

    walls.push(
      this.createWall(
        1575,
        0,
        'top-right-corner-wall',
        '/images/walls/Top right corner wall.png'
      )
    );

    walls.push(
      this.createWall(
        1650,
        450,
        'fish-takeaway-divider',
        '/images/walls/Fish-TakeAway Divider.png'
      )
    );

    walls.push(
      this.createWall(
        1650,
        975,
        'takeaway-meat-divider',
        '/images/walls/TakeAway-Meat Divider.png'
      )
    );

    walls.push(
      this.createWall(
        1650,
        1650,
        'right-side-wall',
        '/images/walls/Right Side Wall.png'
      )
    );

    console.log(walls);
  }

  createAisles() {
    const aisles = [];

    //Aisle 1
    aisles.push(
      this.createWall(150, 0, 'premade-food', '/images/aisle1/Premade Food.png')
    );
    aisles.push(
      this.createWall(450, 0, 'vegetables', '/images/aisle1/Vegetables.png')
    );
    aisles.push(this.createWall(900, 0, 'bread', '/images/aisle1/Bread.png'));
    aisles.push(
      this.createWall(1125, 0, 'sweets', '/images/aisle1/Sweets.png')
    );

    //Aisle 2
    aisles.push(this.createWall(450, 225, 'fruit', '/images/aisle2/Fruit.png'));
    aisles.push(
      this.createWall(1100, 225, 'cakes', '/images/aisle2/Cakes.png')
    );
    aisles.push(
      this.createWall(1100, 300, 'biologic', '/images/aisle2/Biological.png')
    );

    //Aisle 3
    aisles.push(
      this.createWall(450, 450, 'cereal', '/images/aisle3/Cereal.png')
    );
    aisles.push(this.createWall(900, 450, 'tea', '/images/aisle3/Tea.png'));
    aisles.push(
      this.createWall(1125, 450, 'coffee', '/images/aisle3/Coffee.png')
    );

    //Aisle 4
    aisles.push(this.createWall(450, 525, 'flour', '/images/aisle4/Flour.png'));
    aisles.push(this.createWall(675, 525, 'sugar', '/images/aisle4/Sugar.png'));
    aisles.push(
      this.createWall(825, 525, 'chocolate', '/images/aisle4/Chocolate.png')
    );
    aisles.push(
      this.createWall(1125, 525, 'biscuits', '/images/aisle4/Biscuits.png')
    );

    //Aisle 5
    aisles.push(
      this.createWall(450, 750, 'sauces', '/images/aisle5/Sauces.png')
    );
    aisles.push(
      this.createWall(675, 750, 'sausages', '/images/aisle5/Sausages.png')
    );
    aisles.push(this.createWall(825, 750, 'tuna', '/images/aisle5/Tuna.png'));
    aisles.push(
      this.createWall(975, 750, 'olive-oil', '/images/aisle5/Olive Oil.png')
    );
    aisles.push(
      this.createWall(
        1050,
        750,
        'vegetable-oil',
        '/images/aisle5/Vegetable Oil.png'
      )
    );
    aisles.push(this.createWall(1125, 750, 'rice', '/images/aisle5/Rice.png'));
    aisles.push(
      this.createWall(1275, 750, 'pasta', '/images/aisle5/Pasta.png')
    );

    //Aisle 6
    aisles.push(this.createWall(450, 825, 'sour', '/images/aisle6/Sour.png'));
    aisles.push(this.createWall(675, 825, 'chips', '/images/aisle6/Chips.png'));
    aisles.push(
      this.createWall(975, 825, 'iced-tea', '/images/aisle6/Iced-Tea.png')
    );
    aisles.push(
      this.createWall(1125, 825, 'water', '/images/aisle6/Water.png')
    );

    //Aisle 7
    aisles.push(this.createWall(450, 975, 'beer', '/images/aisle7/Beer.png'));
    aisles.push(this.createWall(825, 975, 'soda', '/images/aisle7/Soda.png'));
    aisles.push(this.createWall(975, 975, 'coke', '/images/aisle7/Coke.png'));
    aisles.push(
      this.createWall(1200, 975, 'juice', '/images/aisle7/Juice.png')
    );

    //Aisle 8
    aisles.push(
      this.createWall(450, 1225, 'deodorant', '/images/aisle8/Deodorant.png')
    );
    aisles.push(
      this.createWall(750, 1125, 'shampoo', '/images/aisle8/Shampoo.png')
    );
    aisles.push(
      this.createWall(
        975,
        1125,
        'oral-hygiene',
        '/images/aisle8/Oral Hygiene.png'
      )
    );
    aisles.push(
      this.createWall(1200, 1125, 'intimate', '/images/aisle8/Intimate.png')
    );

    //Aisle 9
    aisles.push(
      this.createWall(450, 1350, 'tissues', '/images/aisle9/Tissues.png')
    );
    aisles.push(
      this.createWall(
        750,
        1350,
        'toilet-paper',
        '/images/aisle9/Toilet Paper.png'
      )
    );
    aisles.push(
      this.createWall(1200, 1350, 'diapers', '/images/aisle9/Diapers.png')
    );

    //Aisle 10
    aisles.push(
      this.createWall(
        450,
        1425,
        'clothes-detergent',
        '/images/aisle10/Clothes Detergent.png'
      )
    );
    aisles.push(
      this.createWall(825, 1425, 'bleach', '/images/aisle10/Bleach.png')
    );
    aisles.push(
      this.createWall(
        1200,
        1425,
        'dish-detergent',
        '/images/aisle10/Dish Detergent.png'
      )
    );

    //Aisle 11
    aisles.push(
      this.createWall(675, 1575, 'dog-food', '/images/aisle11/Dog food.png')
    );
    aisles.push(
      this.createWall(900, 1575, 'cat-food', '/images/aisle11/Cat Food.png')
    );
    aisles.push(
      this.createWall(
        1125,
        1575,
        'cleaning-products',
        '/images/aisle11/Cleaning Products.png'
      )
    );

    //Aisle 12
    aisles.push(
      this.createWall(
        675,
        1605,
        'home-products',
        '/images/aisle12/Home Products.png'
      )
    );

    //Aisle 13
    aisles.push(
      this.createWall(
        675,
        1800,
        'frozen-products',
        '/images/aisle13/Frozen Products.png'
      )
    );

    //Aisle 14
    aisles.push(this.createWall(675, 1875, 'ham', '/images/aisle14/Ham.png'));
    aisles.push(
      this.createWall(1050, 1875, 'cheese', '/images/aisle14/Cheese.png')
    );

    //Aisle 15
    aisles.push(
      this.createWall(375, 1800, 'dairy', '/images/aisle15/Dairy.png')
    );
    aisles.push(
      this.createWall(450, 2100, 'yogurt', '/images/aisle15/Yogurt.png')
    );
    aisles.push(
      this.createWall(900, 2100, 'dessert', '/images/aisle15/Dessert.png')
    );
    aisles.push(
      this.createWall(1275, 2100, 'butter', '/images/aisle15/Butter.png')
    );

    //Aisle 16
    aisles.push(
      this.createWall(300, 1800, 'wine-right', '/images/aisle16/Wine-2.png')
    );
    aisles.push(
      this.createWall(75, 1800, 'wine-left', '/images/aisle16/Wine-1.png')
    );
    aisles.push(
      this.createWall(150, 2100, 'wine-bottom', '/images/aisle16/Wine.png')
    );

    //Side
    aisles.push(this.createWall(1650, 150, 'fish', '/images/side/Fish.png'));
    aisles.push(
      this.createWall(1650, 525, 'take-away', '/images/side/Take-Away.png')
    );
    aisles.push(this.createWall(1650, 1200, 'meat', '/images/side/Meat.png'));
  }

  createCheckouts() {
    const checkouts = [];

    //Aisle 1
    checkouts.push(
      this.createWall(0, 450, 'checkout-1', '/images/checkouts/Checkout 1.png')
    );
    checkouts.push(
      this.createWall(0, 750, 'checkout-2', '/images/checkouts/Checkout 1.png')
    );
    checkouts.push(
      this.createWall(0, 1050, 'checkout-3', '/images/checkouts/Checkout 1.png')
    );
    checkouts.push(
      this.createWall(0, 1350, 'checkout-4', '/images/checkouts/Checkout 1.png')
    );
  }

  createWall(x, y, id, src) {
    let wall = new Obstacle(x, y, id, src, this);
    wall.initialize();
    return wall;
  }
}
