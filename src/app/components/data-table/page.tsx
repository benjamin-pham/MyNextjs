"use client"

import { useState, useMemo } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

/* ─── types & data ───────────────────────────────────────────────────────── */

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const PAYMENTS: Payment[] = [
  { id: "728ed52f", amount: 100, status: "pending",    email: "m@example.com" },
  { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
  { id: "a1b2c3d4", amount: 242, status: "success",    email: "tan@company.vn" },
  { id: "e5f6g7h8", amount: 84,  status: "failed",     email: "nguyen@mail.com" },
  { id: "i9j0k1l2", amount: 320, status: "success",    email: "dev@test.io" },
  { id: "m3n4o5p6", amount: 57,  status: "pending",    email: "admin@site.net" },
  { id: "q7r8s9t0", amount: 198, status: "processing", email: "user@example.org" },
  { id: "u1v2w3x4", amount: 440, status: "success",    email: "boss@corp.vn" },
]

/* ─── icons ──────────────────────────────────────────────────────────────── */

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
)
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)
const ChevronsUpDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="11 17 6 12 11 7" /><polyline points="17 17 12 12 17 7" />
  </svg>
)
const MoreHorizontalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" />
  </svg>
)
const SlidersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="21" y1="4" x2="14" y2="4" /><line x1="10" y1="4" x2="3" y2="4" />
    <circle cx="12" cy="4" r="2" /><line x1="21" y1="12" x2="16" y2="12" />
    <line x1="12" y1="12" x2="3" y2="12" /><circle cx="14" cy="12" r="2" />
    <line x1="21" y1="20" x2="11" y2="20" /><line x1="7" y1="20" x2="3" y2="20" />
    <circle cx="9" cy="20" r="2" />
  </svg>
)

/* ─── status badge helper ────────────────────────────────────────────────── */

const STATUS_STYLES: Record<Payment["status"], string> = {
  pending:    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  processing: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  success:    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  failed:     "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
}

function StatusBadge({ status }: { status: Payment["status"] }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  )
}

/* ─── 1. Basic columns ───────────────────────────────────────────────────── */

