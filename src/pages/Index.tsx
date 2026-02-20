import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="animate-fade-in opacity-0">
            <img 
              src="/placeholder.svg" 
              alt="Obrigado!" 
              className="w-48 h-48 mx-auto object-contain"
            />
          </div>
          <div className="space-y-2 animate-fade-in-delay opacity-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-gray-900">
              Agradecemos a sua preferência!
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-body max-w-lg mx-auto">
              Desejamos muito sucesso aos seus projetos!
            </p>
          </div>
        </div>
      </main>
      <footer className="w-full py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} LOVABLE JTC. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;