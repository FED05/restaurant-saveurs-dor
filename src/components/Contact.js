import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreePolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    if (!formData.agreePolicy) {
      alert('Veuillez accepter la politique de confidentialité');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès !');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      agreePolicy: false
    });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-6xl  rounded-[3rem] shadow-2xl p-12 md:p-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Section gauche - Informations de contact */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact us</h1>
            <p className="text-gray-600 mb-12">We'd love to hear from you. Please fill out this form, and we'll reply soon.</p>
            
            <div className="space-y-10">
              {/* Email */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-2">Contact us by email, and we will respond shortly.</p>
                <a href="mailto:hey@uilbox.com" className="text-gray-900 font-medium hover:text-gray-700">
                  contact@saveursdor.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm mb-2">Call us on weekdays from 9 AM to 6 PM.</p>
                <a href="tel:+12223334444" className="text-gray-900 font-medium hover:text-gray-700">
                  +1 (222) 333 444
                </a>
              </div>

              {/* Mobile */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile</h3>
                <p className="text-gray-600 text-sm mb-2">Call us on weekdays from 9 AM to 6 PM.</p>
                <a href="tel:+12223334444" className="text-gray-900 font-medium hover:text-gray-700">
                  +2 (222) 333 444
                </a>
              </div>

              {/* Office */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600 text-sm mb-2">Visit us at our headquarters.</p>
                <address className="text-gray-900 font-medium not-italic">
                  Avenue Mohammed VI<br />
                  Marrakech<br />
                  40000, Maroc
                </address>
              </div>
            </div>
          </div>

          {/* Section droite - Formulaire */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Write us a message</h2>
              
              <div className="space-y-5">
                {/* Nom et Prénom */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full px-4 py-3 bg-stone-100 border-0 rounded-xl focus:ring-2 focus:ring-gray-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className="w-full px-4 py-3 bg-stone-100 border-0 rounded-xl focus:ring-2 focus:ring-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@email.com"
                    className="w-full px-4 py-3 bg-stone-100 border-0 rounded-xl focus:ring-2 focus:ring-gray-400 focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Leave us a message..."
                    rows="4"
                    className="w-full px-4 py-3 bg-stone-100 border-0 rounded-xl focus:ring-2 focus:ring-gray-400 focus:outline-none resize-none"
                  />
                </div>

                {/* Checkbox Privacy Policy */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreePolicy"
                    checked={formData.agreePolicy}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-400"
                  />
                  <label className="ml-2 text-sm text-gray-600 cursor-pointer" onClick={() => setFormData(prev => ({...prev, agreePolicy: !prev.agreePolicy}))}>
                    I agree the Privacy Policy
                  </label>
                </div>

                {/* Bouton Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}