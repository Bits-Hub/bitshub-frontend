
import { createProductSpec, updateProductSpec } from "../actions/vendor/product";
import { useFormik } from "formik";
import { newProductSpecSchema } from "../utilities/schemas";
import { useDispatch, useSelector } from "react-redux";

const useNewSpecFormHandler = (param) => {

  const create = useSelector((state) => state?.createProductVariant);
  const { createProductVariant } = create;

  // const variant = useSelector((state) => state?.createProductVariant)
  // const { createProductVariant } = variant
  const dispatch = useDispatch();

  const initialValues = {
    quantity:
      param?.data?.product_variants[0]?.product_variant_specs[0]?.quantity ||
      "",
    amount:
      param?.data?.product_variants[0]?.product_variant_specs[0]?.amount || "",
    size:
      param?.data?.product_variants[0]?.product_variant_specs[0]?.size || "",
    product_variant_spec_id:
      param?.data?.product_variants[0]?.product_variant_specs[0]?.id ||
      createProductVariant?.data?.id ||
      param?.data?.product_variants[0]?.id,
  };

  const newProductHandler = (data) => {
    const createProductParams = {
      quantity: data?.quantity,
      amount: data?.amount,
      size: data?.size,
      product_variant_id: data?.product_variant_spec_id,
    };
    const updateProductParams = {
      quantity: data?.quantity,
      amount: data?.amount,
      size: data?.size,
      product_variant_spec_id: data?.product_variant_spec_id,
    };

    if (
      param &&
      param?.data?.product_variants[0]?.product_variant_specs[0]
        ?.product_variant_id
    ) {
      dispatch(updateProductSpec(updateProductParams));
    } else {
      dispatch(createProductSpec(createProductParams));
    }
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: newProductSpecSchema,
    onSubmit: (data) => newProductHandler(data),
    enableReinitialize: true,
  });
  return { values, errors, touched, handleChange, handleSubmit };
};

export default useNewSpecFormHandler;
