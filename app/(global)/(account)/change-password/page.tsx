// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useFormik } from "formik";
// import InputField from "../components/InputField";
// import { ChangePasswordSchema } from "../utilities/schemas";
// import { resetUserPassword } from "../actions/userActions";

"use client";

import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const navigate = useRouter();
//   const dispatch = useDispatch();

  const navigateUrl = () => {
    navigate.push('/manage-account');
  }


  const initialValues = {
    newPassword: "",
  };

//   const addressHandler = (data) => {
//     dispatch(
//       resetUserPassword(
//         data?.newPassword
//       )
//     ).then(() => { 
//       navigateUrl();
//     })
//   };


//   const { values, errors, touched, handleChange, handleSubmit } = useFormik({
//     initialValues,
//     validationSchema: ChangePasswordSchema,
//     onSubmit: (data) => addressHandler(data),
//     enableReinitialize: true,
//   });

  return (
    <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <p className="text-lg font-medium capitalize mb-4">Change Password</p>
      {/* <div className="space-y-4">
        <div>
          <InputField
            label="New Password"
            id="new_password"
            type="text"
            value={values.newPassword}
            onChange={handleChange("newPassword")}
            errorMsg={touched.newPassword ? errors.newPassword : undefined}
            placeholder="Enter New Password"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-primary border border-primary text-white px-12 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default ChangePassword;