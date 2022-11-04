import { motion } from "framer-motion";
import { useState } from "react";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="parent"
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 30 }}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.1 }}
    >
      </motion.div>
  );
};

export default App
