
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [progress, setProgress] = useState(30);

  return (
    <div className="border-t bg-card p-3 sticky bottom-0 left-0 right-0">
      <div className="container flex items-center">
        <div className="flex items-center flex-1 min-w-0">
          <div className="w-14 h-14 rounded bg-muted relative overflow-hidden mr-3 flex-shrink-0">
            <img 
              src="https://source.unsplash.com/random/100x100?album" 
              alt="Текущий трек" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-medium text-sm truncate">Название текущего трека</h4>
            <p className="text-xs text-muted-foreground truncate">Исполнитель</p>
          </div>
        </div>
        
        <div className="flex-1 max-w-xl mx-2 md:mx-8">
          <div className="flex justify-center items-center space-x-4 mb-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg>
            </Button>
            <Button 
              onClick={() => setIsPlaying(!isPlaying)} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>
            </Button>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">1:23</span>
            <Slider
              value={[progress]}
              max={100}
              step={1}
              className="flex-1"
              onValueChange={(value) => setProgress(value[0])}
            />
            <span className="text-muted-foreground">3:45</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-2 w-36">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          </Button>
          <Slider
            value={[volume]}
            max={100}
            step={1}
            className="flex-1"
            onValueChange={(value) => setVolume(value[0])}
          />
        </div>
      </div>
    </div>
  );
};
