import React, {
	View,
	StyleSheet,
	Component,
	Dimensions,
	TouchableOpacity,
	TextInput
} from 'react-native'

import {connect} from 'react-redux/native'
import InteractionManager from 'InteractionManager'

import {handleOptionChange} from '../actions/index'
let deviceWidth = Dimensions.get('window').width

function loadData(props){
	const { dispatch, nextPage, queryName } = props
		dispatch(fetchGoodsIfNeeded({
			page: nextPage,
			name: queryName
		}))
}

class SearchContainer extends React.Component {
	constructor (props) {
		super(props)
		this.onBack = this.onBack.bind(this)
		//this.onSubmitEditing = this.onSubmitEditing.bind(this)
	}
 	onBack() {
 		InteractionManager.clearInteractionHandle(() => {
			this.props.navigator.pop()
		})
 	}
 	 // onSubmitEditing () {
   //  	const {dispatch} = this.props
   //  	loadData(this.props)
  	// }

	// componentWillReceiveProps(nextProps){
	// 	//console.log(this.props,nextProps)
	// 	const {dispatch, onEndReached, currentPage, nextPage} = nextProps
	// 	if(nextProps.onEndReached == true && nextProps.isFetching == false) {
	// 		loadData(this.props)
	// 	}
	// }

	render() {
		console.log(this.props)
		const {items, dispatch} = this.props
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={this.onBack}>
					</TouchableOpacity>

				<TextInput
				  style={styles.input}
				  placeholder={'输入想查找的Tag'}
				  underlineColorAndroid={'transparent'}
				  autoFocus={true}
				  value={this.text}/>
				 </View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    width: deviceWidth,
    height: 50,
    backgroundColor: '#ddd',
  },
  backIcon: {
    marginLeft: 10,
    width: 40
  },
  search: {
    width: 30,
    marginTop: 10
  },
  input: {
    height: 50,
    padding: 5,
    width: deviceWidth,
    color: '#fff'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    height: 50,
    marginTop: 15,
    lineHeight: 50,
  }
})

function mapStateToProps(state) {
	//console.log(state)
	const {
		entities: {test},
	} = state
	return {
		test
	}
}
export default connect(mapStateToProps)(SearchContainer)