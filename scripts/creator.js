class Creator {
  constructor(game) {
    this.game = game;
  }

  createFloor() {
    this.floor = new Obstacle(0, 0, 'floor', '/images/Floor.png', this.game);
    this.floor.initialize();
  }

  createWalls() {
    this.walls = [];
    this.walls.push(
      this.createWall(
        0,
        0,
        'start-corner-wall',
        '/images/walls/Start Corner-Wall.png'
      )
    );

    this.walls.push(
      this.createWall(0, 150, 'entrance', '/images/walls/Entrance.png')
    );

    this.walls.push(
      this.createWall(
        0,
        300,
        'checkout-divider-entrance',
        '/images/walls/Checkout Divider Entrance.png'
      )
    );

    this.walls.push(
      this.createWall(
        0,
        675,
        'checkout-divider-3-4',
        '/images/walls/Checkout Divider 3-4.png'
      )
    );

    this.walls.push(
      this.createWall(
        0,
        975,
        'checkout-divider-3-2',
        '/images/walls/Checkout Divider 3-2.png'
      )
    );

    this.walls.push(
      this.createWall(
        0,
        1275,
        'checkout-divider-2-1',
        '/images/walls/Checkout DIvider 2-1.png'
      )
    );

    this.walls.push(
      this.createWall(
        0,
        2100,
        'wine-corner-left',
        '/images/walls/Wine Corner Left.png'
      )
    );

    this.walls.push(
      this.createWall(
        0,
        1575,
        'left-side-wall',
        '/images/walls/Left Side Wall.png'
      )
    );

    this.walls.push(
      this.createWall(
        300,
        2100,
        'wine-corner-right',
        '/images/walls/Wine Corner Right.png'
      )
    );

    this.walls.push(
      this.createWall(
        450,
        1050,
        'store-divider',
        '/images/walls/Store Divider.png'
      )
    );

    this.walls.push(
      this.createWall(
        1575,
        0,
        'top-right-corner-wall',
        '/images/walls/Top right corner wall.png'
      )
    );

    this.walls.push(
      this.createWall(
        1650,
        450,
        'fish-takeaway-divider',
        '/images/walls/Fish-TakeAway Divider.png'
      )
    );

    this.walls.push(
      this.createWall(
        1650,
        975,
        'takeaway-meat-divider',
        '/images/walls/TakeAway-Meat Divider.png'
      )
    );

    this.walls.push(
      this.createWall(
        1650,
        1650,
        'right-side-wall',
        '/images/walls/Right Side Wall.png'
      )
    );

    //console.log(walls);
  }

  createAisles() {
    this.aisles = [];

    //Aisle 1
    this.aisles.push(
      this.createWall(150, 0, 'Pizza', '/images/aisle1/Premade Food.png')
    );
    this.aisles.push(
      this.createWall(450, 0, 'Vegetables', '/images/aisle1/Vegetables.png')
    );
    this.aisles.push(
      this.createWall(900, 0, 'Bread', '/images/aisle1/Bread.png')
    );
    this.aisles.push(
      this.createWall(1125, 0, 'Sweets', '/images/aisle1/Sweets.png')
    );

    //Aisle 2
    this.aisles.push(
      this.createWall(450, 225, 'Fruit', '/images/aisle2/Fruit.png')
    );
    this.aisles.push(
      this.createWall(1125, 225, 'Cake', '/images/aisle2/Cakes.png')
    );
    this.aisles.push(
      this.createWall(1125, 300, 'Tofu', '/images/aisle2/Biological.png')
    );

    //Aisle 3
    this.aisles.push(
      this.createWall(450, 450, 'Cereal', '/images/aisle3/Cereal.png')
    );
    this.aisles.push(
      this.createWall(900, 450, 'Tea', '/images/aisle3/Tea.png')
    );
    this.aisles.push(
      this.createWall(1125, 450, 'Coffee', '/images/aisle3/Coffee.png')
    );

    //Aisle 4
    this.aisles.push(
      this.createWall(450, 525, 'Flour', '/images/aisle4/Flour.png')
    );
    this.aisles.push(
      this.createWall(675, 525, 'Sugar', '/images/aisle4/Sugar.png')
    );
    this.aisles.push(
      this.createWall(825, 525, 'Chocolate', '/images/aisle4/Chocolate.png')
    );
    this.aisles.push(
      this.createWall(1125, 525, 'Biscuits', '/images/aisle4/Biscuits.png')
    );

    //Aisle 5
    this.aisles.push(
      this.createWall(450, 750, 'Sauces', '/images/aisle5/Sauces.png')
    );
    this.aisles.push(
      this.createWall(675, 750, 'Sausages', '/images/aisle5/Sausages.png')
    );
    this.aisles.push(
      this.createWall(825, 750, 'Tuna', '/images/aisle5/Tuna.png')
    );
    this.aisles.push(
      this.createWall(975, 750, 'Olive oil', '/images/aisle5/Olive Oil.png')
    );
    this.aisles.push(
      this.createWall(
        1050,
        750,
        'Vegetable oil',
        '/images/aisle5/Vegetable Oil.png'
      )
    );
    this.aisles.push(
      this.createWall(1125, 750, 'Rice', '/images/aisle5/Rice.png')
    );
    this.aisles.push(
      this.createWall(1275, 750, 'Pasta', '/images/aisle5/Pasta.png')
    );

    //Aisle 6
    this.aisles.push(
      this.createWall(450, 825, 'Peanuts', '/images/aisle6/Sour.png')
    );
    this.aisles.push(
      this.createWall(675, 825, 'Chips', '/images/aisle6/Chips.png')
    );
    this.aisles.push(
      this.createWall(975, 825, 'Iced-tea', '/images/aisle6/Iced-Tea.png')
    );
    this.aisles.push(
      this.createWall(1125, 825, 'Water', '/images/aisle6/Water.png')
    );

    //Aisle 7
    this.aisles.push(
      this.createWall(450, 975, 'Beer', '/images/aisle7/Beer.png')
    );
    this.aisles.push(
      this.createWall(825, 975, 'Soda', '/images/aisle7/Soda.png')
    );
    this.aisles.push(
      this.createWall(975, 975, 'Coke', '/images/aisle7/Coke.png')
    );
    this.aisles.push(
      this.createWall(1200, 975, 'Juice', '/images/aisle7/Juice.png')
    );

    //Aisle 8
    this.aisles.push(
      this.createWall(450, 1125, 'Deodorant', '/images/aisle8/Deodorant.png')
    );
    this.aisles.push(
      this.createWall(750, 1125, 'Shampoo', '/images/aisle8/Shampoo.png')
    );
    this.aisles.push(
      this.createWall(
        975,
        1125,
        'Toothpaste',
        '/images/aisle8/Oral Hygiene.png'
      )
    );
    this.aisles.push(
      this.createWall(1200, 1125, 'Tampons', '/images/aisle8/Intimate.png')
    );

    //Aisle 9
    this.aisles.push(
      this.createWall(450, 1350, 'Tissues', '/images/aisle9/Tissues.png')
    );
    this.aisles.push(
      this.createWall(
        750,
        1350,
        'Toilet paper',
        '/images/aisle9/Toilet Paper.png'
      )
    );
    this.aisles.push(
      this.createWall(1200, 1350, 'Diapers', '/images/aisle9/Diapers.png')
    );

    //Aisle 10
    this.aisles.push(
      this.createWall(
        450,
        1425,
        'Clothes detergent',
        '/images/aisle10/Clothes Detergent.png'
      )
    );
    this.aisles.push(
      this.createWall(825, 1425, 'bleach', '/images/aisle10/Bleach.png')
    );
    this.aisles.push(
      this.createWall(
        1200,
        1425,
        'Dish detergent',
        '/images/aisle10/Dish Detergent.png'
      )
    );

    //Aisle 11
    this.aisles.push(
      this.createWall(675, 1575, 'Dog-food', '/images/aisle11/Dog food.png')
    );
    this.aisles.push(
      this.createWall(900, 1575, 'Cat-food', '/images/aisle11/Cat Food.png')
    );
    this.aisles.push(
      this.createWall(
        1125,
        1575,
        'Cleaning-products',
        '/images/aisle11/Cleaning Products.png'
      )
    );

    //Aisle 12
    this.aisles.push(
      this.createWall(
        675,
        1650,
        'Lightbulbs',
        '/images/aisle12/Home Products.png'
      )
    );

    //Aisle 13
    this.aisles.push(
      this.createWall(
        675,
        1800,
        'Frozen peas',
        '/images/aisle13/Frozen Products.png'
      )
    );

    //Aisle 14
    this.aisles.push(
      this.createWall(675, 1875, 'Ham', '/images/aisle14/Ham.png')
    );
    this.aisles.push(
      this.createWall(1050, 1875, 'Cheese', '/images/aisle14/Cheese.png')
    );

    //Aisle 15
    this.aisles.push(
      this.createWall(375, 1800, 'Dairy', '/images/aisle15/Dairy.png')
    );
    this.aisles.push(
      this.createWall(450, 2100, 'Yogurt', '/images/aisle15/Yogurt.png')
    );
    this.aisles.push(
      this.createWall(900, 2100, 'Dessert', '/images/aisle15/Dessert.png')
    );
    this.aisles.push(
      this.createWall(1275, 2100, 'Butter', '/images/aisle15/Butter.png')
    );

    //Aisle 16
    this.aisles.push(
      this.createWall(300, 1800, 'Red wine', '/images/aisle16/Wine.png')
    );
    this.aisles.push(
      this.createWall(75, 1800, 'White wine', '/images/aisle16/Wine-1.png')
    );
    this.aisles.push(
      this.createWall(150, 2100, 'Champagne', '/images/aisle16/Wine-2.png')
    );

    //Side
    this.aisles.push(
      this.createWall(1650, 150, 'Fish', '/images/side/Fish.png')
    );
    this.aisles.push(
      this.createWall(1650, 525, 'Take-away', '/images/side/Take-Away.png')
    );
    this.aisles.push(
      this.createWall(1650, 1200, 'Meat', '/images/side/Meat.png')
    );
  }

  createCheckouts() {
    this.checkouts = [];

    //Aisle 1
    this.checkouts.push(
      this.createWall(0, 510, 'checkout-1', '/images/checkouts/Checkout 1.png')
    );
    this.checkouts.push(
      this.createWall(0, 810, 'checkout-2', '/images/checkouts/Checkout 1.png')
    );
    this.checkouts.push(
      this.createWall(0, 1110, 'checkout-3', '/images/checkouts/Checkout 1.png')
    );
    this.checkouts.push(
      this.createWall(0, 1410, 'checkout-4', '/images/checkouts/Checkout 1.png')
    );
  }

  createWall(x, y, id, src) {
    let wall = new Obstacle(x, y, id, src, this.game);
    wall.initialize();
    return wall;
  }

  createEnemy(x, y, commandList) {
    let enemy = new Enemy(x + 300, y + 75, this.game, commandList);
    enemy.initialize();
    return enemy;
  }

  createEnemyList() {
    this.enemies = [];
    this.enemies.push(
      this.createEnemy(1125, 325, [
        '5-right',
        'stop',
        '3-down',
        '5-left',
        'stop',
        '3-left',
        'stop',
        '1-down',
        '8-left',
        'stop',
        '3-down',
        '5-right',
        'stop',
        '10-right',
        '4-down',
        '9-left',
        '1-down',
        'stop',
        '6-left',
        '12-up',
        '11-right',
        'stop',
      ])
    );
    this.enemies.push(
      this.createEnemy(450, 125, [
        '1-right',
        '1-up',
        'stop',
        '4-right',
        'stop',
        '2-down',
        '2-right',
        '1-up',
        '2-right',
        'stop',
        '1-up',
        '4-right',
        'stop',
        '4-down',
        '4-left',
        'stop',
        '7-left',
        'stop',
        '4-left',
        '3-up',
        '2-right',
        'stop',
      ])
    );
    this.enemies.push(
      this.createEnemy(450, 875, [
        '2-left',
        '3-up',
        '5-right',
        'stop',
        '6-right',
        'stop',
        '5-right',
        'stop',
        '11-down',
        'stop',
        '3-down',
        '8-left',
        'stop',
        '5-left',
        '3-up',
        'stop',
        '4-left',
        '8-up',
        '3-right',
        'stop',
      ])
    );
    this.enemies.push(
      this.createEnemy(1125, 575, [
        '1-down',
        '4-right',
        '3-down',
        '9-left',
        'stop',
        '6-left',
        '4-down',
        '5-right',
        'stop',
        '1-down',
        '9-right',
        'stop',
        '1-right',
        '8-up',
        '11-left',
        'stop',
        '1-up',
        '7-right',
        'stop',
      ])
    );
    this.enemies.push(
      this.createEnemy(150, 2000, [
        '4-up',
        '4-right',
        '4-down',
        '6-right',
        'stop',
        '9-right',
        'stop',
        '7-up',
        '4-left',
        'stop',
        '4-left',
        'stop',
        '5-left',
        '2-down',
        '6-left',
        '5-down',
        'stop',
      ])
    );
    this.enemies.push(
      this.createEnemy(1200, 1175, [
        '3-right',
        '10-down',
        '2-left',
        'stop',
        '1-down',
        '7-left',
        'stop',
        '4-left',
        '2-up',
        'stop',
        '5-up',
        'stop',
        '2-left',
        '3-up',
        '4-right',
        'stop',
        '1-up',
        '8-right',
        'stop',
      ])
    );
    this.enemies.push(
      this.createEnemy(1200, 1475, [
        '3-right',
        '3-down',
        '3-left',
        'stop',
        '4-left',
        'stop',
        '4-left',
        '3-up',
        'stop',
        '4-right',
        'stop',
        '4-right',
        'stop',
      ])
    );
    this.enemies.push(
      this.createEnemy(900, 50, [
        '8-right',
        'stop',
        '1-down',
        '1-right',
        '3-down',
        'stop',
        '5-down',
        'stop',
        '6-down',
        '4-left',
        'stop',
        '8-left',
        'stop',
        '4-left',
        '4-down',
        '6-right',
        'stop',
        '10-right',
        '8-up',
        '11-left',
        'stop',
        '5-left',
        '7-up',
        '4-right',
        'stop',
        '3-right',
        '4-up',
        'stop',
      ])
    );
  }

  createItemList(reDraw) {
    this.items = [];
    for (let i = 0; i < 5; i++) {
      let aisleList = this.aisles[
        Math.floor(Math.random() * this.aisles.length)
      ].id;
      this.items.push(this.createItems(aisleList, reDraw));
    }
  }

  createItems(id, reDraw) {
    let item = new Product(this.game, id);
    if (reDraw) {
      item.reDraw();
    }
    item.draw();
    return item;
  }

  createSprayPickup() {
    let positions = [
      [this.walls[11].x - 75, this.walls[11].y],
      [this.walls[12].x - 75, this.walls[12].y + 150],
      [this.walls[13].x - 75, this.walls[13].y + 300],
      [this.walls[7].x + 75, this.walls[7].y + 75],
      [this.walls[4].x + 225, this.walls[4].y],
    ];
    console.log(this.walls[11]);
    let randomPos = Math.floor(Math.random() * positions.length);
    this.sprayPickup = new Pickup(this.game, positions[randomPos]);
    this.sprayPickup.draw();
  }

  createHealthPickup() {
    let positions = [
      [this.walls[12].x - 75, this.walls[12].y],
      [this.walls[13].x - 75, this.walls[13].y + 75],
      [this.walls[3].x + 225, this.walls[3].y],
      [this.walls[5].x + 225, this.walls[5].y],
      [this.walls[10].x + 975, this.walls[10].y],
    ];
    console.log(this.walls[11]);
    let randomPos = Math.floor(Math.random() * positions.length);
    this.healthPickup = new Pickup(this.game, positions[randomPos]);
    this.healthPickup.draw();
  }
}
