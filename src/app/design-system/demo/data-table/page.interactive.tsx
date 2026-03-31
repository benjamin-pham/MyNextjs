"use client"
import { columns } from '@/app/design-system/demo/data-table/columns'
import { IProductTable } from '@/app/design-system/demo/data-table/IProductTable'
import DataPagination from '@/components/composite/data-pagination'
import { DataTable } from '@/components/composite/data-table'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'

export default function PageInteractive({ initialData = [] }: { initialData?: IProductTable[] }) {
    const [data, setData] = useState<IProductTable[]>(initialData ?? [])
    return (
        <div className='p-4 min-h-screen'>
            <Card>
                <CardContent>
                    <DataTable
                        columns={columns} data={data}
                        isLoading={false}
                        onSortChange={() => { }} />
                    <div className='p-4'></div>
                    <DataPagination
                        pageIndex={50}
                        data={{
                            totalPages: 1000,
                            totalItems: 100
                        }}
                        isLoading={false}
                        onPageChange={() => { }}
                    />
                </CardContent>

            </Card>



        </div>
    )
}
