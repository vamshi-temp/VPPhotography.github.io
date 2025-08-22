const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-accent mb-4">
              VPPhotography
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional photography services capturing life's most beautiful moments 
              with artistic vision and technical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">Connect</h4>
            <div className="space-y-2 mb-6">
              <p className="text-muted-foreground">vamshi.pala@gmail.com</p>
              <p className="text-muted-foreground">(717)-315-2628</p>
            </div>
            

            
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 VPPhotography. All rights reserved. | Capturing memories, one moment at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;