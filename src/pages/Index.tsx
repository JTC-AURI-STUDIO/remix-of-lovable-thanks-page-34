import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="text-[10rem] md:text-[15rem] lg:text-[20rem] animate-fade-in-delay">
            🐼
          </div>
          <p className="text-lg text-muted-foreground mt-4 animate-fade-in">
            Um panda para alegrar seu dia!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
