import React from "react";

export type DataItem = {
  id: number;
  name: string;
  description: string;
  image: string;
};

type DataPresenterProps = {
  data: DataItem[];
};

export const DataPresenter: React.FC<DataPresenterProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <img src={item.image} alt={item.name} className="data-image" />
          <em>{item.description}</em>
        </React.Fragment>
      ))}
    </>
  );
};
