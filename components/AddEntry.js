import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
//import submit entry and remove entry
//import { connect } from 'react-redux'
//import { addEntry } from '../actions'

function SubmitBtn ({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}>
                <Text>SUBMIT</Text>
            </TouchableOpacity>
    )
}


export default class AddEntry extends Component {

    submit = () => {
        const entry = this.state

        //this.props.dispatch(addEntry({
            //[key]: entry
        //}))

        // Update Redux

        //this.setstate

        // Navigate to Home

        //submitEntry({ key, entry })

        // Save to Database (submit entry from api.js)

        // Clear local notification
    }
    render () {
        return (
            <View>
                <Text>Add Entry</Text>
                <SubmitBtn onPress={this.submit}/>
            </View>
        )
    }
} 

//export default connect()(AddEntry)