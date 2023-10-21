import { InitModal } from "@/components/modals/init-modal";
import { db } from "@/lib/db";
import { initProfile } from "@/lib/init-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <InitModal />;
};

export default SetupPage;
