
// Import libraries 
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/component_header'
import AlbumList from './src/components/component_album_list'

// Create a component

const App = () => {

	const albumHeader = 'Albums'

	return (
		<View style={{ flex: 1 }}>
			<Header headerText={albumHeader} />
			<AlbumList />
		</View>	
	)	
}
	
//Implicit return if only return JSX	
AppRegistry.registerComponent('ReactNativeAlbums', () => App)
// () => implicit return App












