import useTheme from "./Theme"

function Card() {

    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus) darkTheme()
        else lightTheme()
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Theme Toggle Testing</h2>
                
                <div className="flex items-center gap-4">
                    <label className="flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            value=""
                            onChange={onChangeBtn}
                            checked={themeMode==="dark"}
                        />
                        <div className="relative w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-checked:bg-blue-600 peer-checked:dark:bg-blue-500 rounded-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5 transition-colors"></div>
                    </label>
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Enable Feature</span>
                </div>
            </div>
        </div>
    )
}

export default Card