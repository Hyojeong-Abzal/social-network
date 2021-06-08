import React from 'react';

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                { !this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode.bind(this)}>
                        <span>{this.props.status}</span>
                    </div>}
                { this.state.editMode &&
                    <div onBlur={this.deactivateEditMode.bind(this)}  >
                        <input autoFocus type="text" value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}