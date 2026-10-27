

import { useState } from "react";

export const useLike = () => {
    const [Like, setLike] = useState("Liked");

    const likeClicked = () => {
        if (Like === "Liked")
            setLike("Disliked");
        else setLike("Liked");
    }

    return { Like, likeClicked };
}