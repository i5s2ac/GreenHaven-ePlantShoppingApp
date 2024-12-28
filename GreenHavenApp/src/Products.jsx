import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice'; 
import './Products.css';

function Products() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems || []);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant)); 
  };

  const isProductInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  const PlantsArray = [
    {
      category: 'Flowering Plants',
      plants: [
        {
          id: 1,
          name: 'Rose',
          image: 'https://mygreenleaf.ae/wp-content/uploads/2024/01/rose-pink.jpg',
          description: 'Roses are popular flowering plants known for their beauty and fragrance.',
          cost: '$15',
        },
        {
          id: 2,
          name: 'Lily',
          image: 'https://www.extension.iastate.edu/news/files/eo-news/images/asiaticlilies_adobestock_225777932.jpg',
          description: 'Lilies are elegant flowers that bloom in various colors, often with a strong fragrance.',
          cost: '$10',
        },
        {
          id: 3,
          name: 'Daisy',
          image: 'https://www.marthastewart.com/thmb/N45IMBN5XFcg6PU46sGlExt40xo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grow-care-for-daisies-shasta-getty-0523-576e82dd808e49f4ba4fd645e1945b1d.jpg',
          description: 'Daisies are cheerful, white flowers with yellow centers, perfect for gardens and bouquets.',
          cost: '$8',
        },
      ],
    },
    {
      category: 'Ferns',
      plants: [
        {
          id: 4,
          name: 'Boston Fern',
          image: 'https://www.michlers.com/cdn/shop/products/Boston_Fern_Plant.jpg?v=1560803842&width=2048',
          description: 'A popular indoor fern with arching fronds, often used in hanging baskets.',
          cost: '$12',
        },
        {
          id: 5,
          name: 'Maidenhair Fern',
          image: 'https://sparrowhawknativeplants.com/cdn/shop/products/Untitleddesign_5_720x.png?v=1621910711',
          description: 'A delicate fern with light green, fan-shaped leaves, often used for its elegant appearance.',
          cost: '$18',
        },
        {
          id: 6,
          name: 'Staghorn Fern',
          image: 'https://static.themarthablog.com/2018/03/DSC_4384.jpg',
          description: 'Known for its unique, antler-shaped fronds, staghorn ferns are often mounted on boards.',
          cost: '$25',
        },
      ],
    },
    {
      category: 'Succulents',
      plants: [
        {
          id: 7,
          name: 'Aloe Vera',
          image: 'https://www.kew.org/sites/default/files/styles/original/public/2020-04/Aloe_Vera.jpg.webp?itok=nuAtuuf1',
          description: 'Aloe Vera is a succulent plant known for its soothing gel, which is used for skin care.',
          cost: '$7',
        },
        {
          id: 8,
          name: 'Echeveria',
          image: 'https://c02.purpledshub.com/uploads/sites/40/2023/08/MG_0462-Mixed-succulents_preview-scaled.jpg?w=970&webp=1',
          description: 'Echeveria is a rosette-shaped succulent that comes in a variety of colors and is easy to grow.',
          cost: '$5',
        },
        {
          id: 9,
          name: 'Cactus',
          image: 'https://cdn.shopify.com/s/files/1/0574/8736/0174/files/Cactus-in-different-pots.jpg?v=1627434856',
          description: 'Cacti are hardy succulents, often characterized by their spines and ability to survive in dry conditions.',
          cost: '$10',
        },
      ],
    },
  ];

  return (
    <div className="products-container">
      {PlantsArray.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category-container">
          <h2>{category.category}</h2>
          <div className="product-cards">
            {category.plants.map((plant, plantIndex) => (
              <div key={plantIndex} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-thumbnail" />
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <p className="product-price">{plant.cost}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isProductInCart(plant.id)} 
                >
                  {isProductInCart(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
