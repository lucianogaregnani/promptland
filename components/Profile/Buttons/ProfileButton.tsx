import { useSearchParams } from "next/navigation";

interface ProfileButtonProps {
    onClick:(typeButton:"prompts" | "likedPrompts") => void
    children:React.ReactNode
    type:"prompts" | "likedPrompts"
}

function ProfileButton({ onClick, children, type }:ProfileButtonProps) {
  const searchParams = useSearchParams()
  const isSelected = searchParams.get('section') === type

  return (
    <button onClick={() => onClick(type)} className={`transition-all flex-1 border-b-2 ${isSelected ? "border-indigo-500 text-indigo-500" : "text-slate-400 border-slate-400"}`}>
      {children}
    </button>
  );
}

export default ProfileButton;
