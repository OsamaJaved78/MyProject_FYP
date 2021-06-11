import React from "react";
import loginImg from "../login.svg";
import { AnimatePresence,motion } from "framer-motion";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <motion.div 
      initial={{opacity: 0}} 
		  animate={{opacity:1}}
		  exit={{opacity: 0 }}
      className="base-container" ref={this.props.containerRef}>

        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src="/assets/images/login.svg" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Phone Number</label>
              <input type="integer" name="Phone" placeholder="Phone Number" />
            </div>
            
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </motion.div>
    );
  }
}