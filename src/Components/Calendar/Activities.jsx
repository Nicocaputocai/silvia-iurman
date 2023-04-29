import React, { useEffect, useState } from 'react'
import activitiesDataServices from '../../Services/ActivitiesServices';
import { CardComponent } from '../components';
import { Row } from 'react-bootstrap';

export const Activities = () => {
        const [activities, setActivities] = useState([]);

    const retrieveActivities = () =>{
        activitiesDataServices.getAllActivities()
            .then(response =>{
        setActivities(response.data.activities)
        })
            .catch(err => console.log(err))    
    };

    useEffect(() =>{
        retrieveActivities()
    }, []);
  return (
    <Row xs={1} md={4} className="g-4">
      {activities.map((activity) => (
        !activity.archived && (
            <CardComponent
            key={activity._id} 
            activity={activity} 
            description={activity.description}/>
        )
      ))}
    </Row>
  )
}
