/**
 * Creator: XB Pham
 * Date: 28/01/2021
 * Purpose: Help render icon for task detail item
 */

const initialState = {
    priorityIcon: {
        High: <i className="fa fa-arrow-up text-danger" />,
        Medium: <i className="fa fa-arrow-up" />,
        Low: <i className="fa fa-arrow-down" />,
        Lowest: <i className="fa fa-arrow-down text-primary" />
    },
    taskTypeIcon: {
        bug: <i className="fas fa-exclamation-circle text-danger me-1" />,
        "new task": <i className="fas fa-check-square text-primary me-1" />
    }
}

export const JiraDetailTaskItemReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}
