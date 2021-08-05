import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { Messages } from "./Messages/Messages";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { DialogsPageType } from "./dialogsPageReducer";
import { maxLengthCreator, required } from "../../utils/validators";
import { Textarea } from "../../components/FormControls/FormControls";


type PropsType = {
  state: DialogsPageType
  sendMessage: (newMessage: string) => void
};

const Dialogs = (props: PropsType) => {


  let dialogElement = props.state.dialogs.map((d) =>
    <Dialog id={d.id} name={d.name} />
  );
  let messagesElement = props.state.messages.map((m) =>
    <Messages key={m.id} message={m.message} />
  )



  const onSubmitHandler = (values: FormDataType) => {
    props.sendMessage(values.newMessageText)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElement}</div>
      <div className={s.grids}>
        <div className={s.messages}>
          {messagesElement}
        </div>
        <DialogAddMessageForm onSubmit={onSubmitHandler} />
      </div>
    </div>
  );
};



type DialogType = {
  id: number;
  name: string;
};
const Dialog = (props: DialogType) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/Dialogs/" + props.id}>{props.name} </NavLink>
    </div>
  );
};


type FormDataType = {
  newMessageText: string

}
const maxLength50 = maxLengthCreator(50);
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textarea}>
        <Field
          component={Textarea}
          name="newMessageText"
          placeholder="Enter your message"
          validate={[required, maxLength50]} />
        <button> sent message</button>
      </div>
    </form>

  )
}


const DialogAddMessageForm = reduxForm<FormDataType>({
  // a unique name for the form
  form: 'dialogAddMessageForm'
})(AddMessageForm)
export default Dialogs;
