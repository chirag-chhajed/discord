"use client";
import { Plus } from "lucide-react";
import { ActionToolTip } from "@/components/action-tooltip,";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <ActionToolTip side="right" align="center" label="Add a Server">
        <button
          className="flex items-center group"
          onClick={() => onOpen("createServer")}
        >
          <div className="flex mx-3 h-[48px] aspect-square rounded-[24px] group-hover:rounded-2xl transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="transition group-hover:text-white text-emerald-500"
              size={50}
            />
          </div>
        </button>
      </ActionToolTip>
    </div>
  );
};
