import React, {useState } from 'react';
import { motion, AnimateSharedLayout} from "framer-motion";


function App() {

  const [cellId, setCellId] = useState()
  const [cellOpen, setCellOpen] = useState(false)


  return (
    
                <AnimateSharedLayout>
            <motion.div className="grid grid-cols-1 md:grid-cols-6 grid-rows-24 md:grid-rows-6 grid-flow-row gap-8 h-full md: h-screen bg-gradient-to-t from-windLight to-windDark p-24" layout initial="hidden">
               
                <motion.div 
                className={`${cellOpen ? cellId===1 ? "md:col-span-4 row-span-4" : "md:col-span-2 row-span-2" : "md:col-span-2 row-span-3"} bg-gradient-to-r from-sunsetLight to-sunsetDark rounded-3xl p-4 md:p-12`} 
                onClick={()=> {
                  if (cellOpen && cellId===1) {setCellOpen(false)} else {setCellOpen(true); setCellId(1)}}}
                layout >
                  <h2 className="font-normal text-white text-xl md:text-5xl">First Cell</h2>
                </motion.div>
                
                <motion.div 
                className={`${cellOpen ? cellId===2 ? "md:col-span-4 row-span-4" : "md:col-span-2 row-span-2" : "md:col-span-2 row-span-3"} bg-gradient-to-r from-sunsetLight to-sunsetDark rounded-3xl p-4 md:p-12`} 
                onClick={()=> {
                  if (cellOpen && cellId===2) {setCellOpen(false)} else {setCellOpen(true); setCellId(2)}}}
                layout >
                  <h2 className="font-normal text-white text-xl md:text-5xl">Second Cell</h2>
                </motion.div>

                <motion.div 
                className={`${cellOpen ? cellId===3 ? "md:col-start-3 md:col-end-7 md:row-start-1 md:row-end-5 row-span-4" : "md:col-span-2 row-span-2" : "md:col-span-2 row-span-3"} bg-gradient-to-r from-sunsetLight to-sunsetDark rounded-3xl p-4 md:p-12`} 
                onClick={()=> {
                  if (cellOpen && cellId===3) {setCellOpen(false)} else {setCellOpen(true); setCellId(3)}}}
                layout >
                  <h2 className="font-normal text-white text-xl md:text-5xl">Third Cell</h2>
                </motion.div>

                <motion.div 
                className={`${cellOpen ? cellId===4 ? "md:col-span-4 row-span-4" : "md:col-span-2 row-span-2" : "md:col-span-2 row-span-3"} bg-gradient-to-r from-sunsetLight to-sunsetDark rounded-3xl p-4 md:p-12`} 
                onClick={()=> {
                  if (cellOpen && cellId===4) {setCellOpen(false)} else {setCellOpen(true); setCellId(4)}}}
                layout >
                  <h2 className="font-normal text-white text-xl md:text-5xl">Fourth Cell</h2>
                </motion.div>

                <motion.div 
                className={`${cellOpen ? cellId===5 ? "md:col-span-4 row-span-4" : "md:col-span-2 row-span-2" : "md:col-span-2 row-span-3"} bg-gradient-to-r from-sunsetLight to-sunsetDark rounded-3xl p-4 md:p-12`} 
                onClick={()=> {
                  if (cellOpen && cellId===5) {setCellOpen(false)} else {setCellOpen(true); setCellId(5)}}}
                layout >
                  <h2 className="font-normal text-white text-xl md:text-5xl">Fifth Cell</h2>
                </motion.div>

                <motion.div 
                className={`${cellOpen ? cellId===6 ? "md:col-start-3 md:col-end-7 row-span-4 md:row-start-3 md:row-end-7" : "md:col-span-2 row-span-2" : "md:col-span-2 row-span-3"} bg-gradient-to-r from-sunsetLight to-sunsetDark rounded-3xl p-4 md:p-12`} 
                onClick={()=> {
                  if (cellOpen && cellId===6) {setCellOpen(false)} else {setCellOpen(true); setCellId(6)}}}
                layout >
                  <h2 className="font-normal text-white text-xl md:text-5xl">Sixth Cell</h2>
                </motion.div>

            </motion.div> 
            </AnimateSharedLayout>
            
  )
}

export default App;
