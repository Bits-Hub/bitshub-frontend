import React, { useEffect } from "react";
const WishList = () => {
//   const dispatch = useDispatch();
//   const wishListItem = useSelector((state) => state.fetchWishlist);
//   const { loading, wishlist, error } = wishListItem;

//   const deletedItem = useSelector((state) => state?.deleteWishlist);

//   useEffect(() => {
//     dispatch(fetchWishlist());
//   }, [dispatch, deletedItem.wishlist]);

  return (
    <div className="col-span-12 lg:col-span-9 space-y-4">
      {
    //   loading
    false
       ? (
        // <LoadingBox></LoadingBox>
        'loading...'
      ) : 
    //   error
    false
       ? (
        // <MessageBox variant="danger">{error}</MessageBox>
        'error...'
      ) : 
    //   wishlist?.data
    false
       ? (
        <div className="h-[40rem] flex flex-col gap-[2rem] overflow-y-scroll">
          {/* {wishlist?.data?.map((item) => {
            return <WishListCard item={item} key={item.id} />;
          })} */}
        </div>
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

export default WishList;
