import React, { useState } from 'react'

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error('Please fill in all required fields.');
            return
        }


        toast.success('Form submitted successfully!');
        setForm({
            name: '',
            email: '',
            company: '',
            licenseType: '',
            message: '',
        });
    }
    return (
       <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Ready to unlock the value of your unused licenses?</h3>
              <p className="mb-6">Our team of experts is ready to help you maximize the return on your software investments.</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> No upfront fees
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Compliance guaranteed
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Dedicated account manager
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Secure transaction process
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your email" 
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  placeholder="Your company" 
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  onChange={handleChange} 
                />
              </div>
              <div>
                <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 mb-1">License Type</label>
                <select 
                  id="licenseType" 
                  name="licenseType" 
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select License Type</option>
                  <option value="Windows">Windows</option>
                  <option value="Office">Microsoft Office</option>
                  <option value="Adobe">Adobe Creative Cloud</option>
                  <option value="Antivirus">Antivirus/Security</option>
                  <option value="CRM">CRM Software</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your licenses" 
                  rows={4}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  onChange={handleChange}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors"
              >
                Submit Inquiry
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </section>
    )
}

export default ContactForm
