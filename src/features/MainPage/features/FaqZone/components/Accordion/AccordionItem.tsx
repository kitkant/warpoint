import styled from '@emotion/styled'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import Plus from '../UI/Plus'

interface IProps {
	question: string
	answer: string
	isOpen: boolean
	onClick: MouseEventHandler
}

const AccordionItem = ({ question, answer, isOpen, onClick }: IProps) => {
	const contentHeight = useRef<HTMLDivElement>(null)
	const [scrollHeight, setScrollHeight] = useState(0)

	// Обновляем scrollHeight при изменении контента
	useEffect(() => {
		if (contentHeight.current) {
			setScrollHeight(contentHeight.current.scrollHeight)
		}
	}, [answer]) // Зависимость от answer, если он может меняться

	return (
		<Wrapper>
			<WrapperQuestion
				className={`question-container ${isOpen ? 'active' : ''}`}
				onClick={onClick}
			>
				<Question className='question-content'>{question}</Question>
				<WrapperPlus
					className={isOpen ? 'active' + ' ' + 'wrapperPlus' : 'wrapperPlus'}
				>
					<Plus />
				</WrapperPlus>
			</WrapperQuestion>
			<AnswerContainer
				ref={contentHeight}
				className='answer-container'
				style={
					isOpen ? { height: `${scrollHeight + 25}px` } : { height: '0px' }
				}
			>
				<Answer className='answer-content'>{answer}</Answer>
			</AnswerContainer>
		</Wrapper>
	)
}
const WrapperPlus = styled.div`
	height: 48px;
	width: 48px;
	min-width: 48px;
	min-height: 48px;
	transition: 1s;
	display: flex;
	align-items: center;
	justify-content: center;
	&.active {
		transform: rotate(45deg);
	}
	border-radius: 50%;
`
const Wrapper = styled.div`
	width: 100%;
	border-bottom: 1px solid #868686;
	padding-top: 56px;
	overflow: hidden;
	@media (max-width: 960px) {
		padding-top: 48px;
	}
`
const Question = styled.p`
	font-size: 24px;
	line-height: 150%;
	letter-spacing: 0;
	font-weight: 700;
	color: #fbfbfb;
	max-width: 90%;
	text-align: start;
	@media (max-width: 640px) {
		font-size: 20px;
	}
`
const Answer = styled.p`
	color: #fbfbfb;
	font-size: 18px;
	line-height: 32px;
	letter-spacing: 0;
	max-width: 90%;
	@media (max-width: 640px) {
		font-size: 16px;
	}
`
const WrapperQuestion = styled.button`
	background-color: transparent;
	border: none;
	width: 100%;
	align-items: center;
	display: flex;
	justify-content: space-between;
	transition: all ease 0.3s;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
		& .wrapperPlus {
			background-color: #fbfbfb;
		}
	}
`
const AnswerContainer = styled.div`
	padding-top: 32px;
	transition: all ease 1s;
	@media (max-width: 960px) {
		padding-top: 28px;
	}

`
export default AccordionItem
