import { Link } from "react-router-dom";
import "./index.css";
import { useRecorder } from "@/hooks/recorder";
import { Button, Text } from "@/components/common";
import { VSpacer } from "@/components/layout";
import { useMemo } from "react";

export default function EndScreen() {
  const { stopAVRecording } = useRecorder();

  useMemo(() => {
    stopAVRecording();
  }, []);

  return (
    <div className="App">
      <Text label="Merci de votre participation !" typography="enormous" />
      <VSpacer />
      <Link to={"/"}>
        <Button label={"Retour à l'acceuil"} />
      </Link>
    </div>
  );
}
