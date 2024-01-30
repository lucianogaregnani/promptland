import { MdOutlineDeleteOutline } from "react-icons/md";

function ButtonDelete() {
  return (
    <button className="w-8 h-8 flex items-center justify-center bg-red-500 p-2 text-white/60 rounded-full hover:bg-red-400 transition-all">
      <MdOutlineDeleteOutline />
    </button>
  );
}

export default ButtonDelete;
