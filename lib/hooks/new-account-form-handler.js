import { addPayoutAccount, clearState } from "../actions/vendor/store";
import { useFormik } from "formik";
import { newAccountSchema } from "../utilities/schemas";
import { useDispatch, useSelector } from "react-redux";

export const useNewPayoutFormHandler = (param) => {
    const { stores } = useSelector((state) => state?.listStores);

    const dispatch = useDispatch();

    const initialValues = {
        account_name: param?.payout?.payout?.account_name || '',
        bank_name: param?.payout?.payout?.bank_name || '',
        bank_account_number: param?.payout?.payout?.bank_account_number || ''
    }

    const newAccountHandler = (data) => {

        const payoutAccount = {
            account_name: data?.account_name,
            bank_name: data?.bank_name,
            bank_account_number: data?.bank_account_number
        }


        const updatePayoutAccount = {
            account_name: data?.account_name,
            bank_name: data?.bank_name,
            bank_account_number: data?.bank_account_number
        }

        if (param && param.data) {

        } else {

            if (payoutAccount.bank_name) {
                dispatch(addPayoutAccount(stores?.data[0]?.id, payoutAccount))

            }

        }
    }


    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: newAccountSchema,
        onSubmit: (data) => newAccountHandler(data),
        enableReinitialize: true,
    });

    return { values, errors, touched, handleChange, handleSubmit };
}


export default useNewPayoutFormHandler;