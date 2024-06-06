import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto pt-12 grid grid-cols-2 gap-4 my-4">
        <Skeleton className="h-[500px] w-[500px] rounded-xl"></Skeleton>
        <div>
          <Skeleton className="h-4 w-[250px]"></Skeleton>
          <Skeleton className="h-4 w-[250px]"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default Loading;
