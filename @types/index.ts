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