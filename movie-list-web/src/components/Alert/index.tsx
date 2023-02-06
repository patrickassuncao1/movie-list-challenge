import { BsCheckCircle, BsInfoCircle } from "react-icons/bs";
import RenderIf from "../RenderIf";

type options = "success" | "danger";

export type AlertType = {
    message?: string,
    type?: options,
    show: boolean
}


const Icon = ({ type }: { type?: options }) => {

    const icon = type === "success"
        ? <BsCheckCircle className="inline flex-shrink-0 mr-3 w-5 h-5 text-green-500" />
        : <BsInfoCircle className="inline flex-shrink-0 mr-3 w-5 h-5 text-red-500" />

    return (icon);
}

const Alert = ({ message, type, show }: AlertType) => {

    const color = type === "success" ?
        "text-green-700 bg-green-100"
        : type === "danger"
            ? "text-red-700 bg-red-100" : "";

    return (
        <RenderIf isTrue={show}>
            <div className="w-full top-2 left-0 flex justify-center items-center fixed z-[60]">
                <div className={color + " flex p-4 mb-4 text-sm rounded-lg shadow-md"} role="alert">
                    <Icon type={type} />
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-bold">{message}</span>
                    </div>
                </div>
            </div>
        </RenderIf>
    );
}

export default Alert;
