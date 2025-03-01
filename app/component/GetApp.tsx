import React from "react";
import Image from "next/image";
import Button from "./Button";
const GetApp = () => {
  return (
    <section className="max-container padding-container flexCenter w-full flex-col pb-[100px] ">
      <div className="get-app lg:rounded-5xl  lg:max-h-[598px] ">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 ">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10 ">Available ios and android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap lg:flex-row ">
            <Button
              type="button"
              title="Download App"
              icon="./apple.svg"
              variant="btn_white"
            />

            <Button
              type="button"
              title="Download App"
              icon="./android.svg"
              variant="btn_dark_green_outline"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
