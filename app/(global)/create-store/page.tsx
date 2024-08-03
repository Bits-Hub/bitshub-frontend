"use client";

import { useRouter } from "next/navigation";

export default function CreateStore() {
    const router = useRouter();
  return (
    <div className="container py-16">
    <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 className="text-2xl uppercase font-medium mb-1">
        Create your store
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Own your products by creating a store
      </p>
      <form>
        <div className="space-y-4">
          <div>
            {/* <InputField
              label="Brand name"
              id="brand_name"
              type="text"
              value={values.brand_name}
              onChange={handleChange("brand_name")}
              errorMsg={touched.brand_name ? errors.brand_name : undefined}
              placeholder="Bitshub"
            />
            <InputField
              label="Description"
              id="description"
              type="text"
              value={values.description}
              onChange={handleChange("description")}
              errorMsg={touched.description ? errors.description : undefined}
              placeholder="Discover exclusive offers tailored just for you and indulge in the luxury of convenient, personalized payment options at your own pace."
            />

            <InputField
              label="City"
              id="city"
              type="text"
              value={values.city}
              onChange={handleChange("city")}
              errorMsg={touched.city ? errors.city : undefined}
              placeholder="Enter your city"
            />
            <InputField
              label="Image"
              id="img_url"
              type="file"
              value={values.img_url}
              onChange={handleChange("img_url")}
              errorMsg={touched.img_url ? errors.img_url : undefined}
            />
            <InputField
              label="State"
              id="state"
              type="text"
              value={values.state}
              onChange={handleChange("state")}
              errorMsg={touched.state ? errors.state : undefined}
              placeholder="Enter your state"
            />
            <InputField
              label="Street"
              id="street"
              type="text"
              value={values.street}
              onChange={handleChange("street")}
              errorMsg={touched.street ? errors.street : undefined}
              placeholder="Enter your street"
            />
            <InputField
              label="Phone number"
              id="phone_number"
              type="text"
              value={values.phone_number}
              onChange={handleChange("phone_number")}
              errorMsg={
                touched.phone_number ? errors.phone_number : undefined
              }
              placeholder="+2348103431851"
            /> */}
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            // onClick={handleSubmit}
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            create store
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
