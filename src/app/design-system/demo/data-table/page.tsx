
import { columns } from '@/app/design-system/demo/data-table/columns'
import { DataTable } from '@/components/data-table'
import React from 'react'

export default function page() {
    return (
        <div>
            <DataTable
                columns={columns} data={[]}
                isLoading={false}
                onSortChange={() => { }} />
        </div>
    )
}
