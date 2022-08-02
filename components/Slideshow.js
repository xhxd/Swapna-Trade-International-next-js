import React, { useState, useEffect } from "react";
import image1 from "../public/images/slideshowImage1.jpg";
import image2 from "../public/images/slideshowImage2.jpg";
import image3 from "../public/images/slideshowImage4.jpeg";
import Image from "next/image";
import slideStyle from "../styles/slideshow.module.css";

const styles = {
  slideshow: `w-[100%] flex flex-col justify-center items-center`,
  slideshowContainer: `max-w-[1500px] h-[35vw] relative mt-[20px] w-[95%] flex justify-center items-center`,
  mySlides: `w-[100%] h-[100%]`,
  slideImage: `rounded-[20px] max-h-[33vw] w-[100%]`,
  fade: ``,
  prev: `cursor-pointer absolute top-[50%] w-[13px] h-[13px] mt-[-22px] p-[16px] text[rgba(107, 107, 107, 0.8)] font-bold text-[18px] transition duration-0.6 ease z-10 select-none flex justify-center items-center rounded-[50px] bg-transparent group-hover:bg-[#000000cc] group-hover:text-white left-[20px] hover:bg-[#000000cc] hover:text-white`,
  next: `cursor-pointer absolute top-[50%] w-[13px] h-[13px] mt-[-22px] p-[16px] text[rgba(107, 107, 107, 0.8)] font-bold text-[18px] transition duration-0.6 ease z-10 select-none flex justify-center items-center rounded-[50px] bg-transparent group-hover:bg-[#000000cc] group-hover:text-white right-[20px] hover:bg-[#000000cc] hover:text-white`,
  allDots: ``,
  active: `cursor-pointer h-[15px] w-[15px] my-[10px] mx-[2px] bg-[#717171] rounded-[50%] inline-block transition ease-in-out duration-600`,
  dot: `cursor-pointer h-[15px] w-[15px] my-[10px] mx-[2px] bg-[#bbb] rounded-[50%] inline-block transition ease-in-out duration-600`,
};

const Slideshow = () => {
  const imgArr = [image1, image2, image3];

  const [renderCount, setRenderCount] = useState(0);
  const [currentImage, setCurrentImage] = useState(imgArr[renderCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRenderCount((prevCount) => prevCount + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (renderCount > 2) {
    setRenderCount(0);
  }

  if (renderCount < 0) {
    setRenderCount(2);
  }

  useEffect(() => {
    setCurrentImage(imgArr[renderCount]);
  }, [renderCount]);

  return (
    <div className={styles.slideshow}>
      <div className={`${styles.slideshowContainer} slideshowCon group`}>
        {/*Full width image with number and caption*/}
        <div className={`${styles.mySlides} ${slideStyle.fade}`}>
          <Image
            src={currentImage}
            alt=""
            layout="fill"
            className={styles.slideImage}
          />
        </div>

        <a
          className={styles.prev}
          onClick={() => {
            setRenderCount((prevCount) => prevCount - 1);
          }}
        >
          &#10094;
        </a>
        <a
          className={styles.next}
          onClick={() => {
            setRenderCount((prevCount) => prevCount + 1);
          }}
        >
          &#10095;
        </a>
      </div>

      {/*The dots/circles*/}
      <div style={{ textAlign: "center" }} className={styles.allDots}>
        <span
          className={renderCount === 0 ? styles.active : styles.dot}
          onClick={() => {
            setRenderCount(0);
          }}
        ></span>
        <span
          className={renderCount === 1 ? styles.active : styles.dot}
          onClick={() => {
            setRenderCount(1);
          }}
        ></span>
        <span
          className={renderCount === 2 ? styles.active : styles.dot}
          onClick={() => {
            setRenderCount(2);
          }}
        ></span>
      </div>
    </div>
  );
};

export default Slideshow;
