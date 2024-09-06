'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import EnhancedTable from '../../../components/Table'
export default function Profesionales() {
  const [professionals, setProfessionals] = useState([])
  useEffect(() => {
    axios.get('/api/professionals').then(res => {
      setProfessionals(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  
  const handleDelete = (rowToDelete) => {
		console.log(rowToDelete);
  }
  const handleUpdate = (updatedRow) => {
    console.log(updatedRow);
  }
  return (
    <div className='flex flex-col'>
      <div className='p-3 shadow rounded'>
        <EnhancedTable
					title={{
            text: 'Profesionales',
            class: 'font-bold text-3xl'
          }}
					columns={[
						{ id: 'name', label: 'Nombre', minWidth: 170 },
						{ id: 'phone', label: 'Teléfono', minWidth: 170 },
						{ id: 'email', label: 'Correo Electronico', minWidth: 170 },
					]}
					rows={professionals}
					actions
					onDelete={handleDelete}
					onUpdate={handleUpdate}
          newButtonUrl='profesionales/new'
				/>
      </div>
    </div>
  )
}
