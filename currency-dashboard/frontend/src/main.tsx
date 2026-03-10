import React from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, AppShell, Header, Center, Text } from '@mantine/core'
import './index.css'
import ExchangeWidget from './components/ExchangeWidget'

function App(){
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        header={<Header height={60}><Center><Text>外幣追蹤儀表板</Text></Center></Header>}
      >
        <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
          <ExchangeWidget />
          <div style={{flex:1}}>
            <h3>其他內容</h3>
            <p>儀表板內容暫缺。</p>
          </div>
        </div>
      </AppShell>
    </MantineProvider>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
