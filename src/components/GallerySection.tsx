import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Import your new gallery images here
import portraitGirl from '@/assets/portrait-girl.jpg';
import graduationGirl from '@/assets/graduation-girl.jpg';
import graduationBoy1 from '@/assets/graduation-boy-1.jpg';
import graduationBoy2 from '@/assets/graduation-boy-2.jpg';
import car from '@/assets/car.jpg';
import silhouette from '@/assets/silhouette.jpg';
import mountain from '@/assets/mountain.JPG'; // Re-added mountain image
import dsc07757 from '@/assets/DSC07757_VSCO.JPG'; // New landscape image
import rose from '@/assets/rose.jpg'; // New image (renamed img_1105)
import joey from '@/assets/joey.jpg'; // New image (renamed img_0611)
import guitar from '@/assets/guitar.jpg'; // New image
import grad from '@/assets/grad.jpg'; // New graduation image


const categories = ['All', 'Portraits', 'Corporate', 'Lifestyle', 'Fashion', 'Landscape', 'Concerts'];

// Fisher-Yates (Knuth) Shuffle algorithm
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const galleryImages = shuffleArray([
  // Portrait Images
  { id: 1, src: portraitGirl, category: 'Portraits', title: 'Vibrant Portrait' },
  { id: 5, src: silhouette, category: 'Portraits', title: 'Mysterious Silhouette' },
  
  // Corporate Images
  { id: 2, src: graduationGirl, category: 'Corporate', title: 'Graduation Joy' },
  { id: 6, src: graduationBoy1, category: 'Corporate', title: 'Proud Graduate' },
  { id: 7, src: graduationBoy2, category: 'Corporate', title: 'Academic Achievement' },
  { id: 15, src: grad, category: 'Corporate', title: 'Graduation Success' }, // New graduation image

  // Landscape Images
  { id: 8, src: mountain, category: 'Landscape', title: 'Majestic Mountain' },
  { id: 10, src: dsc07757, category: 'Landscape', title: 'Vibrant Outdoors' },
  { id: 11, src: car, category: 'Landscape', title: 'Open Road Adventure' },

  // New Images
  { id: 12, src: rose, category: 'Lifestyle', title: 'Rose' },
  { id: 13, src: joey, category: 'Lifestyle', title: 'Joey' },
  { id: 14, src: guitar, category: 'Lifestyle', title: 'Guitar' },
]);

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-foreground">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore a curated selection of my work across different photography styles and genres
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-3 transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-accent text-accent-foreground shadow-silver' 
                  : 'btn-ghost'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item group cursor-pointer aspect-auto"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 ${
                    (image.id === 8 || image.id === 5) ? 'object-top' : (image.id === 15) ? 'object-bottom' : ''
                  } ${
                    (image.id === 2 || image.id === 6 || image.id === 7)
                      ? 'brightness-250 contrast-175 drop-shadow-xl'
                      : 'saturate-50 contrast-125'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  {/* Removed image.title and image.category */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to create something beautiful together?
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-elegant text-primary-foreground px-8 py-4 text-lg"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;