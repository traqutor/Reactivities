import React, { useContext } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import ActivitiesStore from '../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';

const NavBar: React.FC = () => {
    const activitiesStore = useContext(ActivitiesStore);
    const { openCreateForm } = activitiesStore;
    return (
        <div>
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item>
                        <img src="/assets/logo.png" alt="logo" />
                        Reactivities
                    </Menu.Item>
                    <Menu.Item
                        name='Activities'
                    />
                    <Menu.Item>
                        <Button
                            onClick={openCreateForm}
                            positive
                            content='Create Activity'
                        />
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}

export default observer(NavBar);