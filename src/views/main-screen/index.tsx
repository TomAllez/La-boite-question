import { Link } from "react-router-dom";
import "./index.css";
import { Button, Text } from "@/components/common";
import { useRecorder } from "@/hooks/recorder";
import { useSystem } from "@/hooks/system";
import { useMemo, useState } from "react";
import Logo from "@/components/logo";
import { HSpacer } from "@/components/layout";

export default function MainScreen() {
  const { startAVRecording } = useRecorder();

  const date = new Date();
  const videoName = `recording_${date.getDay()}${date.getHours()}${date.getMinutes()}`;

  return (
    <div className="App">
      <div className="relative py-48 w-full h-full flex justify-center items-center">
        <SystemMenu />
        <div className="flex flex-col space-y-10">
          <div className="flex flex-row items-center justify-center space-x-4">
            <Text label="Disclaimer" typography="enormous" />
          </div>
          <Text
            label={
              "Cette application est sur le point de vous poser des questions. Elle enregistrera vos réponses en vidéo. Une fois dans la session, appuyez sur la barre d'espace pour passer à la question suivante et sur la touche 'A' pour émettre un cri."
            }
            typography={"medium"}
          />
          <div className="flex flex-row justify-center items-center">
            <Link to={"/session-screen"}>
              <Button
                label={"Start Session"}
                onClick={() => startAVRecording(videoName)}
              />
            </Link>
            <HSpacer />
            <Link to={"/"}>
              <Button label={"Exit"} cancelled />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const SystemMenu = () => {
  const [folderSize, setFolderSize] = useState<number>(0);
  const { getFolderSize } = useSystem();

  useMemo(() => {
    const retrieveData = async () => {
      const fs = await getFolderSize();
      setFolderSize(fs);
    };
    retrieveData().then();
  }, [setFolderSize]);

  const OCTETS_IN_GIGAOCTETS = 1_000_000_000;
  const MAX_SIZE_IN_GIGAOCTETS = 20;

  const folderSizeInGo = folderSize / OCTETS_IN_GIGAOCTETS;
  console.log(folderSizeInGo);
  const availablePercentage = (folderSizeInGo / MAX_SIZE_IN_GIGAOCTETS) * 100;

  const gradientColors = [
    "rgba(0,255,0,0)",
    `rgba(168,85,247,1) ${availablePercentage}%`,
    `rgba(0,255,0,0) ${availablePercentage + 1}%`,
  ];

  const conicGradient = `conic-gradient(${gradientColors.join(", ")})`;

  return (
    <div className="absolute top-10 right-10 w-6 h-6 rounded-full">
      <div
        className="p-4 rounded-full h-full w-full flex justify-center items-center"
        style={{ background: conicGradient }}
      >
        <div className="h-full font-bold w-full text-xs text-purple-500 rounded-full bg-black flex justify-center items-center">
          {Math.round(availablePercentage)}%
        </div>
      </div>
    </div>
  );
};
