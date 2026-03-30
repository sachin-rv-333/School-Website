'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Trophy, BookOpen, Star, Quote, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Students Enrolled', value: '1,200+', icon: Users },
  { label: 'Expert Teachers', value: '80+', icon: BookOpen },
  { label: 'Distinction Rate', value: '98%', icon: Trophy },
  { label: 'Years of Excellence', value: '25+', icon: Star },
];

const highlights = [
  {
    title: 'Modern Curriculum',
    description: 'We follow a dynamic, skill-based curriculum that prepares students for the challenges of tomorrow.',
    icon: BookOpen,
  },
  {
    title: 'Expert Faculty',
    description: 'Our teachers are highly qualified professionals dedicated to nurturing every student`s potential.',
    icon: Users,
  },
  {
    title: 'Holistic Development',
    description: 'Beyond academics, we focus on sports, arts, and character building for all-round growth.',
    icon: Trophy,
  },
];

const testimonials = [
  {
    content: "Evergreen Academy has transformed my daughter's confidence. The teachers are incredibly supportive and the facilities are world-class.",
    author: "Sarah Jenkins",
    role: "Parent",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    content: "The focus on practical learning and critical thinking is what sets this school apart. I feel well-prepared for university.",
    author: "David Chen",
    role: "Grade 12 Student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000"
            alt="School Campus"
            fill
            className="object-cover brightness-[0.4] dark:brightness-[0.3]"
            priority
          />
        </div>
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/20 text-sm font-semibold mb-6 backdrop-blur-md">
              Admissions Open for 2024-25
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Empowering Minds, <span className="text-primary italic font-serif">Transforming Futures.</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Welcome to Evergreen International Academy, where we combine academic excellence with character development to prepare students for a bright and successful future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
              >
                Start Journey <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-lg font-bold text-white hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
      </section>

      {/* Highlights Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-secondary dark:bg-secondary/50 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <item.icon className="h-8 w-8 text-primary group-hover:text-inherit" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-20">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-primary-foreground"
              >
                <div className="inline-flex p-3 rounded-2xl bg-white/10 mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-primary-foreground/70 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements & News */}
      <section className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 italic">Latest Updates & Events</h2>
            <p className="text-muted-foreground">Stay informed about the latest happenings and upcoming opportunities at Evergreen Academy.</p>
          </div>
          <Link href="/gallery" className="text-primary font-bold flex items-center gap-1 group">
            View All News <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
            <div className="relative h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer">
              <Image 
                src="https://images.unsplash.com/photo-1544391682-171ef99480bc?auto=format&fit=crop&q=80&w=800" 
                alt="Annual Day" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="text-sm font-semibold text-primary mb-2">Upcoming Event</span>
                <h3 className="text-2xl font-bold mb-2">Annual Sports Meet 2024</h3>
                <p className="text-white/70 line-clamp-2 mb-4">Join us for a day of athleticism, sportsmanship, and school spirit as students compete in various track and field events.</p>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span>April 15, 2024</span>
                  <span>•</span>
                  <span>School Stadium</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {[
                { title: 'New Science Lab Inauguration', date: 'March 28, 2024', tag: 'Academic' },
                { title: 'PTA Meeting: Spring Semester Focus', date: 'April 02, 2024', tag: 'Notice' },
                { title: 'Art & Craft Exhibition Opening', date: 'April 10, 2024', tag: 'Culture' },
              ].map((news) => (
                <div key={news.title} className="flex gap-6 items-start p-6 rounded-3xl bg-secondary dark:bg-secondary/50 border border-border hover:border-primary/30 transition-all text-foreground">
                  <div className="h-16 w-16 rounded-2xl bg-primary/20 flex flex-col items-center justify-center shrink-0 text-primary font-bold">
                    <span className="text-lg leading-none">{news.date.split(' ')[1].replace(',', '')}</span>
                    <span className="text-xs uppercase">{news.date.split(' ')[0]}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary mb-2 inline-block px-2 py-0.5 rounded bg-primary/10">{news.tag}</span>
                    <h4 className="text-xl font-bold mb-1">{news.title}</h4>
                    <p className="text-sm text-muted-foreground">Detailed circular has been uploaded to the student portal.</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 dark:bg-secondary/20 py-20 border-y border-border">
        <div className="section-container text-center">
            <Quote className="h-12 w-12 text-primary mx-auto mb-8 opacity-30" />
            <h2 className="text-4xl font-bold mb-16 italic">Words From Our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((t, idx) => (
                <motion.div 
                  key={t.author}
                  initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-background p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 relative text-left"
                >
                  <p className="text-lg italic text-muted-foreground mb-8 leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{t.author}</h4>
                      <p className="text-sm text-primary font-medium">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="relative rounded-[3rem] overflow-hidden bg-primary p-8 md:p-20 text-center text-primary-foreground shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 p-12 opacity-10">
             <GraduationCap className="h-64 w-64 rotate-12" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to Give Your Child the Best Start?</h2>
            <p className="text-xl mb-12 text-primary-foreground/80 leading-relaxed">
              Admission for the academic year 2024-25 is now open. Join the Evergreen family and experience excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/admissions"
                className="bg-white text-primary px-10 py-4 rounded-full font-black text-lg hover:bg-white/90 transition-all hover:scale-105"
              >
                Apply for Admission
              </Link>
              <Link
                href="/contact"
                className="bg-primary-foreground/10 backdrop-blur-sm border border-white/20 px-10 py-4 rounded-full font-black text-lg hover:bg-primary-foreground/20 transition-all"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
