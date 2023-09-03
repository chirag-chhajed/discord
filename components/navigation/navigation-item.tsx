"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ActionToolTip } from "@/components/action-tooltip,";
import { FunctionComponent } from "react";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

const NavigationItem: FunctionComponent<NavigationItemProps> = ({
  id,
  imageUrl,
  name,
}) => {
  const params = useParams();
  const router = useRouter();
  const onClick = () => {
    router.push(`/servers/${id}`);
  };
  return (
    <ActionToolTip side="right" align="center" label={name}>
      <button className="relative flex items-center group" onClick={onClick}>
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover:h-5",
            params?.serverId === id ? "h-9" : "h-2"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === id &&
              "bg-primary/10 text-primary rouned-[16px]"
          )}
        >
          <Image src={imageUrl} alt={name + " channel image"} fill />
        </div>
      </button>
    </ActionToolTip>
  );
};

export { NavigationItem };
