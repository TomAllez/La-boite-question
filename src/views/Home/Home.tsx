import "./Home.css";

export default function Home() {
  const startCamera = () => {
    window.ipcRenderer.send("start-camera");
  };

  const stopCamera = () => {
    window.ipcRenderer.send("stop-camera");
  };

  return (
    <div className="App">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-row items-center justify-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          <span className="text-2xl">Disclaimer</span>
        </div>
        <span>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de texte, comme Aldus
          PageMaker.
        </span>
        <button onClick={startCamera}>Start Session</button>
        <button onClick={stopCamera}>Stop Session</button>
      </div>
    </div>
  );
}
