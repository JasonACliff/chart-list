import * as listView from '../list-view/list.view'
import * as dataCapture from '../data-capture/data.capture'
import * as chartView from '../chart/chart'

const rootListElementID = 'people'
const rootAddNewPersonElementId = 'add-new-person'
const rootChartId = 'chart'

export function start ( targetElement ) {
	
	const people = dataCapture.getPeopleList(dataCapture.loadPeople())
	
	listView.setRootListElementId(rootListElementID)
	listView.setRootAddNewPersonElementId(rootAddNewPersonElementId)
	
	render(targetElement, people)
	
	chartView.render(document.getElementById(rootChartId), dataCapture.makeChartData(people))
	
	setUpEvents(targetElement)
	
}

export function updateView ( targetElement ) {
	
	return () => {
		
		const people = dataCapture.getPeopleList(dataCapture.loadPeople())
		console.log('::>', people)
		document.getElementById(listView.getRootListElementId())
			.innerHTML = listView.updateList(people)
		
		const chartTarget = document.getElementById(rootChartId)
		chartTarget.innerHTML = ''
		chartView.render(chartTarget, dataCapture.makeChartData(people))
		
		
	}
}

export function setUpEvents ( targetElement ) {
	
	const update = updateView(targetElement)
	
	document.getElementById(rootListElementID).addEventListener('click', event => handleDeleteListItem(event, update))
	document.getElementById(rootAddNewPersonElementId).addEventListener('click', event => handleAddListItem(event, update))
	
	
}

export function handleDeleteListItem ( event, update ) {
	let uid = ''
	if ( event.target.nodeName.toLowerCase() === 'button' ) {
		uid = event.target.parentNode.previousElementSibling.getAttribute( 'uid' )
		dataCapture.removePerson( uid )
		update()
	}
	
	
	
}

export function handleAddListItem ( event, update) {
	
	if ( event.target.nodeName.toLowerCase() === 'button' ) {
		
		const rootNode = event.target.parentNode.previousElementSibling.parentNode
		
		dataCapture.addPerson( {
			firstName : rootNode.querySelector('#first-name').value,
			lastName : rootNode.querySelector('#last-name').value,
			age : parseInt(rootNode.querySelector('#age').value, 10)
		} )
		
		update()
	}
}

export function render (targetElement, people) {
	
	targetElement.innerHTML = `
		${ listView.getList(people) }
		<div id="chart" class="chart"></div>
	    ${ listView.getDataCaptureControls() }
	`
	
	
}

