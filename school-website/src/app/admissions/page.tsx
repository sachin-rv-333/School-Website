'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, CheckCircle2, AlertCircle, ArrowRight, Download, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    num: '01',
    title: 'Inquiry',
    description: 'Fill out the online inquiry form or visit our campus for an initial briefing.',
    icon: FileText,
  },
  {
    num: '02',
    title: 'Application',
    description: 'Submit the formal application along with the required academic documents.',
    icon: Calendar,
  },
  {
    num: '03',
    title: 'Assessment',
    description: 'Students undergo a grade-appropriate assessment (entrance test and interview).',
    icon: CheckCircle2,
  },
  {
    num: '04',
    title: 'Enrollment',
    description: 'Upon selection, complete the fee formalities and confirm your seat.',
    icon: ArrowRight,
  },
];

const importantDates = [
  { event: 'Inquiry Opens', date: 'January 15th, 2024' },
  { event: 'Application Deadline', date: 'March 30th, 2024' },
  { event: 'Entrance Exam (Batch 1)', date: 'April 10th, 2024' },
  { event: 'Result Announcement', date: 'April 20th, 2024' },
];

export default function Admissions() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-12 md:pt-20">
      {/* Hero */}
      <section className="section-container text-center max-w-4xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex p-4 rounded-3xl bg-primary/10 mb-8 border border-primary/20"
        >
           <GraduationCap className="h-10 w-10 text-primary" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black mb-8 italic"
        >
          Begin Your <span className="text-primary italic">Journey</span> at Evergreen.
        </motion.h1>
        <p className="text-xl text-muted-foreground leading-relaxed italic mb-10 max-w-2xl mx-auto">
          Joining Evergreen International Academy is more than just getting an admission; it's the first step towards a life of achievement and discovery.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">Apply Online Now</button>
           <button className="bg-secondary hover:bg-secondary/80 text-foreground px-10 py-4 rounded-full font-black text-lg transition-all flex items-center gap-2 justify-center border border-border">Download Info Pack <Download className="h-5 w-5" /></button>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-secondary/30 dark:bg-secondary/10 py-24 border-y border-border">
          <div className="section-container">
            <div className="text-center mb-20 max-w-2xl mx-auto">
               <h2 className="text-5xl font-black mb-6 italic underline decoration-primary decoration-8 decoration-wavy underline-offset-8">Admission Process</h2>
               <p className="text-xl text-muted-foreground">Follow these simple steps to secure your child's place in our upcoming batch.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
               {/* Connecting line for desktop */}
               <div className="hidden lg:block absolute top-[6.5rem] left-[10%] right-[10%] h-1 bg-border z-0" />
               
               {steps.map((step, idx) => (
                 <motion.div
                   key={step.num}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   viewport={{ once: true }}
                   className="relative z-10 flex flex-col items-center text-center p-8 rounded-[3.5rem] bg-background border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                 >
                   <div className="h-5 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black absolute top-5 -translate-y-1/2">
                      {step.num}
                   </div>
                   <div className="h-16 w-16 rounded-[2rem] bg-primary/10 flex items-center justify-center mb-8 mt-4 group-hover:bg-primary transition-colors">
                      <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                   </div>
                   <h3 className="text-2xl font-bold mb-4 italic">{step.title}</h3>
                   <p className="text-muted-foreground font-medium leading-relaxed italic">{step.description}</p>
                 </motion.div>
               ))}
            </div>
          </div>
      </section>

      {/* Criteria & Dates */}
      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-4xl font-extrabold mb-10 italic">Eligibility Criteria</h2>
             <div className="space-y-6">
                {[
                  { grade: 'Pre-Primary (Playgroup)', age: '2.5 to 3.5 Years and above' },
                  { grade: 'Primary (Grades 1-5)', age: '6 Years and above for Grade 1' },
                  { grade: 'Secondary (Grades 6-10)', age: 'Based on previous academic record' },
                  { grade: 'High School (Grades 11-12)', age: 'Minimum 75% in previous board exams' },
                ].map((item) => (
                  <div key={item.grade} className="p-6 rounded-3xl bg-secondary dark:bg-secondary/50 border border-border flex justify-between items-center group hover:border-primary/30 transition-all">
                     <h4 className="text-lg font-bold group-hover:text-primary">{item.grade}</h4>
                     <span className="text-sm font-semibold opacity-60 italic">{item.age}</span>
                  </div>
                ))}
             </div>
             
             <div className="mt-12 p-8 rounded-[3rem] border border-amber-500/20 bg-amber-500/5 flex gap-6 items-start">
                <AlertCircle className="h-8 w-8 text-amber-500 shrink-0 mt-1" />
                <div>
                   <h4 className="text-xl font-bold text-amber-600 mb-2">Important Notice</h4>
                   <p className="text-sm text-amber-900/70 dark:text-amber-200/70 leading-relaxed italic">Admissions are granted strictly on merit and subject to the availability of seats. We encourage early applications for smoother processing.</p>
                </div>
             </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
             <h2 className="text-4xl font-extrabold mb-10 italic">Academic Calendar (Admissions)</h2>
             <div className="flex-grow rounded-[3.5rem] overflow-hidden border border-border shadow-xl shadow-primary/5">
                {importantDates.map((item, idx) => (
                  <div key={item.event} className={cn(
                    "p-8 flex justify-between items-center group hover:bg-secondary transition-colors cursor-default",
                    idx !== importantDates.length - 1 ? "border-b border-border/50" : ""
                  )}>
                    <div>
                       <h4 className="text-xl font-bold italic mb-1 group-hover:text-primary">{item.event}</h4>
                       <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">{item.date}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:border-primary group-hover:bg-primary transition-all">
                       <Calendar className="h-5 w-5 group-hover:text-primary-foreground" />
                    </div>
                  </div>
                ))}
                
                <div className="p-8 bg-primary rounded-b-[3.5rem] text-center text-primary-foreground">
                   <p className="font-bold text-lg mb-2 italic">Need immediate help?</p>
                   <p className="text-sm opacity-80 mb-6">Contact our admission counseling desk available Mon-Fri, 9AM-4PM.</p>
                   <button className="bg-white text-primary px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all">Call +1 (555) 000-0000</button>
                </div>
             </div>
          </motion.div>
      </section>

      {/* FAQ CTA */}
      <section className="section-container">
          <div className="p-12 md:p-20 rounded-[4rem] bg-secondary dark:bg-secondary/50 border border-dashed border-primary shadow-inner text-center">
             <h2 className="text-4xl font-black mb-6 italic">Have more questions?</h2>
             <p className="text-xl text-muted-foreground mb-12 italic max-w-2xl mx-auto">We understand that choosing a school is a big decision. Visit our Frequently Asked Questions or schedule a one-on-one session with our Principal.</p>
             <div className="flex flex-wrap justify-center gap-6 font-bold uppercase tracking-widest text-sm">
                <button className="text-primary hover:underline underline-offset-4">Read our FAQs</button>
                <span className="opacity-30 self-center hidden sm:block">•</span>
                <button className="text-primary hover:underline underline-offset-4">Terms of Admission</button>
                <span className="opacity-30 self-center hidden sm:block">•</span>
                <button className="text-primary hover:underline underline-offset-4">Scholarship Info</button>
             </div>
          </div>
      </section>
    </div>
  );
}
