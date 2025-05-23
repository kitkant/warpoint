'use client'
import React from 'react';
import styled from '@emotion/styled'


const Button = ({title, primary, width, height, onClick, header}) => {

	return (
		<Btn primary={primary} width={width} height={height} onClick={onClick} header={header}>
			{title}
		</Btn>
	);
};

const Btn = styled.button`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	font-family: gilroy, gilroy Fallback;
	line-height: 1.55;
	font-weight: 400;
	background-color: ${props => (!props.primary ? ' #333333' : '#3970f6')};
	transition: all 0.3s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: ${props => props.header ? '13px' : '16px'};
	border: none;
	cursor:pointer;
	&:hover{
	background-color: #2551c2;

	}
`
export default Button;