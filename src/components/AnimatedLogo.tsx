import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <motion.img
      src="/flowlogo.svg"
      alt="Flowmach Logo"
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        display: "block",
        margin: "0 auto",
        filter:
          "invert(18%) sepia(54%) saturate(1822%) hue-rotate(216deg) brightness(93%) contrast(89%)", // color #304797
      }}
      initial={{ y: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: [0, -12, 0, 8, 0], 
        rotate: [0, 2, 0, -2, 0], 
        opacity: [0, 1, 1, 1, 1], 
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
      }}
    />
  );
}
