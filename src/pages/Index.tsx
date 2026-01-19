import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex items-center justify-center opacity-0 animate-fade-in">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-6 font-display text-5xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in md:text-6xl lg:text-7xl">
          LOVABLE STORE
        </h1>

        {/* Decorative line */}
        <div className="mb-8 flex items-center gap-4 opacity-0 animate-fade-in-delay">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <Heart className="h-5 w-5 text-primary animate-shimmer" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Message */}
        <p className="max-w-lg font-body text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-in-delay md:text-xl">
          Nós da Lovable Store, desejamos muito sucesso a seus projetos. Obrigado por comprar conosco!
        </p>

        {/* Footer decoration */}
        <div className="mt-12 opacity-0 animate-fade-in-delay" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
            <span className="h-1 w-1 rounded-full bg-primary/40" />
            <span className="font-body italic">Com carinho</span>
            <span className="h-1 w-1 rounded-full bg-primary/40" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
