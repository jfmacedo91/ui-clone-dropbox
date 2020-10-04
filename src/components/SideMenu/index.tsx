import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const scrollTreshold = 300;

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return() => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollTreshold ? 'scrollOpen' : '',
  ];

  const className = classes.join(' ').trim()

  return (
    <Container className={className}>{children}</Container>
  );
}

export default SideMenu;