import React from "react";
import { CategoryItemProps, CategoryProps } from "@/@types";
import Image from "next/image";
const CategoryItem: React.FC<CategoryItemProps> = ({ name, icon, index }) => {
  return (
    <div
      className={`flex flex-col items-center space-y-4 p-4 border-orange-100 ${index == 1 ? "border-b" : index == 2 ? "border-t" : index == 3 ? "border-l" : "border-r"}`}
    >
      <Image
        width={50}
        height={50}
        src={icon}
        alt={name}
        className="w-16 h-16"
      />
      <span className="text-md text-slate-500 font-[400]">{name}</span>
    </div>
  );
};

const CategoryCard: React.FC<CategoryProps> = ({ title, items }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl text-orange-500 font-[500] mb-4">{title}</h2>
      <div className="grid grid-cols-2">
        {items.map((item, i) => (
          <CategoryItem key={i} index={i} name={item.name} icon={item.icon} />
        ))}
      </div>
      <a href="#" className="text-orange-500 mt-4 inline-block">
        Shop now →
      </a>
    </div>
  );
};

export default CategoryCard;
