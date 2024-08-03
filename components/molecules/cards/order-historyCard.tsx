import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import moment from 'moment';
import { useRouter } from "next/navigation";
// import { fetchUserOrders, updateOrderStatus } from "../actions/userActions";
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '30px',
    boxShadow: 24,
    p: 4,
};

const OrderHistoryCards = ({ order }: {order: {
    id: number;
    variant_img_url: string;
    amount: number;
    status: string;
    created_at: string;
    meta: {
        product_details: {
            name: string;
        }
    }
}}) => {

    const navigate = useRouter();
    // const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const cancelOrder = () => {
        setOpenModal(true);
    }
    // const dispatchCancelOrder = () => {
    //     dispatch(updateOrderStatus(
    //         {
    //             status: 'CANCEL',
    //             reason: '',
    //             order_id: order?.delivery_information?.order_id,
    //         }
    //     )).then(() => {
    //         dispatch(fetchUserOrders());
    //         setOpenModal(false);
    //     });
    // }
    const handleModalClose = () => setOpenModal(false);
    const date = moment(order?.created_at).format("Do, MMM, YY.");
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const toReviewFormComponent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (order?.status === 'COMPLETED' || order?.status === 'REJECTED') {
            // navigate.push('/review-form', { state: { order } });
        } else if (anchorEl === null) {
            handleClick(e);
        } else if (anchorEl !== null) {
            handleClose();
        }
    }
    return (
        <div className="hover:scale-95 ease-in-out transition cursor-pointer flex lg:flex-row md:flex-row flex-col px-3 lg:items-center md:items-center py-8 gap-10 lg:gap-16 shadow-md pl-8" onClick={(e) => { toReviewFormComponent(e) }} >
            <div className="flex items-center gap-4 w-64">
                {/* <img className="w-24 h-16" src={order?.variant_img_url} id={order.id} /> */}
                <div className="lg:text-[16px] md:text-[14px] text-[12px]">
                    <div className="font-normal mb-2">{order?.meta?.product_details?.name}</div>
                    <div className="font-light lg:text-[15px]">₦{order?.amount}</div>
                </div>
            </div>
            <div className="flex gap-8 lg:gap-11 items-end">
                <div className="flex lg:text-[16px] gap-1 md:text-[14px] text-[12px]">
                    <div className="font-normal mb-2 whitespace-nowrap">No.</div>
                    <div className="font-light">{order.id}</div>
                </div>
                <div className="lg:text-[16px] md:text-[14px] text-[12px] items-center">
                    <div className="font-normal mb-2">{order?.status}</div>
                </div>
                {
                    order?.status === 'REJECTED' || order?.status === 'COMPLETED' || order?.status === 'CANCEL' || order?.status === 'DISPATCHED'
                        ?
                        <div className="lg:text-[16px] md:text-[14px] text-[12px] items-center">
                            <div className="flex whitespace-nowrap">Ordered On</div>
                            <div className="font-normal mb-2">{date}</div>
                        </div>
                        :
                        ""
                    /* <button className="bg-transparent h-10 w-24 hover:bg-orange-600 font-medium text-orange-500 text-[12px] hover:text-white border border-orange-500 hover:border-transparent rounded" onClick={() => { cancelOrder() }}>Cancel Order</button> */
                }
            </div>
            {/* <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 2 }}>{order?.status === 'CANCEL' ? 'This order was canceled' : 'This order is still in progress'}</Typography>
            </Popover>
            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to cancel this order?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className="flex justify-between">
                            <button className="hover:text-primary focus:text-primary transition" onClick={dispatchCancelOrder}>YES</button>
                            <button className="hover:text-primary focus:text-primary transition" onClick={handleModalClose}>NO</button>
                        </span>
                    </Typography>
                </Box>
            </Modal> */}
        </div>
    );
};

export default OrderHistoryCards;