import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Anjali Mehta',
            role: 'IT Manager',
            company: 'TechNova Inc.',
            message:
                'SoftSell made it super easy to sell our old software licenses. We got paid within 24 hours!',
        },
        {
            name: 'Ravi Kumar',
            role: 'Founder',
            company: 'NextSoft Solutions',
            message:
                'Excellent service and support. I was surprised how quickly and safely the transaction happened.',
        },
    ]
    return (
        <section className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-5xl mx-auto">
                {testimonials.map((review, index) => (
                    <div
                        key={index}
                        className="border p-6 rounded-lg shadow hover:shadow-md transition bg-gray-50"
                    >
                        <p className="text-gray-700 italic mb-4">"{review.message}"</p>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-gray-500">
                            {review.role}, {review.company}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
