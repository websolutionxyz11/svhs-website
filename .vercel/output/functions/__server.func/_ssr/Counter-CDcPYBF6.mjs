import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useInView, a as useMotionValue, b as useSpring } from "../_libs/framer-motion.mjs";
function Counter({ to, suffix = "", duration = 2 }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1e3, bounce: 0 });
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);
  reactExports.useEffect(() => {
    return spring.on("change", (v) => setVal(Math.floor(v)));
  }, [spring]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val.toLocaleString(),
    suffix
  ] });
}
export {
  Counter as C
};
