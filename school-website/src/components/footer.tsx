'use client';

import * as React from 'react';
import Link from 'next/link';
import { Globe, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const footerNavigation = {
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  academics: [
    { name: 'Curriculum', href: '/academics#curriculum' },
    { name: 'Departments', href: '/academics#departments' },
    { name: 'Library', href: '/academics#library' },
    { name: 'Sports', href: '/academics#sports' },
  ],
  contact: [
    { name: 'info@evergreenacademy.edu', icon: Mail },
    { name: '+1 (555) 000-0000', icon: Phone },
    { name: '123 Education St, Knowledge City', icon: MapPin },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Globe },
    { name: 'Twitter', href: '#', icon: Globe },
    { name: 'Instagram', href: '#', icon: Globe },
    { name: 'Youtube', href: '#', icon: Globe },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="section-container pb-8 pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-white">Evergreen</span>
            </Link>
            <p className="text-sm leading-6 text-secondary-foreground/70 max-w-xs">
              Empowering the next generation of leaders through excellence in education, character building, and holistic development.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-secondary-foreground/60 hover:text-primary transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-secondary-foreground/70 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Academics</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.academics.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-secondary-foreground/70 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact Info</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.contact.map((item) => (
                    <li key={item.name} className="flex items-center gap-3 text-sm leading-6 text-secondary-foreground/70">
                      <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} Evergreen International Academy. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <Link href="#" className="text-xs text-secondary-foreground/50 hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-xs text-secondary-foreground/50 hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
