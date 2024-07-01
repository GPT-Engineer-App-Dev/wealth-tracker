import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function Index() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Financial Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-semibold">Total Balance</h2>
              <p className="text-2xl">$10,000</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-semibold">Income</h2>
              <p className="text-2xl">$5,000</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-semibold">Expenses</h2>
              <p className="text-2xl">$3,000</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-semibold">Savings</h2>
              <p className="text-2xl">$2,000</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-10-01</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Income</TableCell>
                <TableCell>$5,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-10-02</TableCell>
                <TableCell>Groceries</TableCell>
                <TableCell>Expense</TableCell>
                <TableCell>$200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-10-03</TableCell>
                <TableCell>Rent</TableCell>
                <TableCell>Expense</TableCell>
                <TableCell>$1,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Charts and Graphs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-200 rounded">Chart Placeholder</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;