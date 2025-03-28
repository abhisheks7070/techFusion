import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechSolutions Inc.',
    content: 'TechFusion has completely transformed our workflow. The productivity gains we\'ve seen are unprecedented.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCo',
    content: 'The intuitive interface and powerful features make TechFusion a must-have for any tech company.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Director of Engineering, FutureTech',
    content: 'We evaluated dozens of solutions and TechFusion stood out for its reliability and scalability.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const arr = [...new Array(5)]
// console.log(arr)
// console.log([...arr])

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What our customers say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about TechFusion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  loading='lazy'
                  className="w-12 h-12 rounded-full mr-4"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              <div className="mt-4 flex text-yellow-400">
                {arr.map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;