function BasicDemo() {
  const columns: ColumnDef<Payment>[] = [
    { accessorKey: "id",     header: "ID" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "email",  header: "Email" },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
        return <div className="text-right font-medium">{fmt}</div>
      },
    },
  ]

  const table = useReactTable({
    data: PAYMENTS.slice(0, 5),
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">Không có dữ liệu.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

/* ─── 2. Sorting demo ────────────────────────────────────────────────────── */

function SortingDemo() {
  const [sorting, setSorting] = useState<SortingState>([])

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "email",
      header: ({ column }) => (
        <Button variant="ghost" size="sm" className="-ml-3 h-8" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email
          {column.getIsSorted() === "asc" ? <ChevronUpIcon /> : column.getIsSorted() === "desc" ? <ChevronDownIcon /> : <ChevronsUpDownIcon />}
        </Button>
      ),
    },
    { accessorKey: "status", header: "Status",
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <div className="text-right">
          <Button variant="ghost" size="sm" className="h-8" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Amount
            {column.getIsSorted() === "asc" ? <ChevronUpIcon /> : column.getIsSorted() === "desc" ? <ChevronDownIcon /> : <ChevronsUpDownIcon />}
          </Button>
        </div>
      ),
      cell: ({ row }) => {
        const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(row.getValue("amount"))
        return <div className="text-right">{fmt}</div>
      },
    },
  ]

  const table = useReactTable({
    data: PAYMENTS,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="rounded-md border w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((h) => (
                <TableHead key={h.id}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

/* ─── 3. Filtering demo ──────────────────────────────────────────────────── */

function FilteringDemo() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const columns: ColumnDef<Payment>[] = [
    { accessorKey: "email",  header: "Email" },
    { accessorKey: "status", header: "Status",
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(row.getValue("amount"))
        return <div className="text-right">{fmt}</div>
      },
    },
  ]

  const table = useReactTable({
    data: PAYMENTS,
    columns,
    state: { columnFilters },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <div className="w-full space-y-3">
      <input
        placeholder="Lọc theo email..."
        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        onChange={(e) => table.getColumn("email")?.setFilterValue(e.target.value)}
        className="h-9 w-full max-w-xs rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">Không tìm thấy kết quả.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

/* ─── 4. Pagination demo ─────────────────────────────────────────────────── */

function PaginationDemo() {
  const columns: ColumnDef<Payment>[] = [
    { accessorKey: "id",     header: "ID" },
    { accessorKey: "email",  header: "Email" },
    { accessorKey: "status", header: "Status",
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(row.getValue("amount"))
        return <div className="text-right">{fmt}</div>
      },
    },
  ]

  const table = useReactTable({
    data: PAYMENTS,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 3 } },
  })

  return (
    <div className="w-full space-y-3">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Trang {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
          {" "}({table.getFilteredRowModel().rows.length} hàng)
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Trước
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Sau
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ─── 5. Row selection demo ──────────────────────────────────────────────── */

function RowSelectionDemo() {
  const [rowSelection, setRowSelection] = useState({})

  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Chọn tất cả"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Chọn hàng"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    { accessorKey: "email",  header: "Email" },
    { accessorKey: "status", header: "Status",
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(row.getValue("amount"))
        return <div className="text-right">{fmt}</div>
      },
    },
  ]

  const table = useReactTable({
    data: PAYMENTS,
    columns,
    state: { rowSelection },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
  })

  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length

  return (
    <div className="w-full space-y-3">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground">
        {selectedCount} / {totalCount} hàng được chọn.
      </p>
    </div>
  )
}

/* ─── 6. Column visibility demo ──────────────────────────────────────────── */

function VisibilityDemo() {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  const columns: ColumnDef<Payment>[] = [
    { accessorKey: "id",     header: "ID" },
    { accessorKey: "email",  header: "Email" },
    { accessorKey: "status", header: "Status",
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(row.getValue("amount"))
        return <div className="text-right">{fmt}</div>
      },
    },
  ]

  const table = useReactTable({
    data: PAYMENTS.slice(0, 5),
    columns,
    state: { columnVisibility },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersIcon />
              Cột hiển thị
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table.getAllColumns().filter((col) => col.getCanHide()).map((col) => (
              <DropdownMenuCheckboxItem
                key={col.id}
                className="capitalize"
                checked={col.getIsVisible()}
                onCheckedChange={(value) => col.toggleVisibility(!!value)}
              >
                {col.id}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

/* ─── 7. Full-featured demo ──────────────────────────────────────────────── */

function FullDemo() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const columns: ColumnDef<Payment>[] = useMemo(() => [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
          aria-label="Chọn tất cả"
        />
      ),
      cell: ({ row }) => (
        <Checkbox checked={row.getIsSelected()} onCheckedChange={(v) => row.toggleSelected(!!v)} aria-label="Chọn hàng" />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <Button variant="ghost" size="sm" className="-ml-3 h-8" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email
          {column.getIsSorted() === "asc" ? <ChevronUpIcon /> : column.getIsSorted() === "desc" ? <ChevronDownIcon /> : <ChevronsUpDownIcon />}
        </Button>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <div className="text-right">
          <Button variant="ghost" size="sm" className="h-8" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Amount
            {column.getIsSorted() === "asc" ? <ChevronUpIcon /> : column.getIsSorted() === "desc" ? <ChevronDownIcon /> : <ChevronsUpDownIcon />}
          </Button>
        </div>
      ),
      cell: ({ row }) => {
        const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(row.getValue("amount"))
        return <div className="text-right font-medium">{fmt}</div>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Mở menu</span>
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Hành động</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                Sao chép ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
              <DropdownMenuItem>Xem lịch sử thanh toán</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ], [])

  const table = useReactTable({
    data: PAYMENTS,
    columns,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
    initialState: { pagination: { pageSize: 5 } },
  })

  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length

  return (
    <div className="w-full space-y-3">
      {/* toolbar */}
      <div className="flex items-center gap-2">
        <input
          placeholder="Lọc theo email..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(e) => table.getColumn("email")?.setFilterValue(e.target.value)}
          className="h-9 flex-1 max-w-xs rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto gap-2">
              <SlidersIcon />
              Cột
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table.getAllColumns().filter((c) => c.getCanHide()).map((c) => (
              <DropdownMenuCheckboxItem key={c.id} className="capitalize" checked={c.getIsVisible()} onCheckedChange={(v) => c.toggleVisibility(!!v)}>
                {c.id}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                  Không tìm thấy kết quả.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* footer */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {selectedCount} / {totalCount} hàng được chọn.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Trang {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
          </span>
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Trước</Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Sau</Button>
        </div>
      </div>
    </div>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function DataTablePage() {
  return (
    <div className="p-8 space-y-12 max-w-3xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Data Table</h1>
        <p className="text-sm text-muted-foreground">
          Bảng dữ liệu mạnh mẽ được xây dựng trên{" "}
          <code className="text-xs font-mono">@tanstack/react-table</code> v8 kết hợp với Table component.
          Hỗ trợ sắp xếp, lọc, phân trang, chọn hàng và ẩn/hiện cột.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`// 1. Định nghĩa kiểu dữ liệu
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

// 2. Định nghĩa columns
const columns: ColumnDef<Payment>[] = [
  { accessorKey: "email",  header: "Email" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "amount", header: "Amount" },
]

// 3. Dùng hook useReactTable
const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
})

// 4. Render bảng
<Table>
  <TableHeader>
    {table.getHeaderGroups().map((hg) => (
      <TableRow key={hg.id}>
        {hg.headers.map((header) => (
          <TableHead key={header.id}>
            {flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ))}
  </TableHeader>
  <TableBody>
    {table.getRowModel().rows.map((row) => (
      <TableRow key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
</Table>`} />
      </ShowcaseSection>

      {/* ── 1. Basic ── */}
      <ShowcaseSection title="1. Bảng cơ bản">
        <p className="text-sm text-muted-foreground">
          Bảng đơn giản nhất chỉ cần <code className="text-xs font-mono">data</code>, <code className="text-xs font-mono">columns</code> và <code className="text-xs font-mono">getCoreRowModel</code>.
          Cột <code className="text-xs font-mono">amount</code> dùng <code className="text-xs font-mono">Intl.NumberFormat</code> để format tiền tệ.
        </p>
        <DemoBlock className="min-h-fit items-start p-6">
          <BasicDemo />
        </DemoBlock>
        <CodeBlock code={`const columns: ColumnDef<Payment>[] = [
  { accessorKey: "id",     header: "ID" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "email",  header: "Email" },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const fmt = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="text-right font-medium">{fmt}</div>
    },
  },
]

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
})`} />
      </ShowcaseSection>

      {/* ── 2. Sorting ── */}
      <ShowcaseSection title="2. Sắp xếp (Sorting)">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">getSortedRowModel</code> và quản lý state <code className="text-xs font-mono">sorting</code>.
          Header dùng <code className="text-xs font-mono">column.toggleSorting()</code> để đổi chiều sắp xếp.
          Click vào tiêu đề cột Email hoặc Amount để thử.
        </p>
        <DemoBlock className="min-h-fit items-start p-6">
          <SortingDemo />
        </DemoBlock>
        <CodeBlock code={`const [sorting, setSorting] = useState<SortingState>([])

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        {column.getIsSorted() === "asc" ? (
          <ChevronUpIcon />
        ) : column.getIsSorted() === "desc" ? (
          <ChevronDownIcon />
        ) : (
          <ChevronsUpDownIcon />
        )}
      </Button>
    ),
  },
  // ...
]

const table = useReactTable({
  data,
  columns,
  state: { sorting },
  onSortingChange: setSorting,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
})`} />
      </ShowcaseSection>

      {/* ── 3. Filtering ── */}
      <ShowcaseSection title="3. Lọc dữ liệu (Filtering)">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">getFilteredRowModel</code> và kết nối input với{" "}
          <code className="text-xs font-mono">column.setFilterValue()</code>. Gõ vào ô tìm kiếm để lọc theo email.
        </p>
        <DemoBlock className="min-h-fit items-start p-6">
          <FilteringDemo />
        </DemoBlock>
        <CodeBlock code={`const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

const table = useReactTable({
  data,
  columns,
  state: { columnFilters },
  onColumnFiltersChange: setColumnFilters,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
})

// Input lọc
<input
  placeholder="Lọc theo email..."
  value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
  onChange={(e) => table.getColumn("email")?.setFilterValue(e.target.value)}
/>`} />
      </ShowcaseSection>

      {/* ── 4. Pagination ── */}
      <ShowcaseSection title="4. Phân trang (Pagination)">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">getPaginationRowModel</code> và dùng{" "}
          <code className="text-xs font-mono">table.previousPage()</code> /{" "}
          <code className="text-xs font-mono">table.nextPage()</code> để điều hướng. Demo hiển thị 3 hàng/trang.
        </p>
        <DemoBlock className="min-h-fit items-start p-6">
          <PaginationDemo />
        </DemoBlock>
        <CodeBlock code={`const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: { pagination: { pageSize: 3 } },
})

// Điều hướng trang
<Button
  onClick={() => table.previousPage()}
  disabled={!table.getCanPreviousPage()}
>
  Trước
</Button>
<Button
  onClick={() => table.nextPage()}
  disabled={!table.getCanNextPage()}
>
  Sau
</Button>

// Thông tin trang
Trang {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}`} />
      </ShowcaseSection>

      {/* ── 5. Row selection ── */}
      <ShowcaseSection title="5. Chọn hàng (Row Selection)">
        <p className="text-sm text-muted-foreground">
          Thêm cột checkbox với <code className="text-xs font-mono">id: "select"</code>. Header checkbox dùng{" "}
          <code className="text-xs font-mono">table.toggleAllPageRowsSelected()</code>, cell dùng{" "}
          <code className="text-xs font-mono">row.toggleSelected()</code>. Hàng được chọn có nền highlight.
        </p>
        <DemoBlock className="min-h-fit items-start p-6">
          <RowSelectionDemo />
        </DemoBlock>
        <CodeBlock code={`const [rowSelection, setRowSelection] = useState({})

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Chọn tất cả"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Chọn hàng"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // ...các cột khác
]

const table = useReactTable({
  data,
  columns,
  state: { rowSelection },
  onRowSelectionChange: setRowSelection,
  getCoreRowModel: getCoreRowModel(),
  enableRowSelection: true,
})

// Đếm hàng đã chọn
{table.getFilteredSelectedRowModel().rows.length} hàng được chọn`} />
      </ShowcaseSection>

      {/* ── 6. Column visibility ── */}
      <ShowcaseSection title="6. Ẩn/hiện cột (Column Visibility)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">DropdownMenuCheckboxItem</code> với{" "}
          <code className="text-xs font-mono">column.toggleVisibility()</code> để ẩn/hiện từng cột.
          Click vào nút "Cột hiển thị" để thử.
        </p>
        <DemoBlock className="min-h-fit items-start p-6">
          <VisibilityDemo />
        </DemoBlock>
        <CodeBlock code={`const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

const table = useReactTable({
  data,
  columns,
  state: { columnVisibility },
  onColumnVisibilityChange: setColumnVisibility,
  getCoreRowModel: getCoreRowModel(),
})

// Dropdown toggle cột
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Cột hiển thị</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    {table
      .getAllColumns()
      .filter((col) => col.getCanHide())
      .map((col) => (
        <DropdownMenuCheckboxItem
          key={col.id}
          checked={col.getIsVisible()}
          onCheckedChange={(value) => col.toggleVisibility(!!value)}
        >
          {col.id}
        </DropdownMenuCheckboxItem>
      ))}
  </DropdownMenuContent>
</DropdownMenu>`} />
      </ShowcaseSection>

      {/* ── 7. Full-featured ── */}
      <ShowcaseSection title="7. Kết hợp đầy đủ tính năng">
        <p className="text-sm text-muted-foreground">
          Tổng hợp tất cả: sorting, filtering, pagination, row selection, column visibility và row actions dropdown.
        </p>
        <DemoBlock className="min-h-fit items-start p-6">
          <FullDemo />
        </DemoBlock>
        <CodeBlock code={`const [sorting, setSorting] = useState<SortingState>([])
const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
const [rowSelection, setRowSelection] = useState({})

const table = useReactTable({
  data,
  columns,
  state: { sorting, columnFilters, columnVisibility, rowSelection },
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters,
  onColumnVisibilityChange: setColumnVisibility,
  onRowSelectionChange: setRowSelection,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  enableRowSelection: true,
})`} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. useReactTable — các option quan trọng">
        <PropsTable rows={[
          { prop: "data", type: "TData[]", description: "Mảng dữ liệu cần hiển thị trong bảng." },
          { prop: "columns", type: "ColumnDef<TData>[]", description: "Định nghĩa các cột: key, header, cell renderer." },
          { prop: "state", type: "Partial<TableState>", description: "State được quản lý từ bên ngoài (sorting, filtering, pagination…)." },
          { prop: "getCoreRowModel", type: "() => RowModel", description: "Row model cơ bản — bắt buộc phải có." },
          { prop: "getSortedRowModel", type: "() => RowModel", description: "Kích hoạt tính năng sắp xếp cột." },
          { prop: "getFilteredRowModel", type: "() => RowModel", description: "Kích hoạt tính năng lọc dữ liệu." },
          { prop: "getPaginationRowModel", type: "() => RowModel", description: "Kích hoạt phân trang phía client." },
          { prop: "enableRowSelection", type: "boolean | (row) => boolean", default_: "false", description: "Cho phép chọn hàng bằng checkbox." },
          { prop: "onSortingChange", type: "OnChangeFn<SortingState>", description: "Callback cập nhật state sorting." },
          { prop: "onColumnFiltersChange", type: "OnChangeFn<ColumnFiltersState>", description: "Callback cập nhật state columnFilters." },
          { prop: "onRowSelectionChange", type: "OnChangeFn<RowSelectionState>", description: "Callback cập nhật state rowSelection." },
          { prop: "onColumnVisibilityChange", type: "OnChangeFn<VisibilityState>", description: "Callback cập nhật state columnVisibility." },
          { prop: "initialState", type: "Partial<TableState>", description: "Giá trị khởi tạo cho state (pageSize, pageIndex…)." },
        ]} />
      </ShowcaseSection>

      {/* ── 9. ColumnDef reference ── */}
      <ShowcaseSection title="9. ColumnDef — các field quan trọng">
        <PropsTable rows={[
          { prop: "accessorKey", type: "keyof TData", description: "Key truy cập dữ liệu từ object row. Dùng khi key khớp tên field." },
          { prop: "accessorFn", type: "(row: TData) => any", description: "Hàm truy cập dữ liệu tùy chỉnh thay cho accessorKey." },
          { prop: "id", type: "string", description: "ID duy nhất cho cột — bắt buộc khi không dùng accessorKey." },
          { prop: "header", type: "string | ({ column }) => ReactNode", description: "Tiêu đề cột. Nhận context để tạo header sortable." },
          { prop: "cell", type: "({ row, getValue }) => ReactNode", description: "Renderer tùy chỉnh cho cell. row.original trả về dữ liệu gốc." },
          { prop: "enableSorting", type: "boolean", default_: "true", description: "Cho phép sắp xếp cột này." },
          { prop: "enableHiding", type: "boolean", default_: "true", description: "Cho phép ẩn/hiện cột này." },
          { prop: "enableColumnFilter", type: "boolean", default_: "true", description: "Cho phép lọc trên cột này." },
        ]} />
      </ShowcaseSection>

      {/* ── 10. Lưu ý ── */}
      <ShowcaseSection title="10. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            Đây là <strong>headless UI</strong> — TanStack Table chỉ cung cấp logic, bạn tự render HTML với{" "}
            <code className="text-xs font-mono">flexRender()</code>.
          </li>
          <li>
            <code className="text-xs font-mono">getCoreRowModel</code> là bắt buộc. Các model khác (sort, filter, pagination) chỉ thêm khi cần.
          </li>
          <li>
            Khi dùng nhiều features cùng lúc, thứ tự <code className="text-xs font-mono">getFilteredRowModel</code> →{" "}
            <code className="text-xs font-mono">getSortedRowModel</code> →{" "}
            <code className="text-xs font-mono">getPaginationRowModel</code> quan trọng để pipeline hoạt động đúng.
          </li>
          <li>
            Dùng <code className="text-xs font-mono">row.original</code> trong cell renderer để truy cập toàn bộ dữ liệu của hàng đó.
          </li>
          <li>
            Hàng được chọn có thể style bằng <code className="text-xs font-mono">data-state=selected</code> — đã được hỗ trợ sẵn trong{" "}
            <code className="text-xs font-mono">TableRow</code>.
          </li>
          <li>
            Pagination mặc định là <code className="text-xs font-mono">pageSize: 10</code>. Đổi qua{" "}
            <code className="text-xs font-mono">initialState.pagination.pageSize</code> hoặc{" "}
            <code className="text-xs font-mono">table.setPageSize(n)</code>.
          </li>
          <li>
            Wrap <code className="text-xs font-mono">columns</code> bằng <code className="text-xs font-mono">useMemo</code> để tránh re-render không cần thiết khi columns không thay đổi.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
