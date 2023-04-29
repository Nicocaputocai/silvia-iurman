import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { CardComponent } from '../components';
import activitiesDataServices from '../../Services/ActivitiesServices';

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
    <Row xs={1} md={3} className="g-4">
          {activities.slice(0, 6).map((activity) => (
            activity.important && !activity.archived && 
            <CardComponent 
            key={activity._id} 
            activity={activity}
            button={true}
            />
          ))}
    </Row>
  )
}
