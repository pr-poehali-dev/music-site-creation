
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const MusicNavbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="md:hidden mr-2">
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          </Button>
        </div>
        
        <div className="mr-4 hidden md:flex">
          <a href="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M8 18V6l10 6-10 6Z"></path></svg>
            <span className="font-bold">МузыкаПлюс</span>
          </a>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-sm">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
              <Input
                type="search"
                placeholder="Поиск..."
                className="pl-8 w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <div className="h-6 w-6 rounded-full bg-muted overflow-hidden">
              <img src="https://source.unsplash.com/random/100x100?avatar" alt="Аватар" className="h-full w-full object-cover" />
            </div>
            <span className="hidden md:inline">Аккаунт</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
