interface props {
  text: string;
  list: string[];
}

const BulletList = ({ text, list }: props) => {
  return (
    <div className="w-full rounded-xl bg-citrus-red-100 p-4 text-white drop-shadow-md">
      <div className="flex items-center justify-between font-bebas text-xl">
        {text}
      </div>
      <ul
        data-cy="bulletpoint-list-items"
        className="mt-2 flex flex-col items-center justify-center font-kameron"
      >
        {list.map((item, index) => (
          <li
            data-cy="bulletpoint-list-item"
            key={index}
            className="w-10/12 list-disc"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
