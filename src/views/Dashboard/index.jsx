import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {injectReducer, injectSaga} from 'redux-sagas-injector';
import {loadItems} from './actions';
import citiesSaga from './saga';
import {useHistory} from 'react-router-dom';
import cities from './reducer';
import LoadingScreen from "../../components/loadingManager/LoadingScreen";
import {List, ListItem} from "@material-ui/core";

const Dashboard = ({onLoad, onFormSave, onPersonDelete}) => {
    injectReducer('cities', cities);
    injectSaga(`citiesSaga`, citiesSaga);
    const history = useHistory();
    useEffect(() => {
        onLoad();
    }, [onLoad]);
    const fetching = useSelector(state => state.cities.fetching);
    const items = useSelector(state => state.cities.list['ua:item']);
    const onCityClick = slug => () => history.push(`city/${slug}`);
    return (<>
            {fetching && <LoadingScreen/>}
            <List
                style={{width: '100%', columnCount: 3, bgcolor: 'background.paper'}}>
                {items?.map(
                    (item) => {
                        return (
                            <ListItem key={item.name} onClick={onCityClick(item.name)}>
                                {item.name}
                            </ListItem>
                        );
                    }
                )}
            </List>
        </>

    );
};

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(loadItems())
});

export default connect(null, mapDispatchToProps)(Dashboard);
