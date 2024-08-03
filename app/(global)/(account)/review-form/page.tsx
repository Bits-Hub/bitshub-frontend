"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { postReview, updateOrderStatus } from "../actions/userActions";
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ div: 2 }}>
//                     <Typography component={'span'} variant={'body2'}>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }
// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

const ReviewForm = () => {
    const navigate = useRouter();
    // const location = useLocation();
    // const dispatch = useDispatch();

    const navigateUrlReview = () => {
        navigate.push('/account/reviews');
    }
    const navigateUrlOrderHistory = () => {
        navigate.push('/account/order-history');
    }
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState();
    const [reason, setReason] = useState("");
    // const handleSubmit = () => {
    //     dispatch(postReview(
    //         rating,
    //         location.state.order?.product_id,
    //         comment,
    //     )).then(() => {
    //         navigateUrlReview();
    //     });
    // }
    // const handleReturn = () => {
    //     dispatch(updateOrderStatus(
    //         {
    //             status: 'REJECTED',
    //             reason: reason,
    //             product_id: location.state.order?.delivery_information?.order_id,
    //         }
    //     )).then(() => {
    //         navigateUrlOrderHistory();
    //     });
    // }
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
        setValue(newValue);
    };

    return (
        <div className="">
            {/* <Box sx={{ width: '70vw' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '78%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" TabIndicatorProps={{ sx: { backgroundColor: '#FF6709', }, }}>
                        <Tab label="Review" {...a11yProps(0)} className="hover:text-primary focus:text-primary" />
                        <Tab label="Return Item" {...a11yProps(1)} className="hover:text-primary focus:text-primary" />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className="col-span-12 lg:col-span-9 w-max shadow rounded px-3 sm:px-6 pt-5 mt-5 pb-7">
                        <div className="text-lg font-medium capitalize mb-4">Add a Review</div>
                        <div className="grid lg:grid-cols-2 flex-col md:items-center gap-4 md:gap-2 p-2 sm:p-5">
                            <div className="rounded flex gap-5 md:gap-5 lg:gap-0 lg:flex-col items-center pl-3">
                                <img className="w-36 h-20 sm:w-36 sm:h-20 md:w-60 md:h-36 lg:w-60 lg:h-36" src={location.state?.order?.variant_img_url} id={location.state?.order?.id} />
                                <div className="lg:self-start pt-3 text-lg sm:text-xl md:text-2xl">{location.state.order?.meta?.product_details?.description}</div>
                            </div>
                            <textarea
                                label="Your Review"
                                id="review"
                                type="text"
                                onChange={(e) => { setComment(e.target.value) }}
                                placeholder="Write a review..."
                                className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400 lg:min-h-full"></textarea>
                        </div>
                        <div>
                            <div className="my-2">Rate the product</div>
                            <div className="flex flex-col gap-3 sm:gap-6 sm:flex-row">
                                <div tabIndex="1" className="text-gray-300 hover:text-orange-600 focus:text-orange-600 flex max-w-min" onClick={(e) => { setRating(e.target.value) }}>
                                    <i className="fa-regular fa-star" data-value="1"></i>
                                </div>
                                <div tabIndex="2" className="text-gray-300 hover:text-orange-600 focus:text-orange-600 flex max-w-min" onClick={(e) => { setRating(e.target.value) }}>
                                    <i className="fa-regular fa-star" data-value="2"></i>
                                    <i className="fa-regular fa-star" data-value="2"></i>
                                </div>
                                <div tabIndex="3" className="text-gray-300 hover:text-orange-600 focus:text-orange-600 flex max-w-min" onClick={(e) => { setRating(e.target.value) }}>
                                    <i className="fa-regular fa-star" data-value="3"></i>
                                    <i className="fa-regular fa-star" data-value="3"></i>
                                    <i className="fa-regular fa-star" data-value="3"></i>
                                </div>
                                <div tabIndex="4" className="text-gray-300 hover:text-orange-600 focus:text-orange-600 flex max-w-min" onClick={(e) => { setRating(e.target.dataset.value) }}>
                                    <i className="fa-regular fa-star" data-value="4"></i>
                                    <i className="fa-regular fa-star" data-value="4"></i>
                                    <i className="fa-regular fa-star" data-value="4"></i>
                                    <i className="fa-regular fa-star" data-value="4"></i>
                                </div>
                                <div tabIndex="5" className="text-gray-300 hover:text-orange-600 focus:text-orange-600 flex max-w-min" onClick={(e) => { setRating(e.target.dataset.value) }}>
                                    <i className="fa-regular fa-star" data-value="5"></i>
                                    <i className="fa-regular fa-star" data-value="5"></i>
                                    <i className="fa-regular fa-star" data-value="5"></i>
                                    <i className="fa-regular fa-star" data-value="5"></i>
                                    <i className="fa-regular fa-star" data-value="5"></i>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="bg-primary border border-primary text-white px-12 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
                                    onClick={handleSubmit}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className="md:w-4/5 shadow rounded px-3 sm:px-6 pt-5 mt-5 pb-7 h-96">
                        <div className="text-lg font-medium capitalize mb-4">Return this item</div>
                        <textarea
                            label="return item"
                            id="return-item"
                            type="text"
                            onChange={(e) => { setReason(e.target.value) }}
                            placeholder="Why do you wish to return this item?"
                            className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm h-4/6 rounded focus:ring-0 focus:border-primary placeholder-gray-400"></textarea>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="bg-primary border border-primary text-white px-12 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
                                onClick={handleReturn}
                            >
                                Return Item
                            </button>
                        </div>
                    </div>
                </CustomTabPanel>
            </Box> */}
        </div>
    );
}

export default ReviewForm;