import React, { ChangeEvent } from "react";
import preloader from "../../assets/preloader/Spinner.gif"

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} />
        </div>
    )
}