const dataCapture = require('./data.capture')
const should = require('should')

const person = {
	firstName: 'doodle',
	lastName: 'frank',
	age:'23'
	
}

const fakeData = {
	
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

const dataSorted = [{firstName: "teno", lastName: "duckington", age: 25, uid: 4565768},
	{firstName: "alan", lastName: "smith", age: 25, uid: 4567856},
	{firstName: "jenny", lastName: "smith", age: 35, uid: 789},
	{firstName: "john", lastName: "smith", age: 45, uid: 123},
	{firstName: "melissa", lastName: "smith", age: 25, uid: 234456},
	{firstName: "roger", lastName: "smith", age: 14, uid: 4512316},
	{firstName: "sammy", lastName: "smith", age: 35, uid: 456},
	{firstName: "hanse", lastName: "xeno", age: 25, uid: 123678},
	{firstName: "becky", lastName: "zoltar", age: 25, uid: 6787980}]

describe('testing for data.capture.js', function(){
	
	describe('addPerson should be a function', function(){
		let dc = dataCapture.addPerson
		
		it('should return a function', function(){
			
			dc.should.be.instanceOf(Function)
		})
	})
	
	describe('removePerson should be a function', function(){
		let dc = dataCapture.removePerson
		
		it('should return a function', function(){
			
			dc.should.be.instanceOf(Function)
		})
	})
	
	describe('loadPeople should be a function', function(){
		let dc = dataCapture.loadPeople
		
		it('should return a function', function(){
			
			dc.should.be.instanceOf(Function)
		})
	})
	
	describe('savePeople should be a function', function(){
		let dc = dataCapture.savePeople
		
		it('should return a function', function(){
			
			dc.should.be.instanceOf(Function)
		})
	})
	
	describe('getPeopleList should be a function', function(){
		let dc = dataCapture.getPeopleList
		
		it('should return a function', function(){
			
			dc.should.be.instanceOf(Function)
		})
	})
	
	describe('sortFirstNames should be a function', function(){
		let dc = dataCapture.sortFirstNames
		
		it('should return a function', function(){
			
			dc.should.be.instanceOf(Function)
		})
	})
	
	describe('sortLastNames should be a function', function(){
		let dc = dataCapture.sortLastNames
		
		it('should return a function', function(){
			
			dc.should.be.instanceOf(Function)
		})
	})
	
	describe('generateNewUID should be a function', function(){
		let dc = dataCapture.generateNewUID
		
		it('should return a function', function(){
			
			dc.should.be.instanceOf(Function)
		})
	})
	
	describe('makeChartData should be a function', function(){
		let dc = dataCapture.makeChartData
		
		it('should return a function', function(){
			
			dc.should.be.instanceOf(Function)
		})
	})
	
	/* ========================= */
	
	describe('testing addPerson', function(){
		dataCapture.primePump()
		it('should add a new person and store it in localStore', function(){
			
			const uid = dataCapture.addPerson(person)
			
			const newPeople = dataCapture.loadPeople()
			
			newPeople[uid].should.exist
		})
		
	})
	
	describe('testing removePerson', function(){
		dataCapture.primePump()
		it('should remove the specified person by UID and store it in localStore', function(){
			
			dataCapture.removePerson(123)
			
			const newPeople = dataCapture.loadPeople()
			
			should.not.exist(newPeople["123"])
		})
		
	})
	
	describe('testing loadPeople', function(){
		dataCapture.primePump()
		it('should load the people from localStore', function(){
			
			const newPeople = dataCapture.loadPeople()
			
			newPeople.should.be.instanceOf(Object)
			
			newPeople['456'].should.exist
		})
		
	})
	
	describe('testing savePeople', function(){
		
		it('should save the people to localStore', function(){
			
			dataCapture.savePeople({})
			dataCapture.savePeople(fakeData)
			const newPeople = dataCapture.loadPeople()
			
			newPeople.should.be.instanceOf(Object)
			newPeople['456'].should.exist
		})
		
	})
	
	
	describe('testing getPeopleList', function(){
		dataCapture.primePump()
		it('should return a sorted array of people', function(){
			
			const newPeople = dataCapture.loadPeople()
			const sorted = dataCapture.getPeopleList(newPeople)
			sorted.should.be.instanceOf(Array)
			sorted.should.deepEqual(dataSorted)
		})
		
	})
	
	/* need more tests times up! */
})