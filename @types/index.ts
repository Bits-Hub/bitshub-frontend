export type CategoryProps =  {
    title: string;
    items: { name: string; icon: string }[];
  }

  export type CategoryItemProps =  {
    name: string;
    icon: string;
    index: number;
  }


  export interface Product {
    id: string;
    name: string;
    description: string;
    slug: string | null;
    category_id: string | null;
    user_id: string;
    status: string;
    store_id: string;
    created_at: string;
    updated_at: string;
    amount: string;
    img: string;
    product_variant_id: string;
    product_variant_spec_id: string;
    store: {
      id: string;
      brand_name: string;
      description: string;
      slug: string;
      img_url: string;
      logo: string | null;
      status: string;
      deleted: boolean | null;
      user_id: string;
      created_at: string;
      updated_at: string;
  } 
}

export interface ProductDetails {
  description: string;
  name: string;
  slug: string;
}

export interface Cart { 
  id: string;
  created_at: string;
  color: string;
  amount: string;
  product_details: ProductDetails;
  product_id: string;
  product_variant_id: string;
  product_variant_spec_id: string;
  quantity: number;
  size: string;
  store_id: string;
  updated_at: string;
  user_id: string;
  variant_img_url: string;
} 