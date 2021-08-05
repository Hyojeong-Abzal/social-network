import React from "react";
import Dialogs from "./Dialogs";
import { AppStateType, StoreType } from "../../../App/redux-store";
import { DialogsPageType, sendMessageAC } from "../../../redux/dialogsPageReducer";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect"

type MapDispatchPropsType = {
  sendMessage: (newMessage: string) => void
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
    sendMessage: (newMessage: string) => { dispatch(sendMessageAC(newMessage)); }

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


