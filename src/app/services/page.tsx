import Link from 'next/link';

const services = [
  {
    title: 'Static Sites',
    description: 'Fast, lightweight websites perfect for small businesses and personal brands.',
    features: [
      'Responsive design',
      'SEO optimization',
      'Performance optimization',
      'Contact forms',
      'Analytics integration',
    ],
    idealFor: 'Small businesses, personal brands, and portfolios',
    deliveryTime: '2-3 weeks',
    startingPrice: '£2,000',
  },
  {
    title: 'CMS-Based Websites',
    description: 'Easily manageable content-rich websites powered by modern CMS solutions.',
    features: [
      'Custom CMS integration',
      'Content management system',
      'User management',
      'Advanced SEO features',
      'Regular content updates',
      'Multiple user roles',
    ],
    idealFor: 'Medium-sized businesses, blogs, and content-heavy websites',
    deliveryTime: '4-6 weeks',
    startingPrice: '£4,000',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Scalable online stores with secure payment processing and inventory management.',
    features: [
      'Product management',
      'Secure payment gateway',
      'Inventory tracking',
      'Order management',
      'Customer accounts',
      'Shopping cart',
      'Multiple payment methods',
    ],
    idealFor: 'Online retailers, digital products, and subscription services',
    deliveryTime: '6-8 weeks',
    startingPrice: '£6,000',
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Services</h1>
      
      {/* Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <div className="mb-6">
              <h3 className="font-bold mb-2">Key Features:</h3>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 text-sm">
              <p><span className="font-bold">Ideal for:</span> {service.idealFor}</p>
              <p><span className="font-bold">Delivery time:</span> {service.deliveryTime}</p>
              <p><span className="font-bold">Starting from:</span> {service.startingPrice}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-center p-8">Service Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Feature</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">Static Sites</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">CMS-Based</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">E-Commerce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { feature: 'Responsive Design', static: true, cms: true, ecommerce: true },
                { feature: 'SEO Optimization', static: true, cms: true, ecommerce: true },
                { feature: 'Content Management', static: false, cms: true, ecommerce: true },
                { feature: 'User Authentication', static: false, cms: true, ecommerce: true },
                { feature: 'Payment Processing', static: false, cms: false, ecommerce: true },
                { feature: 'Inventory Management', static: false, cms: false, ecommerce: true },
                { feature: 'Analytics Integration', static: true, cms: true, ecommerce: true },
                { feature: 'Regular Updates', static: false, cms: true, ecommerce: true },
                { feature: 'Multiple User Roles', static: false, cms: true, ecommerce: true },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {row.static ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <span className="text-red-500">✗</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.cms ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <span className="text-red-500">✗</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.ecommerce ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <span className="text-red-500">✗</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-xl mb-6">Ready to start your project?</p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
