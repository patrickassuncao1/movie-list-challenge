import React, { useState } from 'react';
import { AlertType } from '../../components/Alert';


type UseAlertType = {
    timeToHide?: number
};

export type showAlertType = Omit<AlertType, "show">;

const initialValues = {
    show: false,
    message: "",
    type: undefined
} as AlertType

const useAlert = ({ timeToHide = 3000 }: UseAlertType) => {

    const [alert, setAlert] = useState(initialValues);


    const showAlert = ({ message, type }: showAlertType) => {
        setAlert({
            message: message,
            type: type,
            show: true
        });
    };

    const hideAlert = () => setAlert(initialValues);

    const hideAlertWithTime = () => {
        setTimeout(() => {
            setAlert(initialValues);
        }, timeToHide);
    }

    const showAndHidden = ({ message, type }: showAlertType) => {
        showAlert({ message, type });
        hideAlertWithTime();
    }


    return { alert, showAlert, hideAlert, hideAlertWithTime, showAndHidden };
}

export default useAlert;