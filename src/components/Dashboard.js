import React, { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dishes');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dishes, setDishes] = useState([
    { id: 1, title: 'Tasty Dish', price: '290.66', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400' },
    { id: 2, title: 'Delicious Meal', price: '190.06', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400' },
    { id: 3, title: 'Spicy Plate', price: '250.00', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
    { id: 4, title: 'Fresh Salad', price: '150.50', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
    { id: 5, title: 'Crispy Special', price: '320.00', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
  ]);
  
  const [editingDish, setEditingDish] = useState(null);
  const [formData, setFormData] = useState({ title: '', price: '', image: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddDish = () => {
    if (!formData.title || !formData.price || !formData.image) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    const newDish = {
      id: Date.now(),
      title: formData.title,
      price: formData.price,
      image: formData.image
    };
    setDishes([...dishes, newDish]);
    setFormData({ title: '', price: '', image: '' });
    alert('Plat ajouté avec succès !');
    setActiveTab('dishes');
  };

  const handleEditDish = (dish) => {
    setEditingDish(dish);
    setFormData({ title: dish.title, price: dish.price, image: dish.image });
    setActiveTab('edit');
  };

  const handleUpdateDish = () => {
    if (!formData.title || !formData.price || !formData.image) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    setDishes(dishes.map(dish => 
      dish.id === editingDish.id 
        ? { ...dish, title: formData.title, price: formData.price, image: formData.image }
        : dish
    ));
    setFormData({ title: '', price: '', image: '' });
    setEditingDish(null);
    alert('Plat modifié avec succès !');
    setActiveTab('manage');
  };

  const handleDeleteDish = (id) => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ce plat ?');
    if (confirmed) {
      setDishes(dishes.filter(dish => dish.id !== id));
      alert('Plat supprimé avec succès !');
    }
  };

  const DishCard = ({ dish, showActions = false }) => (
    <div className="bg-white p-5 shadow-lg rounded-lg">
      <img src={dish.image} alt={dish.title} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h3 className="font-semibold text-center text-xl mb-3">{dish.title}</h3>
      <div className="flex justify-center gap-1 mb-3">
        <span className="text-red-500 text-xl">★</span>
        <span className="text-red-500 text-xl">★</span>
        <span className="text-red-500 text-xl">★</span>
        <span className="text-red-500 text-xl">★</span>
        <span className="text-red-500 text-xl">☆</span>
      </div>
      <h3 className="font-semibold text-lg text-center mb-4">{dish.price} MAD</h3>
      {showActions && (
        <div className="flex gap-2">
          <button
            onClick={() => handleEditDish(dish)}
            className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-medium"
          >
            Modifier
          </button>
          <button
            onClick={() => handleDeleteDish(dish.id)}
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium"
          >
            Supprimer
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transition-transform duration-300`}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Dashboard</h2>
            <nav className="space-y-2">
              <button
                onClick={() => { setActiveTab('dishes'); setSidebarOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg transition font-medium ${activeTab === 'dishes' ? 'bg-red-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Dishes
              </button>
              <button
                onClick={() => { setActiveTab('add'); setSidebarOpen(false); setFormData({ title: '', price: '', image: '' }); setEditingDish(null); }}
                className={`w-full text-left px-4 py-3 rounded-lg transition font-medium ${activeTab === 'add' ? 'bg-red-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Ajouter Dishes
              </button>
              <button
                onClick={() => { setActiveTab('manage'); setSidebarOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg transition font-medium ${activeTab === 'manage' ? 'bg-red-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Gérer les Articles
              </button>
            </nav>
          </div>
        </div>

        {/* Overlay pour mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-8">
          {/* Bouton menu mobile */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden mb-6 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-2"
          >
            {sidebarOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Affichage des Dishes */}
          {activeTab === 'dishes' && (
            <div>
              <h1 className="text-4xl font-bold mb-8 text-gray-800">Nos Plats</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dishes.map(dish => (
                  <DishCard key={dish.id} dish={dish} showActions={false} />
                ))}
              </div>
            </div>
          )}

          {/* Gérer les Articles */}
          {activeTab === 'manage' && (
            <div>
              <h1 className="text-4xl font-bold mb-8 text-gray-800">Gérer les Articles</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dishes.map(dish => (
                  <DishCard key={dish.id} dish={dish} showActions={true} />
                ))}
              </div>
            </div>
          )}

          {/* Formulaire Ajouter */}
          {activeTab === 'add' && (
            <div>
              <h1 className="text-4xl font-bold mb-8 text-gray-800">Ajouter un Plat</h1>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Titre du plat</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Ex: Tasty Dish"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Prix (MAD)</label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="Ex: 290.66"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">URL de l'image</label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  {formData.image && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Aperçu</label>
                      <img src={formData.image} alt="Preview" className="w-full h-48 object-cover rounded-lg border border-gray-200" />
                    </div>
                  )}
                  <button
                    onClick={handleAddDish}
                    className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-semibold shadow-md hover:shadow-lg"
                  >
                    Ajouter le Plat
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Formulaire Modifier */}
          {activeTab === 'edit' && editingDish && (
            <div>
              <h1 className="text-4xl font-bold mb-8 text-gray-800">Modifier le Plat</h1>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Titre du plat</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Prix (MAD)</label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">URL de l'image</label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  {formData.image && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Aperçu</label>
                      <img src={formData.image} alt="Preview" className="w-full h-48 object-cover rounded-lg border border-gray-200" />
                    </div>
                  )}
                  <div className="flex gap-4">
                    <button
                      onClick={handleUpdateDish}
                      className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold shadow-md hover:shadow-lg"
                    >
                      Enregistrer
                    </button>
                    <button
                      onClick={() => { setActiveTab('manage'); setEditingDish(null); setFormData({ title: '', price: '', image: '' }); }}
                      className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition font-semibold shadow-md hover:shadow-lg"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}