import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetail() {
    const {
        query: {id}
    } = useRouter()
  return (
    <div>Esta es la pagina del producto {id}</div>
  )
}
