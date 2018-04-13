

import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import Card from './component_card'
import CardSection from './component_card_section'

const AlbumDetail = (props) => {

	return (
		<Card>
			<CardSection>

				<View style={styles.imageStyle}>
					<Image 
					source={{uri:props.album.image}} 
					style={styles.imageStyle}
					/>
				</View>
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
		justifyContent: 'center', 
		marginLeft: 10, 
		flexDirection: 'column', 

	}, 
	imageStyle: {
		width: 200, 
		height:170, 
	}, 
	textTitleStyle: {
		fontSize: 20, 
		fontWeigth: 'bold',
		padding: 5, 

	}, 
	textArtistStyle: {
		padding: 5, 
	}, 
}


export default AlbumDetail


