
import { createProduct, updateVendorProduct } from "../actions/vendor/product";
import { useFormik } from "formik";
import { newProductSchema } from "../utilities/schemas";
import { useDispatch, useSelector } from "react-redux";

const useNewProductFormHandler = (param) => {
  const { stores } = useSelector((state) => state?.listStores);

  const dispatch = useDispatch();
  const initialValues = {
    name: param?.data?.name || "",
    description: param?.data?.description || "",
    category_id: param?.data?.category_id || "",
    store_id: stores?.data[0]?.id,
    estimated_delivery_duration: 1,
  };
  const newProductHandler = (data) => {
    console.log(data);
    const product = {
      name: data?.name,
      description: data?.description,
      category_id: data?.category_id,
      store_id: data?.store_id,
      estimated_delivery_duration: data?.estimated_delivery_duration,
    };
    const updateProductParams = {
      id: param?.data?.id,
      name: data?.name,
      description: data?.description,
      category_id: data?.category_id,
    };

    if (param && param.data) {
      console.log('called')
      dispatch(updateVendorProduct(updateProductParams));
    } else {
      console.log('called')
      dispatch(createProduct(product));
    }
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: newProductSchema,
    onSubmit: (data) => newProductHandler(data),
    enableReinitialize: true,
  });

  return { values, errors, touched, handleChange, handleSubmit };
};

export default useNewProductFormHandler;
