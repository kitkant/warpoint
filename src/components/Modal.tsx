import { useEffect } from 'react'
import { useModal } from '../context/ModalContext'
import ModalResponsive from './ModalResponsive/ModalResponsive'

export default function Modal() {
	const { modal, closeModal } = useModal()

	useEffect(() => {
		if (modal) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [modal])

	if (!modal) return null

	return (
		<>
			<div className={'overlay' + ' ' + (modal ? 'active' : '')} onClick={closeModal} />
			<div className='modal'>
				{modal === 'RESPONSIVE' && <ModalResponsive/>}
				{modal === 'CALCULATE' && <p>Это модалка подсчета</p>}
				
			</div>

			<style jsx>{`
				.overlay {
					position: fixed;
					inset: 0;
					background: rgba(0, 0, 0, 0.5);
					z-index: 1000;
					backdrop-filter: blur(2px);
					transition: all 5s ease;
					opacity: 0;
					
				}
				.overlay.active{
					opacity: 1;
				}
				.modal {
					position: fixed;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 1001;
					background: #262626;
					padding: 45px;
					max-width: 600px;
				}
			`}</style>
		</>
	)
}
