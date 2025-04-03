import { useRef, useState } from "react";
import playIcon from "../assets/play.svg";
import pauseIcon from "../assets/pause.svg";

const AudioPlayer = ({ src, title, name, sello }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const handleSeek = (event) => {
    if (audioRef.current) {
      const newTime = (parseFloat(event.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(parseFloat(event.target.value));
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="examplesss">
          <div className="d-flex flex-row p-3 color-play">
            {/* Contenedor del icono de play/pause */}
            <div className="p-3">
              <img
                src={isPlaying ? pauseIcon : playIcon}
                alt="Play/Pause Icon"
                width={70}
                height={70}
                style={{ cursor: "pointer", filter: "invert(1)" }}
                onClick={togglePlayPause}
              />
            </div>

            {/* Contenedor de texto y barra de progreso */}
            <div className="flex-col descrip w-100">
              <div className="know">{title}</div>
              <div className="d-flex flex-row">
                <div className="pe-2 bordeder">{name}</div>
                <div className="ps-2 bordersello">{sello}</div>
              </div>

              {/* Barra de progreso debajo del nombre y sello */}
              <div className="progress-container">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="progress-bar"
                  style={{
                    "--progress": `${progress}%`
                  }}
                />

                <div className="spanspace">
                  <span className="time-left">{formatTime(currentTime)}</span>
                  <span className="time-right">{formatTime(duration - currentTime)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </>
  );
};

const ExamplesCards = () => {
  const songs = [
    { src: "/LUCY-V3.mp3", title: "V3", name:"LUCY", sello:"Unrealesed"},
    { src: "/Daphna-22.mp3", title: "22", name:"Daphna", sello:"One Of Those Days" },
    { src: "/Firebass-JumpIn.wav", title: "Jump In (Original Mix)", name:"Firebass", sello:"My Planet Record" }
  ];

  return (
    <div className="exampless">
      <div className="col aditional_col">
        <div className="row w-100 d-flex justify-content-center">
          <h2 className="aditional_titleexample mt-5">Ejemplos realizados por alumnos</h2>
        </div>
      </div>
      {songs.map((song, index) => (
        <AudioPlayer key={index} src={song.src} name={song.name} title={song.title} sello={song.sello}/>
      ))}
    </div>
  );
};

export default ExamplesCards;

