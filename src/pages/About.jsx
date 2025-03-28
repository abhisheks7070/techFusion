import React from 'react';
import pic from '../assets/profile.png'

const About = () => {

    const members = [
        {
            name: 'Abhishek Singh',
            role: 'CEO & Founder',
            bio: 'Visionary leader with 15+ years in tech innovation',
            image: pic,
        },
        {
            name: 'Maria Garcia',
            role: 'CTO',
            bio: 'Engineering expert passionate about scalable solutions',
            image: 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            name: 'David Kim',
            role: 'VP of Product',
            bio: 'Product strategist focused on user experience',
            image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            name: 'Sarah Williams',
            role: 'VP of Marketing',
            bio: 'Creative marketer with a data-driven approach',
            image: 'https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
                        alt="About TechFusion"
                
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">TechFusion</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold text-gray-300 max-w-3xl mx-auto">
                        We're revolutionizing the Smartwatch industry with innovative solutions that comforts individuals.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="mb-8 lg:mb-0">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Founded in 2015, TechFusion started as a small team of passionate engineers with a vision to simplify complex technology.
                            </p>
                            <p className="text-lg text-gray-600 mb-4">
                                What began as a side project quickly grew into a thriving business as we discovered the overwhelming need for intuitive, powerful tech solutions.
                            </p>
                            <p className="text-lg text-gray-600">
                                Today, we serve thousands of customers worldwide with a team of over 200 dedicated professionals.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                loading='lazy'
                                className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Team working"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                                <p className="text-sm font-medium text-gray-900">2015</p>
                                <p className="text-sm text-gray-500">Year Founded</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Our Mission & Values
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                            Guiding principles that drive everything we do
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                We constantly push boundaries to deliver cutting-edge solutions that solve real problems.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mb-4">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Focus</h3>
                            <p className="text-gray-600">
                                Our customers are at the heart of everything we do. We listen, adapt, and deliver.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Integrity</h3>
                            <p className="text-gray-600">
                                We do what's right, not what's easy. Transparency and honesty guide our decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Meet Our Leadership Team
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                            The brilliant minds driving our vision forward
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {members.map((member) => (
                            <div key={member.name} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                                <img className="w-full h-64 object-cover bg-gradient-to-b from-red-300 to-red-200"
                                    loading='lazy'
                                    src={member.image}
                                    alt={member.name}
                                />

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-blue-600 mb-2">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;