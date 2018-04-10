
// Import libraries 
import React from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/component_header'

// Create a component

const App = () => (

	<Header headerText={'Albums'}/>
)


//Implicit return if only return JSX	
AppRegistry.registerComponent('ReactNativeAlbums', () => App)
// () => implicit return App












