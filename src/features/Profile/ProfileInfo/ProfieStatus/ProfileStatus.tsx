import React, { ChangeEvent } from 'react';

type PropsType = {
    status: string
    updateStatusTC: (status: string) => void

}
type StateType = {
    editMode: boolean
    status: string
}
export class ProfileStatus extends React.Component<PropsType> {
    state: StateType = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}>
                        <span>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div onBlur={this.deactivateEditMode}  >
                        <input onChange={this.onChangeHandler} autoFocus type="text" value={this.state.status} />
                    </div>
                }
                <button onClick={this.activateEditMode}>activateEditMode</button>
                <button onClick={this.deactivateEditMode}>deactivateEditMode</button>
            </div>
        )
    }
}