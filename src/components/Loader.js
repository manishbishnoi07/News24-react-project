import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
export const Loader = () => {
    const override = css`
        position:absolute;
        top:50%;
    `;
    return (
        <ClipLoader
                css={override}
                size={50}
                color={"black"}
        />
    )
}

export default Loader;