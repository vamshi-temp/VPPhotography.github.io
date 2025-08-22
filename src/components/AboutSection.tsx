const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-foreground">
            About VPPhotography
          </h2>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
            <p>
              With over a decade of experience in professional photography, I specialize in capturing 
              the essence of life's most precious moments. From intimate portraits to grand celebrations, 
              my approach combines technical expertise with artistic vision.
            </p>
            
            <p>
              Every session is tailored to tell your unique story. Whether it's a corporate headshot 
              that conveys confidence, a celebration of love, or a lifestyle shoot that 
              captures your authentic self, I'm committed to delivering images that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-serif font-semibold text-accent mb-4">100+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-semibold text-accent mb-4">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-semibold text-accent mb-4">100,000+</div>
              <div className="text-muted-foreground">Photos Taken</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;