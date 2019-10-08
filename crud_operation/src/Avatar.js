import React from 'react';
import './Avatar.css'
import 'tachyons';
import AvatarList from './AvatarList';
import { withRouter } from "react-router";

const Avatar = () => {
    const ListArray = [{
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

    const avatarCards= ListArray.map((data, index) => {
        return <AvatarList  key={ListArray[index].id} name={ListArray[index].name} work={ListArray[index].profile} />
    })
    return (<div>
    {avatarCards}
       </div>)
}

export default withRouter(Avatar);