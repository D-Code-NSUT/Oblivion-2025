import React from 'react'
import { motion } from "motion/react";
function sponserSection() {
  return (
    <div className='pt-30 w-full min-h-screen flex flex-col items-center overflow-hidden justify-center relative'>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
        >
    </motion.div>
    </div>
  
  )
}

export default sponserSection