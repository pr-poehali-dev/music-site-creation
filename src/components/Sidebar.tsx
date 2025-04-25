
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r p-4 hidden md:block">
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Главная
          </div>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15V6"></path><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path><path d="M12 12H3"></path><path d="M16 6H3"></path><path d="M12 18H3"></path></svg>
            Плейлисты
          </div>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            Радио
          </div>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v5a3 3 0 0 1-3 3"></path><path d="M6 9v5a3 3 0 0 0 3 3"></path></svg>
            Исполнители
          </div>
        </Button>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-sm mb-2">Ваши плейлисты</h3>
        <div className="space-y-1">
          {["Любимые треки", "Недавно прослушанные", "90-е хиты", "Для тренировки"].map((playlist, index) => (
            <Button key={index} variant="ghost" className="w-full justify-start text-sm h-8" asChild>
              <div className="cursor-pointer">
                {playlist}
              </div>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};
