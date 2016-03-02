import React, {
	View,
	StyleSheet,
	Component,
	DrawerLayoutAndroid,
	Dimensions,
} from 'react-native'
import IndexPage from '../components/IndexPage'

import {connect} from 'react-redux/native'
import InteractionManager from 'InteractionManager'

import Test from '../components/Test'
import DrawerView from '../components/DrawerView'
import ScrollableTabView from 'react-native-scrollable-tab-view'

const DRAWER_REF = 'drawer'

class MainContainer extends React.Component {
	constructor (props) {
		super(props)
		this._renderNavigationView = this._renderNavigationView.bind(this)
	}


	_renderNavigationView() {
		return (
			<DrawerView />
		)
	}
	render() {
		return (
			<DrawerLayoutAndroid 
			  ref={DRAWER_REF}
			  drawerWidth={Dimensions.get('window').width - 60}
			  renderNavigationView={this._renderNavigationView}
			  drawerPosition={DrawerLayoutAndroid.positions.Left}>

  	    	  <ScrollableTabView tabBarPosition="bottom">
  	    	  	<IndexPage {...this.props}  tabLabel='首页' />
  	    	  	<Test {...this.props}  tabLabel='活动' />
  	    	  	<Test {...this.props}  tabLabel='我的' />
  	    	  </ScrollableTabView>
			 </DrawerLayoutAndroid>
		)
	}
}


function mapStateToProps(state) {
	console.log(state)
	const {
		entities: {test}
	} = state
	//console.log(items)
	return {
		test
	}
}
export default connect(mapStateToProps)(MainContainer)