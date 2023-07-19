# react-renter-test

Test project for demonstration the difference between ReactDOM.render and ReactDomClient.createRoot
for IE10.

===================
## Installation

1. Download the project.

2. Install dependencies:

```sh
npm i
```

3. Run project

```sh
npm run dev
```


The project conatins just one file with the absolute minimum code for running a react application.

There are two render functions at the end of /src/App.jsx. 
The first line is the old (deprecated) way to render:

```sh
ReactDOMOld.render(<App/>,	document.getElementsByTagName('body')[0]);
```
This code works fine in IE10.


The second line (the new recommended way):
```sh
ReactDOMNew.createRoot(document.getElementsByTagName('body')[0]).render(<App/>);
```
fails with error.

```sh
SCRIPT5007: Unable to get property 'type' of undefined or null reference
react-dom.development.js (1972,1)
```


Commenting/uncommenting the first/second line can reproduce the problem.

With the same code and confuguraion, changing the render method makes the difference between working and not working application.

