
import { Button } from "@/components/ui/button";

export const FeaturedTracks = () => {
  const featuredTracks = [
    { id: 1, title: "Вокруг света", artist: "Земляне", duration: "3:45" },
    { id: 2, title: "Лето без границ", artist: "Звуки города", duration: "4:12" },
    { id: 3, title: "Ночные огни", artist: "Электро", duration: "3:21" },
    { id: 4, title: "Путешествие во времени", artist: "Квант", duration: "5:08" },
    { id: 5, title: "Бесконечность", artist: "Марк Петров", duration: "2:59" },
  ];

  return (
    <div className="bg-card rounded-lg overflow-hidden">
      <div className="grid grid-cols-12 p-3 text-sm font-medium text-muted-foreground border-b">
        <div className="col-span-1">#</div>
        <div className="col-span-5">Название</div>
        <div className="col-span-4">Исполнитель</div>
        <div className="col-span-2 text-right">Длительность</div>
      </div>
      
      {featuredTracks.map((track, index) => (
        <div key={track.id} className="grid grid-cols-12 p-3 hover:bg-muted/50 group items-center text-sm">
          <div className="col-span-1 text-muted-foreground group-hover:text-foreground">
            <div className="group-hover:hidden">{index + 1}</div>
            <div className="hidden group-hover:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
          <div className="col-span-5 font-medium truncate">{track.title}</div>
          <div className="col-span-4 text-muted-foreground truncate">{track.artist}</div>
          <div className="col-span-2 text-right text-muted-foreground flex items-center justify-end">
            <span className="mr-2">{track.duration}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
