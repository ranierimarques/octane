import { useState } from 'react'

import { TabList, TabPanel } from '..'

function Navigation() {
  const [tabActive, setTabActive] = useState('Análise')

  return (
    <>
      <TabList state={{ tabActive, setTabActive }} />
      <TabPanel tabActive={tabActive} />
    </>
  )
}

export default Navigation
