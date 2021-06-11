import React from "react";
import { AnimatePresence,motion } from "framer-motion";

export class Login extends React.Component {
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
        <div className="header">Login</div>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </motion.div>
    );
  }
}