import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const clients = [
  {
    id: "1",
    name: "Alice Johnson",
    consumption: "1,234 kWh",
    status: "Normal",
    trend: "+2.3%",
  },
  {
    id: "2",
    name: "Bob Smith",
    consumption: "2,845 kWh",
    status: "High",
    trend: "+15.7%",
  },
  {
    id: "3",
    name: "Carol Williams",
    consumption: "956 kWh",
    status: "Low",
    trend: "-5.1%",
  },
  {
    id: "4",
    name: "David Brown",
    consumption: "1,678 kWh",
    status: "Normal",
    trend: "+1.2%",
  },
]

export function ClientsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Consumption</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Trend</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.id}>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.consumption}</TableCell>
            <TableCell>
              <span
                className={
                  client.status === "High"
                    ? "text-red-500"
                    : client.status === "Low"
                      ? "text-green-500"
                      : "text-yellow-500"
                }
              >
                {client.status}
              </span>
            </TableCell>
            <TableCell>{client.trend}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

