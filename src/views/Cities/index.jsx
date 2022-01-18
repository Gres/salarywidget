import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {injectReducer, injectSaga} from 'redux-sagas-injector';
import {loadItem, loadSalary} from './actions';
import citysSaga from './saga';
import city from './reducer';
import {useParams} from "react-router";
import LoadingScreen from "../../components/loadingManager/LoadingScreen";
import {Box, Grid, List, ListItem} from "@material-ui/core";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const Cities = ({onLoad, loadSalary}) => {
    injectReducer('city', city);
    injectSaga(`citysSaga`, citysSaga);
    const {citySlug} = useParams();
    useEffect(() => {
        onLoad(citySlug);
    }, [onLoad, citySlug]);
    const fetching = useSelector(state => state.city.fetching);
    const item = useSelector(state => state.city.item);
    const distribution = item?.detailsalaries?.salary?.distribution;
    const data = {
        labels: distribution?.map((el) => {
            return el.salary;
        }),
        datasets: [
            {
                label: 'Dataset 1',
                data: distribution?.map((el) => {
                    return el.yval;
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    if (fetching) return <LoadingScreen/>
    return (<>

            <h1>{item?.full_name}</h1>
            <img src={item?.photos[0].image.web}/>
            <Box display="flex" flexGrow={1} mt={2} component={Grid} container direction="row">
                <Box
                    display="flex"
                    pr={2}
                    xs={6}
                    component={Grid}
                    container
                    item
                    direction="column"
                    sx={{width: '100%'}}
                >
                    <List
                        style={{width: '100%', columnCount: 3, bgcolor: 'background.paper'}}>
                        {item.salaries?.map(
                            (item) => {
                                return (
                                    <ListItem key={item?.job?.title}
                                              onClick={() => loadSalary(citySlug, item?.job?.id)}>
                                        {item?.job?.title}
                                    </ListItem>
                                );
                            }
                        )}
                    </List>
                </Box>
                <Box
                    display="flex"
                    pr={2}
                    xs={6}
                    component={Grid}
                    container
                    item
                    direction="column"
                    sx={{width: '100%'}}
                >

                    <Line options={options} data={data}/>
                </Box>
            </Box>

        </>

    );
};

const mapDispatchToProps = dispatch => ({
    onLoad: id => dispatch(loadItem(id)),
    loadSalary: (loc, title) => dispatch(loadSalary(loc, title))
});

export default connect(null, mapDispatchToProps)(Cities);
