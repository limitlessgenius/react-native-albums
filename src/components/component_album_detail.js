

import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import Card from './component_card'

const AlbumDetail = (props) => {

	console.log(props.album.title)

	return (
		<Card>

			<Text>{props.album.title}</Text>
			
		</Card>
	)
}

export default AlbumDetail


