
const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are dedicated to providing quality education and fostering innovation. Join us to explore the world of opportunities.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Latest Posts Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Latest Posts</h3>
          <div className="space-y-4">
            {/* Post Card 1 */}
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Post 1"
                className="w-16 h-16 rounded-md object-cover mr-4"
              />
              <div>
                <h4 className="text-sm font-semibold hover:text-white">
                  <a href="#">Post Title 1</a>
                </h4>
                <p className="text-xs text-gray-400">October 25, 2024</p>
              </div>
            </div>
            {/* Post Card 2 */}
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Post 2"
                className="w-16 h-16 rounded-md object-cover mr-4"
              />
              <div>
                <h4 className="text-sm font-semibold hover:text-white">
                  <a href="#">Post Title 2</a>
                </h4>
                <p className="text-xs text-gray-400">October 20, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <span className="font-semibold">Phone:</span> +1 234 567 890
            </li>
            <li>
              <span className="font-semibold">Email:</span> contact@example.com
            </li>
            <li>
              <span className="font-semibold">Location:</span> 123 Education St, Knowledge City
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        © 2024 Your Institute. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
