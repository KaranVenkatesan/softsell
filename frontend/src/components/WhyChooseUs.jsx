import React from 'react'

const WhyChooseUs = () => {
    const features = [
        {
            title: 'Instant Payments',
            description: 'No waiting. Get paid as soon as your license is  approved.',
            icon: '⚡'
        },
        {
            title: 'Safe & Secure',
            description: 'We ensure complte data privacy and license safety.',
            icon: '🔒'
        },
        {
            title: 'Best Valuation',
            description: 'We offer competitive based on market analysis',
            icon: '📈'
        },
        {
            title: '24/7 Supports',
            description: 'We are always here to help you thrugh the process',
            icon: '💬'
        },
    ]
    return (
        <section className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyChooseUs
