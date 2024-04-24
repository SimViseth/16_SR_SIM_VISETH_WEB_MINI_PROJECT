import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import Image from "next/image";
import React from "react";

const toDoListPage = () => {
  return (
    <main>
      <div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <SidebarComponent />
          </div>
          <div className="col-span-10">
            <NavbarComponent />
            <div className="ml-[180px]">
              <Image
                src={
                  "https://sofontsy.com/cdn/shop/products/welcome-cutting-file-for-farmhouse-sign-welcome-sign-greeting-sign-svg-dxf-and-more-glowforge-laser-ready-svg-diva-watts-designs-306122_1024x.jpg?v=1617077597"
                }
                width={780}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default toDoListPage;
