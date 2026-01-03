import { useModal } from '@/context/ModalContext'
import React from 'react';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {

	const { modal } = useModal()
	return (
		<div className='LayoutWrapper' inert={!!modal}>
			{children}
		</div>
	);
};

export default LayoutWrapper;