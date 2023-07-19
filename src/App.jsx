import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import * as ReactDOMNew from 'react-dom/client';
import * as ReactDOMOld from "react-dom";

function App() {

	new Set([1, 2]);
	new Map([['a', 1]]);

	return (
		<>
			<h1>Hello from react!</h1>
		</>
	);
}

const body = document.getElementsByTagName('body')[0];

/**
 * THE IMPORTANT PART:
 * ------------------------------------------------
 * The first Render function works correctly in IE10.
 * The second Render function fails in IE10.
 *
 * Comment/uncomment each function to test the difference between them
 *
 */

ReactDOMOld.render(<App/>, body);					// Working

//ReactDOMNew.createRoot(body).render(<App/>);		// NOT working