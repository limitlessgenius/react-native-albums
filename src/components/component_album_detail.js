

import React from 'react'
import { View, Text, Image } from 'react-native'

import Card from './component_card'
import CardSection from './component_card_section'

import Button from './component_button'

import { Linking } from 'react-native'

// const album = props.album
const AlbumDetail = ({album}) => {

	//Importance of destructuring plus making in arguments on site as album: { further_prop }
	const { title, artist, thumbnail_image, image, url } = album
	const { 
		imageStyle, 
		textTitleStyle, 
		textArtistStyle, 
		textContainerStyle, 
		thumbnailStyle, 
		thumbnailContainerStyle } = styles

	const onPressHandler = () => Linking.openURL(url) 

	return (
		<Card>


			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
					source={{uri:thumbnail_image}} 
					style={thumbnailStyle}
					/>
				</View>
				<View style={textContainerStyle}>
					<Text style={textTitleStyle}>{title}</Text>
					<Text style={textArtistStyle}>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
					<Image
					source={{uri:image}}
					style={imageStyle}
					/>
			</CardSection>

			<CardSection>
				<Button onPress={() => onPressHandler()} />
			</CardSection>


		</Card>
	)
}

const styles = {
	thumbnailContainerStyle: {
		justifyContent: 'center', 
		alignItems: 'center', 
		marginLeft: 10, 
		marginRight: 10, 
	}, 
	thumbnailStyle: {
		width: 50, 
		height: 50, 
	}, 
	textContainerStyle: {
		flexDirection: 'column', 
		justifyContent: 'space-around', 
		marginLeft: 10, 
	}, 
	textTitleStyle: {
		fontSize: 20, 
		fontWeight: 'bold',
	},
	imageStyle: {
		height: 300, 
		flex: 1, 
		width: null, 
	}
}


export default AlbumDetail




