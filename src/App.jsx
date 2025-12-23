import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('tab1')

  const tabs = [
    { id: 'tab1', label: '首页' },
    { id: 'tab2', label: '关于' },
    { id: 'tab3', label: '联系' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1':
        return (
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        )
      case 'tab2':
        return (
          <div className="card">
            <h2>关于我们</h2>
            <p>这是一个使用 React + Vite 构建的应用</p>
          </div>
        )
      case 'tab3':
        return (
          <div className="card">
            <h2>联系我们</h2>
            <p>欢迎通过以下方式联系我们</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div>
        <h1>React + Vite</h1>
        
        {/* Tab 切换按钮 */}
        <div className="tab-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 内容 */}
        {renderTabContent()}

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App

