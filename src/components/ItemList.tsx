import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const dispatch = useDispatch();

const handleAddItem = (item: any) => {
  dispatch(addItem(item));
};

const ItemList = ({ items }: any) => {
  return (
    <div>
      {items.map((item: any) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">
                {item.card.info.name}
              </span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
            />
            <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
