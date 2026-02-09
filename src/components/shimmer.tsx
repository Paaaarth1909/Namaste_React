const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 px-6">
      {Array(10)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="w-64 h-72 bg-gray-200 rounded"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
