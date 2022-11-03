import { motion } from "framer-motion"

const App = () => {
  return (
    <div className="parent-div">
      <motion.div className="container" 
      whileHover={{scale: 1.2}}
      whileTap={{ scale: 1.1 }}
      drag dragConstraints={{left: -100, right: 100, top: -100, bottom:100}}/>
    </div>
  )
}

export default App