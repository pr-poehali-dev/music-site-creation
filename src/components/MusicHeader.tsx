
import { Search, Bell, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MusicHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-md sticky top-0 z-10">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Поиск треков, исполнителей, альбомов..."
            className="pl-10 bg-secondary text-secondary-foreground"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings size={20} />
        </Button>
        <Button size="sm" className="ml-4">
          Войти
        </Button>
      </div>
    </header>
  );
}
