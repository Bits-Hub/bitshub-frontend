import OrderHistoryCards from "@/components/molecules/cards/order-historyCard";
import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import LoadingBox from "./LoadingBox";
// import MessageBox from "./modals/MessageBox";
// import { fetchUserOrders } from "../actions/userActions";
// import OrderHistoryCards from "./OrderHistoryCards";

const Returns = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchUserOrders());
//   }, [dispatch]);

//   const ordersData = useSelector((state) => state?.fetchUserOrders);
//   const orders = useSelector((state) => state?.fetchUserOrders?.orders?.data);
//   const { loading, error } = ordersData;
//   const returnedOrders = orders?.filter((order) => {
//     return order.status === 'REJECTED';
//   });
  return (
    <div className="col-span-12 lg:col-span-9 px-6 pt-5 pb-7">
      {/* {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="font-semibold text-gray-800 ml-4 pb-2">My Returns</div>
          {returnedOrders?.length === 0 ? <div>You have no returned orders</div> : <div className="pt-5 pb-7 flex flex-col space-y-5 lg:h-[80vh] h-[55vh] px-1 overflow-x-scroll">
            {returnedOrders.map((returnedOrder) => {
              return <OrderHistoryCards order={returnedOrder} key={returnedOrder.id} />
            })}
          </div>}
        </div>
      )} */}
    </div>
  );
};

export default Returns;