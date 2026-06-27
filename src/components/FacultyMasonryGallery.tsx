import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export type FacultyTeacher = {
  img: string;
  name: string;
  subject: string;
  exp: string;
  heightClass?: string;
};

type FacultyMasonryGalleryProps = {
  teachers: FacultyTeacher[];
  badge?: string;
  title?: string;
  subtitle?: string;
  initialCount?: number;
};

const defaultHeights = [
  "h-48 sm:h-56",
  "h-60 sm:h-72",
  "h-52 sm:h-64",
  "h-68 sm:h-80",
  "h-56 sm:h-68",
  "h-44 sm:h-56",
  "h-64 sm:h-76",
  "h-50 sm:h-60",
];

export function FacultyMasonryGallery({
  teachers,
  badge = "Our Faculty",
  title = "Meet Our Brilliant Teachers",
  subtitle = "Experienced educators dedicated to inspiring every student.",
  initialCount = 5,
}: FacultyMasonryGalleryProps) {
  const [activeTeacher, setActiveTeacher] = useState<FacultyTeacher | null>(null);
  const [showAll, setShowAll] = useState(false);

  const hasMore = teachers.length > initialCount;
  const visibleTeachers = showAll ? teachers : teachers.slice(0, initialCount);

  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#F59E0B]/20 bg-[#FFF7E8] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B76E00]">
            {badge}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="mt-10 w-full max-w-7xl columns-2 sm:columns-3 md:columns-3 lg:columns-5 xl:columns-6 2xl:columns-7">
            <AnimatePresence initial={false}>
              {visibleTeachers.map((teacher, index) => {
                const heightClass =
                  teacher.heightClass ?? defaultHeights[index % defaultHeights.length];

                return (
                  <motion.article
                    key={`${teacher.name}-${index}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
                    whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 45px rgba(15, 23, 42, 0.14)" }}
                    className="group relative mb-3 break-inside-avoid overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-[0_10px_25px_rgba(15,23,42,0.08)] sm:mb-4 cursor-pointer"
                    onClick={() => setActiveTeacher(teacher)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveTeacher(teacher);
                      }
                    }}
                  >
                    <div className={`relative overflow-hidden ${heightClass}`}>
                      <img
                        src={teacher.img}
                        alt={teacher.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="absolute inset-x-0 bottom-0 p-4 text-white transition duration-300 group-hover:-translate-y-1 sm:p-5">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FFD166]">
                              {teacher.subject}
                            </p>
                            <h3 className="mt-1 text-base font-semibold leading-tight sm:text-lg">
                              {teacher.name}
                            </h3>
                          </div>
                          <span className="rounded-full border border-white/30 bg-white/10 p-2 backdrop-blur-sm transition duration-300 group-hover:scale-105">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>

                        <p className="mt-2 text-sm text-white/80">{teacher.exp}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Show More / Show Less control */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show All {teachers.length} Teachers <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {activeTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
            onClick={() => setActiveTeacher(null)}
          >
            <motion.div
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 10, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-[90vw] max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setActiveTeacher(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-700 shadow-sm transition hover:scale-105"
                aria-label="Close teacher profile"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                <div className="h-72 overflow-hidden md:h-full">
                  <img
                    src={activeTeacher.img}
                    alt={activeTeacher.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B76E00]">
                    {activeTeacher.subject}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {activeTeacher.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    Dedicated educator with a passion for nurturing curiosity, confidence, and excellence in every learner.
                  </p>

                  <div className="mt-6 rounded-2xl border border-[#FDE7B8] bg-[#FFF7E8] p-4">
                    <p className="text-sm font-semibold text-slate-800">Experience</p>
                    <p className="mt-1 text-sm text-slate-600">{activeTeacher.exp}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                      Student-focused teaching
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                      Leadership & mentoring
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default FacultyMasonryGallery;