import { useEffect, useState } from "react";

export function header() {

    return (
        <header className="flex h-16 items-center justify-between border-b px-6">
            {/* Link é usado para navegação entre páginas no Next.js */}
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                {/* Zap é o ícone de raio da biblioteca lucide-react */}
                <Zap className="h-5 w-5 text-yellow-400" />
                Sol do Brasil
            </Link>
            <Button variant="outline" className="gap-2">
                Fevereiro 2024
                {/* ChevronDown é o ícone de seta para baixo */}
                <ChevronDown className="h-4 w-4" />
            </Button>
        </header>
    )
}