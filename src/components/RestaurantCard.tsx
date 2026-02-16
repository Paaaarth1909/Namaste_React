const RestaurantCard = ({ resData }: any) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div className="w-64 p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="w-full h-40 object-cover rounded"
        src={
          cloudinaryImageId?.startsWith("http")
            ? cloudinaryImageId
            : `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
        }
        alt={name}
      />

      <h3 className="font-bold text-lg mt-2">{name}</h3>
      <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
      <p className="text-sm">⭐ {avgRating}</p>
      <p className="text-sm">{costForTwo}</p>
    </div>
  );
};
// Higher Order Component
export const withPromotedLabel = (RestaurantCard: any) => {
  return (props: any) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white m-2 px-2 py-1 rounded-lg text-sm">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};


export default RestaurantCard;
