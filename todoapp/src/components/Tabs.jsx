export function Tabs (props){
const {todos, selectedTab, setSelectedTab} = props

    const tabs = ['All','Open','Close']
    return(
        <nav  className="tab-container">
                {tabs.map((tab, tabIndex)=>{
                    const numofTask = tab === 'All ' ?
                    todos.length :
                    tab === 'Open'  ?
                    todos.filter(val => !val.complete ).length :
                    todos.filter (val => val.complete).length

                    return(
                        <button key={tabIndex}
                        onClick={() => {
                            setSelectedTab(tab)
                        }}
                        className={"tab-button" + (tab === selectedTab  ? 'tab-selected' : '')}>

                            <h4>{tab} <span>({numofTask})</span></h4>
                        </button>
                    )
                })}
                <hr />
        </nav>
    )
}