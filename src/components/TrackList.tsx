
import { Play, Heart, Clock, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Track {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: string;
  coverUrl: string;
  isLiked?: boolean;
}

interface TrackListProps {
  tracks: Track[];
  onTrackSelect?: (track: Track) => void;
}

export default function TrackList({ tracks, onTrackSelect }: TrackListProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[16px_1fr_1fr_1fr_80px] gap-4 px-4 py-2 border-b text-xs font-medium text-muted-foreground">
        <div>#</div>
        <div>НАЗВАНИЕ</div>
        <div>ИСПОЛНИТЕЛЬ</div>
        <div>АЛЬБОМ</div>
        <div className="flex justify-end">
          <Clock size={16} />
        </div>
      </div>

      <div className="divide-y divide-border/50">
        {tracks.map((track, index) => (
          <div 
            key={track.id}
            className="grid grid-cols-[16px_1fr_1fr_1fr_80px] gap-4 px-4 py-3 items-center hover:bg-muted/50 rounded-md cursor-pointer group"
            onClick={() => onTrackSelect?.(track)}
          >
            <div className="text-muted-foreground text-sm flex items-center justify-center">
              <span className="group-hover:hidden">{index + 1}</span>
              <Play size={14} className="hidden group-hover:block" />
            </div>
            
            <div className="flex items-center gap-3">
              <img 
                src={track.coverUrl} 
                alt={track.title}
                className="w-10 h-10 rounded object-cover" 
              />
              <div>
                <p className="font-medium text-sm">{track.title}</p>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {track.artist}
            </div>
            
            <div className="text-sm text-muted-foreground">
              {track.album || "-"}
            </div>
            
            <div className="flex items-center justify-end gap-3 text-muted-foreground">
              <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                <Heart size={16} className={track.isLiked ? "fill-primary text-primary" : ""} />
              </Button>
              <span className="text-sm">{track.duration}</span>
              <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                <MoreHorizontal size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
