import { getAllWorkspace } from "@/service/workspace.service";
import Image from "next/image";
import React from "react";

export default async function ListBoardComponentHeader() {
  const workSpaceData = await getAllWorkspace();
  return (
    <>
      {/* {workSpaceData.data.map((workspace) => (
        <div className="text-gray flex text-lg gap-3 mb-5 mt-4">
          <p>Workspace</p> / <p>{workspace.workspaceName}</p> / <p>List</p>
        </div>
      ))} */}
      <div className="text-gray flex text-lg gap-3 mb-5 mt-4">
        <p>Workspace</p> / <p>spring</p> / <p>List</p>
      </div>

      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">HRD Design</h2>
        <div className="border border-gray rounded-lg p-2">
          <Image
            src="/assets/icons/star.svg"
            width={20}
            height={20}
            alt="black star"
          />
        </div>
      </div>
    </>
  );
}
