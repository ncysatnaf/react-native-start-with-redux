import React, {
	StyleSheet,
	View,
	Text,
  TouchableNativeFeedback,
  TextInput,
	Dimensions,
	TouchableOpacity,
} from 'react-native'
import SearchContainer from '../containers/SearchContainer'

let deviceWidth = Dimensions.get('window').width

class SearchBar extends React.Component {

  handleonPress(){
    const {navigator} = this.props
    navigator.push({
      component: SearchContainer,
      name: 'Search'
    })
  }

	render() {  
		return (
				  <TouchableNativeFeedback 
            onPress={e => this.handleonPress()}
            >
            <View style={styles.container}>
              <Text>大家都在搜....</Text>
            </View>
          </TouchableNativeFeedback>
		)
	}
}

let styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#ddd',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
})

export default SearchBar