import React from 'react';
import { ShoppingBag, TrendingUp, TrendingDown } from 'lucide-react';

// Sample product data - would come from an API in a real app
const products = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 129.99,
    sales: 284,
    change: 12.4,
    stock: 43,
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    category: 'Accessories',
    price: 299.99,
    sales: 192,
    change: -4.2,
    stock: 18,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Leather Laptop Sleeve',
    category: 'Accessories',
    price: 49.99,
    sales: 165,
    change: 7.8,
    stock: 32,
    image: 'https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    price: 79.99,
    sales: 147,
    change: 5.3,
    stock: 27,
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    name: 'Wireless Charging Pad',
    category: 'Electronics',
    price: 39.99,
    sales: 132,
    change: -2.1,
    stock: 51,
    image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const TopProducts: React.FC = () => {
  return (
    <div className="card">
      <div className="p-4 sm:p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Top Products</h2>
          <button className="btn btn-outline text-sm">View All</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sales
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.category}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm text-gray-900 mr-2">{product.sales}</div>
                    <div className={`flex items-center text-xs px-1.5 py-0.5 rounded-full ${
                      product.change > 0 
                        ? 'text-green-800 bg-green-100' 
                        : 'text-red-800 bg-red-100'
                    }`}>
                      {product.change > 0 
                        ? <TrendingUp size={14} className="mr-1" /> 
                        : <TrendingDown size={14} className="mr-1" />
                      }
                      {Math.abs(product.change)}%
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.stock} units
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.stock > 30 
                      ? 'bg-green-100 text-green-800' 
                      : product.stock > 10 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock > 30 
                      ? 'In Stock' 
                      : product.stock > 10 
                        ? 'Low Stock'
                        : 'Critical'
                    }
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};