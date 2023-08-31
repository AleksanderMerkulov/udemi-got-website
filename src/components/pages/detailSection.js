import React from "react";
import {useParams, useLoaderData} from "react-router-dom";

const DetailSection = () => {
    console.log(useParams())
    const {id} = useParams()
    return(
        <div>
            {id}
        </div>
    )
}

export default DetailSection