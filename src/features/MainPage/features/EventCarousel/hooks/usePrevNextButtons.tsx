import type { EmblaCarouselType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined) => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

	const scrollPrev = useCallback(() => {
		if (!emblaApi) return
		emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (!emblaApi) return
		emblaApi.scrollNext()
	}, [emblaApi])

	const updateButtonsState = useCallback(() => {
		if (!emblaApi) return
		setPrevBtnDisabled(!emblaApi.canScrollPrev())
		setNextBtnDisabled(!emblaApi.canScrollNext())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return

		updateButtonsState()
		emblaApi.on('select', updateButtonsState)
		emblaApi.on('reInit', updateButtonsState)

		return () => {
			emblaApi.off('select', updateButtonsState)
			emblaApi.off('reInit', updateButtonsState)
		}
	}, [emblaApi, updateButtonsState])

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick: scrollPrev,
		onNextButtonClick: scrollNext,
	}
}
