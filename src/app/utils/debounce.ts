// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any

function debounce<T>(
	func: AnyFunction,
	timeout = 300
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): (this: T, ...args: any[]) => void {
	let timer: ReturnType<typeof setTimeout>

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return function (this: T, ...args: any[]) {
		clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, timeout)
	}
}

export default debounce
