"use client";

import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Filter, Search, Grid, List } from 'lucide-react';

const ProductList = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(new Set());

  // Dairy product data with HEMU brand theme
  const products = [
    {
      id: 1,
      name: "Fresh Whole Milk",
      price: 4.99,
      originalPrice: 5.99,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 324,
      category: "milk",
      badge: "Best Seller",
      description: "Farm-fresh whole milk, rich in calcium and vitamins"
    },
    {
      id: 2,
      name: "Aged Cheddar Cheese",
      price: 12.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 189,
      category: "cheese",
      badge: null,
      description: "Premium aged cheddar with rich, sharp flavor"
    },
    {
      id: 3,
      name: "Greek Style Yogurt",
      price: 6.99,
      originalPrice: 8.99,
      image: "https://media.istockphoto.com/id/1213827792/photo/bowl-of-blueberries-strawberry-and-yogurt-on-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vrs8uW5LRpJ22t_z_XuCFn7U4iMGnoB9MmCAg2DCacA=",
      rating: 4.7,
      reviews: 256,
      category: "yogurt",
      badge: "New",
      description: "Thick, creamy Greek yogurt packed with probiotics"
    },
    {
      id: 4,
      name: "Fresh Cream Butter",
      price: 8.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 142,
      category: "butter",
      badge: null,
      description: "Artisanal butter churned from fresh cream"
    },
    {
      id: 5,
      name: "Mozzarella Cheese Balls",
      price: 9.99,
      originalPrice: 12.99,
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 98,
      category: "cheese",
      badge: "Sale",
      description: "Fresh mozzarella balls in herb-infused brine"
    },
    {
      id: 6,
      name: "Heavy Whipping Cream",
      price: 5.99,
      originalPrice: null,
      image: "https://media.istockphoto.com/id/1740105871/photo/mayonnaise-texture.webp?a=1&b=1&s=612x612&w=0&k=20&c=2_2q59t3ZLNmtzstuclhpe7WGlvy5juMJA8Cm8_gC5o=",
      rating: 4.5,
      reviews: 167,
      category: "cream",
      badge: null,
      description: "Rich heavy cream perfect for cooking and baking"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'milk', name: 'Fresh Milk' },
    { id: 'cheese', name: 'Cheese' },
    { id: 'yogurt', name: 'Yogurt' },
    { id: 'butter', name: 'Butter' },
    { id: 'cream', name: 'Cream' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
            product.badge === 'Sale' ? 'bg-red-500' : 
            product.badge === 'New' ? 'bg-green-600' : 
            product.badge === 'Popular' ? 'bg-purple-500' :
            'bg-yellow-400 text-gray-800'
          }`}>
            {product.badge}
          </span>
        )}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-200"
        >
          <Heart
            className={`w-5 h-5 ${favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-green-600 to-yellow-400 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-yellow-400 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">HEMU Dairy</h1>
          <p className="text-xl opacity-90">Fresh, premium dairy products delivered to your doorstep</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search dairy products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-4">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-white rounded-lg border border-gray-300 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-green-600 hover:text-green-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🥛</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default ProductList;