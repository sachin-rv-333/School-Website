'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Languages, Calculator, Music, Palette, Trophy, Computer, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const departments = [
  {
    name: 'Science & Technology',
    description: 'Hands-on learning through modern labs and tech integration.',
    icon: FlaskConical,
    classes: ['Physics', 'Chemistry', 'Biology', 'Computer Science'],
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    name: 'Humanities & Languages',
    description: 'Fostering expression, communication, and social awareness.',
    icon: Globe,
    classes: ['History', 'Geography', 'Civics', 'English', 'Global Perspectives'],
    color: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    name: 'Mathematics',
    description: 'Building logical reasoning and problem-solving capabilities.',
    icon: Calculator,
    classes: ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
    color: 'bg-amber-500/10 text-amber-500',
  },
  {
    name: 'Arts & Music',
    description: 'Unleashing creativity through performing and visual arts.',
    icon: Palette,
    classes: ['Fine Arts', 'Music Theory', 'Instruments', 'Drama'],
    color: 'bg-rose-500/10 text-rose-500',
  },
];

const curriculumItems = [
  {
    level: 'Primary School (Grades 1-5)',
    features: ['Foundation of literacy and numeracy', 'Discovery-based learning', 'Holistic skill development'],
  },
  {
    level: 'Middle School (Grades 6-8)',
    features: ['Introduction to core disciplines', 'Critical thinking focus', 'Extracurricular exploration'],
  },
  {
    level: 'High School (Grades 9-12)',
    features: ['Advanced specialization', 'Career counseling integration', 'Board exam preparation'],
  },
];

export default function Academics() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-12 md:pt-20">
      {/* Hero */}
      <section className="section-container text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black mb-8 italic"
        >
          Nurturing <span className="text-primary italic">Excellence</span> through Every Subject.
        </motion.h1>
        <p className="text-xl text-muted-foreground leading-relaxed italic">
          Our curriculum is designed to go beyond textbooks, fostering Curiosity, Innovation, and deep understanding in our students.
        </p>
      </section>

      {/* Curriculum Levels */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {curriculumItems.map((item, idx) => (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-secondary dark:bg-secondary/20 border border-border flex flex-col items-center text-center shadow-xl shadow-primary/5 group hover:bg-primary transition-all duration-500"
            >
              <div className="h-16 w-16 rounded-[2rem] bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary">
                <BookOpen className="h-8 w-8 text-primary group-hover:text-inherit" />
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-primary-foreground">{item.level}</h3>
              <ul className="space-y-4 mb-8">
                 {item.features.map(f => (
                    <li key={f} className="text-muted-foreground font-medium group-hover:text-primary-foreground/80 leading-tight">
                       {f}
                    </li>
                 ))}
              </ul>
              <div className="mt-auto">
                 <button className="text-sm font-black uppercase tracking-widest text-primary group-hover:text-primary-foreground border-b-2 border-primary group-hover:border-primary-foreground pb-1 transition-all">Download Guide</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments Grid */}
      <section className="bg-secondary/30 dark:bg-secondary/10 py-24 border-y border-border">
         <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
               <div>
                  <h2 className="text-5xl font-black mb-4 italic">Academic Departments</h2>
                  <p className="text-xl text-muted-foreground">Specialized learning centers with expert faculty and resources.</p>
               </div>
               <div className="h-12 w-48 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center text-primary font-bold px-6">
                  80+ Faculty Experts
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {departments.map((dept, index) => (
                 <motion.div
                   key={dept.name}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="p-10 rounded-[3rem] bg-background border border-border group hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5"
                 >
                   <div className={cn("h-16 w-16 rounded-[2rem] flex items-center justify-center mb-8", dept.color)}>
                     <dept.icon className="h-8 w-8" />
                   </div>
                   <h3 className="text-3xl font-black mb-4 italic group-hover:text-primary">{dept.name}</h3>
                   <p className="text-muted-foreground text-lg mb-8 italic">
                     {dept.description}
                   </p>
                   <div className="flex flex-wrap gap-2">
                     {dept.classes.map(cls => (
                       <span key={cls} className="px-4 py-1.5 rounded-full bg-secondary text-sm font-bold border border-border">
                         {cls}
                       </span>
                     ))}
                   </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Modern Learning Facilities */}
      <section className="section-container">
          <div className="p-12 md:p-20 rounded-[4rem] bg-primary text-primary-foreground relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                 <Computer className="h-64 w-64 rotate-12" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                 <div>
                    <h2 className="text-5xl font-black mb-8 italic">Digital-First Learning</h2>
                    <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-xl">
                       We leverage state-of-the-art technology to enhance the education experience. Every classroom is equipped with smart-boards, and our students have access to a dedicated hi-tech computer center.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <h4 className="text-3xl font-black italic">1:1</h4>
                          <p className="font-bold opacity-80 uppercase tracking-widest text-xs">Device-Student Ratio</p>
                       </div>
                       <div className="space-y-2">
                          <h4 className="text-3xl font-black italic">100%</h4>
                          <p className="font-bold opacity-80 uppercase tracking-widest text-xs">Smart Classrooms</p>
                       </div>
                    </div>
                 </div>
                 <div className="aspect-video relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20">
                    <Image 
                      src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800" 
                      alt="Tech Lab" 
                      fill
                      className="object-cover" 
                    />
                 </div>
              </div>
          </div>
      </section>
    </div>
  );
}
