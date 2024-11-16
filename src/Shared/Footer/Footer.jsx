
const Footer = () => {
  return (
<footer className="bg-footer py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact Us</h3>
            <p className="">123 Main St, City, Country</p>
            <p className="">Email: info@institute.com</p>
            <p className="">Phone: +123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className=" transition">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className=" transition">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className=" transition">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4 text-primary">Legal</h3>
            <p className="">© 2024 Our Institute</p>
            <p className="">All rights reserved.</p>
          </div>
        </div>
        
        {/* Bottom Line */}
        <div className="border-t border-primary mt-8 pt-4 text-center">
          <p className="text-sm text-primary">Designed & Developed by Our Team</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
