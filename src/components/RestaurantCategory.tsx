import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
}: any) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 rounded-lg">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={setShowIndex}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {/* Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
