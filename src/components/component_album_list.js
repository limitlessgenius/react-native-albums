

import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AlbumList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			albums: []
		}
	}

	componentWillMount() {	
	fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then(res => res.json())
		.then(albums => this.setState({ albums }) )
	}

	render() {
		return(
			<View> 
				<Text> · ALBUM LIST RENDERING · </Text>
			</View>
		)	
	}
}

export default AlbumList





// 