import React from 'react';
import { Route, Redirect } from 'react-router'
import PropTypes from 'prop-types'


export class AvatarList extends React.Component {

    state = {
        redirect: false
    }


    constructor() {
        super();

        this.state = { selectedCourseId: undefined };

        // this.handleAddCourse = this.handleAddCourse.bind(this);
        this.handleEditCourse = this.handleEditCourse.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleRowSelect = this.handleRowSelect.bind(this);
    }


    handleEditCourse() {
        const selectedCourseId = this.props.name;
        this.setState({

            selectedCourseId: this.props.name

        })
        console.log(this.props)
        if (selectedCourseId) {
            console.log(selectedCourseId)
            const { history } = this.context;
   if(history) history.router.push(`/avatar/${selectedCourseId}`);
            // this.setState({ selectedCourseId: undefined });
            // this.props.history.push(`/avatar/${selectedCourseId}`);
        }
    }

    render() {
        return (
            <div className="avatarStyle ma4 bg-light-purple dib pa4" onClick={this.handleEditCourse}  >

                <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt="" />
                <h1>{this.props.name}</h1>
                <p>{this.props.work}</p>
            </div>
        )

    }
}



export default AvatarList;