
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface MusicPlayerProps {
  trackTitle?: string;
  artist?: string;
  coverUrl?: string;
}

export default function MusicPlayer({
  trackTitle = "Название трека",
  artist = "Исполнитель",
  coverUrl = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=200",
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center p-4 bg-sidebar rounded-lg shadow-md gap-4">
      <img
        src={coverUrl}
        alt="Cover Art"
        className="w-14 h-14 rounded-md object-cover"
      />
      
      <div className="flex-1">
        <h3 className="font-medium text-sm">{trackTitle}</h3>
        <p className="text-xs text-muted-foreground">{artist}</p>
        
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground">0:00</span>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="flex-1 mx-2"
            onValueChange={(value) => setProgress(value[0])}
          />
          <span className="text-xs text-muted-foreground">3:45</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-1 rounded-full hover:bg-muted transition-colors">
          <SkipBack size={18} />
        </button>
        <button 
          className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          onClick={togglePlay}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button className="p-1 rounded-full hover:bg-muted transition-colors">
          <SkipForward size={18} />
        </button>
      </div>
      
      <div className="flex items-center gap-2 w-32">
        <Volume2 size={16} className="text-muted-foreground" />
        <Slider
          value={[volume]}
          max={100}
          step={1}
          onValueChange={(value) => setVolume(value[0])}
        />
      </div>
    </div>
  );
}
