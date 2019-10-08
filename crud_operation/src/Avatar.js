import React from 'react';
import './Avatar.css'
import 'tachyons';
import AvatarList from './AvatarList';
import { withRouter } from "react-router";
export class Avatar extends React.Component {
    ListArray = [{
        id: 1,
        name: 'himanshi',
        profile: 'Web Developer'
    },{
        id: 2,
        name: 'abhishek',
        profile: 'PHP Developer'
    },{
        id: 3,
        name: 'Rahul',
        profile: 'Python Developer'
    },{
        id: 4,
        name: 'hemant',
        profile: '.Net Developer'
    }, {
        id: 5,
        name: 'Mayank',
        profile: 'angular Developer'
    }]
    avatarCards= this.ListArray.map((data, index) => {
        return <AvatarList {...this.props}  key={this.ListArray[index].id} name={this.ListArray[index].name} work={this.ListArray[index].profile} />
    })
    render(){
        console.log(this.props)
        return (<div>
            {this.avatarCards}
               </div>)
    }
    

}


export default withRouter(Avatar);