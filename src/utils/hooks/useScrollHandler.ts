import { useEffect, useState } from 'react';

export const useScrollHandler = (val: number) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > val;
      setScroll(scrollCheck);
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
