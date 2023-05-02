import React from 'react'
import myfetch from '../../utils/myfetch'
import PageTitle from '../../components/ui/PageTitle'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit'
import DeleteForever from '@mui/icons-material/DeleteForever'

export default function PaymentMethodList() {

  const [paymentMethods, setPaymentMethods] = React.useState([])

  async function fetchData() {
    try {
      const result = await myfetch.get('/payment_methods')
      setPaymentMethods(result)
    }
    catch(error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'description',
      headerName: 'Descrição',
      width: 150
    },
    {
      field: 'operator_free',
      headerName: 'Taxa de operação',
      width: 150
    },
  ];

  return (
    <>
       <PageTitle title="Listagem de métodos de pagamento" />
       <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={paymentMethods}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 5,
                },
            },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
        />
    </Box>
    </>
  )
}