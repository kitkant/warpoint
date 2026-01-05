import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
import data from '../../data/AccordionData.js';
import styled  from '@emotion/styled';

const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleItemClick = (index: any) => {
	 setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};
 
	return (
	 <Wrapper >
		 {data.map((item, index) => (
		 <AccordionItem
			key={index}
			question={item.question}
			answer={item.answer}
			isOpen={activeIndex === index}
			onClick={() => handleItemClick(index)}
		 />
		))}
	 </Wrapper>
	)
 };

const Wrapper = styled.div`
	width: 100%; 
 `
export default Accordion;