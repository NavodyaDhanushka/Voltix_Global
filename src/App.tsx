import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Check, Globe, Zap, Monitor, Smartphone, ShoppingCart, Mail, Phone, MessageCircle, Facebook, Linkedin, Instagram, ArrowRight, Star, Users, TrendingUp, Code } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, Social Media, and targeted Ads",
      color: "bg-blue-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and e-commerce solutions tailored to your needs",
      color: "bg-orange-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "POS Systems",
      description: "Modern Point of Sales systems for seamless transactions",
      color: "bg-purple-500"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with payment integration",
      image: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description: "Successful brand awareness campaign reaching 100K+ users",
      image: "bg-gradient-to-br from-orange-400 to-orange-600"
    },
    {
      title: "Restaurant POS System",
      category: "POS Solutions",
      description: "Custom POS system for multi-location restaurant chain",
      image: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      title: "Corporate Website",
      category: "Web Development",
      description: "Modern responsive website for tech startup",
      image: "bg-gradient-to-br from-green-400 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-900">VOLTX</h1>
              <h2 className="text-2xl font-bold text-blue-900">GLOBAL</h2>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              POWERING YOUR BUSINESS GROWTH WITH DIGITAL SOLUTIONS
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your Partner for Digital Marketing, Web Development, & POS
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                <CardHeader className="relative">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-white mb-4`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Premium Quality at Reasonable Prices</h3>
                <p className="text-blue-100">We believe in delivering top-tier solutions that fit your budget perfectly.</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-white text-blue-600 hover:bg-blue-50 px-8">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Projects Section */}
      <section className="relative z-10 px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sample Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className={`h-40 ${project.image} relative`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <Monitor className="w-12 h-12 text-white opacity-80" />
                  </div>
                </div>
                <CardHeader>
                  <div className="text-sm text-blue-600 font-semibold mb-1">{project.category}</div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Ready to Transform Your Business?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-900">+94 77 580 8220</p>
                  <Button variant="outline" className="mt-2 w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Facebook className="w-4 h-4 mr-2 text-blue-600" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Linkedin className="w-4 h-4 mr-2 text-blue-700" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Instagram className="w-4 h-4 mr-2 text-pink-600" />
                    Instagram
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">VOLTX GLOBAL</h3>
                <p className="text-purple-200 text-sm">Digital Solutions Partner</p>
              </div>
            </div>
          </div>
          <p className="text-purple-200">© 2024 Voltix Global. All rights reserved.</p>
          <p className="text-purple-300 text-sm mt-2">Let's connect and power your business growth! ⚡</p>
        </div>
      </footer>
    </div>
  );
}