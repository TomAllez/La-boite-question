import React from "react";
import "./SplashScreen.css";
import MainIcon from "@/components/update/Icons";
import { Link } from "react-router-dom";

export default function SplashScreen() {
  return (
    <>
      <div className="flex flex-col">
        <MainIcon />{" "}
        <Link to={"./home"}>
          <button>Enter</button>
        </Link>
      </div>
    </>
  );
}
