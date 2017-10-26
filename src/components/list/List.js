import React from 'react';

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            toDo: []
        }
    }


    render() {
        return(
            <div>
                <h4>Walk the dog</h4>
            </div>
        )
    }
};

export default List;