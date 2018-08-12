import * as d3 from 'd3/dist/d3'

export function render(targetElement, people) {
	const colours = d3.scaleOrdinal(d3.schemeCategory10)
	const dimensions = targetElement.getBoundingClientRect()
	const radius = Math.min(dimensions.width, dimensions.height) / 2
	
	const chartVisual = d3.select(targetElement)
		.append('svg')
		
		.attr('width', Math.round(dimensions.width))
		.attr('height', Math.round(dimensions.height))
		.append('g')
			.attr('transform', `translate(${Math.round(dimensions.width/2)},${Math.round(dimensions.height/2)})`)
	
	const arc = d3.arc()
		.innerRadius(0)
		.outerRadius(radius)
	
	const pieSlices = d3.pie()
		.value(d => d.value)(people)
	
	const arcs = chartVisual.selectAll('g.slice')
		.data(pieSlices)
		.enter()
			.append('g')
				.attr('class', 'slice')
	
	arcs.append('path')
		.attr('fill', (d,i) => colours(i))
		.attr('d', arc)
	
	arcs.append('text')
		.attr('transform', d => 'translate(' + arc.centroid(d) + ')')
		.attr('text-anchor', 'middle')
		.attr('fill', '#fff')
		.text((d,i) => people[i].label)
	
}