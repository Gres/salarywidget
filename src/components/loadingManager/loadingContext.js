import React, {createContext} from 'react';
import {connect} from 'react-redux';
import LoadingScreen from './LoadingScreen';
import {setLoading} from './actions';

const LoadingContext = createContext({});

const Provider = ({children, loading, setLoading}) => {

    if (loading) {
        return <LoadingScreen/>;
    }

    return (
        <LoadingContext.Provider
            value={{
                loading,
                setLoading
            }}
        >
            {children}

        </LoadingContext.Provider>
    );
};

const mapStateToProps = state => ({
    loading: state.loadingManager.loading
});

const mapDispatchToProps = dispatch => ({
    setLoading: status => dispatch(setLoading(status))
});

const LoadingProvider = connect(mapStateToProps, mapDispatchToProps)(Provider);


export {
    LoadingContext,
    LoadingProvider
};
