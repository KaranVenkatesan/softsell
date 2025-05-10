import React from 'react'

const HowItWorks = () => {

    const steps = [
        {
            title: 'Upload License',
            description: 'Submit yoir software license details securely',
            icon: '📤'
        },
        {
            title: 'Get Valuation',
            description: 'We evaluate the market value of your license',
            icon: '💰'
        },
        {
            title: 'Get Paid ',
            description: 'Receive instant payment once the deal is confirmed',
            icon: '🏦'
        },

    ]
    return (
        <section className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-10">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                {steps.map((step, index) => (
                    <div key={index} className="max-w-xs p-6 border rounded-lg shadow hover:shadow-md transition">
                        <div className="text-5xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorks
