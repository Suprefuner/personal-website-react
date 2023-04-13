export const parentVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
