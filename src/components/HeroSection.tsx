import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-photography.jpg'; // New import

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional photography workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 fade-in-up">
          Capturing Life's
          <span className="block text-accent">Beautiful Moments</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed fade-in-delay">
          Professional photography services specializing in portraits, corporate headshots, and lifestyle photography
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay">
          <Button
            onClick={scrollToContact}
            className="btn-elegant text-primary-foreground px-8 py-4 text-lg"
          >
            Book Your Session
          </Button>
          <Button
            onClick={scrollToGallery}
            variant="outline"
            className="btn-ghost px-8 py-4 text-lg"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;