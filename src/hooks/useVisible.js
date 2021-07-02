import {useEffect, useRef, useState} from "react";

const useVisible = () => {
  const [visible, setVisible] = useState(false);
  const placeholderRef = useRef(null);
  useEffect(() => {

    if (!visible && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setVisible(true);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [visible, placeholderRef]);
  return {visible, placeholderRef}
};

export default useVisible
