"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BatteryCharging, Calendar, DollarSign, LineChart, Menu, Zap } from "lucide-react"
import { Bar, BarChart, Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", consumo: 320, custo: 480 },
  { month: "Fev", consumo: 300, custo: 450 },
  { month: "Mar", consumo: 340, custo: 510 },
  { month: "Abr", consumo: 280, custo: 420 },
  { month: "Mai", consumo: 290, custo: 435 },
  { month: "Jun", consumo: 310, custo: 465 },
]

const consumoHistorico = [
  { data: "2024-02-15", consumo: 12, custo: 18 },
  { data: "2024-02-14", consumo: 10, custo: 15 },
  { data: "2024-02-13", consumo: 15, custo: 22.5 },
  { data: "2024-02-12", consumo: 11, custo: 16.5 },
  { data: "2024-02-11", consumo: 13, custo: 19.5 },
]

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center border-b bg-background px-4 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-yellow-500" />
          <span className="text-lg font-semibold">Energy Monitor</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Select defaultValue="fevereiro">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o mês" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="janeiro">Janeiro 2024</SelectItem>
              <SelectItem value="fevereiro">Fevereiro 2024</SelectItem>
              <SelectItem value="marco">Março 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Consumo Mensal</CardTitle>
              <BatteryCharging className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">310 kWh</div>
              <p className="text-xs text-muted-foreground">+2.5% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Custo Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 465,00</div>
              <p className="text-xs text-muted-foreground">+2.5% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Média Diária</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10.3 kWh</div>
              <p className="text-xs text-muted-foreground">Baseado nos últimos 30 dias</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Consumo nos Últimos 6 Meses</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsLineChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line type="monotone" dataKey="consumo" stroke="#2563eb" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Custo Mensal (R$)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Bar dataKey="custo" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Histórico Detalhado</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Consumo (kWh)</TableHead>
                  <TableHead>Custo (R$)</TableHead>
                  <TableHead className="text-right">Média Diária</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {consumoHistorico.map((item) => (
                  <TableRow key={item.data}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {new Date(item.data).toLocaleDateString("pt-BR")}
                      </div>
                    </TableCell>
                    <TableCell>{item.consumo} kWh</TableCell>
                    <TableCell>R$ {item.custo.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{(item.consumo / 24).toFixed(1)} kWh/h</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

