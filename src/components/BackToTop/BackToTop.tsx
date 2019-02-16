import * as React from 'react';
import './BackToTop.css';
import { ExpandLessOutlined } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import { getTopScroll } from 'src/utils';

const BackToTop = () => { 
  const [showBtn, setShowBtn] = useState(false)
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const hideShowBtn = () => {
    const top = getTopScroll();
    if(top > 100){
      setShowBtn(true);
    }
    else{
      setShowBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', hideShowBtn);
    return () => {
      window.removeEventListener('scroll', hideShowBtn);
    }
  }, []);

  return (
    showBtn 
    ? <div className="back-to-top" onClick={goToTop} id='back-to-top'>
        <ExpandLessOutlined className="icon"></ExpandLessOutlined>
      </div>
    : null
  );
}

export default BackToTop;