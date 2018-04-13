

import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import Card from './component_card'
import CardSection from './component_card_section'

const AlbumDetail = (props) => {

	return (
		<Card>
			<CardSection>
				<Image 
					source={{uri:props.album.image}} 
					style={styles.imageStyle}
				/>
				<View style={styles.textViewStyle}>
					<Text style={styles.textTitleStyle}>{props.album.title}</Text>
					<Text style={styles.textArtistStyle}>{props.album.artist}</Text>
				</View>
			</CardSection>
		</Card>
	)
}

const styles = {
	textViewStyle: {
		alignItems: 'flex-end', 

	}, 
	textTitleStyle: {
		fontSize: 20, 
		fontWeigth: 'bold',

	}, 
	textArtistStyle: {

	}, 
	imageStyle: {
		width: 200, 
		height:170, 
	}, 
}


export default AlbumDetail


