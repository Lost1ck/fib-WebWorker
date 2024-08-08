document.forms[0].addEventListener('submit', e => {
	e.preventDefault()

	const resultElem = e.target.elements[1]
	const number = +e.target.elements[0].value

	if (window.Worker) {
		const worker = new Worker('./worker.js')

		worker.postMessage(number)

		worker.onmessage = message => {
			resultElem.value = message.data
			console.log('Get value worker', message.data)
		}
	}
})
