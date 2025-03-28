import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Essential',
      price: 'Rs 2900',
      period: 'one-time',
      description: 'Perfect for basic fitness tracking and notifications',
      features: [
        'Heart rate monitoring',
        'Step & sleep tracking',
        'Smart notifications',
        '5-day battery life',
        'Basic watch faces',
        'Water resistant (IP68)'
      ],
      image: "https://m.media-amazon.com/images/I/613G3YAzwgL._AC_SL1500_.jpg",
      cta: 'Buy Now',
      popular: false,
    },
    {
      name: 'Advanced',
      price: 'Rs 4900',
      period: 'one-time',
      description: 'For active users who want more health insights',
      features: [
        'All Essential features',
        'Blood oxygen monitoring',
        'ECG & stress tracking',
        'GPS built-in',
        '14-day battery life',
        'Premium watch faces',
        'Swim-proof (5ATM)',
        'NFC payments'
      ],
      image: "https://m.media-amazon.com/images/I/71Q+BaOKXUL._AC_UF894,1000_QL80_FMwebp_.jpg",
      cta: 'Buy Now',
      popular: true,
    },
    {
      name: 'Premium',
      price: 'Rs 7900',
      period: 'one-time',
      description: 'The ultimate smartwatch experience',
      features: [
        'All Advanced features',
        'LTE connectivity',
        'Fall detection',
        'Skin temperature sensor',
        '30-day battery life',
        'Customizable watch faces',
        'Titanium casing',
        'Wireless charging',
        'Premium support'
      ],
      image: "https://m.media-amazon.com/images/I/71UBBnc7UfL._AC_UF894,1000_QL80_FMwebp_.jpg",
      cta: 'Buy Now',
      popular: false,
    },
  ];

  const product = [
    {
      name: 'Sport Band',
      price: 'Rs 2900',
      description: 'Lightweight, breathable band for workouts',
      image: 'https://m.media-amazon.com/images/I/613G3YAzwgL._AC_SL1500_.jpg'
    },
    {
      name: 'Leather Band',
      price: 'Rs 4900',
      description: 'Premium leather for business or casual',
      image: 'https://m.media-amazon.com/images/I/71UBBnc7UfL._AC_UF894,1000_QL80_FMwebp_.jpg'
    },
    {
      name: 'Charging Dock',
      price: 'Rs 1100',
      description: 'Elegant wireless charging station',
      image: 'https://m.media-amazon.com/images/I/51bW5gmgC6L._AC_SY355_.jpg'
    },
    {
      name: 'Screen Protector',
      price: 'Rs 400',
      description: '3-pack of tempered glass protectors',
      image: 'https://m.media-amazon.com/images/I/8167jl6d9OL._AC_UF894,1000_QL80_FMwebp_.jpg'
    },
  ]
  const features = [
    { feature: 'Display', essential: '1.4" AMOLED', advanced: '1.6" AMOLED', premium: '1.8" AMOLED' },
    { feature: 'Battery Life', essential: '5 days', advanced: '14 days', premium: '30 days' },
    { feature: 'Health Sensors', essential: 'Heart rate', advanced: 'HR, SpO2, ECG', premium: 'All + temp sensor' },
    { feature: 'GPS', essential: '✗', advanced: '✓', premium: '✓' },
    { feature: 'LTE Connectivity', essential: '✗', advanced: '✗', premium: '✓' },
    { feature: 'Water Resistance', essential: 'IP68', advanced: '5ATM', premium: '5ATM' },
    { feature: 'NFC Payments', essential: '✗', advanced: '✓', premium: '✓' },
    { feature: 'Materials', essential: 'Plastic', advanced: 'Aluminum', premium: 'Titanium' },
    { feature: 'Warranty', essential: '2 years', advanced: '2 years', premium: '3 years' },
  ]
  const faq = [
    {
      question: 'What devices are compatible with TechFusion smartwatches?',
      answer: 'Our smartwatches work with both iOS (iPhone 8 and later) and Android (8.0 and later) smartphones.',
    },
    {
      question: 'How accurate are the health sensors?',
      answer: 'Our health sensors are clinically validated for accuracy. The heart rate monitor is ±2 bpm accurate, and the SpO2 sensor is ±2% accurate compared to medical devices.',
    },
    {
      question: 'Can I swim with my smartwatch?',
      answer: 'The Essential model is water resistant for swimming but not recommended for diving. The Advanced and Premium models are swim-proof up to 50 meters and suitable for swimming and snorkeling.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'We typically ship within 1 business day. Delivery times are 2-5 business days in the US, 5-10 days internationally. Expedited shipping is available at checkout.',
    },
    {
      question: 'What if I need to return my smartwatch?',
      answer: 'We offer a 30-day no-questions-asked return policy. Simply contact our support team to initiate a return.',
    },
  ]

  return (
    <div>

      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            loading='lazy'
            className="w-full h-full object-cover opacity-10"
            src="https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Smartwatch Pricing"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Find Your Perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">TechFusion Watch</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-300 max-w-3xl mx-auto">
            Choose the smartwatch that fits your lifestyle. All models come with our 2-year warranty.
          </p>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Smartwatch Models
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Premium quality at every price point
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.popular ? 'ring-2 ring-purple-600 transform scale-105 z-10' : 'ring-2 ring-gray-600'
                  }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold py-2 text-center">
                    Most Popular
                  </div>
                )}
                <div className="bg-white p-8 h-full flex flex-col">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-600"> {plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-8">
                      <img
                        loading='lazy'
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-auto object-contain max-h-48 mx-auto"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className={`w-full py-3 px-6 rounded-md font-medium mt-auto ${plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 mb-5'
                        : 'bg-gray-400 text-gray-900 hover:bg-gray-500'
                      } transition duration-300 transform hover:scale-105`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Feature Comparison
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              See how our smartwatches compare
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Essential
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Advanced
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {features.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.essential}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.advanced}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Premium Accessories
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your smartwatch experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.map((item) => (
              <div key={item.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <img className="w-full h-48 object-contain"
                  loading='lazy'
                  src={item.image}
                  alt={item.name} />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{item.price}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 px-4 rounded-md font-medium transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our smartwatches
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faq.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;