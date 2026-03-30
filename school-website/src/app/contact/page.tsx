'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you shortly.');
  };

  return (
    <div className="flex flex-col gap-24 pb-24 pt-12 md:pt-20">
      {/* Hero Section */}
      <section className="section-container text-center max-w-4xl relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex p-4 rounded-3xl bg-primary/10 mb-8 border border-primary/20"
        >
           <MessageSquare className="h-10 w-10 text-primary" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black mb-8 italic"
        >
          We’d Love to <span className="text-primary italic">Hear From You.</span>
        </motion.h1>
        <p className="text-xl text-muted-foreground leading-relaxed italic max-w-2xl mx-auto">
          Have a question or want to visit our campus? Send us a message and our admission team will get back to you within 24 hours.
        </p>
      </section>

      {/* Main Content */}
      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20">
         {/* Contact Form */}
         <motion.div 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="p-10 md:p-14 rounded-[3.5rem] bg-secondary dark:bg-secondary/20 border border-border shadow-2xl shadow-primary/5 flex flex-col"
         >
           <h2 className="text-4xl font-extrabold mb-10 italic">Send an Inquiry</h2>
           <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-2">Your Name</label>
                   <input 
                     type="text" 
                     id="name"
                     required
                     className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                     placeholder="John Doe"
                     value={formState.name}
                     onChange={(e) => setFormState({...formState, name: e.target.value})}
                   />
                </div>
                <div className="space-y-2">
                   <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-2">Email Identity</label>
                   <input 
                     type="email" 
                     id="email"
                     required
                     className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                     placeholder="john@example.com"
                     value={formState.email}
                     onChange={(e) => setFormState({...formState, email: e.target.value})}
                   />
                </div>
             </div>
             <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                  placeholder="+1 (555) 000-0000"
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                />
             </div>
             <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-2">What's on your mind?</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-background border border-border rounded-[2rem] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium resize-none"
                  placeholder="Tell us about your inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                >
                </textarea>
             </div>
             <button 
               type="submit" 
               className="group w-full py-5 rounded-full bg-primary text-primary-foreground font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
             >
                Dispatch Inquiry <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
           </form>
         </motion.div>

         {/* Contact Info & Details */}
         <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex flex-col gap-12"
         >
           <h2 className="text-4xl font-extrabold italic mb-2">Connect Directly</h2>
           <p className="text-xl text-muted-foreground italic mb-6">Experience our campus for yourself. We are located in the heart of the educational district.</p>
           
           <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Our Location', content: '123 Education St, Knowledge City, NY 10001' },
                { icon: Phone, title: 'Call Center', content: '+1 (555) 000-0000 / +1 (555) 111-2222' },
                { icon: Mail, title: 'Email Support', content: 'info@evergreenacademy.edu' },
                { icon: Clock, title: 'Visit Hours', content: 'Mon-Fri: 8:00 AM - 4:00 PM' },
              ].map((info, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                   <div className="h-14 w-14 rounded-2xl bg-secondary dark:bg-secondary/20 flex items-center justify-center shrink-0 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <info.icon className="h-6 w-6" />
                   </div>
                   <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-1">{info.title}</h4>
                      <p className="text-xl font-bold italic">{info.content}</p>
                   </div>
                </div>
              ))}
           </div>

           {/* FAQ Snippet or extra CTA */}
           <div className="mt-auto p-10 rounded-[3rem] bg-primary text-primary-foreground relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-12 transition-transform duration-500">
                 <Globe className="h-40 w-40" />
              </div>
              <div className="relative z-10">
                 <h4 className="text-2xl font-black italic mb-4 leading-tight">Apply for Excellence Today.</h4>
                 <p className="text-primary-foreground/70 mb-8 italic">Secure your child's future at Evergreen Academy. Admissions are limited.</p>
                 <button className="flex items-center gap-2 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all border-b-2 border-white/50 pb-1">Begin Enrollment <ArrowRight className="h-4 w-4" /></button>
              </div>
           </div>
         </motion.div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="section-container">
         <div className="h-[500px] w-full rounded-[4rem] overflow-hidden border-8 border-secondary relative group">
            <Image 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
              alt="Map Location" 
              fill 
              className="object-cover group-hover:scale-110 shadow-2xl transition-transform duration-[20s]"
            />
            {/* Map Overlay for design */}
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors pointer-events-none" />
            <div className="absolute bottom-10 left-10 p-10 rounded-[3rem] bg-background/90 backdrop-blur-md border border-border shadow-2xl flex flex-col items-center">
               <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 animate-bounce">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
               </div>
               <p className="text-xs font-black uppercase tracking-widest mb-1 italic">Find Us At</p>
               <h4 className="text-lg font-bold">123 Education St.</h4>
            </div>
         </div>
      </section>
    </div>
  );
}
