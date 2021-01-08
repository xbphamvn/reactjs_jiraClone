import React from 'react';
import loadingStyle from './Loading.module.css';

export default function LoadingOverlay() {
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
}
