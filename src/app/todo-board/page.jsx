import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import React from "react";

const toDoBoardPage = () => {
  return (
    <di>
      <main>
        <div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <SidebarComponent />
            </div>
            <div className="col-span-10 ml-4">
              <NavbarComponent />

              <ListBoardComponentHeader />
              <h1>Todo</h1>

              <TodoCardComponent />
              <div className="mt-5">
                <AddNewTaskComponent />
              </div>
            </div>
          </div>
        </div>
      </main>
    </di>
  );
};

export default toDoBoardPage;
