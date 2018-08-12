

/*



 */

let rootListElmentId = ''
let rootAddNewPersonElmentId = ''

export function setRootListElementId ( id ) {
	rootListElmentId = id
}

export function getRootListElementId () {
	return rootListElmentId
}

export function setRootAddNewPersonElementId ( id ) {
	rootAddNewPersonElmentId = id
}

export function getRootAddNewPersonElementId () {
	return rootAddNewPersonElmentId
}


export function getList ( people ) {
	
	return `
		<ul id="${rootListElmentId}" class="${rootListElmentId}">
	        ${ getListItems(people).join(' ') }
        </ul>
	
	`
}

export function updateList ( people ) {
	return getListItems(people).join(' ')
}

export function getListItems( people ) {
	
	return people.map( person => {
		
		return `
		<li>
		    <div class="person" uid="${person.uid}">
			    <span>${person.firstName}</span>
			    <span>${person.lastName}</span>
			    <span>${person.age}</span>
		    </div>
		    <div class="remove-person">
			    <button>remove</button>
		    </div>
	    </li>
		
		`
		
	})
	
}

export function getDataCaptureControls() {
	
	return `
		
		<div id="add-new-person" class="add-new-person">
			<div><label for="first-name">first name</label> <input type="text" id="first-name"></div>
			<div><label for="last-name">last name</label> <input type="text" id="last-name"></div>
			<div><label for="age">Age</label> <input type="text" id="age"></div>
			<div><button>add</button></div>
		</div>
	
	`
	
}