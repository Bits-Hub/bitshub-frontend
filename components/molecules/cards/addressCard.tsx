import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { deleteUserAddress, setDefaultAddress, userAddressList } from "../actions/userActions";
// import Switch from '@mui/material/Switch';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';

const AddressCards = ({ address } : {address: {street: string; first_name: string; phone_number: string; city: string; default: boolean;}}) => {
    const label = { inputProps: { 'aria-label': 'set default address button' } };
    const router = useRouter();

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const navigateUrl = () => {
        router.push("/account_");
    }
    const deleteUserAddressHandler = () => {
        // dispatch(deleteUserAddress({ address_id: address?.id })).then(() => {
        //     dispatch(userAddressList());
        //     window.scrollTo(0, 0);
        // });
    };
    const toUpdateUserComponent = () => {
        // navigate('/account/update_user_address', { state: { address } });
    }
    const [checked, setChecked] = useState(false);
    const [marked, setMarked] = useState(false);
    useEffect(() => {
        if (address?.default === true) {
            setMarked(true)
        }
    }, [address?.default]);

    const handleChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setChecked(e.target.checked);
    }
    if (checked) {
        // dispatch(setDefaultAddress(address?.id)).then(() => {
        //     navigateUrl();
        // });
    }


    return (
        <div className="shadow rounded bg-white px-4 pt-4 pb-4 relative">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800 text-lg">{address?.street}</h3>
                <a onClick={() => { toUpdateUserComponent() }} className="text-primary cursor-pointer">
                    Edit
                </a>
            </div>
            <div className="">
                <div className="flex justify-between items-center">
                    <div className="">
                        <h4 className="text-gray-700 font-medium">{address?.first_name}</h4>
                        <p className="text-gray-800">{address?.city}</p>
                    </div>
                    <button className="md:ml-4 hover:text-primary" onClick={deleteUserAddressHandler}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="flex justify-between items-start">
                    <p className="text-gray-800">{address?.phone_number}</p>
                    {/* <FormGroup className="mr-[-15px]">
                        <FormControlLabel control={<Switch onClick={handleChange} {...label} size="small" checked={marked} />} label="set as default" color="primary" />
                    </FormGroup> */}
                </div>
            </div>
        </div>
    );
};

export default AddressCards;