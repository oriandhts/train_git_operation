import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('home')

  const tabs = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于' },
    { id: 'contact', label: '联系' },
    { id: 'weather', label: '天气' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <button className="new-button" onClick={() => alert('新按钮被点击了！')}>
              新按钮
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        )
      case 'about':
        return (
          <div className="card">
            <h2>关于我们</h2>
            <p>这是一个使用 React + Vite 构建的应用</p>
          </div>
        )
      case 'contact':
        return (
          <div className="card">
            <h2>联系我们</h2>
            <p>欢迎通过以下方式联系我们</p>
          </div>
        )
      case 'weather':
        return (
          <div className="card">
            <h2>天气信息</h2>
            <p>这里可以显示天气信息</p>
            <div className="weather-info">
              <p>🌤️ 晴天</p>
              <p>温度: 22°C</p>
              <p>湿度: 65%</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="app-container">
        <div className="app-content">
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
      </div>
    </>
  )
}

export default App

