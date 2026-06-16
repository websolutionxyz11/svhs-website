import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function Reveal({
  children,
  delay = 0,
  y = 24,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      children
    }
  );
}
export {
  Reveal as R
};
