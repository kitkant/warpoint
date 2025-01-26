import HeaderFixed from '@/features/Header/features/HeaderFixed/HeaderFixed'
import Header from '@/features/Header/Header'
import React, { Fragment } from 'react';
import { useEffect, useState } from "react";


const HeaderLayout = () => {
	const [scrollY, setScrollY] = useState(0);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
	return (
		<>
			<Header />	
      <HeaderFixed scroll={scrollY}/>

		</>
	);
};

export default HeaderLayout;