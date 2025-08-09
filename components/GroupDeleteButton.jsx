"use client";

// import { Button } from "@/components/ui/button";
// import { Trash2 } from "lucide-react";
// import { toast } from "sonner";
// import { useConvexMutation, useConvexQuery } from "@/hooks/use-convex-query";
// import { api } from "@/convex/_generated/api";

// export default function GroupDeleteButton({ groupId, createdBy }) {
//   const { data: currentUser } = useConvexQuery(api.users.getCurrentUser);
//   const deleteGroup = useConvexMutation(api.groups.deleteGroup);

//   const canDeleteGroup = currentUser?._id === createdBy;

//   const handleDelete = async () => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this group? This will delete all expenses and settlements in it, and cannot be undone."
//     );
//     if (!confirmed) return;

//     try {
//       await deleteGroup.mutate({ groupId });
//       toast.success("Group deleted successfully");

//       // Optionally redirect after deletion
//       window.location.href = "/dashboard"; // change to your desired route
//     } catch (error) {
//       toast.error("Failed to delete group: " + error.message);
//     }
//   };

//   if (!canDeleteGroup) return null;

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       className="h-8 w-8 rounded-full text-red-500 hover:text-red-700 hover:bg-red-100"
//       onClick={handleDelete}
//     >
//       <Trash2 className="h-4 w-4" />
//       <span className="sr-only">Delete group</span>
//     </Button>
//   );
// }


import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function GroupDeleteButton({ groupId }) {
  const router = useRouter();
  const deleteGroup = useMutation(api.groups.deleteGroup);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this group? This cannot be undone.")) {
      try {
        await deleteGroup({ groupId });
        toast.success("Group deleted successfully");
        router.push("/dashboard");
      } catch (err) {
        console.error(err);
        const message =
          err.message === "You don't have permission to delete this group"
            ? err.message
            : "Failed to delete group: " + err.message;
        toast.error(message);
      }
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete Group
    </Button>
  );
}
