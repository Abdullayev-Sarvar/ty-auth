import { Suspense } from "react"
import { SuspenseComponentProps, ContainerProps } from "../types/auth"

export const SuspenseComponent: React.FC<SuspenseComponentProps> = ({ children }) => {
  return (
    <Suspense fallback={<div className="w-full max-w-[1366px] h-screen mx-auto flex justify-center items-center"><div className="loader"></div></div>}>
      {children}
    </Suspense>
  )
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return <div className="w-full max-w-[1366px] h-full mx-auto p-2">{children}</div>
}

export default Container