import { CircularProgress } from "@mui/material";

export default function LoadingContainer(){
    return (
        <div className="flex flex-1 justify-center items-center">
            <CircularProgress size={80}/>
        </div>
    )
}