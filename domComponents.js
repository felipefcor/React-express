import React from 'react'
import { render } from 'react-dom'

const node = document.querySelector('#app')
const element = (
	<div>
		<input type={'text'} defaultValue={'Type here!'} />
		<select>
			<option>A</option>
			<option>B</option>
		</select>
		<img src={'https://images.unsplash.com/photo-1539980307411-6820f89db71b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a613de46106ddfc2cddbd4aaf6e4b437&auto=format&fit=crop&w=987&q=80'}

	</div>
)

render(element, node)