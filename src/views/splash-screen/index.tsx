import { useMemo, useState } from "react";
import "./index.css";
import { Button, Text } from "@/components/common";
import Logo from "@/components/logo";
import { Link } from "react-router-dom";
import { VSpacer } from "@/components/layout";

function SplashScreen() {
  const audio = useMemo(() => {
    return new Audio("./Ow.mp3");
  }, []);

  const playSound = () => {
    audio.currentTime = 0; // Reset audio to start
    audio.play();
  };

  return (
    <div className="splash-screen">
      <Logo />
      <VSpacer />
      <Text label={"La Boite À Questions"} typography="enormous" />
      <VSpacer />
      <Link to={"/main-screen"}>
        <Button label={"Enter"} onClick={() => playSound()} />
      </Link>
    </div>
  );
}

export default SplashScreen;
