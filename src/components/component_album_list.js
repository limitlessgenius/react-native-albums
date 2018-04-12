

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AlbumDetail from './component_album_detail'

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

	renderAlbums() {
		return this.state.albums.map(album => {
			return (
				<AlbumDetail 
					key={album.title} 
					albumArtist={album.artist}
					albumTitle={album.title}
					albumImage={album.image}
					albumThumbnail={album.thumbnail_image}
					albumUrl={album.url}
				/>	
			)
		})
	}

	render() {
		return(
			<View>
				{this.renderAlbums()}	
			</View>
		)	
	}
}

export default AlbumList





// 