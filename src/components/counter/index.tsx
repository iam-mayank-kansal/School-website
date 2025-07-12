'use client';

import {
  GraduationCap,
  Clock,
  CalendarDays,
  School,
  LucideIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface SchoolItem {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

const SchoolData: SchoolItem[] = [
  { value: 98, suffix: '%', label: 'Graduation Rate', icon: GraduationCap },
  { value: 6, suffix: 'h', label: 'Avg. Study Time/Day', icon: Clock },
  { value: 12, suffix: '', label: 'School Events/Year', icon: CalendarDays },
  { value: 1500, suffix: '+', label: 'Students Enrolled', icon: School },
];

export default function Counter() {
  const [counts, setCounts] = useState<number[]>(SchoolData.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1500;
          const start = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const updated = SchoolData.map((stat) =>
              Math.floor(stat.value * progress)
            );
            setCounts(updated);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[400px] w-full flex flex-col justify-center items-center bg-[url('/images/counter-bg-1.png')] bg-center bg-cover relative mb-[20px] py-[30px]"
    >
      <div className="absolute inset-0 bg-[#000000ac] z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center text-white">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Where Growth Begins</h3>
          <p className="mt-2 max-w-md">
            From strong completion rates to a thriving student body — here's what makes us proud.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
          {SchoolData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <Icon className="w-10 h-10 text-[#144AE9]" />
                <div className="text-left">
                  <p className="text-3xl font-bold">
                    {counts[idx].toLocaleString()}
                    {stat.suffix}
                  </p>
                  <p className="text-sm mt-1">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
