import React from "react";

const IconItem = ({ icon_id, icon_descript, onClick, isSelected }) => {
  return (
    <div
      onClick={() => onClick(icon_id)}
      className={[
        "IconItem",
        isSelected ? `IconItem_on_${icon_id}` : `IconItem_off`,
      ].join(" ")}
    >
      <span>{icon_descript}</span>
    </div>
  );
};

export default React.memo(IconItem);
