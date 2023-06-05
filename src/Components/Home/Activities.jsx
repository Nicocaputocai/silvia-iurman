import React from 'react'
import { Row } from 'react-bootstrap';
import { CardComponent } from '../components';
import { useActivities } from '../../hooks/useActivities';

export const Activities = () => {
  const {activities} = useActivities()

  return (
    <Row xs={1} md={3} className="mb-3 g-4">
          {activities?.data.slice(0, 6).map((activity) => (
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
