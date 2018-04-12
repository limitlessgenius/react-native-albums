

import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import Card from './component_card'
import CardSection from './component_card_section'

const AlbumDetail = (props) => {

	return (
		<Card>
			<CardSection>
				<Text>{props.album.title}</Text>
			</CardSection>
		</Card>
	)
}

export default AlbumDetail


