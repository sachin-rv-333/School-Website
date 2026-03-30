'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Quote, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const staff = [
  {
    name: 'Dr. Helen Richardson',
    role: 'Principal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Dedicated educationist with 20+ years of experience in leading academic institutions.',
  },
  {
    name: 'Mr. Mark Stevens',
    role: 'Vice Principal',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Championing student success through innovative pedagogical approaches and leadership.',
  },
  {
    name: 'Ms. Emily Parker',
    role: 'Head of Academics',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Focusing on curriculum development and academic excellence across all departments.',
  },
];

export default function About() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-12 md:pt-20">
      {/* Introduction */}
      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10">Since 1999</span>
          <h1 className="text-5xl font-black mb-8 leading-tight">Legacy of Learning, <span className="text-primary">Evergreen Forever.</span></h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed italic">
            Founded with a vision to revolutionize primary and secondary education, Evergreen Academy has been at the forefront of providing quality learning for over two decades.
          </p>
          <div className="space-y-4">
             {[
               "Centrally located modern campus with state-of-the-art facilities.",
               "Recognized for outstanding academic results and co-curricular success.",
               "A community that values diversity, integrity, and lifelong curiosity.",
             ].map((point) => (
                <div key={point} className="flex gap-3 items-start">
                   <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                   </div>
                   <p className="text-muted-foreground font-medium">{point}</p>
                </div>
             ))}
          </div>
        </motion.div>
        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
           <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <Image src="https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=800" alt="Students in Library" fill className="object-cover" />
           </div>
           <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary text-primary-foreground p-8 rounded-[3rem] shadow-2xl z-20 flex flex-col justify-center text-center hidden md:flex">
              <div className="text-5xl font-black mb-2 italic">98%</div>
              <p className="font-bold">Student Satisfaction Rate</p>
           </div>
           <div className="absolute top-10 -left-10 w-24 h-24 bg-secondary border-8 border-background rounded-full z-20" />
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary/30 dark:bg-secondary/20 py-24 border-y border-border">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-12 rounded-[3.5rem] bg-background border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all"
          >
            <div className="h-16 w-16 rounded-[2rem] bg-primary/10 flex items-center justify-center mb-8">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-6 italic">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be a global leader in education that nurtures independent thinkers, creative problem solvers, and compassionate citizens who are ready to lead in an ever-evolving world.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-12 rounded-[3.5rem] bg-primary text-primary-foreground shadow-2xl shadow-primary/20 transition-all sm:-translate-y-6"
          >
            <div className="h-16 w-16 rounded-[2rem] bg-white/20 flex items-center justify-center mb-8">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 italic">Our Mission</h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              To provide a safe, inclusive, and challenging environment where students achieve their full potential attraverso personalized learning, expert guidance, and holistic development opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-container">
        <div className="p-12 md:p-20 rounded-[4rem] bg-secondary dark:bg-secondary/50 border border-border relative overflow-hidden">
          <Quote className="absolute top-0 right-0 h-96 w-96 text-primary opacity-5 -translate-y-20 translate-x-20" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10 items-center">
             <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl">
                <Image src={staff[0].image} alt="Principal" fill className="object-cover" />
             </div>
             <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold mb-8 italic">A Message from the Principal</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                   <p>
                      "At Evergreen Academy, we believe every child is born with unique talents and gifts. Our role as educators is not just to teach subjects, but to help students discover and nurture their true selves. 
                   </p>
                   <p>
                      Education is not just about what is in the books; it is about building character, fostering resilience, and encouraging a spirit of inquiry. We strive to create an atmosphere where students feel safe to take risks, ask questions, and learn from their mistakes."
                   </p>
                </div>
                <div className="mt-10">
                   <h4 className="text-2xl font-black text-primary italic leading-none">{staff[0].name}</h4>
                   <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-2">{staff[0].role}</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-5xl font-black mb-6 italic underline decoration-primary decoration-8 underline-offset-8">Our Leadership Team</h2>
             <p className="text-xl text-muted-foreground">The visionaries behind our academic success and operational excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {staff.map((member, index) => (
               <motion.div
                 key={member.name}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group"
               >
                 <div className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden mb-6 shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-primary-foreground">
                       <p className="text-sm font-medium leading-relaxed italic">{member.bio}</p>
                    </div>
                 </div>
                 <h4 className="text-2xl font-bold italic">{member.name}</h4>
                 <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">{member.role}</p>
               </motion.div>
             ))}
          </div>
      </section>
    </div>
  );
}
