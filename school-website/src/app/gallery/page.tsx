'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, ImageIcon, Video, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const images = [
  { id: 1, title: 'Annual Day Celebrations', category: 'Events', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Science Lab Experiment', category: 'Academics', url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Inter-School Football Final', category: 'Sports', url: 'https://images.unsplash.com/photo-1431324155629-1a6eda1eed15?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Modern Library Interior', category: 'Campus', url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Morning Assembly', category: 'Daily Life', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'New Computer Lab', category: 'Campus', url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Physics Workshop', category: 'Academics', url: 'https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'School Sports Day', category: 'Sports', url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Graduation Day', category: 'Events', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['All', 'Academics', 'Campus', 'Events', 'Sports', 'Daily Life'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const currentImageIdx = images.findIndex(img => img.id === selectedImage);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-12 md:pt-20">
      {/* Hero Section */}
      <section className="section-container text-center max-w-4xl relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex p-4 rounded-3xl bg-secondary mb-8 border border-border"
        >
           <Camera className="h-10 w-10 text-primary" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black mb-8 italic"
        >
          Capturing <span className="text-primary">Moments</span>, Preserving Memories.
        </motion.h1>
        <p className="text-xl text-muted-foreground leading-relaxed italic max-w-2xl mx-auto">
          Take a look through our lens at the vibrant life, modern facilities, and ACHIEVEMENTS that define Evergreen Academy.
        </p>
      </section>

      {/* Gallery with Filter */}
      <section className="section-container">
         <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex flex-wrap justify-center gap-2 p-2 rounded-[2rem] bg-secondary border border-border">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={cn(
                     "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                     activeCategory === cat 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                      : "text-muted-foreground hover:bg-background"
                   )}
                 >
                   {cat}
                 </button>
               ))}
            </div>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest italic flex items-center gap-2">
               Showing {filteredImages.length} images <Filter className="h-4 w-4" />
            </p>
         </div>

         <motion.div 
           layout
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
         >
           <AnimatePresence mode='popLayout'>
             {filteredImages.map((img) => (
               <motion.div
                 layout
                 key={img.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.4 }}
                 className="group relative cursor-pointer"
                 onClick={() => setSelectedImage(img.id)}
               >
                 <div className="h-[300px] w-full rounded-[2.5rem] overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                   <Image 
                     src={img.url} 
                     alt={img.title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end text-white">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 font-mono">#{img.category}</span>
                      <h4 className="text-xl font-bold leading-tight italic">{img.title}</h4>
                      <div className="mt-4 flex gap-4 opacity-70">
                         <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest"><Maximize2 className="h-3 w-3" /> Click to view</div>
                      </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </AnimatePresence>
         </motion.div>
      </section>

      {/* Simple Statistics Section for Visual appeal */}
      <section className="bg-secondary/30 dark:bg-secondary/10 py-24 border-y border-border">
          <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
             {[
               { label: 'High-Res Photos', count: '2,500+', icon: Camera },
               { label: 'Event Recordings', count: '120+', icon: Video },
               { label: 'Success Stories', count: '500+', icon: ImageIcon },
               { label: 'Years of Archiving', count: '15+', icon: Camera },
             ].map((stat, i) => (
               <div key={i} className="space-y-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                     <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-3xl font-black italic">{stat.count}</h4>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
               </div>
             ))}
          </div>
      </section>

      {/* FAQ Styled Section */}
      <section className="section-container">
          <div className="p-12 md:p-20 rounded-[4rem] bg-background border-4 border-dashed border-border text-center">
             <h2 className="text-4xl font-extrabold italic mb-6">Need images for Publication?</h2>
             <p className="text-xl text-muted-foreground italic max-w-2xl mx-auto mb-10">High-resolution images are available for press and academic publication upon request from our PR department.</p>
             <button className="bg-secondary hover:bg-border text-foreground px-10 py-4 rounded-full font-black transition-all border border-border">Contact Media Relations</button>
          </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
            >
              <X className="h-6 w-6" />
            </motion.button>
            
            <motion.div
              layoutId={selectedImage.toString()}
              className="relative max-w-5xl w-full h-[80vh] rounded-[3rem] overflow-hidden border-8 border-white/10"
            >
              <Image 
                src={images.find(img => img.id === selectedImage)?.url || ''} 
                alt="Selected Image" 
                fill 
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black via-black/20 to-transparent text-white">
                 <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 inline-block">{images.find(img => img.id === selectedImage)?.category}</span>
                 <h3 className="text-4xl font-bold italic">{images.find(img => img.id === selectedImage)?.title}</h3>
              </div>
            </motion.div>
            
            <div className="absolute inset-y-0 left-6 flex items-center">
               <button 
                  onClick={() => {
                     const idx = images.findIndex(img => img.id === selectedImage);
                     const nextIdx = (idx - 1 + images.length) % images.length;
                     setSelectedImage(images[nextIdx].id);
                  }}
                  className="h-16 w-16 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
               >
                  <ChevronLeft className="h-8 w-8" />
               </button>
            </div>
            
            <div className="absolute inset-y-0 right-6 flex items-center">
               <button 
                  onClick={() => {
                     const idx = images.findIndex(img => img.id === selectedImage);
                     const nextIdx = (idx + 1) % images.length;
                     setSelectedImage(images[nextIdx].id);
                  }}
                  className="h-16 w-16 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
               >
                  <ChevronRight className="h-8 w-8" />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
