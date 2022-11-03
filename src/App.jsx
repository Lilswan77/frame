import { motion, useDragControls } from "framer-motion";

const App = () => {
  const controls = useDragControls();

  const startDrag = (e) => {
    controls.start(e, { snapToCursor: true });
  };

  return (
    <div onPointerDown={startDrag}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragListener={false}
        dragControls={controls}
        dragConstraints={{
          top: 100,
          left: 100,
          right: 500,
          bottom: 500,
        }}
        className="save-button"
      >
        Launch modal
      </motion.button>
    </div>
  );
};

export default App;
