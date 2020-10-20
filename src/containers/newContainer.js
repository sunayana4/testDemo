//import  { Component } from 'react';
import { connect } from 'react-redux';
//import { dataAction } from '../actions/dataAction';
import { simpleAction } from '../actions/simpleAction';
import leftSideComponent from "./../components/leftSide.component";
import { getTodosData } from "./../actions/dataAction"

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    getTotdosData: () => dispatch(getTodosData())
    //  dataAction : () => dispatch(dataAction())
})

const mapStateToProps = state => {
    return ({
        ...state,
        todosData: state.dataReducer.todosData
    })
}
//class newContainer extends Component {
// simpleAction = (event) => {
//     this.props.simpleAction();

const NewContainerComponent = connect(mapStateToProps, mapDispatchToProps)(leftSideComponent);
export default NewContainerComponent;
