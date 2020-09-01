import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import ActivityStore from '../../../app/stores/activityStore';

const ActivitiesList: React.FC = () => {
    const activityStore = useContext(ActivityStore);
    const { activitiesByDate, selectActivity, deleteActivity, submitting, target } = activityStore;
    return (
        <Segment clearing>
            <Item.Group divided>

                {activitiesByDate.map((activity: IActivity) => (

                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <Item.Meta>{activity.description}</Item.Meta>
                                <Item.Meta>{activity.city} {activity.venue}</Item.Meta>
                            </Item.Description>
                            <Item.Extra>
                                <Button
                                    onClick={() => selectActivity(activity.id)}
                                    floated='right'
                                    content='View'
                                    color='blue' />
                                <Button
                                    name={activity.id}
                                    onClick={(e) => deleteActivity(e, activity.id)}
                                    loading={target === activity.id && submitting}
                                    floated='right'
                                    content='Delete'
                                    color='red' />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}

            </Item.Group>
        </Segment>
    )
}

export default observer(ActivitiesList);