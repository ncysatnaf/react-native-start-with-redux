import React,{
  StyleSheet,
  View,
  Text,
  Dimensions,
  PropTypes,
  StatusBar
} from 'react-native'

import SearchBar from '../components/SearchBar'

let deviceWidth = Dimensions.get('window').width

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { onActionSelected } = this.props
    return (
      <View style={styles.container}>
      <SearchBar {...this.props} />
        <Text style={styles.test}>
          该模块施工中
        </Text>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  test: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default IndexPage