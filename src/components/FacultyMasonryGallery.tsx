import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// ─── 1. IMPORT YOUR TEACHER PHOTOS HERE ──────────────────────────────────
import principalImg from "../assets/teachers/principal.webp";
import HeadMaster from "../assets/teachers/HeadMaster.webp";
import AccadamicIncharge from "../assets/teachers/AccadamicIncharge.webp";
import BabuNaidu from "../assets/teachers/BabuNaidu.webp";
import CheekatipalliLakshmidevi from "../assets/teachers/CheekatipalliLakshmidevi.webp";
import Manjuvani from "../assets/teachers/Manjuvani.webp";
import Mudiupiletiprathima from "../assets/teachers/Mudiupiletiprathima.webp";
import Pushpalatha from "../assets/teachers/Pushpalatha.webp";
import Rekha from "../assets/teachers/Rekha.webp";
import Shakira from "../assets/teachers/Shakira.webp";
import ThotiHaritha from "../assets/teachers/ThotiHaritha.webp";

export type FacultyTeacher = {
  img: string;
  name: string;
  subject: string;
  exp: string;
};

// ─── 2. REAL TEACHER DATA ─────────────────────────────────────────────────
const teachersData: FacultyTeacher[] = [
  {
    img: principalImg,
    name: "Dr. E. Jaya Chandra Reddy",
    subject: "Correspondent",
    exp: "M.Sc., M.Phil., B.Ed., Ph.D · 32 years experience",
  },
  {
    img: HeadMaster,
    name: "Kalikiri Giridhar",
    subject: "Mathematics",
    exp: "M.Sc., M.A., B.Ed. · 18 years experience",
  },
  {
    img: AccadamicIncharge,
    name: "Chintha Chenna Kesavulu",
    subject: "School Academic In-charge",
    exp: "B.A., J.D.C. · 30 years experience",
  },
  {
    img: BabuNaidu,
    name: "Alledu Babu Naidu",
    subject: "Social Studies",
    exp: "M.A., B.Ed. · 32 years experience",
  },
  {
    img: CheekatipalliLakshmidevi,
    name: "Cheekatipalli Lakshmidevi",
    subject: "Telugu",
    exp: "D.I.Ed. · 10 years experience",
  },
  {
    img: Manjuvani,
    name: "T. Manjuvani",
    subject: "Telugu",
    exp: "M.A. Telugu · 8 years experience",
  },
  {
    img: Mudiupiletiprathima,
    name: "Mudiupileti Prathima",
    subject: "Biology",
    exp: "B.Sc., B.Ed. · 8 years experience",
  },
  {
    img: Pushpalatha,
    name: "K. Pushpalatha",
    subject: "Mathematics",
    exp: "M.Sc., B.Ed. · 15 years experience",
  },
  {
    img: Rekha,
    name: "Pakuru Rekha",
    subject: "Telugu",
    exp: "M.A., T.P.T · 10 years experience",
  },
  {
    img: Shakira,
    name: "S. Shakira",
    subject: "Hindi",
    exp: "D.Ed. · 11 years experience",
  },
  {
    img: ThotiHaritha,
    name: "Thoti Haritha",
    subject: "Mathematics",
    exp: "B.Tech · 7 years experience",
  },
];

// ─── 3. SUBJECT-SPECIFIC MODAL CONTENT ────────────────────────────────────
// Each subject gets its own description + tags instead of one generic
// blurb for everyone. Falls back to a generic profile if a subject isn't
// listed here, so nothing breaks if a new subject is added later.

const subjectProfiles: Record<string, { description: string; tags: string[] }> = {
  Correspondent: {
    description:
      "Provides strategic leadership and vision for the institution, overseeing academic standards and long-term growth.",
    tags: ["Institutional Leadership", "Strategic Vision"],
  },
  Mathematics: {
    description:
      "Builds strong analytical and problem-solving skills, helping students approach numbers with confidence and clarity.",
    tags: ["Analytical Thinking", "Problem Solving"],
  },
  "School Academic In-charge": {
    description:
      "Coordinates academic planning and curriculum delivery, ensuring every classroom runs to a high standard.",
    tags: ["Academic Planning", "Curriculum Oversight"],
  },
  "Social Studies": {
    description:
      "Brings history, civics, and geography to life, encouraging students to think critically about the world around them.",
    tags: ["Critical Thinking", "Civic Awareness"],
  },
  Telugu: {
    description:
      "Nurtures a love for language and literature, strengthening reading, writing, and communication skills in Telugu.",
    tags: ["Language Skills", "Literary Appreciation"],
  },
  Biology: {
    description:
      "Sparks curiosity about the living world through hands-on learning and clear explanations of biological concepts.",
    tags: ["Scientific Curiosity", "Hands-on Learning"],
  },
  Hindi: {
    description:
      "Builds fluency and confidence in Hindi, helping students connect with the language through engaging lessons.",
    tags: ["Language Fluency", "Confident Communication"],
  },
};

const fallbackProfile = {
  description:
    "Dedicated educator with a passion for nurturing curiosity, confidence, and excellence in every learner.",
  tags: ["Student-focused teaching", "Leadership & mentoring"],
};

function getTeacherProfile(subject: string) {
  return subjectProfiles[subject] ?? fallbackProfile;
}

type FacultyMasonryGalleryProps = {
  badge?: string;
  title?: string;
  subtitle?: string;
  initialCount?: number;
};

export function FacultyMasonryGallery({
  badge = "Our Faculty",
  title = "Meet Our Brilliant Teachers",
  subtitle = "Experienced educators dedicated to inspiring every student.",
  initialCount = 5,
}: FacultyMasonryGalleryProps) {
  const teachers = teachersData;
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

        {teachers.length === 0 ? (
          <p className="mt-10 text-center text-sm text-slate-400">
            No teachers added yet — add entries to{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5">teachersData</code>{" "}
            in this file.
          </p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence initial={false}>
              {visibleTeachers.map((teacher, index) => (
                <motion.article
                  key={`${teacher.name}-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: index * 0.03, ease: "easeOut" }}
                  whileHover={{ y: -3 }}
                  onClick={() => setActiveTeacher(teacher)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveTeacher(teacher);
                    }
                  }}
                  className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_22px_rgba(15,23,42,0.1)]"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-[#F59E0B]/20">
                    <img
                      src={teacher.img}
                      alt={teacher.name}
                      loading="lazy"
                      width={64}
                      height={64}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B76E00]">
                      {teacher.subject}
                    </p>
                    <h3 className="mt-0.5 text-base font-bold leading-tight text-slate-900 truncate">
                      {teacher.name}
                    </h3>
                    <p className="text-xs text-slate-500">{teacher.exp}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

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
        {activeTeacher && (() => {
          const { description, tags } = getTeacherProfile(activeTeacher.subject);
          return (
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
                      {description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-[#FDE7B8] bg-[#FFF7E8] p-4">
                      <p className="text-sm font-semibold text-slate-800">Experience</p>
                      <p className="mt-1 text-sm text-slate-600">{activeTeacher.exp}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}

export default FacultyMasonryGallery;