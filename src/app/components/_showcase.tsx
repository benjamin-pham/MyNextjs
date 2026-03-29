"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"

/* ─── ShowcaseSection ─────────────────────────────────────────────────────── */

export function ShowcaseSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-muted-foreground border-b pb-1">{title}</h2>
      {children}
    </section>
  )
}

/* ─── CodeBlock (collapsible) ─────────────────────────────────────────────── */

export function CodeBlock({ code, className, alwaysOpen, defaultOpen }: { code: string; className?: string; alwaysOpen?: boolean; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(alwaysOpen || defaultOpen || false)

  if (alwaysOpen) {
    return (
      <div className={cn("rounded-lg border overflow-hidden text-xs", className)}>
        <pre className="bg-muted px-4 py-3 overflow-x-auto leading-relaxed text-foreground/80">
          <code>{code.trim()}</code>
        </pre>
      </div>
    )
  }

  return (
    <div className={cn("rounded-lg border overflow-hidden text-xs", className)}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-1.5 bg-muted/60 px-3 py-1.5 text-left text-muted-foreground hover:bg-muted transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("size-3 shrink-0 transition-transform", open && "rotate-90")}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        {open ? "Ẩn code" : "Xem code"}
      </button>
      {open && (
        <pre className="bg-muted px-4 py-3 overflow-x-auto leading-relaxed text-foreground/80">
          <code>{code.trim()}</code>
        </pre>
      )}
    </div>
  )
}

/* ─── PropsTable ──────────────────────────────────────────────────────────── */

export type PropRow = {
  prop: string
  type: string
  default_?: string
  description: string
}

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border text-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-muted/50 text-left">
            <th className="px-3 py-2 font-medium">Prop</th>
            <th className="px-3 py-2 font-medium">Type</th>
            <th className="px-3 py-2 font-medium">Default</th>
            <th className="px-3 py-2 font-medium">Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.prop} className="border-t">
              <td className="px-3 py-2 font-mono text-xs text-foreground">{r.prop}</td>
              <td className="px-3 py-2 font-mono text-xs text-blue-600 dark:text-blue-400">{r.type}</td>
              <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{r.default_ ?? "—"}</td>
              <td className="px-3 py-2 text-muted-foreground">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
