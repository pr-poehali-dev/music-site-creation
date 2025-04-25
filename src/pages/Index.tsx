
import { Music, Home, Search, Library, PlusCircle, Mic2, ListMusic, Radio, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import SidebarNav from "@/components/ui/sidebar-nav";
import MusicPlayer from "@/components/MusicPlayer";
import TrackList from "@/components/TrackList";
import MusicHeader from "@/components/MusicHeader";

const featuredPlaylists = [
  {
    title: "Лучшее за неделю",
    coverUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300"
  },
  {
    title: "Новые хиты",
    coverUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300"
  },
  {
    title: "Рок-классика",
    coverUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300"
  }
];

const tracks = [
  {
    id: "1",
    title: "Без тебя",
    artist: "Дельфин",
    album: "STOP KILLING DOLPHINS",
    duration: "3:42",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
    isLiked: true
  },
  {
    id: "2",
    title: "Последний летний день",
    artist: "Кино",
    album: "Группа крови",
    duration: "4:20",
    coverUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300"
  },
  {
    id: "3",
    title: "Шторм",
    artist: "Би-2",
    album: "Горизонт событий",
    duration: "5:15",
    coverUrl: "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300"
  },
  {
    id: "4",
    title: "Прогулки по воде",
    artist: "Наутилус Помпилиус",
    album: "Чужая земля",
    duration: "3:30",
    coverUrl: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300"
  },
  {
    id: "5",
    title: "Летели облака",
    artist: "Земфира",
    album: "Земфира",
    duration: "4:05",
    coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300"
  }
];

const sidebarItems = [
  { href: "/", title: "Главная", icon: <Home size={18} /> },
  { href: "/search", title: "Поиск", icon: <Search size={18} /> },
  { href: "/library", title: "Библиотека", icon: <Library size={18} /> },
];

const Index = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="grid flex-1 overflow-hidden grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="bg-sidebar border-r border-sidebar-border flex flex-col">
          <div className="p-6">
            <div className="flex items-center gap-2 font-bold mb-8">
              <Music className="h-6 w-6 text-primary" />
              <span className="text-lg">МузикаПлюс</span>
            </div>
            
            <SidebarNav items={sidebarItems} />
            
            <div className="mt-8 space-y-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Твоя музыка
              </div>
              <Button variant="ghost" className="w-full justify-start gap-2 px-3 py-2 text-sm">
                <PlusCircle size={18} />
                <span>Создать плейлист</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 px-3 py-2 text-sm">
                <Mic2 size={18} />
                <span>Исполнители</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 px-3 py-2 text-sm">
                <ListMusic size={18} />
                <span>Альбомы</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 px-3 py-2 text-sm">
                <Radio size={18} />
                <span>Радио</span>
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="overflow-hidden flex flex-col">
          <MusicHeader />
          
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-6">
              <section>
                <h2 className="text-3xl font-bold mb-6">Добро пожаловать</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredPlaylists.map((playlist, index) => (
                    <div key={index} className="bg-card hover:bg-card/90 transition-colors rounded-xl overflow-hidden cursor-pointer group">
                      <div className="relative">
                        <img 
                          src={playlist.coverUrl} 
                          alt={playlist.title}
                          className="w-full aspect-square object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" className="rounded-full bg-primary text-primary-foreground h-12 w-12">
                            <HeadphonesIcon />
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{playlist.title}</h3>
                        <p className="text-sm text-muted-foreground">Плейлист • МузикаПлюс</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Недавно прослушано</h2>
                <TrackList tracks={tracks} />
              </section>
            </div>
          </ScrollArea>
        </main>
      </div>
      
      {/* Music player */}
      <div className="border-t border-sidebar-border">
        <MusicPlayer 
          trackTitle="Последний летний день" 
          artist="Кино" 
          coverUrl="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300"
        />
      </div>
    </div>
  );
};

export default Index;
