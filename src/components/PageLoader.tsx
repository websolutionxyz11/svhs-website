import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import logo from "../assets/logo.png";

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-primary"
        >
          <div className="flex flex-col items-center gap-6 text-primary-foreground">
            <div
             
              className="grid h-20 w-20 place-items-center "
            >
              {/* <GraduationCap className="h-10 w-10" /> */}
              <img src={logo} alt="logo" className="h-15 w-15" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-xl md:text-2xl font-extrabold tracking-wide">Sree Vidya High School</div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">Nurturing Minds · Shaping Futures</div>
            </motion.div>
            <div className="relative h-1 w-48 overflow-hidden rounded-full bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/2 bg-gold-gradient rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
