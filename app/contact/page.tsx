import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-blue-50/50 pt-20 pb-24 text-center px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="github-badge mb-6">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Let&apos;s Build Something Great Together
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Have a question or ready to transform your business? Our team is here to help. Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="notion-card">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">Fill out the form below and our team will get back to you as soon as possible.</p>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-900">First Name *</label>
                      <input type="text" id="firstName" className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-900">Last Name *</label>
                      <input type="text" id="lastName" className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">Email Address *</label>
                    <input type="email" id="email" className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="john@company.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-900">Company Name</label>
                    <input type="text" id="company" className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Your Company" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-slate-900">Service Interested In *</label>
                    <select id="service" className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-500">
                      <option value="">Select a service...</option>
                      <option value="ai-search">AI Search & Reputation</option>
                      <option value="automation">Intelligent Automation</option>
                      <option value="custom-software">Custom Software</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-900">Message *</label>
                    <textarea id="message" rows={5} className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Tell us about your project or needs..."></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                    <label htmlFor="privacy" className="text-sm text-slate-600">
                      I agree to the Privacy Policy and Terms of Service
                    </label>
                  </div>
                  
                  <button type="button" className="w-full rounded-md bg-slate-900 py-3 text-center font-medium text-white hover:bg-slate-800 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</div>
                      <div className="font-medium text-slate-900">hello@vyntrise.com</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</div>
                      <div className="font-medium text-slate-900">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Address</div>
                      <div className="font-medium text-slate-900 leading-relaxed">123 Tech Street, San Francisco, CA 94105</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-medium text-slate-900">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Sunday</span>
                    <span className="font-medium text-slate-500">Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-blue-600 hover:bg-blue-50 transition-colors border border-slate-100">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-blue-600 hover:bg-blue-50 transition-colors border border-slate-100">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-blue-600 hover:bg-blue-50 transition-colors border border-slate-100">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-blue-600 hover:bg-blue-50 transition-colors border border-slate-100">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
            <p className="text-slate-600">Located in the heart of San Francisco&apos;s tech district. Drop by for a coffee and let&apos;s discuss your project.</p>
          </div>
          <div className="rounded-2xl bg-slate-200 aspect-[21/9] flex items-center justify-center">
            <span className="text-slate-500 font-medium">Interactive Map</span>
          </div>
        </div>
      </section>
    </div>
  );
}
