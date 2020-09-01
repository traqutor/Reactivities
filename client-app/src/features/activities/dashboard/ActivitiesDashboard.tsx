import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react'
import ActivitiesList from './ActivitiesList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityStore from '../../../app/stores/activityStore';

const ActivitiesDashboard: React.FC = () => {
    const activityStore = useContext(ActivityStore);
    const { editMode, selectedActivity} = activityStore;
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivitiesList />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                    <ActivityDetails />
                }
                {editMode &&
                    <ActivityForm
                        key={(selectedActivity && selectedActivity.id) || 0}
                        activity={selectedActivity}
                        />}
            </Grid.Column>
        </Grid>
    )
};

export default observer(ActivitiesDashboard);