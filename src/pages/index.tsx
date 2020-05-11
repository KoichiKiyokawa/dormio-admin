import React from 'react'

import Residents from '@/components/templates/Residents'

const Home: React.FC = () => {
  const [loading, setLoading] = React.useState(false)
  const [residents, setResidents] = React.useState<Resident[]>([])
  React.useEffect(() => {
    setLoading(true)
    fetch('/api/residents')
      .then(response => response.json())
      .then(setResidents)
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const props = { loading, residents }
  return <Residents {...props} />
}

export default Home
