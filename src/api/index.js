export async function listHome() {
	const response = await fetch(process.env.REACT_APP_URL)
	if (!response.ok) throw Error('Не удалось загрузить список')
	return await response.json()
}

export async function detailsById(id) {
	const response = await fetch(`${process.env.REACT_APP_URL}/${id}`)
	if (!response.ok) throw Error('Не удалось загрузить подробную информацию')
	return await response.json()
}
