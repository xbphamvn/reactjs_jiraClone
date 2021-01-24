import React from 'react'

export default function JiraDetailProjectItem(props) {
    return (
        <div className="main__project--item">
            <a href="#abc">
                {props.taskContent}
            </a>
            <div className="mt-2 mb-0 row align-items-center">
                <div className="col-6 ml-1">
                    <i className="fa fa-bookmark me-1" />
                    <i className="fa fa-arrow-up" />
                </div>
                <div className="col-3 ms-auto me-1">
                    <img className="img-fluid" src="https://i.ibb.co/6RJ5hq6/gaben.jpg" alt="abc" />
                </div>
            </div>
        </div>
    )
}
