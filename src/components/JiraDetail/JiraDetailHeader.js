import React from 'react'

export default function JiraDetailHeader(props) {

    const {projectDetail} = props;

    return (
        <>
            <p className="main__breadcrumb">Projects / Project detail / {projectDetail.projectName}</p>
            <h4 className="main__username">{projectDetail.projectName}</h4>
            <div className="py-2 d-flex">
                <div className="main__search">
                    <div className="main__search--icon">
                        <i className="fa fa-search" />
                    </div>
                    <input className="main__search--input" />
                </div>
                <div className="main__avatar">
                    {projectDetail.members?.map((mem, index) => <img className="main__avatar--img" src={mem.avatar} alt={mem.avatar} key={index} />)}
                </div>
                <p className="main__options">Only My Issues</p>
                <p className="main__options">Recently Updated</p>
            </div>
        </>
    )
}
