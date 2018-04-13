
import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	)
}

const styles = {
	containerStyle: {
		borderBottomWidth: 1, 
		padding: 5, 
		backgroundColor: '#fff', 
		flexDirection: 'row', 
		alignItems: 'flex-start', 
		borderColor: '#ddd', 
		position: 'relative', 
	}
}

export default CardSection

