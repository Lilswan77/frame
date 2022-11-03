import { motion } from "framer-motion"
import { useState } from "react"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  
return (
    <div className="parent-div">
      <motion.div className="container"
       whileHover={{scale: 1.2}} 
       whileTap={{scale: 1.1}}>
      
      </motion.div>
    </div>
  )
}

export default App

//drag dragConstraints={{left: -100, right: 100, top: -100, bottom:100}}