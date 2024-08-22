export type CategoryProps =  {
    title: string;
    items: { name: string; icon: string }[];
  }

  export type CategoryItemProps =  {
    name: string;
    icon: string;
    index: number;
  }

  export type ProductCardProps = {
    img: string;
    productName?: string;
  };
