import React from "react";
import Dialogs from "./Dialogs";
import { AppStateType, StoreType } from "../../../redux/redux-store";
import { sendMessageAC, updateMessageAC } from "../../../redux/dialogsPageReducer";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect"
import { DialogsPageType } from "../../../redux/store";

type MapDispatchPropsType = {
  onChangeHandler: (newValue: string) => void
  sendMessage: () => void
};

type mapStatePropsType = {
  state: DialogsPageType
}
let mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    state: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    onChangeHandler: (newValue: string) => { dispatch(updateMessageAC(newValue)); },
    sendMessage: () => { dispatch(sendMessageAC()); }

  }
}

type DialogsContainerPropsType = mapStatePropsType & MapDispatchPropsType;

export class DialogsContainer extends React.Component<DialogsContainerPropsType> {

  componentDidMount() {

  }


  render() {

    return (
      <div >
        <Dialogs {...this.props} />
      </div>
    )
  }
}


// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer));

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer)


