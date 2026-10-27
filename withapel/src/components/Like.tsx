import { useLike } from "../Hook/useLike";

export const Like = () => {
    const { Like, likeClicked } = useLike();
    return (
        <div className="ml-5 border-2 border-dashed border-green-500 mt-5 p-5 w-80">
            <div className="p-5">
                <div className="border-2  border-solid border-green-500 mt-5 p-2 h-60 rounded-sm">
                    <p className="text-center"> Main Content</p>
                </div>
                <div className="flex flex-row ml-7 mt-5 g-4">
                    <button onClick={likeClicked} className="rounded-md active:scale-115 ml-12 border-2 border-green-500 p-5 hover:bg-green-500 text-center justify-content-center align-center"> {Like} </button>
                </div>
            </div>

        </div>
    );
}