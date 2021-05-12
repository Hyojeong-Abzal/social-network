import React, { ChangeEvent } from "react";
import preloader from "../../../assets/preloader/Fidget-spinner.gif"

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} />
        </div>
    )
}