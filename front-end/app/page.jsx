import { ChevronDown, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ConsumptionChart } from "@/components/consumption-chart"
import { CostChart } from "@/components/cost-chart"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex h-16 items-center justify-between border-b px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Zap className="h-5 w-5 text-yellow-400" />
          Energy Monitor
        </Link>
        <Button variant="outline" className="gap-2">
          Fevereiro 2024
          <ChevronDown className="h-4 w-4" />
        </Button>
      </header>
      <main className="p-6">
        <div className="flex flex-wrap gap-6">
          <Card className="flex-1 min-w-[280px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Consumo Mensal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">310 kWh</div>
              <p className="text-xs text-green-500">+2.5% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card className="flex-1 min-w-[280px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Custo Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 465,00</div>
              <p className="text-xs text-green-500">+2.5% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card className="flex-1 min-w-[280px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Média Diária</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10.3 kWh</div>
              <p className="text-xs text-muted-foreground">Baseado nos últimos 30 dias</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex flex-wrap gap-6">
          <Card className="flex-1 min-w-[400px]">
            <CardHeader>
              <CardTitle>Consumo nos Últimos 6 Meses</CardTitle>
            </CardHeader>
            <CardContent>
              <ConsumptionChart />
            </CardContent>
          </Card>
          <Card className="flex-1 min-w-[400px]">
            <CardHeader>
              <CardTitle>Custo Mensal (R$)</CardTitle>
            </CardHeader>
            <CardContent>
              <CostChart />
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Histórico Detalhado</CardTitle>
            </CardHeader>
            <CardContent>{/* Tabela de histórico será adicionada aqui */}</CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

