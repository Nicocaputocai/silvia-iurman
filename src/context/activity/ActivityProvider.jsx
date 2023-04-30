import ActivityContext from "./ActivityContext";

export const ActivityProvider = ({children}) => {
    const hola = 'hola'
  return (
    <ActivityContext.Provider value={{hola}}>
        {children}
    </ActivityContext.Provider>
  )
}
