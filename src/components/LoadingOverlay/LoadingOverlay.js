import React from 'react';
import { useSelector } from 'react-redux';
import loadingStyle from './Loading.module.css';

export default function LoadingOverlay() {

    const { isLoading } = useSelector(state => state.LoadingReducer);
    if (isLoading) {
        return (
            <div className={loadingStyle.loadingOverlay}>
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden" />
                </div>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden" />
                </div>
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden" />
                </div>
            </div>
        )
    } else {
        return '';
    }
}
