import ProfileAccount from "@/components/Profile/ProfileAccount";

function ProfilePage({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { section: string };
}) {
  return (
    <>
      <ProfileAccount userId={id} section={searchParams.section} />
    </>
  );
}

export default ProfilePage;
