export type Categories = []

export type ProductVariant = {
    id: string | null;
    size: number | null;
    quantity: number | null;
    amount: number | null;
    status: string | null;
    color: string | null;
    img_urls: string[] | null;
    video_url: string | null;
    product_id: string | null;
    store_id: string | null;
    user_id: string | null;
    created_at: string | null;
    updated_at: string | null;
  }

  export type Product = {
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
  };
}
