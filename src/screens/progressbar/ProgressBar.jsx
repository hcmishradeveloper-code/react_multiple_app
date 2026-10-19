import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProgressBar = () => {
  const [progress, setProgress] = useState(1);

  let newProgress = progress * 3.6;
  // console.log(newProgress);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress > 99) {
        clearInterval(timer);
      } else {
        setProgress(progress + 1);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <>
      <div
        style={{
          width: "90%",
          height: "20px",
          backgroundColor: "lightgray",
          marginTop: "20px",
          marginLeft:"4rem",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "blue",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundImage: `conic-gradient(from  ${newProgress}deg , red, yellow, green)`,
          margin:"2rem 4rem",
        }}
      />
      <Link className="link_click" style={{marginLeft:'4rem'}} to="/">Return to Home Page</Link>
    </>
  );
};

export default ProgressBar;
