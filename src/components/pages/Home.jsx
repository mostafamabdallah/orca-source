import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";
import whael from "../../img/orca-swim-unscreen.gif";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section id="commingSoon">
      <div className="overlay">
        <div className="container" style={{ height: "100%" }}>
          <div
            className="row justify-content-center align-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <motion.h1
              initial={{ y: "-150%", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 2,
                repeatDelay: 1,
                delay: 5,
              }}
              className="text-center  orca"
            >
              ORCA
            </motion.h1>
            <div className="col-10 col-md-6">
              <motion.img
                initial={{ x: "-150%", opacity: 0 }}
                animate={{ x: "0px", opacity: 1 }}
                transition={{
                  duration: 5,
                  repeatDelay: 1,
                }}
                src={whael}
                width="100%"
              />
            </div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                repeatDelay: 1,
                delay: 7,
              }}
              className="text-center comming-soon"
            >
              Comming Soon!
            </motion.h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
