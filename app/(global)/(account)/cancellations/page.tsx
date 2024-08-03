import React from "react";
import Image from "next/image";
const Cancellations = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUserOrders());
  // }, [dispatch]);

  // const ordersData = useSelector((state) => state?.fetchUserOrders);
  // const orders = useSelector((state) => state?.fetchUserOrders?.orders?.data);
  // const { loading, error } = ordersData;

  // const canceledOrders = orders?.filter((order) => {
  //   return order.status === 'CANCEL';
  // });
  return (
    // <div className="col-span-12 lg:col-span-9 px-6 pt-5 pb-7">
    //   {loading ? (
    //     <LoadingBox></LoadingBox>
    //   ) : error ? (
    //     <MessageBox variant="danger">{error}</MessageBox>
    //   ) : (
    //     <div>
    //       <div className="font-semibold text-gray-800 ml-4 pb-2">My Cancellations</div>
    //       {canceledOrders?.length === 0 ? <div>You have no canceled orders</div> : <div className="pt-5 pb-7 flex flex-col space-y-5 lg:h-[80vh] h-[55vh] px-1 overflow-x-scroll">
    //         {canceledOrders.map((canceledOrder) => {
    //           return <OrderHistoryCards order={canceledOrder} key={canceledOrder.id} />
    //         })}
    //       </div>}
    //     </div>
    //   )}
    // </div>
    <div className="col-span-12 lg:col-span-9 space-y-4 space-x-2 h-full">
      <div className="relative z-10 text-lg font-medium">This page is under construction.</div>
      <div className="relative bottom-1/4 scale-75">
        <Image className="" src="/images/construction.jpeg" width={500} height={500} alt="construction" />
      </div>
    </div>
  );
};

export default Cancellations;
