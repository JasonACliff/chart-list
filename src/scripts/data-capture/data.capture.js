
/*
	JSON format for data:
	
	{
		uid: {
			firstName
			lastName
			age
			uid
			
		}
	
	}



 */


const defaultData = {
	
	123 : {
		firstName : 'john',
		lastName : 'smith',
		age : 45,
		uid : 123
	},
	456 : {
		firstName : 'sammy',
		lastName : 'smith',
		age : 35,
		uid : 456
	},
	789 : {
		firstName : 'jenny',
		lastName : 'smith',
		age : 35,
		uid : 789
	},
	4512316 : {
		firstName : 'roger',
		lastName : 'smith',
		age : 14,
		uid : 4512316
	},
	4567856 : {
		firstName : 'alan',
		lastName : 'smith',
		age : 25,
		uid : 4567856
	},
	234456 : {
		firstName : 'melissa',
		lastName : 'smith',
		age : 25,
		uid : 234456
	},
	6787980 : {
		firstName : 'becky',
		lastName : 'zoltar',
		age : 25,
		uid : 6787980
	},
	123678 : {
		firstName : 'hanse',
		lastName : 'xeno',
		age : 25,
		uid : 123678
	},
	4565768 : {
		firstName : 'teno',
		lastName : 'duckington',
		age : 25,
		uid : 4565768
	}
	
}

export function primePump() {
	savePeople(defaultData)
}

export function addPerson (person) {
	
	let people = loadPeople()
	
	person.uid = generateNewUID()
	
	people[person.uid] = person
	
	savePeople(people)
	
	return person.uid
	
}

export function removePerson (personUID) {
	
	let people = loadPeople()
	
	delete people[personUID]
	
	savePeople(people)
	
}

export function loadPeople () {
	
	const people = localStorage.getItem('people')
	console.log('--- >',JSON.parse(people))
	return JSON.parse(people)
	
}

export function savePeople (people) {
	
	localStorage.setItem('people', JSON.stringify(people));
	
}

export function getPeopleList ( people ) {
	
	return [...(Object.keys(people).map(person => people[person]))].sort(sortFirstNames).sort(sortLastNames).slice(0,10)
}

export function sortFirstNames ( nameOne, nameTwo ) {
	return nameOne.firstName.localeCompare(nameTwo.firstName)
}

export function sortLastNames ( nameOne, nameTwo ) {
	return nameOne.lastName.localeCompare(nameTwo.lastName)
}

export function generateNewUID () {
	
	return new Date().getTime()
	
}

export function makeChartData ( people ) {
	
	const newPeople = people.reduce( ( ages, person ) => {
		
		if ( ages[person.age] ) {
			ages[person.age] += 1
		} else {
			ages[person.age] = 1
		}
		
		return ages
		
	}, {})
	
	return Object.keys(newPeople).map( key => { return {label : key, value: newPeople[key]} })
	
	
	
	
}
