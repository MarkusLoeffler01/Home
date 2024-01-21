import { useState, useEffect, useRef } from 'react';

const useTypewriter = (text: string, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('');
  const startTime = useRef(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime.current;
      const charsToShow = Math.min(Math.floor(elapsedTime / speed), text.length);
      setDisplayedText(text.substring(0, charsToShow));

      if (charsToShow >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
};

export default useTypewriter;